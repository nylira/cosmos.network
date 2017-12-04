<template>
<a class="cover-alert" href="http://tokensummit.com" target="_blank">
  <span class="key">Meetup!</span>
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
  position relative
  overflow hidden

  font-size sm

  .ni-time-remaining
    display inline

  .key
    font-weight bold

  .value
    color dim

  &:hover
    background app-fg
    .key, .value
      color hover

@media screen and (min-width: 768px)
  .cover-alert
    text-align center
    width auto
    margin 0.5rem 0
    font-size x
</style>
