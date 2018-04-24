<template lang="pug">
page(
  title="Validators"
  subtitle="What is a Cosmos Validator? How can you run one?"
  splash="validator")
  text-container(
    url='https://api.github.com/repos/tendermint/aib-data/contents/md/validators-index.md?ref=peng/testnet-refactor')
</template>

<script>
import Page from "common/NiPage"
import TextContainer from "common/NiTextContainer"
export default {
  name: "page-validators-index",
  metaInfo: { title: "Overview - Validators" },
  components: {
    Page,
    TextContainer
  }
}
</script>
