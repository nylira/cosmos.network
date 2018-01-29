<template lang="pug">
.page
  page-menu
  .projects: .projects-container
    .eras
      .era-empty
      .era: span Synthesis
      .era: span Atomic Era
      .era: span Galactic Era
      .era: span Planetary Era
      .era: span Lunar Era
    .project
      .meta-container: .meta
        .project-title tendermint
        .project-subtitle The PoS consensus engine for Cosmos.
      card-node(v-for="n in tendermintNodes" :id="n.id" :key="n.id" :node="n")
    .project
      .meta-container: .meta
        .project-title go-wire
        .project-subtitle Go lib for encoding structures into binary &amp; JSON.
      card-node(v-for="n in gowireNodes" :id="n.id" :key="n.id" :node="n")
    .project
      .meta-container: .meta
        .project-title cosmos-sdk
        .project-subtitle Used to create the first and future Cosmos hubs.
      card-node(v-for="n in sdkNodes" :id="n.id" :key="n.id" :node="n")
    .project
      .meta-container: .meta
        .project-title cosmos-hub
        .project-subtitle The first Hub facilitates trade between zones.
      card-node(v-for="n in hubNodes" :id="n.id" :key="n.id" :node="n")
    .project
      .meta-container: .meta
        .project-title cosmos-ui
        .project-subtitle Allows creating and viewing transactions on the Hub.
      card-node(v-for="n in uiNodes" :id="n.id" :key="n.id" :node="n")
</template>

<script>
import PageMenu from 'common/NiPageMenu'
import CardNode from 'cards/CardNode'
export default {
  name: 'page-roadmap',
  metaInfo: { title: 'Roadmap' },
  components: {
    PageMenu,
    CardNode
  },
  data: () => ({
    tendermintNodes: [
      { id: 'tm-synt', title: '0.16.0', era: 'synthesis', done: true },
      { id: 'tm-atom', title: '0.17.0', era: 'atomic', done: false },
      { id: 'tm-gala', title: '0.18.0', era: 'galactic', done: false },
      { id: 'tm-plan', title: '0.19.0', era: 'plantetary', done: false },
      { id: 'tm-luna', title: '0.20.0', era: 'lunar', done: false }
    ],
    gowireNodes: [
      { id: 'gw-synt', title: '0.7.0', era: 'synthesis', done: true },
      { id: 'gw-atom', title: '0.8.0', era: 'atomic', done: false },
      { id: 'gw-gala', title: '0.9.0', era: 'galactic', done: false },
      { id: 'gw-plan', title: '0.10.0', era: 'plantetary', done: false },
      { id: 'gw-luna', title: '0.11.0', era: 'lunar', done: false }
    ],
    sdkNodes: [
      { id: 'sdk-synt', title: '0.8.0', era: 'synthesis', done: true },
      { id: 'sdk-atom', title: '0.9.0', era: 'atomic', done: false },
      { id: 'sdk-gala', title: '0.10.0', era: 'galactic', done: false },
      { id: 'sdk-plan', title: '0.11.0', era: 'plantetary', done: false },
      { id: 'sdk-luna', title: '0.12.0', era: 'lunar', done: false }
    ],
    hubNodes: [
      { id: 'hub-synt', title: '0.5.0', era: 'synthesis', done: true },
      { id: 'hub-atom', title: '0.6.0', era: 'atomic', done: false },
      { id: 'hub-gala', title: '0.7.0', era: 'galactic', done: false },
      { id: 'hub-plan', title: '0.8.0', era: 'plantetary', done: false },
      { id: 'hub-luna', title: '0.9.0', era: 'lunar', done: false }
    ],
    uiNodes: [
      { id: 'ui-synt', title: '0.3.0', era: 'synthesis', done: true },
      { id: 'ui-atom', title: '0.4.0', era: 'atomic', done: false },
      { id: 'ui-gala', title: '0.5.0', era: 'galactic', done: false },
      { id: 'ui-plan', title: '0.6.0', era: 'plantetary', done: false },
      { id: 'ui-luna', title: '0.7.0', era: 'lunar', done: false }
    ]
  }),
  mounted () {
  }
}
</script>

<style scoped lang="stylus">
@import '~variables'

.projects
  max-width 100vw
  overflow-x scroll

.projects-container
  min-width 50rem

.project
.eras
  display flex
  flex-flow row nowrap

  > div
    flex 1
    display flex
    align-items center
    min-height 4rem
    border-right 1px solid bc-dim

  .era-empty
  .meta-container
    flex 3rem

  .meta
    padding 1rem

  .project-title
    font-weight 500

  .project-subtitle
    color dim
    font-size xs

  .era
    font-size sm
    text-align center
    justify-content center

.eras
  .era
    text-transform uppercase
    font-weight 500
</style>

