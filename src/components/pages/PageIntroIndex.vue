<template lang="pug">
page(title="What is Cosmos?" subtitle="Get started with an overview of the Cosmos Network.")
  text-container(url="https://api.github.com/repos/tendermint/aib-data/contents/md/intro-index.md?ref=peng/testnet-refactor")
</template>

<script>
import { mapGetters } from "vuex"
import Page from "common/NiPage"
import TextContainer from "common/NiTextContainer"
export default {
  name: "page-intro",
  metaInfo: { title: "Overview - Intro" },
  components: {
    Page,
    TextContainer
  },
  computed: { ...mapGetters(["links"]) }
}
</script>
