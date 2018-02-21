<template lang='pug'>
.ni-page-menu: slot
</template>

<script>
export default {
  name: 'ni-page-header-menu'
}
</script>

<style lang="stylus">
@require '~variables'

.ni-page-menu
  background app-fg
  display flex
  justify-content center
  align-items center
  height 2rem

  a
    padding 0 0.5rem
    height 1.5rem
    font-size sm
    color dim
    margin 0 0.5rem
    border-radius 0.25rem
    display flex
    align-items center
    justify-content center

    white-space nowrap
    overflow-x hidden
    text-overflow ellipsis
    min-width 0

    i
      margin-left 0.5rem

    &:hover
      color bright
      background alpha(hover, 25%)

    &.router-link-exact-active
      color bright
      background alpha(accent, 25%)
      cursor default

@media screen and (min-width: 414px)
  .ni-page-menu
    height 2.5rem
  .ni-page-menu a
    font-size x
    height 2rem

@media screen and (min-width: 768px)
  .ni-page-menu
    height 3rem
</style>
