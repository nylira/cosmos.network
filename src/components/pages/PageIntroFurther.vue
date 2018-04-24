<template lang="pug">
page(title="Going Further" subtitle="Wish to learn more?")
  text-container(url="https://api.github.com/repos/tendermint/aib-data/contents/md/intro-further.md?ref=peng/testnet-refactor")
</template>

<script>
import Page from "common/NiPage"
import TextContainer from "common/NiTextContainer"
export default {
  name: "page-intro-further",
  metaInfo: { title: "Going Further - Intro" },
  components: {
    Page,
    TextContainer
  }
}
</script>
