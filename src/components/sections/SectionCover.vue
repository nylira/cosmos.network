<template lang='pug'>
.section-cover
  .section-cover__container
    .section-cover__wordmark
      img.section-cover__img(src="~assets/images/logos/cosmos-text.png")
    .section-cover__tagline The interoperable, scalable, proof-of-stake blockchain network, built for developers.
    .section-cover__action
      btn(
        type='anchor'
        href='https://github.com/cosmos/cosmos-ui/releases/latest'
        size='lg'
        target='_blank'
        value='Download Wallet')
</template>

<script>
import Btn from '@nylira/vue-button'
export default {
  name: 'section-cover',
  components: {
    Btn
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
  border-bottom 1px solid bc

.section-cover__container
  flex 1
  margin-top 3rem
  padding 0 2rem
  background url('~assets/images/backgrounds/home.jpg') center center
  background-size cover

  display flex
  flex-flow column nowrap
  align-items center
  justify-content center

.section-cover__wordmark
  padding-top 15vh
  display flex
  align-items center

.section-cover__img
  max-width 60vw
  width 33vw + 33vh

.section-cover__tagline
  text-align center
  font-weight 300
  letter-spacing 0.025em
  line-height 2
  text-shadow hsla(0,0,0,0.5) 0 px bw

  padding-top 5vh
  max-width 22em

.section-cover__action
  padding-top 15vh

@media screen and (min-width: 768px) and (orientation: portrait)
  .section-cover__img
    max-width 40vw

@media screen and (orientation: landscape)
  .section-cover__img
    max-width 25vw

@media screen and (min-width: 375px)
  .section-cover__tagline
    font-size lg

@media screen and (min-width: 375px) and (min-height: 812px)
  .section-cover__action
    padding-top 20vh

@media screen and (min-width: 768px)
  .section-cover__container
    padding 0 3rem

  .section-cover__tagline
    font-size xl
</style>
