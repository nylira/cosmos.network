# Installation

## Golang

Install `go` by following the [official docs](https://golang.org/doc/install).

::: tip
**Go 1.10+** is required for the Cosmos SDK.
:::


## Cosmos SDK

Next, let's install the the Cosmos SDK.

```
mkdir -p $GOPATH/src/github.com/cosmos
cd $GOPATH/src/github.com/cosmos
git clone https://github.com/cosmos/cosmos-sdk
cd cosmos-sdk && git checkout v0.19.0
make get_tools && make get_vendor_deps && make install
```

That will install the `gaiad` and `gaiacli` binaries. Verify that everything is OK:

```
gaiad version
0.19.0-<commit>
```

Now that you've installed the SDK, you can try running a full node on the Cosmos Network!
