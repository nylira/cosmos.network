<template lang="pug">
// toc-page(:toc-visible='whitepaperTocVisible')
  //page-nav(slot='nav')
part(title=" ")
  div(slot="menu"): a(@click.native="download()") Download PDF

  text-container
    text-ko(v-if="$route.params.locale === 'ko'")
    text-pt(v-else-if="$route.params.locale === 'pt'")
    text-zh-cn(v-else-if="$route.params.locale === 'zh-CN'")
    text-en-us(v-else='')
</template>

<script>
import { mapGetters } from 'vuex'
import TextContainer from './common/NiTextContainer'
import Part from './common/NiPart'
import PageNav from './PageWhitepaperNav'
import TextEnUs from '../../content/en-US/WHITEPAPER.md'
import TextKo from '../../content/ko/WHITEPAPER.md'
import TextPt from '../../content/pt/WHITEPAPER.md'
import TextZhCn from '../../content/zh-CN/WHITEPAPER.md'
// import TocPage from './TocPage'
export default {
  components: {
    TextContainer,
    PageNav,
    Part,
    TextEnUs,
    TextKo,
    TextPt,
    TextZhCn
    // TocPage
  },
  computed: {
    ...mapGetters(['whitepaperTocVisible'])
  },
  methods: {
    download () {
      window.location.href = 'https://github.com/tendermint/aib-data/raw/master/pdf/cosmos-whitepaper.pdf'
    }
  }
  /* ,
  mounted () {
    if (document.documentElement.clientWidth >= 1024) {
      this.$store.commit('setWhitepaperTocVisible', true)
    }
  }
  */
}
</script>

<style lang="stylus">
@require '~@/styles/variables.styl'

.minimal-toc
  display none
</style>
