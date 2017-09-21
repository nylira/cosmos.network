<template lang='pug'>
section.section-home-cover
  img.section-home-logo(src='../assets/images/bg-cover.png')
  .section-container
    section-cover-alert
    h1
      img(src='../assets/images/cosmos-logo-white-alpha.png')
    p.tagline Internet of Blockchains
    p.introduction Cosmos is a network and a framework for interoperability between blockchains.
    .btns
      form-email-signup
      btn(type='anchor', href='https://cosmos.rocket.chat', size='lg', icon='comments-o', theme='alpha-black', target='_blank', value='Chat on Rocket')
    a.source(href="https://github.com/cosmos" target="_blank")
      | #[i.fa.fa-github] View source code on #[strong GitHub]
</template>

<script>
import SectionCoverAlert from './SectionCoverAlert'
import FormEmailSignup from './FormEmailSignup'
import Btn from '@nylira/vue-button'
export default {
  components: {
    Btn,
    FormEmailSignup,
    SectionCoverAlert
  }
}
</script>

<style lang="stylus">
@require '../styles/variables.styl'

.section-home-cover
  background #111
  position relative
  border-bottom 1px solid lighten(mcolor, 10%)
  margin-top -3rem

  .section-container
    margin-top 3rem
    padding 2*x 1.5*x
    position relative
    z-index 5

  h1
    text-transform uppercase
    color hsl(0,0,100%)
    font-weight 600
    line-height 1
    font-size 2.75*x
    letter-spacing 0.66rem
    margin-bottom 0.5*x
    img
      height 3rem
      opacity 0.9

  .tagline
    color hsl(0,0,50%)
    letter-spacing 0.055rem
    text-transform uppercase
    font-weight 500
    margin-bottom 2rem

  .introduction
    color hsl(0,0,75%)
    max-width 20*x
    font-size 1.25*x
    margin-bottom 3*x

  .btns
    margin-bottom x
    display flex
    flex-flow column
    align-items flex-start
    justify-content flex-start
    > *
      width 100%
      max-width 21rem
      margin 0 0 0.5rem

  a.source
    color hsl(0,0,50%)
    i.fa
      padding-right 0.25rem
    strong
      color hsl(0,0,75%)
      font-weight 500

.section-home-logo
  display none

@media screen and (min-width: 360px)
  .section-home-cover .section-container
    padding 3*x 1.75*x

@media screen and (min-width: 414px)
  .section-home-cover .section-container
    padding 3*x 2.25*x

    h1
      font-size 3*x
    .tagline
      font-size 1.095*x

@media screen and (min-width: 768px)
  .section-home-cover .section-container
    padding 4*x 2*x
    max-width 720px
    margin-left auto
    margin-right auto

    .introduction
      font-size 1.5*x
      max-width 28*x

  .section-home-cover
    overflow hidden
    
  .section-home-logo
    display block
    width 80vw
    height 80vw
    position absolute
    top -2.5vw
    right -20vw
    opacity 0.15

@media screen and (min-width: 1024px)
  .section-home-cover .section-container
    max-width 960px
    .tagline
      margin-bottom 3*x
    .introduction
      margin-bottom 3*x

    .btns
      margin-bottom 1.5*x
      display flex
      flex-flow row nowrap
      max-width 40rem
      > *
        margin-bottom 0
      form
        margin-right 1.5rem
        flex 1
        max-width 100%
      .ni-btn
        width 14rem

  .section-home-logo
    top -7.5vw
    right -20vw

@media screen and (min-width: 1280px)
  .section-home-cover .section-container
    padding 5*x 2*x 6*x
    max-width 1080px

  .section-home-logo
    width 70vw
    height 70vw

@media screen and (min-width: 1680px)
  .section-home-logo
    top -15vw
    right -15vw
</style>
