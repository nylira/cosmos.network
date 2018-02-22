<template lang="pug">
toc-page(:toc-visible="whitepaperTocVisible")
  nav-contents(slot="nav" text-id="whitepaper")
  text-container(v-if="$route.params.locale === 'ko'")
  text-container(v-else-if="$route.params.locale === 'pt'")
  text-container(v-else-if="$route.params.locale === 'zh-CN'")
  text-container(v-else)
</template>

<script>
import { mapGetters } from 'vuex'
import NavContents from 'navigation/NavContents'
import TextContainer from 'common/NiTextContainer'
import TocPage from 'navigation/TocPage'
export default {
  name: 'page-about-whitepaper',
  metaInfo: { title: 'Whitepaper - About' },
  components: {
    NavContents,
    TextContainer,
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
