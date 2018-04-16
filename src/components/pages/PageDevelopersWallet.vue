<template lang="pug">
page(title="Wallet Development" subtitle="[Coming Soon] Learn how to develop a custom wallet for the Cosmos Network.")
  text-container(
    url='https://api.github.com/repos/tendermint/aib-data/contents/md/wallet.md')
</template>

<script>
import Page from "@/components/common/NiPage"
import TextContainer from "@/components/common/NiTextContainer.vue"
export default {
  name: "page-wallet",
  metaInfo: { title: "Wallet" },
  components: {
    Page,
    TextContainer
  }
}
</script>
