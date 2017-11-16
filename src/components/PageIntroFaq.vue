<template lang="pug">
part(title=' '): text-container: text-content
</template>

<script>
import Part from './common/NiPart'
import TextContent from '../../content/en-US/FAQ.md'
import TextContainer from './common/NiTextContainer.vue'
export default {
  name: 'page-intro-faq',
  components: {
    Part,
    TextContainer,
    TextContent
  }
}
</script>
