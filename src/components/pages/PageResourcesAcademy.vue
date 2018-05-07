<template lang="pug">
page(title="Cosmos Academy" subtitle="Participate in the Academy to learn how to build your project on the Cosmos Network.")
  div(slot="menu")
    btn(icon="school" value="Academy Curriculum" type="anchor" href="http://cosmos-academy.readthedocs.io/en/latest/" target="_blank" color="primary")
  text-container(url='https://api.github.com/repos/tendermint/aib-data/contents/md/developers-academy.md')
</template>

<script>
import Btn from "@nylira/vue-button"
import Page from "common/NiPage"
import TextContainer from "common/NiTextContainer"
export default {
  name: "page-resources-academy",
  metaInfo: { title: "Academy - Developers" },
  components: {
    Btn,
    Page,
    TextContainer
  }
}
</script>
