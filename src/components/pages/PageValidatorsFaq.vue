<template lang="pug">
page(
  title="Validator FAQ"
  subtitle="Frequently asked questions about Cosmos Validators."
  splash="validator")
  text-container: body-text
</template>

<script>
import BodyText from 'content/en-US/validators-faq.md'
import Page from 'common/NiPage'
import TextContainer from 'common/NiTextContainer'
export default {
  name: 'page-validators-faq',
  metaInfo: { title: 'FAQ - Validators' },
  components: {
    BodyText,
    Page,
    TextContainer
  }
}
</script>
