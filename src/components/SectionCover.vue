<template lang='pug'>
section.section-home-cover
  .section-container
    section-cover-alert
    .cosmos
      .cosmos-logo: img(src='../assets/images/cosmos-logo-alpha.png')
      .cosmos-text: img(src='../assets/images/cosmos-text-alpha.png')
    menu
      form-email-signup
      btn(
        type='anchor'
        :href='links.cosmos.chat'
        size='lg'
        icon='comments-o'
        target='_blank'
        value='Community Chat')
</template>

<script>
import {mapGetters} from 'vuex'
import SectionCoverAlert from './SectionCoverAlert'
import FormEmailSignup from './FormEmailSignup'
import Btn from '@nylira/vue-button'
export default {
  components: {
    Btn,
    FormEmailSignup,
    SectionCoverAlert
  },
  computed: { ...mapGetters(['links']) }
}
</script>

<style lang="stylus">
@require '../styles/variables.styl'

.section-home-cover
  position relative
  border-bottom 1px solid bc
  margin-top -3rem

  .section-container
    margin-top 3rem
    padding 1.5rem
    position relative
    z-index 5

    display flex
    flex-flow column nowrap
    align-items center

  .cosmos
    margin 2.5rem 0
    display flex
    flex-flow column nowrap
    align-items center

  .cosmos-logo img
    margin 0 0 1rem
    width 40vw
    max-width 320px

  .cosmos-text img
    width 55vw
    max-width 320px

  menu
    width 100%
    max-width 24rem
    display flex
    flex-flow column
    align-items flex-start
    justify-content flex-start
    > *
      width 100%

    form
      margin 0 0 1rem

@media screen and (min-width: 360px)
  .section-home-cover
    .section-container
      padding 2rem

    .cosmos-logo img
      margin-bottom 1.25rem

@media screen and (min-width: 768px)
  .section-home-cover
    .section-container
      padding 3rem 3rem

    .cosmos
      margin 8rem 0

    .cosmos-logo img
      margin 0 0 3rem

    menu
      flex-flow row
      max-width 48rem
      form
        margin 0 1rem 0 0 

@media screen and (min-width: 1024px)
  .section-home-cover
    .section-container
      padding 1rem 3rem 3rem
      height 90vh

    .cosmos
      flex 1
      margin 0
      display flex
      align-items center
      flex-flow column nowrap
      justify-content center

    .cosmos-logo img
      margin 0 0 4vh

    .cosmos-logo img
    .cosmos-text img
      max-width 30vh

    menu
      flex-flow row
      max-width 48rem
      form
        margin 0 1rem 0 0 

@media screen and (min-width: 1680px)
  .section-home-cover
    .section-container
      padding 3rem
</style>
