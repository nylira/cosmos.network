<template lang="pug">
toc-page(:toc-visible='whitepaperTocVisible')
  page-nav(slot='nav')
  text-ko(v-if="$route.params.locale === 'ko'")
  text-pt(v-else-if="$route.params.locale === 'pt'")
  text-zh-cn(v-else-if="$route.params.locale === 'zh-CN'")
  text-en-us(v-else='')
// btn(@click.native="download()" icon="print" value="Download PDF")
</template>

<script>
import { mapGetters } from 'vuex'
import Page from 'common/NiPage'
import PageNav from 'navigation/NavWhitepaper'
import TextEnUs from 'content/en-US/WHITEPAPER.md'
import TextKo from 'content/ko/WHITEPAPER.md'
import TextPt from 'content/pt/WHITEPAPER.md'
import TextZhCn from 'content/zh-CN/WHITEPAPER.md'
import TocPage from 'navigation/TocPage'
export default {
  name: 'page-about-whitepaper',
  metaInfo: { title: 'Whitepaper - About' },
  components: {
    PageNav,
    Page,
    TextEnUs,
    TextKo,
    TextPt,
    TextZhCn,
    TocPage
  },
  computed: {
    ...mapGetters(['whitepaperTocVisible'])
  },
  methods: {
    download () {
      window.location.href = 'https://github.com/tendermint/aib-data/raw/master/pdf/cosmos-whitepaper.pdf'
    }
  },
  mounted () {
    if (document.documentElement.clientWidth >= 1024) {
      this.$store.commit('setWhitepaperTocVisible', true)
    }
  }
}
</script>
