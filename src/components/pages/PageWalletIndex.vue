<template lang="pug">
page(title="Wallet Overview" subtitle="Work in progress.")
</template>

<script>
import Page from 'common/NiPage'
import TextContainer from 'common/NiTextContainer.vue'
export default {
  name: 'page-wallet-index',
  metaInfo: { title: 'Wallet Overview' },
  components: {
    Page,
    TextContainer
  }
}
</script>

<style lang="stylus">
@require '~variables'
</style>
