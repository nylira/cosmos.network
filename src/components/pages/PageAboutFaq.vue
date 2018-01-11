<template lang="pug">
toc-page(:toc-visible='faqTocVisible')
  nav-about-faq(slot='nav')
  text-en-us
</template>

<script>
import { mapGetters } from 'vuex'
import NavAboutFaq from 'navigation/NavAboutFaq'
import TextEnUs from 'content/en-US/FAQ.md'
import TocPage from 'navigation/TocPage'
export default {
  name: 'page-intro-faq',
  metaInfo: { title: 'FAQ - About' },
  components: {
    NavAboutFaq,
    TextEnUs,
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
