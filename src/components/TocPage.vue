<template>
  <div class="toc-page">
    <slot name="locale"></slot>
    <slot name="nav"></slot>
    <toc-padding v-bind:class="{ 'toc-visible': tocVisible }">
      <article-body>
        <slot></slot>
      </article-body>
    </toc-padding>
  </div>
</template>

<script>
import TocPadding from './TocPadding'
import ArticleBody from '@nylira/vue-article-body'
export default {
  name: 'toc-page',
  components: {
    ArticleBody,
    TocPadding
  },
  props: ['tocVisible']
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'

.minimal-toc
  z-index 98
  font-family sans
  overflow hidden
  position fixed
  font-size 0.875rem
  display none

  a
    text-decoration none !important
    color txt

  ul
    padding 0 !important

    li 
      margin-bottom 0 !important
      list-style none !important
      a
        position relative

        line-height 1.25
        padding 0.375rem 1.5em

        &:hover
          color link
          text-decoration none

      a.active
        position relative
        color light
        &:before
          width 1.5rem
          height 2rem
          color link
          position absolute
          top 0
          left 0

          display flex
          align-items center
          justify-content center

          content '\f0da'
          font-family FontAwesome
          color light
  > ul
    > li
      &:last-of-type
        border-bottom none

      > a
        display block
        color txt
        font-weight bold
        padding 0.5em 1.5em

      ul
        margin-bottom 0
        li
          a
            display block
            padding-left 3em
            font-weight 500

        ul
          padding 0
          li
            a
              padding-left 4.5em

@media screen and (min-width: 360px)
  .minimal-toc
    font-size 1rem

@media screen and (min-width: 768px)
  .minimal-toc
    padding 3rem

@media screen and (max-width: 1023px)
  .minimal-toc
    background c-app-bg
    top 3rem
    left 0
    right 0
    bottom 0

    &:before
      display block
      padding 0 1.25rem

      content 'Table of Contents'
      color txt
      line-height 2rem
      border-bottom 1px solid bc
      text-transform uppercase

@media screen and (min-width: 1024px)
  .minimal-toc
    z-index 99
    top 3rem
    left 0
    bottom 0
    max-height 100vh
    width 20rem
    padding 0.5rem 0 0
    border-right 1px solid bc

@media screen and (min-width: 1280px)
  .minimal-toc
    padding 3rem
    width 26rem
</style>
