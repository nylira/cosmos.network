<template lang="pug">
page(
  title="Validators FAQ"
  subtitle="Frequently asked questions and answers about Cosmos Validators."
  splash="validator")
  text-container(
    url='https://api.github.com/repos/tendermint/aib-data/contents/md/resources-validators-faq.md?ref=peng/testnet-refactor')
</template>

<script>
import Page from "common/NiPage"
import TextContainer from "common/NiTextContainer"
export default {
  name: "page-resources-validators-faq",
  metaInfo: { title: "Validators FAQ - Resources" },
  components: {
    Page,
    TextContainer
  }
}
</script>
