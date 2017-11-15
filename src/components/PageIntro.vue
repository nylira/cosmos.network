<template lang="pug">
page(title="Introduction" subtitle="Get started with an overview of Cosmos.")
  div(slot="menu")
    btn(type="link" to="/intro" value="Overview")
    btn(type="link" to="/intro/faq" value="FAQ")
    btn(type="link" to="/intro/roadmap" value="Roadmap")
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
    document.title = 'Introduction - Cosmos - Internet of Blockchains'
  }
}
</script>
