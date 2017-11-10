<template lang="pug">
page(title="Logo Assets")
  div(slot="subtitle")
    p We have an open approach towards the use of the Cosmos logo that is community-friendly and supports the greater Cosmos and crypto ecosystem.
    p All current Cosmos logos are under Creative Commons attribution 3.0.
  article-body
    h2 Visual Identity Guide
    p Please read and follow the Cosmos Visual Identity Guide.
    a(:href="links.cosmos.assets.visualIdentity") Download Guide (741 KB)
    h2 Download Logo Assets
    p Download the Cosmos Logo Assets to get access to our logo in vector, alpha, and high resolution formats.
    a(:href="links.cosmos.assets.logoAssets") Download Assets (3.5 MB)
</template>

<script>
import {mapGetters} from 'vuex'
import Page from './common/NiPage'
import ArticleBody from '@nylira/vue-article-body'
export default {
  name: 'page-assets',
  components: {
    ArticleBody,
    Page
  },
  computed: { ...mapGetters(['links']) },
  mounted () {
    document.title = 'Logo - Cosmos - Internet of Blockchains'
  }
}
</script>
