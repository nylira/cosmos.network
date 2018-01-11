<template lang="pug">
toc-page(:toc-visible="faqTocVisible")
  nav-contents(slot="nav" text-id="whitepaper")
  text-en-us
</template>

<script>
import { mapGetters } from 'vuex'
import NavContents from 'navigation/NavContents'
import TextEnUs from 'content/en-US/FAQ.md'
import TocPage from 'navigation/TocPage'
export default {
  name: 'page-about-faq',
  metaInfo: { title: 'FAQ - About' },
  components: {
    NavContents,
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
