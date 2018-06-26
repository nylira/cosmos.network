<template lang="pug">
.app-footer
  .footbot: .footbot__container
    .footbot__brandmark
      img.footbot__img(src="~images/logos/cosmos-brandmark.png")
    .footbot-menu
      .footbot-menu__title Foundation
      .footbot-menu__items
        router-link(:to="{ name: 'about'}").footbot-menu__item About
        router-link(:to="{ name: 'privacy'}").footbot-menu__item Privacy Policy
        router-link(:to="{ name: 'assets'}").footbot-menu__item Visual Assets
        a(:href="urls.fundraiser" target="_blank").footbot-menu__item Fundraiser
        a(:href="urls.careers" target="_blank").footbot-menu__item Careers
    .footbot-menu
      .footbot-menu__title Products
      .footbot-menu__items
        a(:href="urls.gh.voyager" target="_blank").footbot-menu__item Voyager
        a(:href="urls.gh.cosmosSdk" target="_blank").footbot-menu__item Cosmos SDK
        a(:href="urls.gh.lotion" target="_blank").footbot-menu__item Lotion JS
        a(:href="urls.explorer" target="_blank").footbot-menu__item Explorer
        a(:href="urls.faucet" target="_blank").footbot-menu__item Faucet
    .footbot-menu
      .footbot-menu__title Learn
      .footbot-menu__items
        a(:href="urls.gh.academy" target="_blank").footbot-menu__item Academy
        a(:href="urls.whitepaper" target="_blank").footbot-menu__item Whitepaper
        a(:href="urls.tendermint" target="_blank").footbot-menu__item Tendermint
        a(:href="urls.hub" target="_blank").footbot-menu__item Cosmos Hub
        a(:href="urls.faqs" target="_blank").footbot-menu__item FAQs
    .footbot-menu
      .footbot-menu__title Social
      .footbot-menu__items
        a(:href="urls.riot" target="_blank").footbot-menu__item Riot
        a(:href="urls.reddit" target="_blank").footbot-menu__item Reddit
        a(:href="urls.telegram" target="_blank").footbot-menu__item Telegram
        a(:href="urls.twitter" target="_blank").footbot-menu__item Twitter
        a(:href="urls.youtube" target="_blank").footbot-menu__item YouTube
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
  padding 1rem
  flex 0 0 50%

.footbot-menu__title
  color bright
  line-height 2rem

.footbot-menu__items
  display flex
  flex-flow column nowrap

  i
    position relative
    top -1px
    left 5px
    font-size 14px
    color var(--dim)

.footbot-menu__item
  line-height 26px
  font-size 14px

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
