<template lang="pug">
.page
  page-menu
    router-link(to="/intro") Overview
    router-link(to="/intro/faq") FAQ
    // router-link(to="/intro/roadmap") Roadmap
  router-view
</template>

<script>
import PageMenu from 'common/NiPageMenu'
export default {
  name: 'page-intro',
  components: {
    PageMenu
  },
  mounted () {
    document.title = 'Introduction - Cosmos - Internet of Blockchains'
  }
}
</script>
