<template lang="pug">
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
import TextEnUs from 'content/en-US/WHITEPAPER.md'
import TextKo from 'content/ko/WHITEPAPER.md'
import TextPt from 'content/pt/WHITEPAPER.md'
import TextZhCn from 'content/zh-CN/WHITEPAPER.md'
import TocPage from 'navigation/TocPage'
export default {
  name: 'page-about-whitepaper',
  metaInfo: { title: 'Whitepaper - About' },
  components: {
    NavContents,
    TextEnUs,
    TextKo,
    TextPt,
    TextZhCn,
    TocPage
  },
  computed: { ...mapGetters(['whitepaperTocVisible']) },
  mounted () {
    if (document.documentElement.clientWidth >= 1024) {
      this.$store.commit('setTocVisible', { id: 'whitepaper', visible: true })
    }
  }
}
</script>
