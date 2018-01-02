<template lang="pug">
.page-whitepaper-nav: overlay-btns
  menu-locale(path='whitepaper' :langs="['en-US', 'ko', 'pt', 'zh-CN']")
  overlay-btn(
    v-show='!whitepaperTocVisible' @click.native='tocVisible(true)' icon='list-ol')
  overlay-btn.mobile-only(
    v-show='whitepaperTocVisible' @click.native='tocVisible(false)' icon='times')
  overlay-btn.print-btn(
    @click.native='download()', icon='file-pdf-o')
</template>

<script>
import PerfectScrollbar from 'perfect-scrollbar'
import watchTocClicks from 'scripts/watchTocClicks.js'
import inViewport from 'scripts/inViewport.js'
import visibleTocActivate from 'scripts/visibleTocActivate.js'
import percentageScrolling from 'scripts/percentageScrolling.js'
import MenuLocale from 'navigation/MenuLocale'
import OverlayBtns from 'buttons/OverlayBtns'
import OverlayBtn from 'buttons/OverlayBtn'
import { mapGetters } from 'vuex'
export default {
  name: 'page-whitepaper-nav',
  components: {
    MenuLocale,
    OverlayBtns,
    OverlayBtn
  },
  computed: {
    ...mapGetters(['whitepaperTocVisible', 'whitepaperElementsVisible'])
  },
  data: () => ({
    ps: ''
  }),
  methods: {
    download () {
      window.location.href = 'https://github.com/tendermint/aib-data/raw/master/pdf/cosmos-whitepaper.pdf'
    },
    setTocVisOnWidth () {
      let width = document.documentElement.clientWidth
      if (width >= 1024) {
        this.tocVisible(true)
      } else {
        this.tocVisible(false)
      }
    },
    tocVisible (value) {
      if (value) {
        document.querySelector('.minimal-toc').style.display = 'block'
        this.initToc()
      } else {
        document.querySelector('.minimal-toc').style.display = 'none'
        this.destroyToc()
      }
    },
    initToc () {
      let container = document.querySelector('.minimal-toc')
      this.ps = new PerfectScrollbar(container)
      this.$store.commit('setWhitepaperTocVisible', true)
      watchTocClicks(this.tocVisible)
      this.$store.commit('setWhitepaperElementsVisible',
        inViewport(document.querySelectorAll('h2, h3, h4, h5')))
      percentageScrolling()
    },
    destroyToc () {
      if (this.ps) {
        this.ps.destroy()
        this.$store.commit('setWhitepaperTocVisible', false)
      }
    }
  },
  mounted () {
    this.setTocVisOnWidth()
  },
  watch: {
    whitepaperElementsVisible () {
      visibleTocActivate(this.whitepaperElementsVisible)
    },
    '$route.params.locale' () {
      setTimeout(() => this.setTocVisOnWidth(), 100)
    }
  }
}
</script>
