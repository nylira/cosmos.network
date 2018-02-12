<template lang="pug">
.page
  page-menu
    router-link(to="/wallet") Overview
    router-link(to="/wallet/faq") FAQ
    router-link(to="/wallet/support") Support
    a(href="https://github.com/cosmos/cosmos-ui/releases" target="_Blank") Download
  router-view
</template>

<script>
import PageMenu from 'common/NiPageMenu'
export default {
  name: 'page-wallet',
  metaInfo: { title: 'Wallet' },
  components: {
    PageMenu
  }
}
</script>
