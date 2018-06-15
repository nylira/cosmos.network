# Staking

## Abstract

This paper specifies the Staking module of the Cosmos-SDK, which was first
described in the [Cosmos Whitepaper](https://cosmos.network/about/whitepaper)
in June 2016.

The module enables Cosmos-SDK based blockchain to support an advanced
Proof-of-Stake system. In this system, holders of the native staking token of
the chain can become validators and can delegate tokens to validator
validators, ultimately determining the effective validator set for the system.

This module will be used in the Cosmos Hub, the first Hub in the Cosmos
network.

## Table of Contents

The following specification uses *Atom* as the native staking token. The module
can be adapted to any Proof-Of-Stake blockchain by replacing *Atom* with the
native staking token of the chain.

1.  **[Design overview](overview.md)**
2.  **Implementation**
    1. **[State](state.md)**
        1.  Params
        1.  Pool
        2.  Validators
        3.  Delegations
    2. **[Transactions](transactions.md)**
        1.  Create-Validator
        2.  Edit-Validator
        3.  Repeal-Revocation
        4.  Delegate
        5.  Unbond
        6.  Redelegate
    3. **[Validator Set Changes](valset-changes.md)**
        1.  Validator set updates
        2.  Slashing
        3.  Automatic Unbonding

## State

### Pool
 - index: n/a single-record

The pool is a space for all dynamic global state of the Cosmos Hub.  It tracks
information about the total amounts of Atoms in all states, representative
validator shares for stake in the global pools, moving Atom inflation
information, etc.

 - stored object:

```golang
type Pool struct {
    LooseUnbondedTokens int64   // tokens not associated with any validator
	UnbondedTokens      int64   // reserve of unbonded tokens held with validators
	UnbondingTokens     int64   // tokens moving from bonded to unbonded pool
	BondedTokens        int64   // reserve of bonded tokens
	UnbondedShares      sdk.Rat // sum of all shares distributed for the Unbonded Pool
	UnbondingShares     sdk.Rat // shares moving from Bonded to Unbonded Pool
	BondedShares        sdk.Rat // sum of all shares distributed for the Bonded Pool
	InflationLastTime   int64   // block which the last inflation was processed // TODO make time
	Inflation           sdk.Rat // current annual inflation rate

	DateLastCommissionReset int64  // unix timestamp for last commission accounting reset (daily)
}

type PoolShares struct {
	Status sdk.BondStatus // either: unbonded, unbonding, or bonded
	Amount sdk.Rat        // total shares of type ShareKind
}
```

### Params
 - index: n/a single-record

Params is global data structure that stores system parameters and defines
overall functioning of the stake module.

 - stored object:

```golang
type Params struct {
    InflationRateChange sdk.Rat // maximum annual change in inflation rate
	InflationMax        sdk.Rat // maximum inflation rate
	InflationMin        sdk.Rat // minimum inflation rate
	GoalBonded          sdk.Rat // Goal of percent bonded atoms

	MaxValidators uint16 // maximum number of validators
	BondDenom     string // bondable coin denomination
}
```

### Validator
 - index 1: validator owner address
 - index 2: validator Tendermint PubKey
 - index 3: bonded validators only
 - index 4: voting power

Related Store which holds Validator.ABCIValidator()
 - index: validator owner address

The `Validator` holds the current state and some historical actions of the
validator.

 - stored object:

```golang
type Validator struct {
	Owner           sdk.Address    // sender of BondTx - UnbondTx returns here
	ConsensusPubKey crypto.PubKey  // Tendermint consensus pubkey of validator
	Revoked         bool           // has the validator been revoked?

	PoolShares      PoolShares     // total shares for tokens held in the pool
	DelegatorShares sdk.Rat        // total shares issued to a validator's delegators
	SlashRatio      sdk.Rat        // increases each time the validator is slashed

	Description        Description // description terms for the validator
	BondHeight         int64       // earliest height as a bonded validator
	BondIntraTxCounter int16       // block-local tx index of validator change
	ProposerRewardPool sdk.Coins   // reward pool collected from being the proposer

	Commission            sdk.Rat  // the commission rate of fees charged to any delegators
	CommissionMax         sdk.Rat  // maximum commission rate which this validator can ever charge
	CommissionChangeRate  sdk.Rat  // maximum daily increase of the validator commission
	CommissionChangeToday sdk.Rat  // commission rate change today, reset each day (UTC time)

	PrevPoolShares PoolShares      // total shares of a global hold pools
}

type Description struct {
	Moniker  string // name
	Identity string // optional identity signature (ex. UPort or Keybase)
	Website  string // optional website link
	Details  string // optional details
}
```

### Delegation
 - index: delegation address

Atom holders may delegate coins to validators; under this circumstance their
funds are held in a `Delegation` data structure. It is owned by one
delegator, and is associated with the shares for one validator. The sender of
the transaction is the owner of the bond.

 - stored object:

```golang
type Delegation struct {
	DelegatorAddr sdk.Address // delegation owner address
	ValidatorAddr sdk.Address // validator owner address
	Shares        sdk.Rat     // delegation shares recieved
	Height        int64       // last height bond updated
}
```

### UnbondingDelegation
 - index: delegation address

A UnbondingDelegation object is created every time an unbonding is initiated.
The unbond must be completed with a second transaction provided by the
delegation owner after the unbonding period has passed.

 - stored object:

```golang
type UnbondingDelegation struct {
    DelegationKey    sdk.Address // key of the delegation
    ExpectedTokens   sdk.Coins   // the value in Atoms of the amount of shares which are unbonding
    StartSlashRatio  sdk.Rat     // validator slash ratio at unbonding initiation
    CompleteTime     int64       // unix time to complete redelegation
    CompleteHeight   int64       // block height to complete redelegation
}
```

### Redelegation
 - index 1: delegation address
 - index 2: source validator owner address
 - index 3: destination validator owner address

A redelegation object is created every time a redelegation occurs. The
redelegation must be completed with a second transaction provided by the
delegation owner after the unbonding period has passed.  The destination
delegation of a redelegation may not itself undergo a new redelegation until
the original redelegation has been completed.

 - stored object:

```golang
type Redelegation struct {
    SourceDelegation       sdk.Address // source delegation key
    DestinationDelegation  sdk.Address // destination delegation key
    SourceShares           sdk.Rat     // amount of source shares redelegating
    DestinationShares      sdk.Rat     // amount of destination shares created at redelegation
    SourceStartSlashRatio  sdk.Rat     // source validator slash ratio at unbonding initiation
    CompleteTime           int64       // unix time to complete redelegation
    CompleteHeight         int64       // block height to complete redelegation
}
```


## Transactions

In this section we describe the processing of the transactions and the
corresponding updates to the state. Transactions:
 - TxCreateValidator
 - TxEditValidator
 - TxDelegation
 - TxStartUnbonding
 - TxCompleteUnbonding
 - TxRedelegate
 - TxCompleteRedelegation

Other important state changes:
 - Update Validators

Other notes:
 - `tx` denotes a reference to the transaction being processed
 - `sender` denotes the address of the sender of the transaction
 - `getXxx`, `setXxx`, and `removeXxx` functions are used to retrieve and
    modify objects from the store
 - `sdk.Rat` refers to a rational numeric type specified by the SDK.

### TxCreateValidator

A validator is created using the `TxCreateValidator` transaction.

```golang
type TxCreateValidator struct {
	OwnerAddr           sdk.Address
    ConsensusPubKey     crypto.PubKey
    GovernancePubKey    crypto.PubKey
    SelfDelegation      coin.Coin       

    Description         Description
    Commission          sdk.Rat
    CommissionMax       sdk.Rat
    CommissionMaxChange sdk.Rat
}

createValidator(tx TxCreateValidator):
    validator = getValidator(tx.OwnerAddr)
    if validator != nil return // only one validator per address

    validator = NewValidator(OwnerAddr, ConsensusPubKey, GovernancePubKey, Description)
    init validator poolShares, delegatorShares set to 0
    init validator commision fields from tx
    validator.PoolShares = 0

    setValidator(validator)

    txDelegate = TxDelegate(tx.OwnerAddr, tx.OwnerAddr, tx.SelfDelegation)
    delegate(txDelegate, validator) // see delegate function in [TxDelegate](TxDelegate)
    return
```

### TxEditValidator

If either the `Description` (excluding `DateBonded` which is constant),
`Commission`, or the `GovernancePubKey` need to be updated, the
`TxEditCandidacy` transaction should be sent from the owner account:

```golang
type TxEditCandidacy struct {
    GovernancePubKey    crypto.PubKey
    Commission          sdk.Rat
    Description         Description
}

editCandidacy(tx TxEditCandidacy):
    validator = getValidator(tx.ValidatorAddr)

    if tx.Commission > CommissionMax ||  tx.Commission < 0 then fail
    if rateChange(tx.Commission) > CommissionMaxChange then fail
    validator.Commission = tx.Commission

    if tx.GovernancePubKey != nil validator.GovernancePubKey = tx.GovernancePubKey
    if tx.Description != nil validator.Description = tx.Description

    setValidator(store, validator)
    return
```

### TxDelegation

Within this transaction the delegator provides coins, and in return receives
some amount of their validator's delegator-shares that are assigned to
`Delegation.Shares`.

```golang
type TxDelegate struct {
	DelegatorAddr sdk.Address
	ValidatorAddr sdk.Address
	Amount        sdk.Coin  
}

delegate(tx TxDelegate):
    pool = getPool()
    if validator.Status == Revoked return

    delegation = getDelegatorBond(DelegatorAddr, ValidatorAddr)
    if delegation == nil then delegation = NewDelegation(DelegatorAddr, ValidatorAddr)

    validator, pool, issuedDelegatorShares = validator.addTokensFromDel(tx.Amount, pool)
    delegation.Shares += issuedDelegatorShares

    setDelegation(delegation)
    updateValidator(validator)
    setPool(pool)
    return
```

### TxStartUnbonding

Delegator unbonding is defined with the following transaction:

```golang
type TxStartUnbonding struct {
	DelegatorAddr sdk.Address
	ValidatorAddr sdk.Address
	Shares        string      
}

startUnbonding(tx TxStartUnbonding):    
    delegation, found = getDelegatorBond(store, sender, tx.PubKey)
    if !found == nil return

		if bond.Shares < tx.Shares
			return ErrNotEnoughBondShares

	validator, found = GetValidator(tx.ValidatorAddr)
	if !found {
		return err

	bond.Shares -= tx.Shares

	revokeCandidacy = false
	if bond.Shares.IsZero() {

		if bond.DelegatorAddr == validator.Owner && validator.Revoked == false
			revokeCandidacy = true

		removeDelegation( bond)
	else
		bond.Height = currentBlockHeight
		setDelegation(bond)

	pool = GetPool()
	validator, pool, returnAmount = validator.removeDelShares(pool, tx.Shares)
	setPool( pool)

    unbondingDelegation = NewUnbondingDelegation(sender, returnAmount, currentHeight/Time, startSlashRatio)
    setUnbondingDelegation(unbondingDelegation)

	if revokeCandidacy
		validator.Revoked = true

	validator = updateValidator(validator)

	if validator.DelegatorShares == 0 {
		removeValidator(validator.Owner)

    return
```

### TxCompleteUnbonding

Complete the unbonding and transfer the coins to the delegate. Perform any
slashing that occured during the unbonding period.

```golang
type TxUnbondingComplete struct {
    DelegatorAddr sdk.Address
    ValidatorAddr sdk.Address
}

redelegationComplete(tx TxRedelegate):
    unbonding = getUnbondingDelegation(tx.DelegatorAddr, tx.Validator)
    if unbonding.CompleteTime >= CurrentBlockTime && unbonding.CompleteHeight >= CurrentBlockHeight
        validator = GetValidator(tx.ValidatorAddr)
        returnTokens = ExpectedTokens * tx.startSlashRatio/validator.SlashRatio
	    AddCoins(unbonding.DelegatorAddr, returnTokens)
        removeUnbondingDelegation(unbonding)
    return     
```

### TxRedelegation

The redelegation command allows delegators to instantly switch validators. Once
the unbonding period has passed, the redelegation must be completed with
txRedelegationComplete.

```golang
type TxRedelegate struct {
    DelegatorAddr Address
    ValidatorFrom Validator
    ValidatorTo   Validator
    Shares        sdk.Rat
    CompletedTime int64
}

redelegate(tx TxRedelegate):

    pool = getPool()
    delegation = getDelegatorBond(tx.DelegatorAddr, tx.ValidatorFrom.Owner)
    if delegation == nil
        return

    if delegation.Shares < tx.Shares
        return
    delegation.shares -= Tx.Shares
    validator, pool, createdCoins = validator.RemoveShares(pool, tx.Shares)
    setPool(pool)

    redelegation = newRedelegation(tx.DelegatorAddr, tx.validatorFrom,
        tx.validatorTo, tx.Shares, createdCoins, tx.CompletedTime)
    setRedelegation(redelegation)
    return     
```

### TxCompleteRedelegation

Note that unlike TxCompleteUnbonding slashing of redelegating shares does not
take place during completion. Slashing on redelegated shares takes place
actively as a slashing occurs.

```golang
type TxRedelegationComplete struct {
    DelegatorAddr Address
    ValidatorFrom Validator
    ValidatorTo   Validator
}

redelegationComplete(tx TxRedelegate):
    redelegation = getRedelegation(tx.DelegatorAddr, tx.validatorFrom, tx.validatorTo)
    if redelegation.CompleteTime >= CurrentBlockTime && redelegation.CompleteHeight >= CurrentBlockHeight
        removeRedelegation(redelegation)
    return     
```

### Update Validators

Within many transactions the validator set must be updated based on changes in
power to a single validator. This process also updates the Tendermint-Updates
store for use in end-block when validators are either added or kicked from the
Tendermint.

```golang
updateBondedValidators(newValidator Validator) (updatedVal Validator)

	kickCliffValidator = false
	oldCliffValidatorAddr = getCliffValidator(ctx)

	// add the actual validator power sorted store
	maxValidators = GetParams(ctx).MaxValidators
	iterator = ReverseSubspaceIterator(ValidatorsByPowerKey) // largest to smallest
	bondedValidatorsCount = 0
	var validator Validator
	for {
		if !iterator.Valid() || bondedValidatorsCount > int(maxValidators-1) {

			if bondedValidatorsCount == int(maxValidators) { // is cliff validator
				setCliffValidator(ctx, validator, GetPool(ctx))
			iterator.Close()
			break

		// either retrieve the original validator from the store,
		// or under the situation that this is the "new validator" just
		// use the validator provided because it has not yet been updated
		// in the main validator store

		ownerAddr = iterator.Value()
		if bytes.Equal(ownerAddr, newValidator.Owner) {
			validator = newValidator
        else
			validator = getValidator(ownerAddr)

		// if not previously a validator (and unrevoked),
		// kick the cliff validator / bond this new validator
		if validator.Status() != Bonded && !validator.Revoked {
			kickCliffValidator = true

			validator = bondValidator(ctx, store, validator)
			if bytes.Equal(ownerAddr, newValidator.Owner) {
				updatedVal = validator

		bondedValidatorsCount++
		iterator.Next()

	// perform the actual kicks
	if oldCliffValidatorAddr != nil && kickCliffValidator {
		validator = getValidator(store, oldCliffValidatorAddr)
		unbondValidator(ctx, store, validator)
	return

// perform all the store operations for when a validator status becomes unbonded
unbondValidator(ctx Context, store KVStore, validator Validator)
	pool = GetPool(ctx)

	// set the status
	validator, pool = validator.UpdateStatus(pool, Unbonded)
	setPool(ctx, pool)

	// save the now unbonded validator record
	setValidator(validator)

	// add to accumulated changes for tendermint
	setTendermintUpdates(validator.abciValidatorZero)

	// also remove from the bonded validators index
	removeValidatorsBonded(validator)
}

// perform all the store operations for when a validator status becomes bonded
bondValidator(ctx Context, store KVStore, validator Validator) Validator
	pool = GetPool(ctx)

	// set the status
	validator, pool = validator.UpdateStatus(pool, Bonded)
	setPool(ctx, pool)

	// save the now bonded validator record to the three referenced stores
	setValidator(validator)
	setValidatorsBonded(validator)

	// add to accumulated changes for tendermint
	setTendermintUpdates(validator.abciValidator)

	return validator
```

## End-Block

Two staking activities are intended to be processed in the application end-block.
 - inform Tendermint of validator set changes
 - process and set atom inflation

# Validator Set Changes

The Tendermint validator set may be updated by state transitions that run at
the end of every block. The Tendermint validator set may be changed by
validators either being revoked due to inactivity/unexpected behaviour (covered
in slashing) or changed in validator power. Determining which validator set
changes must be made occurs during staking transactions (and slashing
transactions) - during end-block the already accounted changes are applied and
the changes cleared

```golang
EndBlock() ValidatorSetChanges
    vsc = GetTendermintUpdates()
    ClearTendermintUpdates()
    return vsc
```

# Inflation

The atom inflation rate is changed once per hour based on the current and
historic bond ratio

```golang
processProvisions():
    hrsPerYr = 8766   // as defined by a julian year of 365.25 days

    time = BFTTime()
    if time > pool.InflationLastTime + ProvisionTimeout
        pool.InflationLastTime = time
        pool.Inflation = nextInflation(hrsPerYr).Round(1000000000)

        provisions = pool.Inflation * (pool.TotalSupply / hrsPerYr)

        pool.LooseUnbondedTokens += provisions
        feePool += LooseUnbondedTokens

        setPool(pool)

nextInflation(hrsPerYr rational.Rat):
    if pool.TotalSupply > 0
        bondedRatio = pool.BondedPool / pool.TotalSupply
    else
        bondedRation = 0

    inflationRateChangePerYear = (1 - bondedRatio / params.GoalBonded) * params.InflationRateChange
    inflationRateChange = inflationRateChangePerYear / hrsPerYr

    inflation = pool.Inflation + inflationRateChange
    if inflation > params.InflationMax then inflation = params.InflationMax

    if inflation < params.InflationMin then inflation = params.InflationMin

    return inflation
```
