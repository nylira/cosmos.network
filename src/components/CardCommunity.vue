<template lang="pug">
a.card-community(:href='anchor' target='_blank')
  .icon: i.h3.material-icons {{ icon }}
  .text
    .dt {{ dt }}
    .dd {{ dd }}
</template>

<script>
export default {
  name: 'card-community',
  props: ['anchor', 'dt', 'dd', 'icon']
}
</script>

<style lang="stylus">
@require '../styles/variables.styl'

.card-community + .card-community
  border-top none

.card-community
  display flex
  border-bottom 1px solid bc
  &:last-child
    border-bottom none

  .icon
    flex 0 0 4rem
    display flex
    align-items center
    justify-content center

    i
      color link

  .text
    padding 0.5rem 0.75rem 0.75rem 0
    .dt
      color txt
    .dd
      color dim

  &:hover
    background hover-bg

@media screen and (min-width: 768px)
  .card-community
    .icon
      flex 0 0 4rem
</style>
