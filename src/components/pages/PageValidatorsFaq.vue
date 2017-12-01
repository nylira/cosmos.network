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
  components: {
    BodyText,
    Page,
    TextContainer
  },
  mounted () {
    document.title = 'Validators FAQ - Cosmos - Internet of Blockchains'
  }
}
</script>
