<template lang="pug">
a.ni-card-social(:href='anchor' target='_blank')
  .icon: i.fab(:class="'fa-' + icon")
  .text
    .dt {{ dt }}
    .dd {{ dd }}
</template>

<script>
export default {
  name: 'ni-card-social',
  props: ['anchor', 'dt', 'dd', 'icon']
}
</script>

<style lang="stylus">
@require '~variables'

.ni-card-social
  flex 1
  display flex
  margin-top 0.25rem
  margin-bottom 0.25rem

  .icon
    flex 0 0 4rem
    display flex
    align-items center
    justify-content center

    i.fab
      color link
      font-size xl

  .text
    padding 0.75rem
    padding-left 0
    .dt
      color txt
      font-weight 500
    .dd
      color dim

  &:hover
    background app-fg

@media screen and (min-width: 768px)
  .ni-card-social
    .icon
      flex 0 0 4rem

    .text
      padding 1rem
      padding-left 0
</style>
