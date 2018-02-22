<template lang="pug">
toc-page(:toc-visible="faqTocVisible")
  nav-contents(slot="nav" text-id="whitepaper")
  text-container(
    url='https://api.github.com/repos/tendermint/aib-data/contents/md/cosmos-faq.md')
</template>

<script>
import { mapGetters } from 'vuex'
import NavContents from 'navigation/NavContents'
import TextContainer from 'common/NiTextContainer'
import TocPage from 'navigation/TocPage'
export default {
  name: 'page-about-faq',
  metaInfo: { title: 'FAQ - About' },
  components: {
    NavContents,
    TextContainer,
    TocPage
  },
  computed: { ...mapGetters(['faqTocVisible']) },
  mounted () {
    if (document.documentElement.clientWidth >= 1024) {
      this.$store.commit('setTocVisible', { id: 'faq', visible: true })
    }
  }
}
</script>
