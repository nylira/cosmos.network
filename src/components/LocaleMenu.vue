<template>
  <div class="locale-menu-container">
    <overlay-btn @click.native="toggle(true)" icon="times" v-if="maximized"></overlay-btn>
    <overlay-btn @click.native="toggle(true)" icon="globe" v-else></overlay-btn>
    <menu class="locale-menu" v-show="maximized">
      <template v-for="lang in languages">
        <router-link
          :to="dir"
          v-if="lang.code === 'en-US'"
          @click.native="set(false)"
          exact>
          {{ lang.name }}
        </router-link>
        <router-link
          :to="dir + lang.code"
          @click.native="set(false)"
          v-else>
          {{ lang.name }}
        </router-link>
      </template>
    </menu>
  </div>
</template>

<script>
import OverlayBtn from './OverlayBtn'
export default {
  name: 'locale-menu',
  components: {
    OverlayBtn
  },
  computed: {
    dir () {
      return '/' + this.path + '/'
    },
    languages () {
      let enabledCodes = this.langs
      return this.allLanguages.filter(l => enabledCodes.includes(l.code))
    }
  },
  data () {
    return {
      maximized: false,
      allLanguages: [
        { name: 'English', code: 'en-US' },
        { name: 'Português', code: 'pt' },
        { name: '日本語', code: 'ja' },
        { name: '한국어', code: 'ko' },
        { name: '简体中文', code: 'zh-CN' }
      ]
    }
  },
  methods: {
    toggle (value) {
      this.maximized = !this.maximized
    },
    set (value) {
      this.maximized = value
    }
  },
  props: ['path', 'langs']
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'

.locale-menu-container
  position relative

.locale-menu
  background alpha(#fff, 95%)
  backdrop-filter blur(0.125rem)
  shadow()

.locale-menu
  position absolute
  bottom 3em
  right -0.5em
  width 100vw
  max-width 20rem
  z-index 100

  a
    display block
    line-height 3em
    border-bottom 1px solid bc
    padding 0 1.25rem
    cursor pointer
    color txt

    &:hover
      color link
    &.router-link-active
      color dim
    &:last-of-type
      border-bottom none
@media screen and (min-width:1024px)
  .locale-menu-container
    bottom 0.5rem
</style>
