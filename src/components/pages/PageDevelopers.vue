<template lang="pug">
.page
  page-menu
    router-link(:to="{ name: 'developers'}") Overview
    router-link(:to="{ name: 'scaling-eth'}") Scaling ETH
    router-link(:to="{ name: 'wallet'}") Wallet Dev
    router-link(:to="{ name: 'academy'}") Academy
    // router-link(:to="{ name: 'hackatom'}") HackAtom
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
