<template lang="pug">
.ni-card-node-container
  .ni-card-node(@click='setPopup(true)' :class="{'node--done': node.done }")
    .text
      .title {{ node.title }}
  modal-node(:node='node' v-if='activePopup' @click.native='setPopup(false)')
</template>

<script>
import ModalNode from 'modals/ModalNode'
export default {
  name: 'ni-card-node',
  components: {
    ModalNode
  },
  data: () => ({
    activePopup: false
  }),
  methods: {
    setPopup (state) {
      this.activePopup = state
    }
  },
  props: ['node']
}
</script>

<style scoped lang="stylus">
@import '~variables'

.ni-card-node-container
  display flex
  align-items center
  justify-content center

.ni-card-node
  border 2*px solid bc
  padding 1rem
  border-radius 0.25rem
  min-width 4.5rem
  position relative
  color txt
  background app-bg

  font-size sm
  text-align center
  justify-content center

  &:after
    position absolute
    bottom -2*px
    right -2*px
    width 1rem
    height 1rem
    background bc
    border-radius 0.25rem 0 0.25rem 0

    content 'search'
    font-family 'Material Icons'
    color dim
    font-size xs

    display flex
    align-items center
    justify-content center

  &:hover
    cursor pointer
    border-color hover
    &:after
      background hover

  &.node--done
    color bright
    background app-fg
    border-color link
    &:after
      color bright
      background link
    &:hover
      border-color hover
      &:after
        background hover

// simple connecting arrows
.ni-card-node-container:not(:last-child)
  .ni-card-node:before
    box-sizing border-box
    content 'play_arrow'
    font-family 'Material Icons'
    font-size x
    line-height 0.125rem
    color bc
    text-indent 1.5rem
    text-align right

    height 0.125rem
    background bc
    width 10vw
    margin-top 0.125rem / 2

    z-index -1
    position absolute
    top 50%
    left 3.375rem + 1.5rem

  .ni-card-node.node--done:before
    background alpha(link, 50%)
    color alpha(link, 50%)
</style>
