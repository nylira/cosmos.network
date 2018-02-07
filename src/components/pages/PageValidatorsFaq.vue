<template lang="pug">
page(
  title="Validator FAQ"
  subtitle="Frequently asked questions about Cosmos Validators."
  splash="validator")
  text-container(url='https://raw.githubusercontent.com/cosmos/cosmos/master/VALIDATORS_FAQ.md')
</template>

<script>
import Page from 'common/NiPage'
import TextContainer from 'common/NiTextContainer'
export default {
  name: 'page-validators-faq',
  metaInfo: { title: 'FAQ - Validators' },
  components: {
    Page,
    TextContainer
  }
}
</script>
