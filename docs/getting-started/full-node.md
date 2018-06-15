# Running a Full Node

## Node Setup

Create the required configuration files:

```
gaiad init
```

You can name your node by editing the `moniker` in `$HOME/.gaiad/config/config.toml`. Note that only ASCII characters are supported. Using Unicode renders your node un-connectable.

```
# A custom human readable name for this node
moniker = "<your_custom_name>"
```

## Run Your Full Node on the Latest Testnet

Start the full node with this command:

```
gaiad start
```

Check that everything is running smoothly:

```
gaiacli status
```

You're now connected to the latest testnet!

You can view the status of the network with the [Cosmos Explorer](https://explorecosmos.network). Once your full node syncs up to the current block height, you should see it appear on the [list of full nodes](https://explorecosmos.network/validators). If it doesn't show up, that's ok--the Explorer does not connect to every node.
