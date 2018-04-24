<template lang="pug">
page(
  title="Testnet Tutorial"
  subtitle="Learn how to run a validator node on the latest Cosmos testnet."
  splash="validator")
  text-container(
    url='https://api.github.com/repos/cosmos/testnet/contents/README.md')
</template>

<script>
import Page from "common/NiPage"
import TextContainer from "common/NiTextContainer"
export default {
  name: "page-validators-testnet",
  metaInfo: { title: "Testnet Tutorial - Validators" },
  components: {
    Page,
    TextContainer
  }
}
</script>
