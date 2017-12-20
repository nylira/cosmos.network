<template lang='pug'>
.section-cover
  .section-cover__container
    .section-cover__wordmark
      img.section-cover__img(src="~assets/images/logos/cosmos-text.png")
    .section-cover__tagline The interoperable, scalable blockchain network. Built for developers.
    .section-cover__action
      btn(
        type="anchor"
        href="https://riot.im/app/#/room/#cosmos:matrix.org"
        size="lg"
        icon="chat"
        target="_blank"
        value="Join Developer Chat")
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
  background url('~assets/images/backgrounds/bg-568@2x.jpg') center center
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
  padding-top 20vh
  display flex
  align-items center

.section-cover__img
  width 60vw

.section-cover__tagline
  text-align center
  letter-spacing 0.0375em
  text-shadow hsla(0,0,0,1) 0 0 0.5em

  padding-top 7.5vh
  max-width 20em

.section-cover__action
  padding-top 22.5vh

.section-cover__action .ni-btn
  shadow()

/* START queries for bg image */

@media screen and (max-device-width: 667px)
  .section-cover__container
    background-image url('~assets/images/backgrounds/bg-667@2x.jpg')

@media screen and (max-device-width: 812px)
  .section-cover__container
    background-image url('~assets/images/backgrounds/bg-812@2x.jpg')

@media screen and (max-device-width: 1024px)
  .section-cover__container
    background-image url('~assets/images/backgrounds/bg-1024@2x.jpg')

@media screen and (max-device-width: 1280px) and (max-device-height: 720px)
  .section-cover__container
    background-image url('~assets/images/backgrounds/bg-720p.jpg')

@media screen and (max-device-width: 1920px) and (max-device-height: 1080px)
  .section-cover__container
    background-image url('~assets/images/backgrounds/bg-1080p.jpg')
 
@media screen and (max-device-width: 2560px) and (max-device-height: 1440px)
  .section-cover__container
    background-image url('~assets/images/backgrounds/bg-1440p.jpg')

@media screen and (max-device-width: 2560px) and (max-device-height: 1600px)
  .section-cover__container
    background-image url('~assets/images/backgrounds/bg-1600p.jpg')

@media screen and (max-device-width: 2880px) and (max-device-height: 1800px)
  .section-cover__container
    background-image url('~assets/images/backgrounds/bg-1800p.jpg')

@media screen and (min-device-width: 2881px) and (min-device-height: 1801px)
  .section-cover__container
    background-image url('~assets/images/backgrounds/bg-2160p.jpg')

/* END queries for bg image */

@media screen and (min-width: 768px) and (orientation: portrait)
  .section-cover__tagline
    font-size xl
  .section-cover__img
    width 45vw

@media screen and (min-width: 1024px) and (orientation: landscape)
  .section-cover__tagline
    font-size lg

  .section-cover__img
    width 25vw

@media screen and (min-width: 1024px) and (orientation: portrait)
  .section-cover__tagline
    font-size 3.25vw

@media screen and (min-width: 1280px) and (orientation: landscape)
  .section-cover__tagline
    font-size 1.375vw + 0.25vh

  .section-cover__img
    width 20vw
</style>
