# [cosmos.network](https://cosmos.network)

> The website for Cosmos, the Internet of Blockchains.

## Production

Please ask the team for deployment privileges.

``` bash
# add the production server if you haven't already
git remote add production ubuntu@cosmos.network:~/cosmos.git
```

``` bash
# deploy it!
git checkout master
git merge develop
git push production master
```

## Development

Make sure you're running Node 6 LTS or higher.

``` bash
# install dependencies
yarn install

# write some required files
yarn run build

# serve with hot reload at localhost:8700
yarn run dev
```

## Contributing 

TODO
