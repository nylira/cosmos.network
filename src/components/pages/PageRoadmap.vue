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
      .node-container: .node#tm-synt.node--done 0.16.0
      .node-container: .node#tm-atom 0.17.0
      .node-container: .node#tm-gala 0.18.0
      .node-container: .node#tm-plan 0.19.0
      .node-container: .node#tm-luna 0.20.0
    .project
      .meta-container: .meta
        .project-title go-wire
        .project-subtitle Go lib for encoding structures into binary &amp; JSON.
      .node-container: .node#gw-synt.node--done 0.7.0
      .node-container: .node#gw-atom 0.8.0
      .node-container: .node#gw-gala 0.9.0
      .node-container: .node#gw-plan 0.10.0
      .node-container: .node#gw-luna 0.11.0
    .project
      .meta-container: .meta
        .project-title cosmos-sdk
        .project-subtitle Used to create the first and future Cosmos hubs.
      .node-container: .node#sdk-synt.node--done 0.8.0
      .node-container: .node#sdk-atom 0.9.0
      .node-container: .node#sdk-gala 0.10.0
      .node-container: .node#sdk-plan 0.11.0
      .node-container: .node#sdk-luna 0.12.0
    .project
      .meta-container: .meta
        .project-title cosmos-hub
        .project-subtitle The first Hub facilitates trade between zones.
      .node-container: .node#hub-synt.node--done 0.5.0
      .node-container: .node#hub-atom 0.6.0
      .node-container: .node#hub-gala 0.7.0
      .node-container: .node#hub-plan 0.8.0
      .node-container: .node#hub-luna 0.9.0
    .project
      .meta-container: .meta
        .project-title cosmos-ui
        .project-subtitle Allows creating and viewing transactions on the Hub.
      .node-container: .node#ui-synt.node--done 0.3.0
      .node-container: .node#ui-atom 0.4.0
      .node-container: .node#ui-gala 0.5.0
      .node-container: .node#ui-plan 0.6.0
      .node-container: .node#ui-luna 0.7.0
</template>

<script>
import PageMenu from 'common/NiPageMenu'
export default {
  name: 'page-roadmap',
  metaInfo: { title: 'Roadmap' },
  components: {
    PageMenu
  },
  mounted () {
  }
}
</script>

<style scoped lang="stylus">
@import '~variables'

.projects
  max-width 100vw
  border-right 1px solid bc
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

  .node-container, .era
    font-size sm
    text-align center
    justify-content center

.eras
  .era
    text-transform uppercase
    font-weight 500

.node
  border 2*px solid bc
  padding 1rem
  border-radius 0.25rem
  min-width 4.5rem
  position relative

  color txt

  &:after
    position absolute
    bottom -2*px
    right -2*px
    width 1rem
    height 1rem
    background bc
    border-radius 0.25rem 0 0.25rem 0

    content 'search'
    font-family 'Material Icons'
    color dim
    font-size xs

    display flex
    align-items center
    justify-content center

  &:hover
    cursor pointer
    border-color hover
    &:after
      background hover

  &.node--done
    color bright
    background alpha(link, 10%)
    border-color link
    &:after
      color bright
      background link
    &:hover
      border-color hover
      &:after
        background hover
</style>

