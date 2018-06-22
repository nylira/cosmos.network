# Core SDK

## Messages

The SDK distinguishes between transactions (Tx) and messages
(Msg). A Tx is a Msg wrapped with authentication and fee data.

Users can create messages containing arbitrary information by
implementing the `Msg` interface:

```go
type Msg interface {

	// Return the message type.
	// Must be alphanumeric or empty.
	Type() string

	// Get the canonical byte representation of the Msg.
	GetSignBytes() []byte

	// ValidateBasic does a simple validation check that
	// doesn't require access to any other information.
	ValidateBasic() error

	// Signers returns the addrs of signers that must sign.
	// CONTRACT: All signatures must be present to be valid.
	// CONTRACT: Returns addrs in some deterministic order.
	GetSigners() []Address
}

```

Messages must specify their type via the `Type()` method. The type should
correspond to the messages handler, so there can be many messages with the same
type.

Messages must also specify how they are to be authenticated. The `GetSigners()`
method return a list of addresses that must sign the message, while the
`GetSignBytes()` method returns the bytes that must be signed for a signature
to be valid.

Addresses in the SDK are arbitrary byte arrays that are hex-encoded when
displayed as a string or rendered in JSON.

Messages can specify basic self-consistency checks using the `ValidateBasic()`
method to enforce that message contents are well formed before any actual logic
begins.

For instance, the `Basecoin` message types are defined in `x/bank/tx.go`:

```go
type MsgSend struct {
	Inputs  []Input  `json:"inputs"`
	Outputs []Output `json:"outputs"`
}

type MsgIssue struct {
	Banker  sdk.Address `json:"banker"`
	Outputs []Output       `json:"outputs"`
}
```

Each specifies the addresses that must sign the message:

```go
func (msg MsgSend) GetSigners() []sdk.Address {
	addrs := make([]sdk.Address, len(msg.Inputs))
	for i, in := range msg.Inputs {
		addrs[i] = in.Address
	}
	return addrs
}

func (msg MsgIssue) GetSigners() []sdk.Address {
	return []sdk.Address{msg.Banker}
}
```

## Handlers

### Context

The SDK uses a `Context` to propogate common information across functions. The
`Context` is modeled after the Golang `context.Context` object, which has
become ubiquitous in networking middleware and routing applications as a means
to easily propogate request context through handler functions.

The main information stored in the `Context` includes the application
MultiStore, the last block header, and the transaction bytes.
Effectively, the context contains all data that may be necessary for processing
a transaction.

Many methods on SDK objects receive a context as the first argument.

### Message Handler

Message processing in the SDK is defined through `Handler` functions:

```go
type Handler func(ctx Context, msg Msg) Result
```

A handler takes a context and a message and returns a result.  All
information necessary for processing a message should be available in the
context.

While the context holds the entire application state (ie. the
MultiStore), handlers are restricted in what they can do based on the
capabilities they were given when the application was set up.

For instance, suppose we have a `newFooHandler`:

```go
func newFooHandler(key sdk.StoreKey) sdk.Handler {
    return func(ctx sdk.Context, msg sdk.Msg) sdk.Result {
        store := ctx.KVStore(key)
        // ...
    }
}
```

This handler can only access one store based on whichever key its given.
So when we register the handler for the `foo` message type, we make sure
to give it the `fooKey`:

```go
app.Router().AddRoute("foo", newFooHandler(fooKey))
```

Now it can only access the `foo` store, but not the `bar` or `cat` stores!

## BaseApp

The BaseApp is an abstraction over the [Tendermint
ABCI](https://github.com/tendermint/abci) that
simplifies application development by handling common low-level concerns.
It serves as the mediator between the two key components of an SDK app: the store
and the message handlers.

The BaseApp implements the
[`abci.Application`](https://godoc.org/github.com/tendermint/abci/types#Application) interface.
It uses a `MultiStore` to manage the state, a `Router` for transaction handling, and
`Set` methods to specify functions to run at the beginning and end of every
block.

Every SDK app begins with a BaseApp:

```go
app := baseapp.NewBaseApp(appName, cdc, logger, db),
```

## MultiStore

The Cosmos-SDK provides a special Merkle database called a `MultiStore` to be used for all application
storage. The MultiStore consists of multiple Stores that must be mounted to the
MultiStore during application setup. Stores are mounted to the MultiStore using a capabilities key,
ensuring that only parts of the program with access to the key can access the store.

The goals of the MultiStore are as follows:

- Enforce separation of concerns at the storage level
- Restrict access to storage using capabilities
- Support multiple Store implementations in a single MultiStore, for instance the Tendermint IAVL tree and
  the Ethereum Patricia Trie
- Merkle proofs for various queries (existence, absence, range, etc.) on current and retained historical state
- Allow for iteration within Stores
- Provide caching for intermediate state during execution of blocks and transactions (including for iteration)
- Support historical state pruning and snapshotting

Currently, all Stores in the MultiStore must satisfy the `KVStore` interface,
which defines a simple key-value store. In the future,
we may support more kinds of stores, such as a HeapStore
or a NDStore for multidimensional storage.

### Mounting Stores

Stores are mounted during application setup. To mount some stores, first create
their capability-keys:

```go
fooKey := sdk.NewKVStoreKey("foo")
barKey := sdk.NewKVStoreKey("bar")
catKey := sdk.NewKVStoreKey("cat")
```

Stores are mounted directly on the BaseApp.
They can either specify their own database, or share the primary one already
passed to the BaseApp.

In this example, `foo` and `bar` will share the primary database, while `cat` will
specify its own:

```go
catDB := dbm.NewMemDB()
app.MountStore(fooKey, sdk.StoreTypeIAVL)
app.MountStore(barKey, sdk.StoreTypeIAVL)
app.MountStoreWithDB(catKey, sdk.StoreTypeIAVL, catDB)
```

### Accessing Stores

In the Cosmos-SDK, the only way to access a store is with a capability-key.
Only modules given explicit access to the capability-key will
be able to access the corresponding store. Access to the MultiStore is mediated
through the `Context`.

### Notes

In the example above, all IAVL nodes (inner and leaf) will be stored
in mainDB with the prefix of `s/k:foo/` and `s/k:bar/` respectively,
thus sharing the mainDB.  All IAVL nodes (inner and leaf) for the
cat KVStore are stored separately in catDB with the prefix of
`s/\_/`.  The `s/k:KEY/` and `s/\_/` prefixes are there to
disambiguate store items from other items of non-storage concern.

# Amino

The SDK is flexible about serialization - application developers can use any
serialization scheme to encode transactions and state. However, the SDK provides
a native serialization format called
[Amino](https://github.com/tendermint/go-amino).

The goal of Amino is to improve over the latest version of Protocol Buffers,
`proto3`. To that end, Amino is compatible with the subset of `proto3` that
excludes the `oneof` keyword.

While `oneof` provides union types, Amino aims to provide interfaces.
The main difference being that with union types, you have to know all the types
up front. But anyone can implement an interface type whenever and however
they like.

To implement interface types, Amino allows any concrete implementation of an
interface to register a globally unique name that is carried along whenever the
type is serialized. This allows Amino to seamlessly deserialize into interface
types!

The primary use for Amino in the SDK is for messages that implement the
`Msg` interface. By registering each message with a distinct name, they are each
given a distinct Amino prefix, allowing them to be easily distinguished in
transactions.

Amino can also be used for persistent storage of interfaces.

To use Amino, simply create a codec, and then register types:

```go
cdc := wire.NewCodec()

cdc.RegisterConcrete(MsgSend{}, "cosmos-sdk/Send", nil)
cdc.RegisterConcrete(MsgIssue{}, "cosmos-sdk/Issue", nil)
```

## Accounts

### auth.Account

```go
// Account is a standard account using a sequence number for replay protection
// and a pubkey for authentication.
type Account interface {
	GetAddress() sdk.Address
	SetAddress(sdk.Address) error // errors if already set.

	GetPubKey() crypto.PubKey // can return nil.
	SetPubKey(crypto.PubKey) error

	GetAccountNumber() int64
	SetAccountNumber(int64) error

	GetSequence() int64
	SetSequence(int64) error

	GetCoins() sdk.Coins
	SetCoins(sdk.Coins) error
}
```

Accounts are the standard way for an application to keep track of addresses and their associated balances.

### auth.BaseAccount

```go
// BaseAccount - base account structure.
// Extend this by embedding this in your AppAccount.
// See the examples/basecoin/types/account.go for an example.
type BaseAccount struct {
	Address       sdk.Address   `json:"address"`
	Coins         sdk.Coins     `json:"coins"`
	PubKey        crypto.PubKey `json:"public_key"`
	AccountNumber int64         `json:"account_number"`
	Sequence      int64         `json:"sequence"`
}
```

The `auth.BaseAccount` struct provides a standard implementation of the Account interface with replay protection.
BaseAccount can be extended by embedding it in your own Account struct.

### auth.AccountMapper

```go
// This AccountMapper encodes/decodes accounts using the
// go-amino (binary) encoding/decoding library.
type AccountMapper struct {

	// The (unexposed) key used to access the store from the Context.
	key sdk.StoreKey

	// The prototypical Account concrete type.
	proto Account

	// The wire codec for binary encoding/decoding of accounts.
	cdc *wire.Codec
}
```

The AccountMapper is responsible for managing and storing the state of all accounts in the application.

Example Initialization:

```go
// File: examples/basecoin/app/app.go
// Define the accountMapper.
app.accountMapper = auth.NewAccountMapper(
	cdc,
	app.keyAccount,      // target store
	&types.AppAccount{}, // prototype
)
```

The accountMapper allows you to retrieve the current account state by `GetAccount(ctx Context, addr auth.Address)` and change the state by
`SetAccount(ctx Context, acc Account)`.

Note: To update an account you will first have to get the account, update the appropriate fields with its associated setter method, and then call
`SetAccount(ctx Context, acc updatedAccount)`.

Updating accounts is made easier by using the `Keeper` struct in the `x/bank` module.

Example Initialization:

```go
// File: examples/basecoin/app/app.go
app.coinKeeper = bank.NewKeeper(app.accountMapper)
```

Example Usage:

```go
// Finds account with addr in accountmapper
// Adds coins to account's coin array
// Sets updated account in accountmapper
app.coinKeeper.AddCoins(ctx, addr, coins)
```

## Transactions

A message is a set of instructions for a state transition.

For a message to be valid, it must be accompanied by at least one
digital signature. The signatures required are determined solely
by the contents of the message.

A transaction is a message with additional information for authentication:

```go
type Tx interface {

	GetMsg() Msg

}
```

The standard way to create a transaction from a message is to use the `StdTx` struct defined in the `x/auth` module.

```go
type StdTx struct {
	Msg        sdk.Msg        `json:"msg"`
	Fee        StdFee         `json:"fee"`
	Signatures []StdSignature `json:"signatures"`
}
```

The `StdTx.GetSignatures()` method returns a list of signatures, which must match
the list of addresses returned by `tx.Msg.GetSigners()`. The signatures come in
a standard form:

```go
type StdSignature struct {
	crypto.PubKey // optional
	crypto.Signature
	AccountNumber int64
	Sequence int64
}
```

It contains the signature itself, as well as the corresponding account's
sequence number.  The sequence number is expected to increment every time a
message is signed by a given account.  This prevents "replay attacks", where
the same message could be executed over and over again.

The `StdSignature` can also optionally include the public key for verifying the
signature.  An application can store the public key for each address it knows
about, making it optional to include the public key in the transaction. In the
case of Basecoin, the public key only needs to be included in the first
transaction send by a given account - after that, the public key is forever
stored by the application and can be left out of transactions.

The address responsible for paying the transactions fee is the first address
returned by msg.GetSigners(). The convenience function `FeePayer(tx Tx)` is provided
to return this.

The standard bytes for signers to sign over is provided by:

```go
func StdSignByes(chainID string, accnums []int64, sequences []int64, fee StdFee, msg sdk.Msg) []byte
```

in `x/auth`. The standard way to construct fees to pay for the processing of transactions is:

```go
// StdFee includes the amount of coins paid in fees and the maximum
// gas to be used by the transaction. The ratio yields an effective "gasprice",
// which must be above some miminum to be accepted into the mempool.
type StdFee struct {
	Amount sdk.Coins `json:"amount"`
	Gas    int64     `json:"gas"`
}
```

### Encoding and Decoding Transactions

Messages and transactions are designed to be generic enough for developers to
specify their own encoding schemes.  This enables the SDK to be used as the
framwork for constructing already specified cryptocurrency state machines, for
instance Ethereum.

When initializing an application, a developer can specify a `TxDecoder`
function which determines how an arbitrary byte array should be unmarshalled
into a `Tx`:

```go
type TxDecoder func(txBytes []byte) (Tx, error)
```

The default tx decoder is the Tendermint wire format which uses the go-amino library
for encoding and decoding all message types.

In `Basecoin`, we use the default transaction decoder.  The `go-amino` library has the nice
property that it can unmarshal into interface types, but it requires the
relevant types to be registered ahead of type. Registration happens on a
`Codec` object, so as not to taint the global name space.

For instance, in `Basecoin`, we wish to register the `MsgSend` and `MsgIssue`
types:

```go
cdc.RegisterInterface((*sdk.Msg)(nil), nil)
cdc.RegisterConcrete(bank.MsgSend{}, "cosmos-sdk/MsgSend", nil)
cdc.RegisterConcrete(bank.MsgIssue{}, "cosmos-sdk/MsgIssue", nil)
```

Note how each concrete type is given a name - these name determine the type's
unique "prefix bytes" during encoding.  A registered type will always use the
same prefix-bytes, regardless of what interface it is satisfying.  For more
details, see the [go-amino documentation](https://github.com/tendermint/go-amino/blob/develop).

If you wish to use a custom encoding scheme, you must define a TxDecoder function
and set it as the decoder in your extended baseapp using the `SetTxDecoder(decoder sdk.TxDecoder)`.

Ex:

```go
app.SetTxDecoder(CustomTxDecodeFn)
```


### AnteHandler

The AnteHandler is used to do all transaction-level processing (i.e. Fee payment, signature verification)
before passing the message to its respective handler.

```go
type AnteHandler func(ctx Context, tx Tx) (newCtx Context, result Result, abort bool)
```

The antehandler takes a Context and a transaction and returns a new Context, a Result, and the abort boolean.
As with the handler, all information necessary for processing a message should be available in the
context.

If the transaction fails, then the application should not waste time processing the message. Thus, the antehandler should
return an Error's Result method and set the abort boolean to `true` so that the application knows not to process the message in a handler.

Most applications can use the provided antehandler implementation in `x/auth` which handles signature verification
as well as collecting fees.

Note: Signatures must be over `auth.StdSignDoc` introduced above to use the provided antehandler.

```go
// File: cosmos-sdk/examples/basecoin/app/app.go
app.SetAnteHandler(auth.NewAnteHandler(app.accountMapper, app.feeCollectionKeeper))
```

### Handling Fee payment
### Handling Authentication

The antehandler is responsible for handling all authentication of a transaction before passing the message onto its handler.
This generally involves signature verification. The antehandler should check that all of the addresses that are returned in
`tx.GetMsg().GetSigners()` signed the message and that they signed over `tx.GetMsg().GetSignBytes()`.

## Keepers

::: tip Keepers are the interfaces between handlers.

🚧 We are actively working on documentation for Keepers.
:::

## Clients

::: tip Hook up your app to standard CLI and REST interfaces for clients to use!

🚧 We are actively working on documentation for Clients.
:::

## Advanced

::: tip Trigger logic on a timer, use custom serialization formats, advanced Merkle proofs, and more!

🚧 We are actively working on documentation for advanced use cases.
:::
