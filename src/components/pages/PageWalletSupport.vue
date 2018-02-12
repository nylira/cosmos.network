<template lang="pug">
page(title="Wallet Support" subtitle="Need help with the Cosmos Wallet? Learn how to make a support ticket here, so we can best help you with the problem.")
  text-container
    h2 The Issue
</template>

<script>
import Page from 'common/NiPage'
import TextContainer from 'common/NiTextContainer.vue'
export default {
  name: 'page-wallet-support',
  metaInfo: { title: 'Wallet Support' },
  components: {
    Page,
    TextContainer
  }
}
</script>

<style lang="stylus">
@require '~variables'
</style>
