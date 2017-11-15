<template lang="pug">
.ni-card-person
  .person-container(@click='setPopup(true)')
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
  name: 'person-container',
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

.person-container
  background app-fg
  padding 0.5rem
  display flex
  align-items center
  cursor pointer
  margin 0.125rem

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
  .person-container
    .avatar img
      width 3.5rem

@media screen and (min-width:400px)
  .person-container
    .avatar img
      width 4rem
    .name
      font-weight 500

@media screen and (min-width:768px)
  .person-container
    padding 1rem
</style>
