<template lang="pug">
toc-page(:toc-visible="whitepaperTocVisible")
  nav-contents(slot="nav" text-id="whitepaper")
</template>

<script>
import { mapGetters } from "vuex"
import NavContents from "navigation/NavContents"
import PageMenu from "common/NiPageMenu"
import TocPage from "navigation/TocPage"
export default {
  name: "page-resources-whitepaper",
  metaInfo: { title: "Whitepaper - Resources" },
  components: {
    NavContents,
    PageMenu,
    TocPage
  },
  computed: { ...mapGetters(["whitepaperTocVisible"]) },
  mounted() {
    if (document.documentElement.clientWidth >= 1024) {
      this.$store.commit("setTocVisible", { id: "whitepaper", visible: true })
    }
  }
}
</script>
