<template lang="pug">
.page
  page-menu
    router-link(to="/voyager") Overview
    router-link(to="/voyager/faq") FAQ
    router-link(to="/voyager/support") Support
    a(href="https://github.com/cosmos/voyager/releases" target="_Blank")
      | Download #[i.fa.fa-github]
  router-view
</template>

<script>
import PageMenu from 'common/NiPageMenu'
export default {
  name: 'page-voyager',
  metaInfo: { title: 'Voyager' },
  components: {
    PageMenu
  }
}
</script>
