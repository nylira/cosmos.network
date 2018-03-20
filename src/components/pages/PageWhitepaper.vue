<template lang="pug">
.page
  page-menu
    a(href="assets/cosmos-whitepaper.pdf" target="_blank") Download PDF #[i.material-icons file_download]
  toc-page(:toc-visible="whitepaperTocVisible")
    nav-contents(slot="nav" text-id="whitepaper")
    text-ko(v-if="$route.params.locale === 'ko'")
    text-pt(v-else-if="$route.params.locale === 'pt'")
    text-zh-cn(v-else-if="$route.params.locale === 'zh-CN'")
    text-en-us(v-else)
</template>

<script>
import { mapGetters } from 'vuex'
import NavContents from 'navigation/NavContents'
import PageMenu from 'common/NiPageMenu'
import TextEnUs from 'content/whitepaper.md'
import TextKo from 'content/whitepaper-ko.md'
import TextPt from 'content/whitepaper-pt.md'
import TextZhCn from 'content/whitepaper-zh-CN.md'
import TocPage from 'navigation/TocPage'
export default {
  name: 'page-about-whitepaper',
  metaInfo: { title: 'Whitepaper - About' },
  components: {
    NavContents,
    PageMenu,
    TextEnUs,
    TextKo,
    TextPt,
    TextZhCn,
    TocPage
  },
  computed: { ...mapGetters(['whitepaperTocVisible']) },
  methods: {
    toggleToc () {
      let width = document.documentElement.clientWidth
      console.log('resizing!', width)
      if (document.documentElement.clientWidth >= 1024) {
        console.log('desktop mode!')
        this.$store.commit('setTocVisible', { id: 'whitepaper', visible: true })
      } else {
        this.$store.commit('setTocVisible', { id: 'whitepaper', visible: false })
        console.log('mobile mode!')
      }
    }
  },
  mounted () {
    window.addEventListener('resize', this.toggleToc)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.toggleToc)
  }
}
</script>

