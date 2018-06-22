# Installation

::: tip
**Go 1.10+** is required for the Cosmos SDK.
:::

## Install Go

Install `go` by following the [official docs](https://golang.org/doc/install). Remember to properly setup your `$GOPATH`, `$GOBIN`, and `$PATH` variables, for example:

```bash
mkdir -p $HOME/go/bin
echo "export GOPATH=$HOME/go" >> ~/.bash_profile
echo "export GOBIN=$GOPATH/bin" >> ~/.bash_profile
echo "export PATH=$PATH:$GOBIN" >> ~/.bash_profile
```

## Install Cosmos SDK

Next, let's install the testnet's version of the Cosmos SDK.

```bash
mkdir -p $GOPATH/src/github.com/cosmos
cd $GOPATH/src/github.com/cosmos
git clone https://github.com/cosmos/cosmos-sdk
cd cosmos-sdk && git checkout v0.19.0
make get_tools && make get_vendor_deps && make install
```

That will install the `gaiad` and `gaiacli` binaries. Verify that everything is OK:

```bash
$ gaiad version
0.19.0-c6711810

$ gaiacli version
0.19.0-c6711810
```
