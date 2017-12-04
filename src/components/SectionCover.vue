<template lang='pug'>
section.section-home-cover
  .section-container
    section-cover-alert
    .cosmos
      img(src="~assets/images/logos/cosmos-brandmark.png")
    menu
      btn(
        type='anchor'
        :href='links.cosmos.community.telegram'
        size='lg'
        icon='chat'
        target='_blank'
        value='Community Chat')
      btn(
        type='anchor'
        :href='links.cosmos.community.matrix'
        size='lg'
        icon='code'
        target='_blank'
        value='Developer Chat')
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
@require '~variables'

.section-home-cover
  position relative
  background app-fg

  .section-container
    padding 1rem
    position relative
    z-index 5

    display flex
    flex-flow column nowrap
    align-items center
    height 90vh

  .cosmos
    flex 1
    display flex
    align-items center
    img
      width 87.5vw
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
      margin-bottom 0.5rem
      &:last-child
        margin 0

@media screen and (min-width: 768px)
  .section-home-cover
    .section-container
      padding 1rem 3rem 3rem

    .cosmos img
      max-width 400px

    menu
      flex-flow row
      max-width 32rem
      > *
        margin 0 0.5rem 0 0

@media screen and (min-width: 1024px)
  .section-home-cover
    .section-container
      height 90vh

    .cosmos img
      width 31.25vw
      max-width 32rem

    menu
      > *
        margin 0 1rem 0 0
</style>
