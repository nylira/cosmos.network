<template lang="pug">
page(title="Cosmos Academy" subtitle="Participate in the Academy to learn how to build your project on the Cosmos Network.")
  div(slot="menu")
    btn(icon="code" value="Academy on GitHub" type="anchor" href="https://github.com/cosmos/cosmos-academy" target="_blank" color="primary")
  text-container(url='https://api.github.com/repos/tendermint/aib-data/contents/md/developers-academy.md?ref=peng/testnet-refactor')
</template>

<script>
import Btn from "@nylira/vue-button"
import Page from "common/NiPage"
import TextContainer from "common/NiTextContainer"
export default {
  name: "page-developers-academy",
  metaInfo: { title: "Academy - Developers" },
  components: {
    Btn,
    Page,
    TextContainer
  }
}
</script>
