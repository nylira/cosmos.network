<template lang="pug">
page(
  title="Validators"
  subtitle="What is a Cosmos Validator? How can you run one?"
  splash="validator")
  text-container(
    url='https://api.github.com/repos/tendermint/aib-data/contents/md/staking-validators.md')
</template>

<script>
import Page from "@/components/common/NiPage"
import TextContainer from "@/components/common/NiTextContainer"
export default {
  name: "page-staking-validators",
  metaInfo: { title: "Validators - Staking" },
  components: {
    Page,
    TextContainer
  }
}
</script>
