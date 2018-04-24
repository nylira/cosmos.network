<template lang="pug">
page(title="Cosmos FAQ" subtitle="Answers to frequently asked questions about the Cosmos Network.")
  text-container(url="https://api.github.com/repos/tendermint/aib-data/contents/md/resources-faq.md?ref=peng/testnet-refactor")
</template>

<script>
import Page from "common/NiPage"
import PageMenu from "common/NiPageMenu"
import TextContainer from "common/NiTextContainer"
export default {
  name: "page-faq",
  metaInfo: { title: "Cosmos FAQ - Resources" },
  components: {
    Page,
    PageMenu,
    TextContainer
  }
}
</script>
