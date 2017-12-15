<template lang='pug'>
.section-cover
  .section-cover__container
    .section-cover__wordmark
      img.section-cover__img(src="~assets/images/logos/cosmos-text.png")
    .section-cover__tagline The interoperable, scalable, blockchain network. Built for developers.
    .section-cover__action
      btn(
        type="anchor"
        href="https://github.com/cosmos/cosmos-ui/releases/latest"
        size="lg"
        icon="file_download"
        target="_blank"
        value="Download Wallet")
    .section-cover__scroll
      btn(icon="arrow_downward" v-scroll-to="'#section-what'")
</template>

<script>
import Btn from '@nylira/vue-button'
export default {
  name: 'section-cover',
  components: {
    Btn
  },
  methods: {
    scrollDown () {
      console.log('scrolling down')
    }
  }
}
</script>

<style lang="stylus">
@require '~variables'

.section-cover
  height 100vh
  width 100vw
  display flex
  margin-top -3rem

.section-cover__container
  flex 1
  padding 0 2rem
  background url('~assets/images/backgrounds/home.jpg') center center
  background-size cover

  display flex
  flex-flow column nowrap
  align-items center
  justify-content center
  position relative

.section-cover__scroll
  position absolute
  bottom 0.5rem
  right 0.5rem

.section-cover__scroll .ni-btn
  shadow()

.section-cover__wordmark
  padding-top 17.5vh
  display flex
  align-items center

.section-cover__img
  width 60vw

.section-cover__tagline
  text-align center
  font-weight 400
  letter-spacing 0.025em
  text-shadow hsla(0,0,0,1) 0 0 0.5em

  padding-top 5vh
  max-width 22em

.section-cover__action
  padding-top 15vh

.section-cover__action .ni-btn
  shadow()

@media screen and (min-width: 768px) and (orientation: portrait)
  .section-cover__img
    width 36vw

@media screen and (orientation: landscape)
  .section-cover__img
    width 20vw

@media screen and (min-width: 375px) and (min-height: 812px) and (orientation: portrait)
  .section-cover__action
    padding-top 20vh

@media screen and (min-width: 414px)
  .section-cover__tagline
    font-size lg

@media screen and (min-width: 768px)
  .section-cover__wordmark
    padding-top 12.5vh

  .section-cover__container
    padding 0 3rem

@media screen and (min-width: 1024px)
  .section-cover__tagline
    padding-top 6.25vh

@media screen and (min-height: 1024px)
  .section-cover__tagline
    font-size xl

@media screen and (min-width: 1280px)
  .section-cover__wordmark
    padding-top 12vh

@media screen and (min-width: 1440px)
  .section-cover__wordmark
    padding-top 10vh

@media screen and (min-width: 1680px)
  .section-cover__wordmark
    padding-top 8vh

@media screen and (min-width: 1920px)
  .section-cover__wordmark
    padding-top 6vh

  .section-cover__img
    width 24rem
</style>
