<template lang="pug">
page(:title="metadata.title" :subtitle="metadata.desc")
  part(title='Questions + Answers')
    text-container: text-content
</template>

<script>
import { mapGetters } from 'vuex'
import Page from './common/NiPage'
import Part from './common/NiPart'
import TextContent from '../../content/en-US/FAQ.md'
// import ArticleBody from '@nylira/vue-article-body'
import TextContainer from './common/NiTextContainer.vue'
export default {
  name: 'page-faq',
  components: {
    Page,
    Part,
    TextContainer,
    TextContent
  },
  computed: {
    ...mapGetters(['faqTocVisible'])
  },
  data: () => ({
    metadata: {
      title: 'FAQ',
      desc: 'Answers to frequently asked questions.'
    }
  }),
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
  }
}
</script>
