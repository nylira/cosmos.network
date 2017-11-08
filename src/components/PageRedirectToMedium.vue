<template lang='pug'>
#redirect
  i.fa.fa-spinner.fa-spin
  p Redirecting you to Medium&hellip;
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'page-redirect-to-medium',
  computed: { ...mapGetters(['links']) },
  mounted () {
    document.title = 'Redirecting to Medium - Cosmos - Internet of Blockchains'
    window.location.replace(this.links.cosmos.blog)
  }
}
</script>

<style lang="stylus">
@require '../styles/variables.styl'
#redirect
  position fixed
  top 0
  left 0
  width 100vw
  height 100vh
  background #fff

  display flex
  flex-flow column nowrap
  align-items center
  justify-content center

  padding 0 1rem
  text-align center

  i.fa
    font-size 3rem
    margin-bottom 1rem
    color light
  p
    font-size 1.5rem
    color txt
</style>
