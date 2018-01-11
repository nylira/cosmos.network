<template lang="pug">
.page-faq-nav: overlay-btns
  overlay-btn(
    v-show='!faqTocVisible' @click.native='tocVisible(true)' icon='list-ol')
  overlay-btn.mobile-only(
    v-show='faqTocVisible' @click.native='tocVisible(false)' icon='times')
</template>

<script>
import PerfectScrollbar from 'perfect-scrollbar'
import watchTocClicks from 'scripts/watchTocClicks.js'
import inViewport from 'scripts/inViewport.js'
import visibleTocActivate from 'scripts/visibleTocActivate.js'
import percentageScrolling from 'scripts/percentageScrolling.js'
import OverlayBtns from 'buttons/OverlayBtns'
import OverlayBtn from 'buttons/OverlayBtn'
import { mapGetters } from 'vuex'
export default {
  name: 'page-faq-nav',
  components: {
    OverlayBtns,
    OverlayBtn
  },
  computed: {
    ...mapGetters(['faqTocVisible', 'faqElementsVisible'])
  },
  data: () => ({ ps: '' }),
  methods: {
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
      this.$store.commit('setTocVisible', { id: 'faq', visible: true })
      watchTocClicks(this.tocVisible)
      this.$store.commit('setElementsVisible', { id: 'faq',
        els: inViewport(document.querySelectorAll('h2, h3, h4, h5')) })
      percentageScrolling()
    },
    destroyToc () {
      if (this.ps) {
        this.ps.destroy()
        this.$store.commit('setTocVisible', { id: 'faq', visible: false })
      }
    }
  },
  mounted () {
    this.setTocVisOnWidth()
  },
  watch: {
    faqElementsVisible () {
      visibleTocActivate(this.faqElementsVisible)
    },
    '$route.params.locale' () {
      setTimeout(() => this.setTocVisOnWidth(), 100)
    }
  }
}
</script>
