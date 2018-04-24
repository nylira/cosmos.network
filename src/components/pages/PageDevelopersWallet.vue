<template lang="pug">
page(title="Wallet Development" subtitle="[Coming Soon] Learn how to develop a custom wallet for the Cosmos Network.")
  text-container(
    url='https://api.github.com/repos/tendermint/aib-data/contents/md/developers-wallet.md?ref=peng/testnet-refactor')
</template>

<script>
import Page from "common/NiPage"
import TextContainer from "common/NiTextContainer.vue"
export default {
  name: "page-developers-wallet",
  metaInfo: { title: "Wallet - Developers" },
  components: {
    Page,
    TextContainer
  }
}
</script>
