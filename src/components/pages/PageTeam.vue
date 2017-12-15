<template lang="pug">
.page
  page-menu
    router-link(to="/team") Team
    a(href="https://tendermint.com/careers") Careers #[i.fa.fa-external-link]
  router-view
</template>

<script>
import PageMenu from 'common/NiPageMenu'
export default {
  name: 'page-about',
  components: {
    PageMenu
  }
}
</script>
