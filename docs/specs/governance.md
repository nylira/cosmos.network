# Governance

## Abstract

This paper specifies the Governance module of the Cosmos-SDK, which was first described in the [Cosmos Whitepaper](https://cosmos.network/about/whitepaper) in June 2016.

The module enables Cosmos-SDK based blockchain to support an on-chain governance system. In this system, holders of the native staking token of the chain can vote on proposals on a 1 token 1 vote basis. Next is a list of features the module currently supports:

- **Proposal submission:** Users can submit proposals with a deposit. Once the minimum deposit is reached, proposal enters voting period
- **Vote:** Participants can vote on proposals that reached MinDeposit
- **Inheritance and penalties:** Delegators inherit their validator's vote if they don't vote themselves. If validators do not vote, they get partially slashed.
- **Signal and switch:** If a proposal of type `SoftwareUpgradeProposal` is accepted, validators can signal it and switch once enough validators have signalled.
- **Claiming deposit:** Users that deposited on proposals can recover their deposits if the proposal was accepted OR if the proposal never entered voting period.

Features that may be added in the future are described in [Future improvements](future_improvements.md)

This module will be used in the Cosmos Hub, the first Hub in the Cosmos network.


## Table of Contents

The following specification uses *Atom* as the native staking token. The module can be adapted to any Proof-Of-Stake blockchain by replacing *Atom* with the native staking token of the chain.

1.  **[Design overview](overview.md)**
2.  **Implementation**
    1. **[State](state.md)**
        1.  Procedures
        2.  Proposals
        3.  Proposal Processing Queue
    2. **[Transactions](transactions.md)**
        1.  Proposal Submission
        2.  Deposit
        3.  Claim Deposit
        4.  Vote
3.  **[Future improvements](future_improvements.md)**


---
# part 2
---

# Design Overview

*Disclaimer: This is work in progress. Mechanisms are susceptible to change.*

The governance process is divided in a few steps that are outlined below:

* **Proposal submission:** Proposal is submitted to the blockchain with a
  deposit.
* **Vote:** Once deposit reaches a certain value (`MinDeposit`), proposal is
  confirmed and vote opens. Bonded Atom holders can then send `TxGovVote`
  transactions to vote on the proposal.
* If the proposal involves a software upgrade:
  * **Signal:** Validators start signaling that they are ready to switch to the
    new version.
  * **Switch:** Once more than 75% of validators have signaled that they are
    ready to switch, their software automatically flips to the new version.

## Proposal submission

### Right to submit a proposal

Any Atom holder, whether bonded or unbonded, can submit proposals by sending a
`TxGovProposal` transaction. Once a proposal is submitted, it is identified by
its unique `proposalID`.

### Proposal filter (minimum deposit)

To prevent spam, proposals must be submitted with a deposit in Atoms. Voting
period will not start as long as the proposal's deposit is smaller than the
minimum deposit `MinDeposit`.

When a proposal is submitted, it has to be accompanied by a deposit that must
be strictly positive but can be inferior to `MinDeposit`. Indeed, the submitter
need not pay for the entire deposit on its own. If a proposal's deposit is
strictly inferior to `MinDeposit`, other Atom holders can increase the
proposal's deposit by sending a `TxGovDeposit` transaction. Once the proposal's deposit reaches `MinDeposit`, it enters voting period.

If proposal's deposit does not reach `MinDeposit` before `MaxDepositPeriod`, proposal closes and nobody can deposit on it anymore.

### Deposit refund

There is one instance where Atom holders that deposits can be refunded:
* If the proposal is accepted.

Then, deposits will automatically be refunded to their respective depositer.

### Proposal types

In the initial version of the governance module, there are two types of
proposal:
* `PlainTextProposal` All the proposals that do not involve a modification of
  the source code go under this type. For example, an opinion poll would use a
  proposal of type `PlainTextProposal`.
* `SoftwareUpgradeProposal`. If accepted, validators are expected to update
  their software in accordance with the proposal. They must do so by following
  a 2-steps process described in the [Software Upgrade](#software-upgrade)
  section below. Software upgrade roadmap may be discussed and agreed on via
  `PlainTextProposals`, but actual software upgrades must be performed via
  `SoftwareUpgradeProposals`.


## Vote

### Participants

*Participants* are users that have the right to vote on proposals. On the
Cosmos Hub, participants are bonded Atom holders. Unbonded Atom holders and
other users do not get the right to participate in governance. However, they
can submit and deposit on proposals.

Note that some *participants* can be forbidden to vote on a proposal under a
certain validator if:
* *participant* bonded or unbonded Atoms to said validator after proposal
  entered voting period.
* *participant* became validator after proposal entered voting period.

This does not prevent *participant* to vote with Atoms bonded to other
validators. For example, if a *participant* bonded some Atoms to validator A
before a proposal entered voting period and other Atoms to validator B after
proposal entered voting period, only the vote under validator B will be
forbidden.

### Voting period

Once a proposal reaches `MinDeposit`, it immediately enters `Voting period`. We
define `Voting period` as the interval between the moment the vote opens and
the moment the vote closes. `Voting period` should always be shorter than
`Unbonding period` to prevent double voting. The initial value of
`Voting period` is 2 weeks.

### Option set

The option set of a proposal refers to the set of choices a participant can
choose from when casting its vote.

The initial option set includes the following options:
- `Yes`
- `No`
- `NoWithVeto`
- `Abstain`

`NoWithVeto` counts as `No` but also adds a `Veto` vote. `Abstain` option
allows voters to signal that they do not intend to vote in favor or against the
proposal but accept the result of the vote.

*Note: from the UI, for urgent proposals we should maybe add a ‘Not Urgent’
option that casts a `NoWithVeto` vote.*

### Quorum

Quorum is defined as the minimum percentage of voting power that needs to be
casted on a proposal for the result to be valid.

In the initial version of the governance module, there will be no quorum
enforced by the protocol. Participation is ensured via the combination of
inheritance and validator's punishment for non-voting.

### Threshold

Threshold is defined as the minimum proportion of `Yes` votes (excluding
`Abstain` votes) for the proposal to be accepted.

Initially, the threshold is set at 50% with a possibility to veto if more than
1/3rd of votes (excluding `Abstain` votes) are `NoWithVeto` votes. This means
that proposals are accepted if the proportion of `Yes` votes (excluding
`Abstain` votes) at the end of the voting period is superior to 50% and if the
proportion of `NoWithVeto` votes is inferior to 1/3 (excluding `Abstain`
votes).

Proposals can be accepted before the end of the voting period if they meet a special condtion. Namely, if the ratio of `Yes` votes to `InitTotalVotingPower`exceeds 2:3, the proposal will be immediately accepted, even if the `Voting period` is not finished. `InitTotalVotingPower` is the total voting power of all bonded Atom holders at the moment when the vote opens.
This condition exists so that the network can react quickly in case of urgency.

### Inheritance

If a delegator does not vote, it will inherit its validator vote.

* If the delegator votes before its validator, it will not inherit from the
  validator's vote.
* If the delegator votes after its validator, it will override its validator
  vote with its own. If the proposal is urgent, it is possible
  that the vote will close before delegators have a chance to react and
  override their validator's vote. This is not a problem, as proposals require more than 2/3rd of the total voting power to pass before the end of the voting period. If more than 2/3rd of validators collude, they can censor the votes of delegators anyway.

### Validator’s punishment for non-voting

Validators are required to vote on all proposals to ensure that results have
legitimacy. Voting is part of validators' directives and failure to do it will
result in a penalty.

If a validator’s address is not in the list of addresses that voted on a
proposal and the vote is closed (i.e. `MinDeposit` was reached and `Voting
period` is over), then the validator will automatically be partially slashed by
`GovernancePenalty`.

*Note: Need to define values for `GovernancePenalty`*

**Exception:** If a proposal is accepted via the special condition of having a ratio of `Yes` votes to `InitTotalVotingPower` that exceeds 2:3, validators cannot be punished for not having voted on it.
That is because the proposal will close as soon as the ratio exceeds 2:3,
making it mechanically impossible for some validators to vote on it.

### Governance address

Later, we may add permissionned keys that could only sign txs from certain modules. For the MVP, the `Governance address` will be the main validator address generated at account creation. This address corresponds to a different PrivKey than the Tendermint PrivKey which is responsible for signing consensus messages. Validators thus do not have to sign governance transactions with the sensitive Tendermint PrivKey.

## Software Upgrade

If proposals are of type `SoftwareUpgradeProposal`, then nodes need to upgrade
their software to the new version that was voted. This process is divided in
two steps.

### Signal

After a `SoftwareUpgradeProposal` is accepted, validators are expected to
download and install the new version of the software while continuing to run
the previous version. Once a validator has downloaded and installed the
upgrade, it will start signaling to the network that it is ready to switch by
including the proposal's `proposalID` in its *precommits*.(*Note: Confirmation
that we want it in the precommit?*)

Note: There is only one signal slot per *precommit*. If several
`SoftwareUpgradeProposals` are accepted in a short timeframe, a pipeline will
form and they will be implemented one after the other in the order that they
were accepted.

### Switch

Once a block contains more than 2/3rd *precommits* where a common
`SoftwareUpgradeProposal` is signaled, all the nodes (including validator
nodes, non-validating full nodes and light-nodes) are expected to switch to the
new version of the software.

*Note: Not clear how the flip is handled programatically*

---
# part 3
---

# Implementation (1/2)

## State

### Procedures

`Procedures` define the rule according to which votes are run. There can only
be one active procedure at any given time. If governance wants to change a
procedure, either to modify a value or add/remove a parameter, a new procedure
has to be created and the previous one rendered inactive.

```go

type VoteType byte

const (
    VoteTypeYes         = 0x1
    VoteTypeNo          = 0x2
    VoteTypeNoWithVeto  = 0x3
    VoteTypeAbstain     = 0x4
)

type ProposalType  byte

const (
    ProposalTypePlainText = 0x1
    ProposalTypeSoftwareUpgrade = 0x2

)

type Procedure struct {
  VotingPeriod      int64               //  Length of the voting period. Initial value: 2 weeks
  MinDeposit        int64               //  Minimum deposit for a proposal to enter voting period.
  VoteTypes         []VoteType          //  Vote types available to voters.
  ProposalTypes     []ProposalType      //  Proposal types available to submitters.
  Threshold         rational.Rational   //  Minimum propotion of Yes votes for proposal to pass. Initial value: 0.5
  Veto              rational.Rational   //  Minimum value of Veto votes to Total votes ratio for proposal to be vetoed. Initial value: 1/3
  MaxDepositPeriod  int64               //  Maximum period for Atom holders to deposit on a proposal. Initial value: 2 months
  GovernancePenalty int64               //  Penalty if validator does not vote

  IsActive          bool                //  If true, procedure is active. Only one procedure can have isActive true.
}
```

The current active procedure is stored in a global `params` KVStore.

### Deposit

```go
  type Deposit struct {
    Amount      sdk.Coins       //  Amount of coins deposited by depositer
    Depositer   crypto.address  //  Address of depositer
  }
```

### Votes

```go
  type Votes struct {
    Yes          int64
    No           int64
    NoWithVeto   int64
    Abstain      int64
  }
```


### Proposals

`Proposals` are an item to be voted on.

```go
type Proposal struct {
  Title                 string              //  Title of the proposal
  Description           string              //  Description of the proposal
  Type                  ProposalType        //  Type of proposal. Initial set {PlainTextProposal, SoftwareUpgradeProposal}
  TotalDeposit          sdk.Coins           //  Current deposit on this proposal. Initial value is set at InitialDeposit
  Deposits              []Deposit           //  List of deposits on the proposal
  SubmitBlock           int64               //  Height of the block where TxGovSubmitProposal was included
  Submitter             crypto.Address      //  Address of the submitter

  VotingStartBlock      int64               //  Height of the block where MinDeposit was reached. -1 if MinDeposit is not reached
  InitTotalVotingPower  int64               //  Total voting power when proposal enters voting period (default 0)
  InitProcedure         Procedure           //  Active Procedure when proposal enters voting period

  Votes                 Votes               //  Total votes for each option
}
```

We also introduce a type `ValidatorGovInfo`

```go
type ValidatorGovInfo struct {
  InitVotingPower     int64   //  Voting power of validator when proposal enters voting period
  Minus               int64   //  Minus of validator, used to compute validator's voting power
}
```

### Stores

*Stores are KVStores in the multistore. The key to find the store is the first parameter in the list*


* `Proposals: int64 => Proposal` maps `proposalID` to the `Proposal`
  `proposalID`
* `Options: <proposalID | voterAddress | Address> => VoteType`: maps to the vote of the `voterAddress` for `proposalID` re its delegation to `Address`.
   Returns 0x0 If `voterAddress` has not voted under this validator.
* `ValidatorGovInfos: <proposalID | Address> => ValidatorGovInfo`: maps to the gov info for the `Address` and `proposalID`.
  Returns `nil` if proposal has not entered voting period or if `address` was not the
  address of a validator when proposal entered voting period.

For pseudocode purposes, here are the two function we will use to read or write in stores:

* `load(StoreKey, Key)`: Retrieve item stored at key `Key` in store found at key `StoreKey` in the multistore
* `store(StoreKey, Key, value)`: Write value `Value` at key `Key` in store found at key `StoreKey` in the multistore

### Proposal Processing Queue

**Store:**
* `ProposalProcessingQueue`: A queue `queue[proposalID]` containing all the
  `ProposalIDs` of proposals that reached `MinDeposit`. Each round, the oldest
  element of `ProposalProcessingQueue` is checked during `BeginBlock` to see if
  `CurrentBlock == VotingStartBlock + InitProcedure.VotingPeriod`. If it is,
  then the application checks if validators in `InitVotingPowerList` have voted
  and, if not, applies `GovernancePenalty`. If the proposal is accepted, deposits are refunded.
  After that proposal is ejected from `ProposalProcessingQueue` and the next element of the queue is evaluated.
  Note that if a proposal is accepted under the special condition,
  its `ProposalID` must be ejected from `ProposalProcessingQueue`.

And the pseudocode for the `ProposalProcessingQueue`:

```go
  in BeginBlock do

    checkProposal()  // First call of the recursive function


  // Recursive function. First call in BeginBlock
  func checkProposal()  
    proposalID = ProposalProcessingQueue.Peek()
    if (proposalID == nil)
      return

    proposal = load(Proposals, proposalID)

    if (proposal.Votes.YesVotes/proposal.InitTotalVotingPower > 2/3)

      // proposal accepted early by super-majority
      // no punishments; refund deposits

      ProposalProcessingQueue.pop()

      var newDeposits []Deposits

      // XXX: why do we need to reset deposits? cant we just clear it ?
      for each (amount, depositer) in proposal.Deposits
        newDeposits.append[{0, depositer}]
        depositer.AtomBalance += amount

      proposal.Deposits = newDeposits
      store(Proposals, proposalID, proposal)

      checkProposal()

    else if (CurrentBlock == proposal.VotingStartBlock + proposal.Procedure.VotingPeriod)

      ProposalProcessingQueue.pop()
      activeProcedure = load(params, 'ActiveProcedure')

      for each validator in CurrentBondedValidators
        validatorGovInfo = load(ValidatorGovInfos, <proposalID | validator.Address>)

        if (validatorGovInfo.InitVotingPower != nil)
          // validator was bonded when vote started

          validatorOption = load(Options, <proposalID | validator.Address>)
          if (validatorOption == nil)
            // validator did not vote
            slash validator by activeProcedure.GovernancePenalty


      totalNonAbstain = proposal.Votes.YesVotes + proposal.Votes.NoVotes + proposal.Votes.NoWithVetoVotes
      if( proposal.Votes.YesVotes/totalNonAbstain > 0.5 AND proposal.Votes.NoWithVetoVotes/totalNonAbstain  < 1/3)

        //  proposal was accepted at the end of the voting period
        //  refund deposits (non-voters already punished)

        var newDeposits []Deposits

        for each (amount, depositer) in proposal.Deposits
          newDeposits.append[{0, depositer}]
          depositer.AtomBalance += amount

        proposal.Deposits = newDeposits
        store(Proposals, proposalID, proposal)

        checkProposal()        
```
---
# part 4
---
# Implementation (2/2)

## Transactions

### Proposal Submission

Proposals can be submitted by any Atom holder via a `TxGovSubmitProposal`
transaction.

```go
type TxGovSubmitProposal struct {
  Title           string        //  Title of the proposal
  Description     string        //  Description of the proposal
  Type            ProposalType  //  Type of proposal
  InitialDeposit  int64         //  Initial deposit paid by sender. Must be strictly positive.
}
```

**State modifications:**
* Generate new `proposalID`
* Create new `Proposal`
* Initialise `Proposals` attributes
* Decrease balance of sender by `InitialDeposit`
* If `MinDeposit` is reached:
  * Push `proposalID` in  `ProposalProcessingQueueEnd`
  * Store each validator's voting power in `ValidatorGovInfos`

A `TxGovSubmitProposal` transaction can be handled according to the following
pseudocode.

```go
// PSEUDOCODE //
// Check if TxGovSubmitProposal is valid. If it is, create proposal //

upon receiving txGovSubmitProposal from sender do

  if !correctlyFormatted(txGovSubmitProposal) then
    // check if proposal is correctly formatted. Includes fee payment.
    throw

  initialDeposit = txGovSubmitProposal.InitialDeposit
  if (initialDeposit <= 0) OR (sender.AtomBalance < initialDeposit) then
    // InitialDeposit is negative or null OR sender has insufficient funds
    throw

  sender.AtomBalance -= initialDeposit

  proposalID = generate new proposalID
  proposal = NewProposal()

  proposal.Title = txGovSubmitProposal.Title
  proposal.Description = txGovSubmitProposal.Description
  proposal.Type = txGovSubmitProposal.Type
  proposal.TotalDeposit = initialDeposit
  proposal.SubmitBlock = CurrentBlock
  proposal.Deposits.append({initialDeposit, sender})
  proposal.Submitter = sender
  proposal.Votes.Yes = 0
  proposal.Votes.No = 0
  proposal.Votes.NoWithVeto = 0
  proposal.Votes.Abstain = 0

  activeProcedure = load(params, 'ActiveProcedure')

  if (initialDeposit < activeProcedure.MinDeposit) then  
    // MinDeposit is not reached

    proposal.VotingStartBlock = -1
    proposal.InitTotalVotingPower = 0

  else  
    // MinDeposit is reached

    proposal.VotingStartBlock = CurrentBlock
    proposal.InitTotalVotingPower = TotalVotingPower
    proposal.InitProcedure = activeProcedure

    for each validator in CurrentBondedValidators
      // Store voting power of each bonded validator

      validatorGovInfo = new ValidatorGovInfo
      validatorGovInfo.InitVotingPower = validator.VotingPower
      validatorGovInfo.Minus = 0

      store(ValidatorGovInfos, <proposalID | validator.Address>, validatorGovInfo)

    ProposalProcessingQueue.push(proposalID)

  store(Proposals, proposalID, proposal) // Store proposal in Proposals mapping
  return proposalID
```

### Deposit

Once a proposal is submitted, if
`Proposal.TotalDeposit < ActiveProcedure.MinDeposit`, Atom holders can send
`TxGovDeposit` transactions to increase the proposal's deposit.

```go
type TxGovDeposit struct {
  ProposalID    int64   // ID of the proposal
  Deposit       int64   // Number of Atoms to add to the proposal's deposit
}
```

**State modifications:**
* Decrease balance of sender by `deposit`
* Add `deposit` of sender in `proposal.Deposits`
* Increase `proposal.TotalDeposit` by sender's `deposit`
* If `MinDeposit` is reached:
  * Push `proposalID` in  `ProposalProcessingQueueEnd`
  * Store each validator's voting power in `ValidatorGovInfos`

A `TxGovDeposit` transaction has to go through a number of checks to be valid.
These checks are outlined in the following pseudocode.

```go
// PSEUDOCODE //
// Check if TxGovDeposit is valid. If it is, increase deposit and check if MinDeposit is reached

upon receiving txGovDeposit from sender do
  // check if proposal is correctly formatted. Includes fee payment.

  if !correctlyFormatted(txGovDeposit) then  
    throw

  proposal = load(Proposals, txGovDeposit.ProposalID)

  if (proposal == nil) then  
    // There is no proposal for this proposalID
    throw

  if (txGovDeposit.Deposit <= 0) OR (sender.AtomBalance < txGovDeposit.Deposit)
    // deposit is negative or null OR sender has insufficient funds
    throw

  activeProcedure = load(params, 'ActiveProcedure')

  if (proposal.TotalDeposit >= activeProcedure.MinDeposit) then  
    // MinDeposit was reached
    // TODO: shouldnt we do something here ?
    throw

  else
    if (CurrentBlock >= proposal.SubmitBlock + activeProcedure.MaxDepositPeriod) then
      // Maximum deposit period reached
      throw

    // sender can deposit

    sender.AtomBalance -= txGovDeposit.Deposit

    proposal.Deposits.append({txGovVote.Deposit, sender})
    proposal.TotalDeposit += txGovDeposit.Deposit

    if (proposal.TotalDeposit >= activeProcedure.MinDeposit) then  
      // MinDeposit is reached, vote opens

      proposal.VotingStartBlock = CurrentBlock
      proposal.InitTotalVotingPower = TotalVotingPower
      proposal.InitProcedure = activeProcedure

      for each validator in CurrentBondedValidators
        // Store voting power of each bonded validator

        validatorGovInfo = NewValidatorGovInfo()
        validatorGovInfo.InitVotingPower = validator.VotingPower
        validatorGovInfo.Minus = 0

        store(ValidatorGovInfos, <proposalID | validator.Address>, validatorGovInfo)

      ProposalProcessingQueue.push(txGovDeposit.ProposalID)  

    store(Proposals, txGovVote.ProposalID, proposal)
```

### Vote

Once `ActiveProcedure.MinDeposit` is reached, voting period starts. From there,
bonded Atom holders are able to send `TxGovVote` transactions to cast their
vote on the proposal.

```go
  type TxGovVote struct {
    ProposalID           int64           //  proposalID of the proposal
    Option               string          //  option from OptionSet chosen by the voter
    Address      crypto.address //  Address of the validator voter wants to tie its vote to
  }
```

**State modifications:**
* If sender is not a validator and validator has not voted, initialize or
  increase minus of validator by sender's `voting power`
* If sender is not a validator and validator has voted, decrease
  votes of `validatorOption` by sender's `voting power`
* If sender is not a validator, increase votes of `txGovVote.Option`
  by sender's `voting power`
* If sender is a validator, increase votes of `txGovVote.Option` by
  validator's `InitVotingPower - minus` (`minus` can be equal to 0)

Votes need to be tied to a validator in order to compute validator's voting
power. If a delegator is bonded to multiple validators, it will have to send
one transaction per validator (the UI should facilitate this so that multiple
transactions can be sent in one "vote flow"). If the sender is the validator
itself, then it will input its own address as `Address`

Next is a pseudocode proposal of the way `TxGovVote` transactions are
handled:

```go
  // PSEUDOCODE //
  // Check if TxGovVote is valid. If it is, count vote//

  upon receiving txGovVote from sender do
    // check if proposal is correctly formatted. Includes fee payment.    

    if !correctlyFormatted(txGovDeposit) then  
      throw

    proposal = load(Proposals, txGovDeposit.ProposalID)

    if (proposal == nil) then  
      // There is no proposal for this proposalID
      throw

    validator = load(CurrentValidators, txGovVote.Address)

    if  !proposal.InitProcedure.OptionSet.includes(txGovVote.Option) OR
        (validator == nil) then

      // Throws if
      // Option is not in Option Set of procedure that was active when vote opened OR if
      // Address is not the address of a current validator

      throw

    option = load(Options, <txGovVote.ProposalID>:<sender>:<txGovVote.Address>)

    if (option != nil)
     // sender has already voted with the Atoms bonded to Address
     throw

    if  (proposal.VotingStartBlock < 0) OR  
        (CurrentBlock > proposal.VotingStartBlock + proposal.InitProcedure.VotingPeriod) OR
        (proposal.VotingStartBlock < lastBondingBlock(sender, txGovVote.Address) OR   
        (proposal.VotingStartBlock < lastUnbondingBlock(sender, txGovVote.Address) OR   
        (proposal.Votes.YesVotes/proposal.InitTotalVotingPower >= 2/3) then   

        // Throws if
        // Vote has not started OR if
        // Vote had ended OR if
        // sender bonded Atoms to Address after start of vote OR if
        // sender unbonded Atoms from Address after start of vote OR if
        // special condition is met, i.e. proposal is accepted and closed

        throw     

    validatorGovInfo = load(ValidatorGovInfos, <txGovVote.ProposalID>:<validator.Address>)

    if (validatorGovInfo == nil)
      // validator became validator after proposal entered voting period
      throw

    // sender can vote, check if sender == validator and store sender's option in Options

    store(Options, <txGovVote.ProposalID>:<sender>:<txGovVote.Address>, txGovVote.Option)

    if (sender != validator.address)
      // Here, sender is not the Address of the validator whose Address is txGovVote.Address

      if sender does not have bonded Atoms to txGovVote.Address then
        // check in Staking module
        throw

      validatorOption = load(Options, <txGovVote.ProposalID>:<sender>:<txGovVote.Address>)

      if (validatorOption == nil)
        // Validator has not voted already

        validatorGovInfo.Minus += sender.bondedAmounTo(txGovVote.Address)
        store(ValidatorGovInfos, <txGovVote.ProposalID>:<validator.Address>, validatorGovInfo)

      else
        // Validator has already voted
        // Reduce votes of option chosen by validator by sender's bonded Amount

        proposal.Votes.validatorOption -= sender.bondedAmountTo(txGovVote.Address)

      // increase votes of option chosen by sender by bonded Amount

      senderOption = txGovVote.Option
      propoal.Votes.senderOption -= sender.bondedAmountTo(txGovVote.Address)

      store(Proposals, txGovVote.ProposalID, proposal)


    else
      // sender is the address of the validator whose main Address is txGovVote.Address
      // i.e. sender == validator

      proposal.Votes.validatorOption += (validatorGovInfo.InitVotingPower - validatorGovInfo.Minus)

      store(Proposals, txGovVote.ProposalID, proposal)
```

# Future improvements (not in scope for MVP)

The current documentation only describes the minimum viable product for the
governance module. Future improvements may include:

* **`BountyProposals`:** If accepted, a `BountyProposal` creates an open
  bounty. The `BountyProposal` specifies how many Atoms will be given upon
  completion. These Atoms will be taken from the `reserve pool`. After a
  `BountyProposal` is accepted by governance, anybody can submit a
  `SoftwareUpgradeProposal` with the code to claim the bounty. Note that once a
  `BountyProposal` is accepted, the corresponding funds in the `reserve pool`
  are locked so that payment can always be honored. In order to link a
  `SoftwareUpgradeProposal` to an open bounty, the submitter of the
  `SoftwareUpgradeProposal` will use the `Proposal.LinkedProposal` attribute.
  If a `SoftwareUpgradeProposal` linked to an open bounty is accepted by
  governance, the funds that were reserved are automatically transferred to the
  submitter.
* **Complex delegation:** Delegators could choose other representatives than
  their validators. Ultimately, the chain of representatives would always end
  up to a validator, but delegators could inherit the vote of their chosen
  representative before they inherit the vote of their validator. In other
  words, they would only inherit the vote of their validator if their other
  appointed representative did not vote.
* **`ParameterProposals` and `WhitelistProposals`:** These proposals would
  automatically change pre-defined parameters and whitelists. Upon acceptance,
  these proposals would not require validators to do the signal and switch
  process.
* **Better process for proposal review:** There would be two parts to
  `proposal.Deposit`, one for anti-spam (same as in MVP) and an other one to
  reward third party auditors.
