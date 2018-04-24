<template lang="pug">
page(title="Resources" subtitle="A curated list of resources about the Cosmos Network.")
  part(title="Official")
    list-item(:to="{ name: 'whitepaper' }" title="Cosmos Whitepaper" icon="description")
    list-item(:to="{ name: 'faq' }" title="Cosmos FAQ" icon="description")
    list-item(:to="{ name: 'plan' }" title="Cosmos Fundraiser Plan" icon="description")
    list-item(:to="{ name: 'delegators' }" title="Delegators" icon="description")
    list-item(:to="{ name: 'validators-faq' }" title="Validators FAQ" icon="description")
  part(title="Third Party")
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
