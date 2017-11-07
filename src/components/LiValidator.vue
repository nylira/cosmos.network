<template lang="pug">
.li-validator(v-if="!validator.disabled")
  .avatar: i.fa.fa-user
  .text
    .company-name {{ validator.companyName }}
    .website {{ validator.website }}
</template>

<script>
export default {
  name: 'li-validator',
  props: ['validator']
}
</script>

<style lang="stylus">
@require '~@/styles/variables.styl'
.li-validator
  margin 0 0 0.5rem
  display flex
  flex-flow row nowrap
  height 48px

  .avatar
    width 48px
    height 48px
    background app-fg
    display flex
    align-items center
    justify-content center
    i.fa
      font-size 1.25rem
      color dim

  .text
    flex 1
    border 1px solid bc
    border-left none
    padding 0.5rem 0.5rem
    .company-name
      font-size 0.9rem
      font-weight bold
      line-height 20px
    .website
      color dim
      font-size 0.666rem
      line-height 12px
</style>

