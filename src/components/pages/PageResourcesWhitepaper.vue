<template lang="pug">
page(title="Whitepaper" subtitle="Read the current version of the Cosmos whitepaper.")
  div(slot="menu"): btn(icon="chat" value="Community Chat" type="anchor" href="https://riot.im/app/#/group/+cosmos:matrix.org" target="_blank" color="primary")
  part(title="Cosmos Whitepaper")
    list-item(href="https://github.com/tendermint/aib-data/blob/develop/md/whitepaper.md" title="Cosmos Whitepaper - English" icon="description" target="_blank")
    list-item(href="https://github.com/tendermint/aib-data/blob/develop/md/whitepaper-pt.md" title="Cosmos Whitepaper - Português" icon="description" target="_blank")
    list-item(href="https://github.com/tendermint/aib-data/blob/develop/md/whitepaper-kr.md" title="Cosmos Whitepaper - 한국어" icon="description" target="_blank")
    list-item(href="https://github.com/tendermint/aib-data/blob/develop/md/whitepaper-zh-CN.md" title="Cosmos Whitepaper - 中文" icon="description" target="_blank")
  part(title="Csomos Token Model")
    list-item(href="https://github.com/cosmos/cosmos/raw/master/Cosmos_Token_Model.pdf" title="Cosmos Token Model - English" icon="description" target="_blank")
</template>

<script>
import Btn from "@nylira/vue-button"
import ListItem from "common/NiListItem"
import Part from "common/NiPart"
import Page from "common/NiPage"
export default {
  name: "page-resources-whitepaper",
  metaInfo: { title: "Whitepaper - Resources" },
  components: {
    Btn,
    ListItem,
    Page,
    Part
  }
}
</script>
