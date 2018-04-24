<template lang="pug">
page(title="Scaling Ethereum" subtitle="Held back by Ethereum performance? Here are different approaches to scaling your Dapp on the Cosmos stack.")
  text-container(
    url='https://api.github.com/repos/tendermint/aib-data/contents/md/developers-scaling-eth.md?ref=peng/testnet-refactor')
</template>

<script>
import Page from "common/NiPage"
import TextContainer from "common/NiTextContainer.vue"
export default {
  name: "page-developers-scaling",
  metaInfo: { title: "Scaling Ethereum - Developers" },
  components: {
    Page,
    TextContainer
  }
}
</script>
