<template lang="pug">
.page
  page-menu
  page(title="Security" subtitle="Security is a core value at Cosmos & Tendermint. Learn how to earn bounties by reporting vulnerabilities.")
    text-container(url='https://raw.githubusercontent.com/tendermint/aib-data/master/md/security.md')
</template>

<script>
import Page from 'common/NiPage'
import PageMenu from 'common/NiPageMenu'
import TextContainer from 'common/NiTextContainer.vue'
export default {
  name: 'page-security',
  components: {
    Page,
    PageMenu,
    TextContainer
  }
}
</script>
