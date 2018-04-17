<template lang="pug">
.page
  page-menu
    router-link(:to="{name: 'staking'}") Overview
    router-link(:to="{name: 'validators'}") Validators
    router-link(:to="{name: 'validators-faq'}") Validators FAQ
    router-link(:to="{name: 'delegators'}") Delegators
  router-view
</template>

<script>
import PageMenu from "common/NiPageMenu"
export default {
  name: "page-staking",
  metaInfo: { title: "Staking" },
  components: {
    PageMenu
  }
}
</script>
