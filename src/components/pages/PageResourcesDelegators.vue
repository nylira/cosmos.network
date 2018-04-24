<template lang="pug">
page(
  title="Delegators"
  subtitle="Discover how to earn revenue by staking your atoms to a validator with Cosmos Voyager."
  splash="validator")
  text-container(
    url='https://api.github.com/repos/tendermint/aib-data/contents/md/resources-delegators.md?ref=peng/testnet-refactor')
</template>

<script>
import Page from "common/NiPage"
import TextContainer from "common/NiTextContainer"
export default {
  name: "page-staking-delegators",
  metaInfo: { title: "Delegators - Resources" },
  components: {
    Page,
    TextContainer
  }
}
</script>
