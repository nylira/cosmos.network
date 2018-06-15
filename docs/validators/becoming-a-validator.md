# Becoming a Validator

Each validator candidate is encouraged to run its operations independently, as diverse setups increase the resilience of the network. Validator candidates should commence their setup phase now in order to be on time for launch.

Next, you will find baseline recommendations for entities intending to run a validator in the early days of the Cosmos network. Note that these are recommendations. They are not is mandatory for becoming a validator. Ultimately, validator candidates are sorted based on their total stake.

## Read the FAQ

Be familiar with all the responsibilities of a validator by reading our [FAQ](/staking/validators-faq). This FAQ will be frequently updated so be sure to stay up-to-date.

## Participate in the testnet

Actively participate in the testnet. By the end of 2017 you should be able to maintain a validator node with constant uptime on the testnet. The [Testnet Tutorial](/validators/tutorial) contains instructions on how to become a validator in our testnet.

Be sure to frequently check the [changelog](https://github.com/cosmos/gaia/blob/master/CHANGELOG.md) and the [validator chat](https://riot.im/app/#/room/#cosmos_validators:matrix.org) to keep track of any updates.

## Set up a validator website

Set up a dedicated validator's website and signal your intention to become a validator on our [forum](https://forum.cosmos.network/t/validator-candidates-websites/127/3). This is important since delegators will want to have information about the entity they are delegating their Atoms to.

## Hardware

There currently exists no appropriate cloud solution for validator key management. This may change in 2018 when cloud SGX becomes more widely available. For this reason, validators must set up a physical operation secured with restricted access. A good starting place, for example, would be co-locating in secure datacenters.

Validators should expect to equip their datacenter location with redundant power, connectivity, and storage backups. Expect to have several redundant networking boxes for fiber, firewall and switching and then small servers with redundant hard drive and failover. Hardware can be on the low end of datacenter gear to start out with.

We anticipate that network requirements will be low initially. The current testnet requires minimal resources. Then bandwidth, CPU and memory requirements will rise as the network grows. Large hard drives are recommended for storing years of blockchain history.

## Key management - HSM

It is mission critical that an attacker cannot steal a validator's key. If this is possible, it puts the entire stake delegated to the compromised validator at risk. Hardware security modules are an important strategy for mitigating this risk.

HSM modules must support ed25519 signatures for the hub. The YubiHSM2 supports ed25519 and we expect to have an adapter library available in december. The YubiHSM can protect a private key but cannot ensure in a secure setting that it won't sign the same block twice.

The Tendermint team is also working on extending our Ledger Nano S application to support validator signing. This app can store recent blocks and mitigate double signing attacks.

We will update this page when more key storage solutions become available.

## DDOS protection (sentry node)

Validators are responsible for ensuring that the network can sustain denial of service attacks.

We recommend that validators run full nodes in the cloud and configure their validator nodes only to connect to those full nodes. Those full nodes can be moved or apply cloud based DDOS protection to mitigate DDOS attacks

Validators nodes should edit their config.toml

```
# Comma separated list of nodes to keep persistent connections to
# Do not add private peers to this list if you don't want them advertised
persistent_peers =[list of sentry nodes]

# Set true to enable the peer-exchange reactor
pex = false
```

Sentry Nodes should have edit config.toml to
```
# Comma separated list of peer IDs to keep private (will not be gossiped to other peers)
private_peer_ids = "ipaddress of validator nodes"

```

## Organize with your local jurisdiction

We strongly recommend that validators setup a separate company and not be run directly by an individual. Seek legal advice if you believe you may need additional licenses. Validators may want to establish terms of service and limits on liability for delegators or have delegators to operate at their own risk.
