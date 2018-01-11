<template lang="pug">
.page
  page-menu
    router-link(to="/about") Introduction
    router-link(to="/about/faq") FAQ
    router-link(to="/about/whitepaper") Whitepaper
    router-link(to="/about/team") Team
    // router-link(to="/about/roadmap") Roadmap
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
