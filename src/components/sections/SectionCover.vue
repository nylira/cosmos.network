<template lang='pug'>
.section-cover
  .section-cover__container
    img.section-cover__wordmark(src="~assets/images/logos/cosmos-text.png")
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
  background app-fg
  display flex
  margin-top -3rem
  border-bottom 1px solid bc

.section-cover__container
  flex 1
  margin-top 3rem
  padding 1.5rem

  display flex
  flex-flow column nowrap
  align-items center
  justify-content center

.section-cover__wordmark
.section-cover__tagline
  margin-bottom 3rem

.section-cover__wordmark
  width 60vw
  max-width 16rem

.section-cover__tagline
  font-size lg
  max-width 32rem
  text-align center

@media screen and (min-width: 375px)
  .section-cover__container
    padding 3rem

  .section-cover__wordmark
  .section-cover__tagline
    margin-bottom 4.5rem

@media screen and (min-width: 414px)
  .section-cover__tagline
    font-size xl
</style>
