<template lang='pug'>
.section-bottom-container
  section-call-to-action
  section.section-bottom
    h2 Get Started
    btn#whitepaper-btn(
      type="link"
      to="/whitepaper"
      size="lg"
      icon="file-text-o"
      value="Whitepaper")
  section.section-bottom.newsletter
    h2 Get Newsletter
    form-email-signup
</template>

<script>
import SectionCallToAction from './SectionCallToAction'
import FormEmailSignup from './FormEmailSignup'
import Btn from '@nylira/vue-button'
export default {
  name: 'section-bottom',
  components: {
    FormEmailSignup,
    Btn,
    SectionCallToAction
  }
}
</script>

<style lang="stylus">
@require '../styles/variables.styl'

.section-bottom-container
  background c-app-bg

.section-bottom
  padding 2rem 1rem
  border-top 1px solid bc
  display flex
  flex-flow column
  justify-content center
  &.newsletter
    border-bottom 1px solid bc
  h2
    font-weight 500
    font-size 1.25rem
    text-align center
    line-height 1
    margin-bottom 1.5rem
  
  #whitepaper-btn, form
    margin 0 auto
    width 100%
    max-width 18rem

@media screen and (min-width: 768px)
  .section-bottom
    border-bottom 1px solid bc
  .section-bottom-container
    display flex
    flex-flow row wrap
    .section-cta
      width 100%
    .section-bottom
      padding-top 3rem
      padding-bottom 3rem
      flex 1

@media screen and (min-width: 1024px)
  .section-bottom-container
    .section-bottom
      h2
        font-size 1.5rem
        margin-bottom 2rem
    .section-bottom:last-of-type
      border-left 1px solid bc

@media screen and (min-width: 1200px)
  .section-bottom-container
    .section-bottom
      padding-top 4rem
      padding-bottom 4rem
</style>
