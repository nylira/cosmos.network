<template lang="pug">
page(title="Developers" subtitle="Learn about and contribute to the code that powers the Cosmos Network.")
  text-container(url="https://api.github.com/repos/tendermint/aib-data/contents/md/developers-index.md?ref=peng/testnet-refactor")
</template>

<script>
import Page from "common/NiPage"
import Part from "common/NiPart"
import TextContainer from "common/NiTextContainer"
export default {
  name: "page-developers-index",
  metaInfo: { title: "Overview - Developers" },
  components: {
    Page,
    Part,
    TextContainer
  }
}
</script>
