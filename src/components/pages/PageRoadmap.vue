<template lang="pug">
.page
  page-menu
  .projects-container: .projects
    .project
      .project-header
        .project-title Cosmos Hub
        .project-progress
          .project-progress__outer
            .project-progress__inner(:style="hubProgressStyle")
          .project-progress__label {{ hubProgressPercent }}%
      .project-nodes
        card-node(v-for="n in nodes.hub" :id="n.id" :key="n.id" :node="n")

    .project
      .project-header
        .project-title Cosmos SDK
        .project-progress
          .project-progress__outer
            .project-progress__inner(:style="sdkProgressStyle")
          .project-progress__label {{ sdkProgressPercent }}%
      .project-nodes
        card-node(v-for="n in nodes.sdk" :id="n.id" :key="n.id" :node="n")

    .project
      .project-header
        .project-title Tendermint
        .project-progress
          .project-progress__outer
            .project-progress__inner(:style="tmcProgressStyle")
          .project-progress__label {{ tmcProgressPercent }}%
      .project-nodes
        card-node(v-for="n in nodes.tmc" :id="n.id" :key="n.id" :node="n")

    .project
      .project-header
        .project-title Cosmos UI
        .project-progress
          .project-progress__outer
            .project-progress__inner(:style="guiProgressStyle")
          .project-progress__label {{ guiProgressPercent }}%
      .project-nodes
        card-node(v-for="n in nodes.gui" :id="n.id" :key="n.id" :node="n")
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
      return this.roadmap.nodes
    },
    hubProgressPercent () { return this.projectProgress(this.roadmap.nodes.hub) },
    hubProgressStyle () { return { width: this.hubProgressPercent + '%' } },
    sdkProgressPercent () { return this.projectProgress(this.roadmap.nodes.sdk) },
    sdkProgressStyle () { return { width: this.sdkProgressPercent + '%' } },
    tmcProgressPercent () { return this.projectProgress(this.roadmap.nodes.tmc) },
    tmcProgressStyle () { return { width: this.tmcProgressPercent + '%' } },
    guiProgressPercent () { return this.projectProgress(this.roadmap.nodes.gui) },
    guiProgressStyle () { return { width: this.guiProgressPercent + '%' } }
  },
  methods: {
    projectProgress (nodes) {
      let totalNodes = nodes.length
      let doneNodes = nodes.filter(n => n.date !== '').length
      return Math.round(doneNodes / totalNodes * 100)
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~variables'

.project-progress
  height 1rem
  position relative

  .project-progress__label
    width 3rem
    position absolute
    top 0
    left 50%
    margin-left -1.5rem
    color bright
    font-weight bold

  .project-progress__outer
  .project-progress__inner
    width 100%
    height 2rem
    position absolute
    top 0
    left 0
  .project-progress__outer
    background #000
  .project-progress__inner
    background link

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

.project-nodes
  display flex
  flex-flow column-reverse nowrap

@media screen and (min-width: 768px)
  .projects
    padding 0.5rem 0.5rem 3rem

  .project
    padding 0.5rem

  .project-header
    margin-bottom 1rem

  .project-title
    font-size lg
    line-height 3rem
</style>
