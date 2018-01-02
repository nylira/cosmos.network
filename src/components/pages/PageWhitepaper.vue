<template lang="pug">
toc-page(:toc-visible='whitepaperTocVisible')
  page-nav(slot='nav')
  text-en-us

// page(title="Whitepaper" subtitle="Read the original Cosmos whitepaper.")
  div(slot="menu"): btn(@click.native="download()" icon="print" value="Download PDF")
  page-nav
  text-container
    text-ko(v-if="$route.params.locale === 'ko'")
    text-pt(v-else-if="$route.params.locale === 'pt'")
    text-zh-cn(v-else-if="$route.params.locale === 'zh-CN'")
    text-en-us(v-else='')
</template>

<script>
import { mapGetters } from 'vuex'
import Btn from '@nylira/vue-button'
import Page from 'common/NiPage'
import Part from 'common/NiPart'
import PageNav from 'navigation/NavWhitepaper'
import TextContainer from 'common/NiTextContainer'
import TextEnUs from 'content/en-US/WHITEPAPER.md'
import TextKo from 'content/ko/WHITEPAPER.md'
import TextPt from 'content/pt/WHITEPAPER.md'
import TextZhCn from 'content/zh-CN/WHITEPAPER.md'
import TocPage from 'navigation/TocPage'
export default {
  components: {
    Btn,
    PageNav,
    Page,
    Part,
    TextContainer,
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

<style lang="stylus">
@require '~variables'

.minimal-toc
  display none
</style>
