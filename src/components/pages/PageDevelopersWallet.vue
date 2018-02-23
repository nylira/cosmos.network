<template lang="pug">
page(title="Wallet Design" subtitle="[Coming Soon] Learn how to develop a custom wallet for the Cosmos Network.")
  text-container(
    url='https://api.github.com/repos/tendermint/aib-data/contents/md/wallet.md')
</template>

<script>
import {mapGetters} from 'vuex'
import Page from 'common/NiPage'
import TextContainer from 'common/NiTextContainer.vue'
export default {
  name: 'page-wallet',
  metaInfo: { title: 'Wallet' },
  components: {
    Page,
    TextContainer
  },
  computed: { ...mapGetters(['links']) }
}
</script>
