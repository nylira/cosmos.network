<template lang="pug">
page(
  title="Validator FAQ"
  subtitle="Frequently asked questions about Cosmos Validators."
  splash="validator")
  text-container(
    url='https://api.github.com/repos/cosmos/cosmos/contents/VALIDATORS_FAQ.md')
</template>

<script>
import Page from 'common/NiPage'
import TextContainer from 'common/NiTextContainer'
export default {
  name: 'page-staking-validators-faq',
  metaInfo: { title: 'Validators FAQ - Staking' },
  components: {
    Page,
    TextContainer
  }
}
</script>
