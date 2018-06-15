<template lang="pug">
.app-footer
  .footbot: .footbot__container
    .footbot__brandmark
      img.footbot__img(src="~images/logos/cosmos-brandmark.png")
    .footbot-menu
      .footbot-menu__title Foundation
      .footbot-menu__items
        router-link(:to="{ name: 'about'}").footbot-menu__item About
        router-link(:to="{ name: 'events'}").footbot-menu__item Events
        router-link(:to="{ name: 'assets'}").footbot-menu__item Visual Assets
        a(:href="urls.fundraiser" target="_blank").footbot-menu__item Fundraiser
    .footbot-menu
      .footbot-menu__title Learn
      .footbot-menu__items
        router-link(:to="{ name: 'resources'}").footbot-menu__item Resources
        router-link(:to="{ name: 'academy'}").footbot-menu__item Academy
        router-link(:to="{ name: 'whitepaper'}").footbot-menu__item Whitepaper
        router-link(:to="{ name: 'faq'}").footbot-menu__item FAQ
    .footbot-menu
      .footbot-menu__title Products
      .footbot-menu__items
        a(:href="urls.gh.cosmosSdk" target="_blank").footbot-menu__item Cosmos SDK
        a(:href="urls.gh.tendermint" target="_blank").footbot-menu__item Tendermint
        a(:href="urls.gh.lotion" target="_blank").footbot-menu__item Lotion JS
        a(:href="urls.gh.voyager" target="_blank").footbot-menu__item Voyager
    .footbot-menu
      .footbot-menu__title Social
      .footbot-menu__items
        a(:href="urls.gh.cosmosSdk" target="_blank").footbot-menu__item Riot
        a(:href="urls.gh.voyager" target="_blank").footbot-menu__item Telegram
        a(:href="urls.gh.tendermint" target="_blank").footbot-menu__item Reddit
        a(:href="urls.gh.lotion" target="_blank").footbot-menu__item Twitter
        a(:href="urls.gh.lotion" target="_blank").footbot-menu__item YouTube
    section-social
</template>

<script>
import { mapGetters } from "vuex"
import SectionSocial from "sections/SectionSocial"
export default {
  name: "app-footer",
  components: {
    SectionSocial
  },
  computed: {
    ...mapGetters(["urls"])
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
  background app-bg

  .ni-part-header
    background inherit

  .ni-part-title
    font-size 1rem

.footbot__container
  display flex
  flex-flow row wrap
  max-width 1024px
  margin 0 auto

.footbot__brandmark
  padding 0
  flex 0 0 30%

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
    flex 0 0 30%

  .footbot__img
    max-width 14rem

  .footbot-menu
    flex 0 0 16.66667%

  .footbot-menu__title
    margin-bottom 1rem
</style>
