<template lang='pug'>
header.app-header
  .container
    .header-item(@click='toggleMenuApp', v-if='!desktop')
      i.material-icons(v-if='!activeMenuApp') menu
      i.material-icons(v-else='') close
    router-link.header-item(to='/')
      img(src='../assets/images/cosmos-logo-white-alpha.png', alt='Cosmos Logo')
    menu.menu-popup.menu-app(v-if='activeMenuApp || desktop')
      nav.nav-app
        router-link(to='/intro' @click.native='close') Introduction
        router-link(to='/dev' @click.native='close') Developers
        router-link(to='/validators' @click.native='close') Validators
        router-link(to='/about' @click.native='close',) About
      nav(v-if='!desktop')
        a(:href='links.cosmos.blog' @click.native='close' target='_blank') Blog
    a.header-item(:href='links.cosmos.blog' @click.native='close' target='_blank')
      i.fa.fa-medium
      span.label(v-if='desktop') Blog
</template>

<script>
import { mapGetters } from 'vuex'
import disableScroll from 'disable-scroll'
export default {
  name: 'app-header',
  computed: {
    ...mapGetters(['config', 'links'])
  },
  data: () => ({
    activeMenuApp: false,
    desktop: false
  }),
  methods: {
    close () {
      this.activeMenuApp = false
      this.activeMenuFundraiser = false
      disableScroll.off()
    },
    goto (route) {
      this.close()
      this.$router.push(route)
    },
    toggleMenuApp () {
      this.activeMenuApp = !this.activeMenuApp
      if (this.activeMenuApp) disableScroll.on()
      else disableScroll.off()
    },
    toggleMenuFundraiser () {
      this.activeMenuFundraiser = !this.activeMenuFundraiser
      if (this.activeMenuFundraiser) disableScroll.on()
      else disableScroll.off()
    },
    watchWindowSize () {
      let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
      if (w >= 1024) {
        this.close()
        this.desktop = true
      } else {
        this.desktop = false
      }
    }
  },
  mounted () {
    this.watchWindowSize()
    window.onresize = this.watchWindowSize
  }
}
</script>

<style lang="stylus">
@require '~@/styles/variables.styl'

.app-header
  position fixed
  top 0
  left 0
  z-index 100
  width 100%

  background app-bg

  .container
    max-width 1024px
    margin 0 auto
    display flex
    flex-flow row wrap
    justify-content space-between

  .header-item
    height 3rem
    display flex
    align-items center
    padding 0 1rem

    color txt
    cursor pointer

    .label
      user-select none

    i
      margin-right 0.5rem

    img
      display block
      height 1.125rem
      width auto

    &.header-item-flush
      padding 0

    &:hover
      i, .label
        color bright

  .menu-app
    nav
      a
        display flex
        align-items center
        cursor pointer

  .menu-popup
    z-index 101
    user-select none

@media screen and (max-width:1023px)
  .menu-popup
    height 100vh
    position fixed
    top 3rem
    left 0
    bottom 0
    width 100vw

    background app-bg
    user-select none

    nav
      display flex
      flex-flow column
      padding 1.5rem 3rem
      > a, > p
        padding 0.75rem 0
      > a
        color txt
        border-bottom 1px solid bc
        display flex
        align-items center
        justify-content space-between
        user-select none
        &.disabled
          color dim
          cursor not-allowed
        &:hover
          color hover
      > p
        .ni-time-left
          display inline
          font-weight bold

@media screen and (min-width: 1024px)
  .app-header
    border-bottom none
    border-top bw solid darken(app-bg, 50%)

    .container
      .header-item
        width 8rem
        &:last-of-type
          justify-content flex-end

  .menu-popup.menu-app
    display flex
    padding 0 1rem

    .container
      display flex

    nav
      display flex
      flex-flow row
      align-items center

      > a
        padding 0 1rem
        color txt
        line-height 3rem
        height 3rem + 3*px
        border-top bw solid transparent
        margin-top -1 * bw

        &:hover
          color bright

        &.router-link-active
          cursor default
          user-select none
          color bright
          border-color mc
          background app-fg
          &:hover
            color bright
</style>
