<template lang="pug">
.person-wrapper
  .card-person(@click='setPopup(true)')
    .avatar
      img(:src='portrait(person.slug)')
      i.material-icons search
    .text
      .name {{ person.name }}
      .title {{ person.groups[group] }}
  modal-person(:group='group', :person='person', v-if='activePopup', @click.native='setPopup(false)')
</template>

<script>
import { portrait } from '../scripts/cdn.js'
import ModalPerson from './ModalPerson'
export default {
  name: 'card-person',
  components: {
    ModalPerson
  },
  data: () => ({
    activePopup: false,
    portrait: portrait
  }),
  methods: {
    setPopup (state) {
      this.activePopup = state
    }
  },
  props: ['person', 'group']
}
</script>

<style scoped lang="stylus">
@import '~@/styles/variables.styl'

.card-person
  padding 0.5rem
  display flex
  align-items center
  cursor pointer

  .avatar
    display block
    margin-right 1rem
    position relative
    img
      width 3rem
      border-radius 2.5rem
    i.material-icons
      background app-fg
      border-radius 1rem
      width 1.25rem
      height 1.25rem

      display flex
      align-items center
      justify-content center

      color txt

      position absolute
      bottom 0
      right 0

  .title
    color dim

  &:hover
    background hover-bg
    .name
      color bright

@media screen and (min-width:360px)
  .card-person
    .avatar img
      width 3.5rem

@media screen and (min-width:400px)
  .card-person
    .avatar img
      width 4rem
    .name
      font-weight 500
</style>
