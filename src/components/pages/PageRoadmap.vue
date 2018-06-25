<template lang="pug">
page(title="Roadmap to 1,000,000 Blocks")
  div(slot="subtitle") Launch is not a binary event&mdash;it's already started. #[a(href="https://explorecosmos.network" target="_blank") Each testnet] gets us that much closer to mainnet. After each launch, we review the failures and upgrade the codebase. Then we launch again. Follow our interstellar voyage #[a(href="https://blog.cosmos.network" target="_blank") on the blog.]
  div(slot="menu"): btn(icon="chat" value="Community Chat" type="anchor" href="https://riot.im/app/#/group/+cosmos:matrix.org" target="_blank" color="primary")
  part(title="Milestones")
    card-milestone(
      v-for="milestone in milestones"
      :key="milestone.slug"
      :milestone="milestone"
    )
</template>

<script>
import { mapGetters } from "vuex"
import Btn from "@nylira/vue-button"
import Part from "common/NiPart"
import Page from "common/NiPage"
import PageMenu from "common/NiPageMenu"
import CardMilestone from "cards/CardMilestone"
export default {
  name: "page-roadmap",
  metaInfo: { title: "Roadmap" },
  components: {
    Btn,
    CardMilestone,
    Page,
    PageMenu,
    Part
  },
  computed: {
    ...mapGetters(["roadmap"]),
    milestones() {
      if (this.roadmap) {
        return this.roadmap.milestones
      } else {
        return []
      }
    }
  },
  data: () => ({}),
  methods: {},
  mounted() {
    this.$store.commit("initializeMilestones")
  }
}
</script>

<style scoped lang="stylus">
@import '~variables'

.milestones
  max-width 64rem
  margin: 0 auto
</style>
