<template lang="pug">
page(
  title="Validators FAQ"
  subtitle="Frequently asked questions and answers about Cosmos Validators."
  splash="validator")
  text-container(
    url='https://api.github.com/repos/tendermint/aib-data/contents/md/staking-validators-faq.md')
</template>

<script>
import Page from "@/components/common/NiPage"
import TextContainer from "@/components/common/NiTextContainer"
export default {
  name: "page-staking-validators-faq",
  metaInfo: { title: "Validators FAQ - Staking" },
  components: {
    Page,
    TextContainer
  }
}
</script>
