<template>
  <router-link class="cover-alert" to="/events">
    <span class="key">DEVCON3:</span>
    <span class="value">
      Our team will be at Cancún, Mexico on November 1-4 for Devcon3. Talk to us at our booth!
    </span>
    <i class="fa fa-angle-double-right" aria-hidden="true"></i>
  </router-link>
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
@require '../styles/variables.styl'

.cover-alert
  display block
  width 100%
  max-width 1024px
  border 1px solid bc
  padding 0.4375rem 0.75rem
  font-size 0.75rem
  position relative
  overflow hidden

  .ni-time-remaining
    display inline

  i.fa
    display block
    position absolute
    bottom -0.25rem
    right 0.25rem
    font-size 3rem
    line-height 1
    z-index -1
    color subtle

  .key
    text-transform uppercase
    font-weight 500
    color txt
  .value
    color dim

@media screen and (min-width:360px)
  .cover-alert
    font-size 0.875rem
@media screen and (min-width:400px)
  .cover-alert
    font-size 1rem
</style>
