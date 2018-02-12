<template lang="pug">
.page
  page-menu
    router-link(to="/developers") Overview
    router-link(to="/developers/academy") Academy
    router-link.disabled(to="/developers/hackatom") HackAtom
  router-view
</template>

<script>
import PageMenu from 'common/NiPageMenu'
export default {
  name: 'page-developers',
  metaInfo: { title: 'Developers' },
  components: {
    PageMenu
  }
}
</script>
