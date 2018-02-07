<template lang="pug">
.page
  page-menu
  .projects-container: .projects
    .project
      .project-header
        .project-title Gaia Testnet
      card-node(v-for="n in nodes.hub" :id="n.id" :key="n.id" :node="n")
    .project
      .project-header
        .project-title Cosmos SDK
      card-node(v-for="n in nodes.sdk" :id="n.id" :key="n.id" :node="n")
    .project
      .project-header
        .project-title Tendermint
      card-node(v-for="n in nodes.tmc" :id="n.id" :key="n.id" :node="n")
    .project
      .project-header
        .project-title Cosmos UI
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
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~variables'

.projects-container
  display flex
  align-items center
  justify-content center

.projects
  display flex
  flex-flow row nowrap
  width 100%
  max-width 1024px
  padding 0.25rem

.project
  flex 1
  padding 0.25rem

  .project-header
    margin 0 0 0.5rem
    background bc-
    line-height 1.5rem

  .project-title
    text-align center
    font-size sm
    color bright
    font-weight 500
</style>
