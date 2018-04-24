<template lang="pug">
page(title="Resources" subtitle="Wish to learn more?")
  part(title="Official")
    list-item(:to="{ name: 'whitepaper' }" title="Cosmos Whitepaper" icon="description")
    list-item(:to="{ name: 'faq' }" title="Cosmos FAQ" icon="description")
    list-item(:to="{ name: 'plan' }" title="Cosmos Fundraiser Plan" icon="description")
    list-item(:to="{ name: 'delegators' }" title="Delegators" icon="description")
    list-item(:to="{ name: 'validators-faq' }" title="Validators FAQ" icon="description")
  part(title="Third Party")
</template>

<script>
import Page from "common/NiPage"
import ListItem from "common/NiListItem"
import Part from "common/NiPart"
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
