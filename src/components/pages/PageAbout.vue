<template lang="pug">
.page
  page-menu
    router-link(:to="{ name: 'about'}") Introduction
    router-link(:to="{ name: 'faq'}") FAQ
    router-link(:to="{ name: 'whitepaper'}") Whitepaper
    router-link(:to="{ name: 'team'}") Team
  router-view
</template>

<script>
import PageMenu from 'common/NiPageMenu'
export default {
  name: 'page-intro',
  metaInfo: { title: 'About' },
  components: {
    PageMenu
  }
}
</script>
