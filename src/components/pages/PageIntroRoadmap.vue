<template lang="pug">
page(title="Roadmap" subtitle="Cosmos's roadmap for 2017-2018.")
  text-container: text-content
</template>

<script>
import Page from 'common/NiPage'
import TextContent from 'content/en-US/ROADMAP.md'
import TextContainer from 'common/NiTextContainer.vue'
export default {
  name: 'page-intro-roadmap',
  components: {
    Page,
    TextContainer,
    TextContent
  }
}
</script>
