<template lang="pug">
.page
  page-menu
  page(title="Security" subtitle="Security is a core value at Cosmos & Tendermint. Learn how earn bounties by reporting vulnerabilities.")
    text-container: text-content
</template>

<script>
import Page from 'common/NiPage'
import PageMenu from 'common/NiPageMenu'
import TextContent from 'content/en-US/security.md'
import TextContainer from 'common/NiTextContainer.vue'
export default {
  name: 'page-intro-faq',
  components: {
    Page,
    PageMenu,
    TextContainer,
    TextContent
  }
}
</script>
