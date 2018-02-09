<template lang="pug">
.page
  .overall-progress
    .overall-progress__outer
      .overall-progress__inner(:style="overallProgressStyle")
    .overall-progress__label
      .label__key Roadmap to Launch
      .label__value {{ overallProgressPercent }}% #[span.desktop-inline Complete]

  .projects-container: .projects

    .project.project-gui
      .project-header
        .project-title Cosmos Hub
        img.project-logo(src="~assets/images/roadmap/cosmos-hub.png")
        .project-progress
          .project-progress__outer
            .project-progress__inner(:style="hubProgressStyle")
          .project-progress__label {{ hubProgressPercent }}% #[span.desktop-inline Complete]
      .project-nodes
        card-node(v-for="n in nodes.hub" :key="n.id" :node="n")

    .project.project-sdk
      .project-header
        .project-title Cosmos SDK
        img.project-logo(src="~assets/images/roadmap/cosmos-sdk.png")
        .project-progress
          .project-progress__outer
            .project-progress__inner(:style="sdkProgressStyle")
          .project-progress__label {{ sdkProgressPercent }}% #[span.desktop-inline Complete]
      .project-nodes
        card-node(v-for="n in nodes.sdk" :key="n.id" :node="n")

    .project.project-tmc
      .project-header
        .project-title Tendermint
        img.project-logo(src="~assets/images/roadmap/tendermint-core.png")
        .project-progress
          .project-progress__outer
            .project-progress__inner(:style="tmcProgressStyle")
          .project-progress__label {{ tmcProgressPercent }}% #[span.desktop-inline Complete]
      .project-nodes
        card-node(v-for="n in nodes.tmc" :key="n.id" :node="n")

    .project.project-gui
      .project-header
        .project-title Cosmos UI
        img.project-logo(src="~assets/images/roadmap/cosmos-ui.png")
        .project-progress
          .project-progress__outer
            .project-progress__inner(:style="guiProgressStyle")
          .project-progress__label {{ guiProgressPercent }}% #[span.desktop-inline Complete]
      .project-nodes
        card-node(v-for="n in nodes.gui" :key="n.id" :node="n")
</template>

<script>
import { mapGetters } from 'vuex'
import PageMenu from 'common/NiPageMenu'
import CardNode from 'cards/CardNode'
export default {
  name: 'page-roadmap',
  metaInfo: { title: 'Roadmap' },
  components: {
    PageMenu,
    CardNode
  },
  computed: {
    ...mapGetters(['roadmap']),
    nodes () {
      if (this.roadmap) {
        return this.roadmap.nodes
      } else {
        return {
          hub: [],
          sdk: [],
          tmc: [],
          gui: []
        }
      }
    },
    hubProgressPercent () { return this.projectProgress(this.nodes.hub) },
    hubProgressStyle () { return { width: this.hubProgressPercent + '%' } },
    sdkProgressPercent () { return this.projectProgress(this.nodes.sdk) },
    sdkProgressStyle () { return { width: this.sdkProgressPercent + '%' } },
    tmcProgressPercent () { return this.projectProgress(this.nodes.tmc) },
    tmcProgressStyle () { return { width: this.tmcProgressPercent + '%' } },
    guiProgressPercent () { return this.projectProgress(this.nodes.gui) },
    guiProgressStyle () { return { width: this.guiProgressPercent + '%' } },
    overallProgressPercent () {
      let value = this.hubProgressPercent + this.sdkProgressPercent
      value = value + this.tmcProgressPercent + this.guiProgressPercent
      return Math.round(value / 4)
    },
    overallProgressStyle () { return { width: this.overallProgressPercent + '%' } }
  },
  methods: {
    projectProgress (nodes) {
      if (nodes) {
        let totalNodes = nodes.length
        let doneNodes = nodes.filter(n => n.date !== '').length
        return Math.round(doneNodes / totalNodes * 100)
      } else {
        return 0
      }
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~variables'

op-height = 2rem
.overall-progress
  height op-height
  position relative

.overall-progress__label
  position absolute
  top 0
  left 0
  width 100%

  height op-height

  display flex
  align-items center
  justify-content space-between
  padding 0 1rem

  font-size x
  text-align center
  line-height op-height
  color bright
  font-weight 500

  .label__value
    color accent

.overall-progress__outer
.overall-progress__inner
  width 100%
  height op-height
  position absolute
  top 0
  left 0
.overall-progress__outer
  background app-fg
.overall-progress__inner
  background bc
  border-right 0.25rem solid accent

pp-height = 1rem
.project-progress
  height pp-height
  position relative

.project-progress__label
  position absolute
  top 0
  left 50%

  width 3rem
  margin-left -1.5rem

  font-size xs
  font-weight 500
  color bright

  display flex
  align-items center
  justify-content center
  span
    padding-left 0.25rem

.project-progress__outer
.project-progress__inner
  width 100%
  height pp-height
  position absolute
  top 0
  left 0
.project-progress__outer
  background bc
.project-progress__inner
  background accent

.projects-container
  display flex
  align-items center
  justify-content center

.projects
  display flex
  flex-flow row nowrap
  width 100%
  max-width 1024px
  padding 0.25rem 0.25rem 2rem
  border-bottom 0.25rem solid app-fg

.project
  flex 1
  padding 0.25rem

.project-header
  margin 0 auto 0.5rem
  max-width 12rem

.project-title
  text-align center
  font-size sm
  color bright
  font-weight 500
  line-height 1.5rem
  background app-fg
  display none

.project-logo
  width 100%
  border 1px solid bc-dim
  border-bottom none
  display block

.project-nodes
  display flex
  flex-flow column-reverse nowrap

@media screen and (min-width: 414px)
  .overall-progress
  .overall-progress__inner
  .overall-progress__outer
  .overall-progress__label
    height 2.5rem

@media screen and (min-width: 768px)
  .overall-progress
  .overall-progress__inner
  .overall-progress__outer
  .overall-progress__label
    height 3rem
    font-size lg
    margin-bottom 1rem

  .project-progress
  .project-progress__inner
  .project-progress__outer
  .project-progress__label
    height 1.5rem
  .project-progress__label
    font-size sm

  .projects
    padding 0.5rem 0.5rem 3rem

  .project
    padding 0.5rem

  .project-header
    margin-bottom 2rem

  .project-title
    font-size x
    line-height 3rem
</style>
