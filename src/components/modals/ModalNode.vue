<template lang="pug">
.modal-node-wrapper
  .modal-node
    .modal-node-header
      .title {{ node.title }}
      .version {{ node.version }}
    .modal-node-body(v-if="node.notes") {{ node.notes }}
    .modal-node-footer
      .completion-success(v-if="node.date")
        | #[i.material-icons check_circle] Released {{ node.date }}
      .completion-warning(v-else)
        | #[i.material-icons hourglass_empty] In Progress
</template>

<script>
import disableScroll from 'disable-scroll'
export default {
  name: 'ni-modal-node',
  mounted () {
    disableScroll.on()
  },
  beforeDestroy () {
    disableScroll.off()
  },
  props: ['node']
}
</script>

<style scoped lang="stylus">
@import '~variables'

.modal-node-wrapper
  position fixed
  top 0
  left 0
  width 100vw
  height 100vh
  z-index z(modal)

  display flex
  align-items flex-end
  justify-content flex-end

  background hsla(0,0,0,0.75)

.modal-node
  margin 1rem
  border 2px solid bc
  border-radius 0.25rem
  max-width 30rem
  width 100%
  background app-fg
  shadow()

  padding 1rem

  position relative

  &:before
    display block
    position absolute
    top 0
    right 0

    width 3rem
    height 3rem
    display flex
    align-items center
    justify-content center

    content 'close'
    font-family 'Material Icons'
    font-size x
    cursor pointer
    color link

.modal-node-header
  display flex
  align-items center
  font-size lg
  margin-bottom 1rem

  font-weight 500

  .title
    color bright
    font-weight 500
  .version
    color dim
    font-weight 300
    margin-left 0.333rem

.modal-node-body
  margin-bottom 1.25rem

.modal-node-footer div
  color dim
  display flex
  align-items center
  i
    margin-right 0.333rem

  &.completion-success i
    color success

  &.completion-warning i
    color warning
</style>
