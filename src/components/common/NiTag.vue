<template lang="pug">
.ni-tag(:class="cssClass") {{ value }}
</template>

<script>
export default {
  name: 'ni-tag',
  computed: {
    cssClass () {
      let value = 'ni-tag'
      if (this.size === 'lg') {
        value += ' ni-tag-lg'
      } else if (this.size === 'sm') {
        value += ' ni-tag-sm'
      } else {
        value += ' ni-tag-df'
      }
      return value
    }
  },
  props: ['value', 'size']
}
</script>

<style lang="stylus">
@require '~@/styles/variables.styl'

.ni-tag
  background app-fg
  color dim


  &:empty
    display none

  &.ni-tag-df
    padding 0 0.5rem
    line-height 2rem

  &.ni-tag-sm
    border none

    vertical-align text-top
    font-size 0.75rem
    line-height 1.25rem
    height 1.25rem
    padding 0 0.25rem

  &.pro
    color accent1
    border-color accent1

  &.con
    color accent2
    border-color accent2
</style>
