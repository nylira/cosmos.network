<template lang='pug'>
#section-what.section-home.section-what: .section-home__container
  .section-home__header Welcome to Cosmos.
  .section-home__main
    .section-home__text
      .section-home__p Cosmos is a decentralized network of independent parallel blockchains, each powered by classical BFT consensus algorithms like #[a(href="https://tendermint.com" target="_blank") Tendermint].
      .section-home__p The first blockchain in the Cosmos Network is the Cosmos Hub, whose native token is the Atom. Cosmos is a permissionless network, meaning that anybody can build a blockchain on it.
    .section-home__diagrams
      .cosmos-diagram
        .cosmos-diagram__image: img.cosmos-diagram__img(src="~assets/images/diagrams/diagram-hub.png")
        .cosmos-diagram__label A Hub is a blockchain that enables Zones to work together.
      .cosmos-diagram
        .cosmos-diagram__image: img.cosmos-diagram__img(src="~assets/images/diagrams/diagram-zones.png")
        .cosmos-diagram__label Zones are sovereign blockchains that exchange value through Hubs. They can be private or public.
      .cosmos-diagram
        .cosmos-diagram__image: img.cosmos-diagram__img(src="~assets/images/diagrams/diagram-validators.png")
        .cosmos-diagram__label Validators are responsible for committing new blocks and ensuring that consensus is reached.
      .cosmos-diagram
        .cosmos-diagram__image: img.cosmos-diagram__img(src="~assets/images/diagrams/diagram-atoms.png")
        .cosmos-diagram__label Atoms are a license for holders to stake and vote on the Cosmos Hub.
    .section-home__p: router-link(:to="{ name: 'about'}") Learn everything about the Cosmos Network.
</template>

<script>
export default {
  name: 'section-what'
}
</script>

<style lang="stylus">
@require '~variables'

.section-home
  background linear-gradient(top, app-bg, app-fg)

.section-home__container
  padding 3rem 1rem
  max-width 1024px
  margin 0 auto
  overflow hidden

.section-home__header
.section-home__diagrams
  margin-bottom 1.5rem

  &:last-child
    margin-bottom 0

.section-home__header
  font-size h2
  color bright
  font-weight 500
  margin-bottom 1.5rem
  text-align center

.section-home__text
  max-width 34rem
  margin-left auto
  margin-right auto

.section-home__p
  margin-bottom 1.5rem
  max-width: 34rem;
  margin-left: auto;
  margin-right: auto;
  &:last-child
    margin-bottom 0

.section-home__diagrams
  background app-bg

.cosmos-diagram
  display flex
  flex-flow row nowrap

.cosmos-diagram__image
  flex 1
  padding 1rem

.cosmos-diagram__img
  max-width 8rem

.cosmos-diagram__label
  flex 2
  padding 1rem 1rem 1rem 0
  display flex
  align-items center
  font-size sm

@media screen and (min-width: 375px)
  .cosmos-diagram__label
    padding 1rem

@media screen and (min-width: 768px)
  .section-home__container
    padding 5rem 1rem

  .section-home__text
    margin-bottom 4rem

  .section-home__header
  .section-home__diagrams
    margin-bottom 2rem

  .section-home__diagrams
    display flex
    flex-flow row nowrap
    padding 2rem

  .cosmos-diagram
    flex 1
    flex-flow column nowrap
    display block

  .cosmos-diagram__image
    display flex
    align-items center
    justify-content center

  .cosmos-diagram__label
    flex 1
    text-align center
    align-items flex-start
    padding-bottom 0

@media screen and (min-width: 1024px)
  .section-home__diagrams
    margin-left 1rem
    margin-right 1rem
</style>
