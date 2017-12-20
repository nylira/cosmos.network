<template lang="pug">
.page
  page-menu
    // router-link(to="/developers") Overview
    // router-link(to="/developers/hackatom") HackAtom
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
    document.title = 'Developers - Cosmos - Internet of Blockchains'
  }
}
</script>
