<template lang="pug">
page(title="Resources" subtitle="A curated list of resources about the Cosmos Network.")
  part(title="Cosmos Network")
    list-item(:to="{ name: 'whitepaper' }" title="Cosmos Whitepaper" icon="description")
    list-item(:to="{ name: 'faq' }" title="Cosmos FAQ" icon="description")
    list-item(:to="{ name: 'plan' }" title="Cosmos Fundraiser Plan" icon="description")
  part(title="Cosmos Hub")
    list-item(:to="{ name: 'delegators' }" title="Delegators Guide" icon="description")
    list-item(:to="{ name: 'validators-faq' }" title="Validators FAQ" icon="description")
    list-item(href="https://github.com/cosmos/cosmos/raw/master/Cosmos_Token_Model.pdf" title="Cosmos Token Model (PDF)" icon="cloud_download")
</template>

<script>
import ListItem from "common/NiListItem"
import Part from "common/NiPart"
import Page from "common/NiPage"
export default {
  name: "page-resources-index",
  metaInfo: { title: "Resources" },
  components: {
    ListItem,
    Page,
    Part
  }
}
</script>
