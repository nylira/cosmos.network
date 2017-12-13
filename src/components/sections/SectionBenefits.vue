<template lang='pug'>
.section-home.section-home-benefits: .section-home__container
  .section-home__header Why Use Cosmos?
  .section-home__main
    .cosmos-panels
      .cosmos-panel
        .cosmos-panel__image
          img.cosmos-panel__img(src="~assets/images/diagrams/panel-interoperability.png")
        .cosmos-panel__text
          .cosmos-panel__title Interoperability
          .cosmos-panel__body The Cosmos network is built to allow many independent blockchains — public and private — to communicate and exchange value with one another.
          router-link.cosmos-panel__action(to="/ibc") Learn more about interblockchain communication.
      .cosmos-panel
        .cosmos-panel__image
          img.cosmos-panel__img(src="~assets/images/diagrams/panel-interoperability.png")
        .cosmos-panel__text
          .cosmos-panel__title Scalability
          .cosmos-panel__body By leveraging interoperability and Tendermint’s Proof-Of-Stake algorithm, Cosmos provides unprecedented levels of scalability for blockchain networks.
          router-link.cosmos-panel__action(to="/scaling") Learn more about how Tendermint handles scaling.
      .cosmos-panel
        .cosmos-panel__image
          img.cosmos-panel__img(src="~assets/images/diagrams/panel-interoperability.png")
        .cosmos-panel__text
          .cosmos-panel__title Developer Friendly
          .cosmos-panel__body Cosmos was designed with developers in mind. Thanks to Tendermint’s Application Blockchain Interface, it’s easy to build blockchains in any programming language. 
          router-link.cosmos-panel__action(to="/dev") Visit the developer’s page to get started. 
</template>

<script>
export default {
  name: 'section-benefits'
}
</script>

<style lang="stylus">
@require '~variables'

.cosmos-panels
  margin 0 -1rem

.cosmos-panel
  background app-fg
  display flex
  flex-flow column nowrap
  margin 1rem
  &:first-child
    margin-top 0
  &:last-child
    margin-bottom 0

.cosmos-panel__title
.cosmos-panel__body
.cosmos-panel__action
  padding 1rem

.cosmos-panel__title + .cosmos-panel__body
  padding-top 0

.cosmos-panel__body + .cosmos-panel__action
  padding-top 0

.cosmos-panel__title
  color bright 
  font-size h2
  font-weight 500

.cosmos-panel__img
  width 100%

.cosmos-panel__action
  display block

@media screen and (min-width: 768px)
  .cosmos-panel
    flex-flow row nowrap

  .cosmos-panel__image
    flex 1

  .cosmos-panel__text
    flex 2

  .cosmos-panel__title
  .cosmos-panel__body
  .cosmos-panel__action
    padding 1.5rem

@media screen and (min-width: 1024px)
  .cosmos-panels
    display flex
    flex-flow row nowrap
    margin -1rem 0

  .cosmos-panel
    flex 1
    flex-flow column nowrap
    &:first-child
    &:last-child
      margin 1rem

  .cosmos-panel__text
    display flex
    flex-flow column

  .cosmos-panel__body
    flex 1

</style>
