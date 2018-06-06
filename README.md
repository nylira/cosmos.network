# [cosmos.network](https://cosmos.network)

> The website for Cosmos: Internet of Blockchains.

## Prerequisites

```bash
# checkout
git clone https://github.com/cosmos/cosmos.network

# install dependencies
yarn
```

## Website Development

```bash
# serve with hot reload at localhost:8080
yarn serve
```

## Documentation Development

```bash
# serve with hot reload at localhost:8081
yarn serve:docs
```

## Production

Run `yarn build` and then serve the generated `./dist` directory with a web server. You cannot open `./dist/index.html` and expect everything to work.

```bash
yarn build
cd ./dist && python -m SimpleHTTPServer 8000
```
