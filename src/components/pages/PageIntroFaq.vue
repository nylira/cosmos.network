<template lang="pug">
page(title="FAQ" subtitle="Frequently answered questions about Cosmos.")
  text-container: text-content
</template>

<script>
import Page from 'common/NiPage'
import TextContent from 'content/en-US/FAQ.md'
import TextContainer from 'common/NiTextContainer.vue'
export default {
  name: 'page-intro-faq',
  components: {
    Page,
    TextContainer,
    TextContent
  }
}
</script>
