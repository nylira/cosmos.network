<template lang='pug'>
.section-bottom
  .sb-container
    part(title="Get Started")
      btn#whitepaper-btn(
        type="link"
        to="/whitepaper"
        size="lg"
        icon="description"
        value="Read Whitepaper")
    part(title="Get Newsletter")
      form-email-signup
</template>

<script>
import SectionCallToAction from './SectionCallToAction'
import FormEmailSignup from './FormEmailSignup'
import Btn from '@nylira/vue-button'
import Part from './common/NiPart'
export default {
  name: 'section-bottom',
  components: {
    Part,
    FormEmailSignup,
    Btn,
    SectionCallToAction
  }
}
</script>

<style lang="stylus">
@require '../styles/variables.styl'

.section-bottom 
  border-top 1px solid bc
  border-bottom 1px solid bc
  width 100%
  position relative
  &:before
    display block
    content ''
    height 2rem - px
    background app-fg
    width 100vw
    position absolute
    top 0
    left 0
    border-bottom 1px solid bc

.sb-container
  max-width 1024px
  margin 0 auto

  .ni-part
    border-bottom 1px solid bc

  .ni-part-main
    padding 1rem

    .ni-btn:only-child
      width 100%
      max-width 20rem

    .form-email-signup
      max-width 20rem
      margin 0

@media screen and (min-width:768px)
  .sb-container
    display flex
    flex-flow row nowrap

    .ni-part
      flex 1
      border-bottom none

      &:first-child
        border-right 1px solid bc
</style>
