<template lang="pug">
page(
  title="Validators"
  subtitle="What is a Cosmos Validator? How can you run one?"
  splash="validator")
  text-container: body-text
</template>

<script>
import BodyText from 'content/en-US/validators.md'
import Page from 'common/NiPage'
import TextContainer from 'common/NiTextContainer'
export default {
  name: 'page-validators-index',
  metaInfo: { title: 'Overview - Validators' },
  components: {
    BodyText,
    Page,
    TextContainer
  }
}
</script>
