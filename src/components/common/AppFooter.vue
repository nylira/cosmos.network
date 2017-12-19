<template lang="pug">
.app-footer
  section-community
  .footbot: .footbot__container
    .footbot__brandmark
      img.footbot__img(src="~assets/images/logos/cosmos-brandmark.png")
    .footbot-menu
      .footbot-menu__title Cosmos
      .footbot-menu__items
        router-link(to="/about").footbot-menu__item Introduction
        router-link(to="/about/faq").footbot-menu__item FAQ
        router-link(to="/about/team").footbot-menu__item Team
        a(href="https://tendermint.com/careers" target="_blank").footbot-menu__item Careers
        a(href="https://fundraiser.cosmos.network" target="_blank").footbot-menu__item Fundraiser
    .footbot-menu
      .footbot-menu__title Downloads
      .footbot-menu__items
        router-link(to="/about/whitepaper").footbot-menu__item Whitepaper
        a(href="https://github.com/cosmos/cosmos-ui" target="_blank").footbot-menu__item Cosmos UI
        router-link(to="/assets").footbot-menu__item Visual Assets
    .footbot-menu
      .footbot-menu__title Developers
      .footbot-menu__items
        a(href="https://github.com/cosmos" target="_blank").footbot-menu__item Cosmos GitHub
        a(href="https://github.com/cosmos/cosmos-sdk" target="_blank").footbot-menu__item Cosmos SDK
        a(href="https://tendermint.com" target="_blank").footbot-menu__item Tendermint
        router-link(to="/validators").footbot-menu__item Validators
</template>

<script>
import {mapGetters} from 'vuex'
import SectionCommunity from 'sections/SectionCommunity'
export default {
  name: 'app-footer',
  components: {
    SectionCommunity
  },
  computed: {
    ...mapGetters(['links'])
  }
}
</script>

<style lang="stylus">
@require '~variables'

.footbot__container
  max-width 1024px
  margin 0 auto

.footbot
  background app-fg

.footbot__container
  display flex
  flex-flow row wrap
  max-width 1024px
  margin 0 auto

.footbot__brandmark
  padding 0
  flex 0 0 50%

.footbot__img
  max-width 50vw

.footbot-menu
  padding 1.5rem
  flex 0 0 50%

.footbot-menu__title
  color bright
  line-height 2rem

.footbot-menu__items
  display flex
  flex-flow column nowrap

.footbot-menu__item
  line-height 2rem

@media screen and (min-width: 768px)
  .footbot__container
    padding 3.5rem 0

  .footbot__brandmark
    flex 0 0 50%

  .footbot__img
    max-width 14rem

  .footbot-menu
    flex 0 0 16.66667%

  .footbot-menu__title
    margin-bottom 1rem
</style>
