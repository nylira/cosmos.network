<template lang="pug">
page(title="Launch Roadmap")
  div(slot="subtitle") Launch isn't a binary event&mdash;it's already begun. We iterate on our code. Then we launch again. Each #[a(href="https://explorecosmos.network" target="_blank") test launch] gets us closer to mainnet. Follow our interstellar voyage #[a(href="https://blog.cosmos.network" target="_blank") on the blog.]
  div(slot="menu"): btn(icon="chat" value="Community Chat" type="anchor" href="https://riot.im/app/#/group/+cosmos:matrix.org" target="_blank" color="primary")
  .ms-labels
    .ms-label.h5 Milestone
    .ms-label.ms-label--date.h5 Date
    .ms-label.ms-label--testnet.h5 Network
  card-milestone(
    v-for="milestone in interchainMilestones"
    :key="milestone.slug"
    :milestone="milestone"
  )
  .ms-notice.h5 The following milestones will require voting by on-chain governance.
  card-milestone(
    v-for="milestone in communityMilestones"
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
    interchainMilestones() {
      if (this.roadmap) {
        return this.roadmap.milestones.filter(m => !m.governance)
      } else {
        return []
      }
    },
    communityMilestones() {
      if (this.roadmap) {
        return this.roadmap.milestones.filter(m => m.governance)
      } else {
        return []
      }
    }
  },
  data: () => ({}),
  methods: {},
  mounted() {
    this.$store.dispatch("initializeMilestones")
  }
}
</script>

<style scoped lang="stylus">
@import '~variables'

.milestones
  max-width 64rem
  margin: 0 auto

.ms-labels
  display none

.ms-notice
  border 1px solid var(--accent)
  padding 0.75rem 1rem
  margin 0 1rem

@media screen and (min-width: 1024px)
  .ms-notice
    margin 3rem 0
  .ms-labels
    display flex
    justify-content space-between
    align-items center
    background var(--app-fg)

  .ms-label
    flex 0 0 40rem
    padding 0 0.75rem
    line-height 3rem

  .ms-label.ms-label--date
  .ms-label.ms-label--testnet
    flex 0 0 11rem

</style>
