<template lang='pug'>
mixin actions(size)
  .action
    btn(
      type="link"
      :to="{ name: 'testnet' }"
      icon="group_add"
      size=size
      color="primary"
      value="Join Testnet")
    btn(
      type="anchor"
      href="http://explorer.cosmos.network"
      icon="wifi_tethering"
      size="lg"
      target="_blank"
      value="Testnet LIVE")

  form.action(action="//network.us14.list-manage.com/subscribe/post?u=1b8aeaa81ca615914eb2eb7fc&id=64c73f9f5f" method="post" name="mc-embedded-subscribe-form" target="_blank" novalidate="")
    field(name="EMAIL" type="email" placeholder="name@email.com" size=size)
    btn(
      type="submit"
      icon="email"
      size=size
      value="Get Launch Alert")
    div(style="position: absolute; left: -5000px;" aria-hidden="true")
      input(type="text" name="b_1b8aeaa81ca615914eb2eb7fc_64c73f9f5f" tabindex="-1" value="")

.section-cover: .section-cover__container
  .section-cover__actions.desktop: +actions("lg")
  .section-cover__actions.mobile: +actions
  .section-cover__scroll(v-scroll-to="'#section-events'")
    i.material-icons arrow_downward
</template>

<script>
import Btn from "@nylira/vue-button"
import Field from "@nylira/vue-field"
export default {
  name: "section-cover",
  components: {
    Btn,
    Field
  }
}
</script>

<style lang="stylus">
@require '~variables'

.section-cover
  height 100vh
  width 100vw
  max-width 100% // fixes issue where 100vw causes horizontal scrollbar
  display flex
  margin-top -3rem

.section-cover__container
  flex 1
  background url('~assets/images/backgrounds/bg-568@2x.jpg') center center
  background-size cover
  position relative

.section-cover__actions
  position absolute
  bottom 0
  margin-bottom 3rem
  display flex
  flex-flow column nowrap
  align-items center
  width 100%

  .action
    margin 0 auto 1rem
    width 14rem

    .ni-field
    .ni-btn
      margin-bottom 0.25rem
      shadow()

    .ni-btn
      width 100%

.section-cover__scroll
  position absolute
  bottom 0
  right 0
  i.material-icons
    font-size 1.5rem
    display flex
    align-items center
    justify-content center
    width 3rem
    height 3rem
    background alpha(app-bg, 50%)
    cursor pointer
    &:hover
      background alpha(app-bg, 75%)

@media screen and (min-width: 768px)
  .section-cover__actions
    flex-flow row-reverse nowrap
    .action
      width 16rem
      .ni-field
      .ni-btn
        margin-bottom 1.5rem

  .section-cover__scroll
    right 50%
    margin-right -3rem
    i.material-icons
      width 6rem

@media screen and (min-width: 1024px)
  .section-cover__actions
    margin-bottom 1.5rem

@media screen and (max-device-width: 675px)
  .section-cover__container
    background-image url('~assets/images/backgrounds/bg-675@2x.jpg')

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
</style>
