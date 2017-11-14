<template lang="pug">
page(title="Developers" subtitle="Learn how to bootstrap your blockchain with Cosmos.")
  div(slot="menu")
    btn(type="link" to="/dev" value="Overview")
    btn(type="link" to="/dev/whitepaper" value="Whitepaper")
    btn(type="link" to="/dev/hackatom" value="HackAtom")
  router-view
</template>

<script>
import {mapGetters} from 'vuex'
import Page from './common/NiPage'
import Btn from '@nylira/vue-button'
export default {
  name: 'page-intro',
  components: {
    Btn,
    Page
  },
  computed: { ...mapGetters(['links']) },
  mounted () {
    document.title = 'Developers - Cosmos - Internet of Blockchains'
  }
}
</script>
