<template lang="pug">
.app-footer
  section-social(v-if="!isPageCommunity")
  .footbot: .footbot__container
    .footbot__brandmark
      img.footbot__img(src="~assets/images/logos/cosmos-brandmark.png")
    .footbot-menu
      .footbot-menu__title About
      .footbot-menu__items
        router-link(:to="{ name: 'about'}").footbot-menu__item Team
        router-link(:to="{ name: 'events'}").footbot-menu__item Events
        router-link(:to="{ name: 'assets'}").footbot-menu__item Media Assets
        a(:href="config.FUNDRAISER_URL" target="_blank").footbot-menu__item Fundraiser
    .footbot-menu
      .footbot-menu__title Learn
      .footbot-menu__items
        router-link(:to="{ name: 'intro'}").footbot-menu__item Introduction
        router-link(:to="{ name: 'faq'}").footbot-menu__item FAQ
        router-link(:to="{ name: 'whitepaper'}").footbot-menu__item Whitepaper
        router-link(:to="{ name: 'validators'}").footbot-menu__item Validators
    .footbot-menu
      .footbot-menu__title Develop
      .footbot-menu__items
        router-link(:to="{ name: 'developers'}").footbot-menu__item Developers
        router-link(:to="{ name: 'community'}").footbot-menu__item Community
        a(href="https://github.com/cosmos/cosmos-sdk" target="_blank").footbot-menu__item Cosmos SDK
        a(href="https://tendermint.com" target="_blank").footbot-menu__item Tendermint
</template>

<script>
import {mapGetters} from 'vuex'
import SectionSocial from 'sections/SectionSocial'
export default {
  name: 'app-footer',
  components: {
    SectionSocial
  },
  computed: {
    isPageCommunity () {
      return this.$router.currentRoute.name === 'community'
    },
    ...mapGetters(['links', 'config'])
  }
}
</script>

<style lang="stylus">
@require '~variables'

.app-footer
  background app-bg
  position relative
  z-index z(appMenu)

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
