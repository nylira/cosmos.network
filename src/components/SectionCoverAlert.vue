<template>
<a class="cover-alert" href="http://tokensummit.com" target="_blank">
  <span class="key">Token Summit II:</span>
  <span class="value">
    We will be in San Francisco on December 4-5 for Token Summit II.
  </span>
</a>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['config'])
  }
}
</script>

<style lang="stylus">
@require '~variables'

.cover-alert
  display block
  width 100%
  max-width 1024px
  padding 0.5rem 1rem
  position relative
  overflow hidden
  background app-bg

  .ni-time-remaining
    display inline

  .key, .value
    font-size sm
    line-height 1.2

  .key
    text-transform uppercase
    font-weight 500
    color txt
  .value
    color dim
  &:hover
    .key
      color link
    .value
      color hover
</style>
