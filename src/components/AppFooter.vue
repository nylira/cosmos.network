<template lang="pug">
.app-footer
  section-community
  .footbot: .footbot__container
    .footbot__brandmark
      img.footbot__img(src="~assets/images/logos/cosmos-brandmark.png")
    .footbot-menu
      .footbot-menu__title Cosmos
      .footbot-menu__items
        router-link(to="/").footbot-menu__item About
        router-link(to="/").footbot-menu__item Careers
        router-link(to="/").footbot-menu__item FAQ
        router-link(to="/").footbot-menu__item Fundraiser
    .footbot-menu
      .footbot-menu__title Downloads
      .footbot-menu__items
        router-link(to="/").footbot-menu__item Whitepaper
        router-link(to="/").footbot-menu__item Visual Assets
    .footbot-menu
      .footbot-menu__title Cosmos
      .footbot-menu__items
        router-link(to="/").footbot-menu__item Cosmos GitHub
        router-link(to="/").footbot-menu__item Cosmos SDK
        router-link(to="/").footbot-menu__item Cosmos UI
        router-link(to="/").footbot-menu__item Tendermint
        router-link(to="/").footbot-menu__item Validators
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
    padding 1.5rem 0

  .footbot__brandmark
    flex 0 0 40%
    
  .footbot__img
    max-width 14rem

  .footbot-menu
    flex 0 0 20%

  .footbot-menu__title
    margin-bottom 1rem
</style>
