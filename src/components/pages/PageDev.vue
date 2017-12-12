<template lang="pug">
.page
  page-menu
    router-link(to="/dev") Overview
    router-link(to="/dev/hackatom") HackAtom
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
