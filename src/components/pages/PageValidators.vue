<template lang="pug">
.page
  page-menu
    router-link(to="/validators") Overview
    router-link(to="/validators/faq") FAQ
  router-view
</template>

<script>
import PageMenu from 'common/NiPageMenu'
export default {
  name: 'page-validators',
  components: {
    PageMenu
  }
}
</script>
