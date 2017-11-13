<template>
  <router-link class="cover-alert" to="/events">
    <span class="key">DEVCON3:</span>
    <span class="value">
      Our team will be at Cancún, Mexico on November 1-4 for Devcon3. Talk to us at our booth!
    </span>
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
  position relative
  overflow hidden

  .ni-time-remaining
    display inline

  .key
    text-transform uppercase
    font-weight 500
    color txt
  .value
    color dim
</style>
