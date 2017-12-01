<template>
  <toc-page :toc-visible="faqTocVisible">
    <page-nav slot="nav"></page-nav>
      <text-content></text-content>
  </toc-page>
</template>

<script>
import { mapGetters } from 'vuex'
import PageNav from './PageFaqNav'
import TextContent from '../../content/en-US/FAQ.md'
import TocPage from './TocPage'
export default {
  name: 'page-faq',
  components: {
    PageNav,
    TextContent,
    TocPage
  },
  computed: {
    ...mapGetters(['faqTocVisible'])
  },
  data () {
    return {
      metadata: {
        title: 'FAQ',
        desc: 'Read the answers to frequently asked questions about Cosmos: The Internet of Blockchains.'
      }
    }
  },
  head: {
    title () {
      return {
        inner: this.metadata.title,
        separator: '-',
        complement: 'Cosmos - Internet of Blockchains'
      }
    },
    meta () {
      return [
        { n: 'description', c: this.metadata.desc },
        { n: 'twitter:title', c: this.metadata.title },
        { n: 'twitter:description', c: this.metadata.desc },
        { p: 'og:title', c: this.metadata.title },
        { p: 'og:description', c: this.metadata.desc }
      ]
    }
  },
  mounted () {
    if (document.documentElement.clientWidth < 1024) {
      this.$store.commit('setFaqTocVisible', false)
    }
  }
}
</script>
