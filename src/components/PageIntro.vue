<template lang="pug">
page(title="Introduction" subtitle="Get started with an overview of Cosmos.")
  // toolbar desktop
  div(slot="menu")
    btn(type="link" to="/intro" value="Overview")
    btn(type="link" to="/intro/faq" value="FAQ")
    btn(type="link" to="/intro/roadmap" value="Roadmap")

  // toolbar mobile
  tool-bar
    router-link(to='/intro' exact) Overview
    router-link(to='/intro/faq' exact) FAQ
    router-link(to='/intro/roadmap' exact) Roadmap

  router-view
</template>

<script>
import {mapGetters} from 'vuex'
import Page from './common/NiPage'
import Btn from '@nylira/vue-button'
import ToolBar from './common/NiToolBar'
export default {
  name: 'page-intro',
  components: {
    Btn,
    Page,
    ToolBar
  },
  computed: { ...mapGetters(['links']) },
  mounted () {
    document.title = 'Introduction - Cosmos - Internet of Blockchains'
  }
}
</script>
