<template lang="pug">
page(title="Scaling Ethereum" subtitle="Held back by Ethereum performance? Here are different approaches to scaling your Dapp on the Cosmos stack.")
  text-container(
    url='https://api.github.com/repos/tendermint/aib-data/contents/md/scaling-eth.md')
</template>

<script>
import { mapGetters } from "vuex"
import Page from "common/NiPage"
import TextContainer from "common/NiTextContainer.vue"
export default {
  name: "page-scaling-eth",
  metaInfo: { title: "Scaling Ethereum" },
  components: {
    Page,
    TextContainer
  },
  computed: { ...mapGetters(["links"]) }
}
</script>
