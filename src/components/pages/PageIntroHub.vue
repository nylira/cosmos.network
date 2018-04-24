<template lang="pug">
page(title="What is the Cosmos Hub?" subtitle="The Cosmos Hub is the first hub zone on the Cosmos Network.")
  text-container(url="https://api.github.com/repos/tendermint/aib-data/contents/md/intro-hub.md?ref=peng/testnet-refactor")
</template>

<script>
import Page from "common/NiPage"
import TextContainer from "common/NiTextContainer"
export default {
  name: "page-intro-hub",
  metaInfo: { title: "Cosmos Hub - Intro" },
  components: {
    Page,
    TextContainer
  }
}
</script>
