<template lang="pug">
.hackatom-locale-menu-container
  overlay-btns
    overlay-btn(@click.native='toggle(true)', icon='times', v-if='maximized')
    overlay-btn(@click.native='toggle(true)', icon='globe', v-else='')
  menu.hackatom-locale-menu(v-show='maximized')
    router-link(to='/hackatom', exact='') English
    router-link(to='/hackatom/zh-cn') 简体中文
</template>

<script>
import OverlayBtn from 'buttons/OverlayBtn'
import OverlayBtns from 'buttons/OverlayBtns'
export default {
  name: 'hackatom-locale-menu',
  components: {
    OverlayBtn,
    OverlayBtns
  },
  data: () => ({
    maximized: false
  }),
  methods: {
    toggle (value) {
      this.maximized = !this.maximized
    },
    set (value) {
      this.maximized = value
    }
  },
  props: ['path', 'langs']
}
</script>

<style lang="stylus">
@import '~variables'

.hackatom-locale-menu-container
  position absolute

.hackatom-locale-menu
  background alpha(#fff, 95%)
  backdrop-filter blur(0.125rem)
  shadow()

  position fixed
  bottom 4em
  right 0
  width 20rem
  z-index 100

  a
    display block
    line-height 3em
    border-bottom 1px solid bc
    padding 0 1.25rem
    cursor pointer
    color txt

    &:hover
      color link
    &.router-link-active
      color dim
    &:last-of-type
      border-bottom none

@media screen and (min-width:1024px)
  .hackatom-locale-menu-container
    bottom 0.5rem
</style>
