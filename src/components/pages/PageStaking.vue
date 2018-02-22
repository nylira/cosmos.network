<template lang="pug">
.page
  page-menu
    router-link(to="/staking") Overview
    router-link(to="/staking/validators") Validators
    router-link(to="/staking/validators-faq") Validators FAQ
    router-link(to="/staking/delegators") Delegators
  router-view
</template>

<script>
import PageMenu from 'common/NiPageMenu'
export default {
  name: 'page-staking',
  metaInfo: { title: 'Staking' },
  components: {
    PageMenu
  }
}
</script>
