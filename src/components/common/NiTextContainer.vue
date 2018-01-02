<template lang="pug">
.ni-text
  md-text.ni-text-container(v-if="url" :url="url")
  .ni-text-container(v-else): slot
</template>

<script>
import MdText from 'common/NiMdText'
export default {
  name: 'ni-text-container',
  components: {
    MdText
  },
  props: ['url']
}
</script>

<style lang="stylus">
@require '~variables'

.ni-text-container
  padding 1rem
  max-width 40rem
  margin-left auto
  margin-right auto
  df()

.ni-text
  hr
    border none
    border-top 1px solid bc
    background transparent
    height 0
    margin 0
    padding 0

  a
    color link
    overflow-wrap break-word
    word-wrap break-word
    -ms-word-break break-all
    word-break break-all
    word-break break-word
    &:hover
      text-decoration underline
      color hover

  strong
    font-weight bold

  em
    font-style italic

  code
    mono()
    margin-bottom 1.5rem
    background app-fg
    font-weight bold
    padding 0 0.25rem
    overflow-wrap break-word
    word-wrap break-word
    -ms-word-break break-all
    word-break break-all
    word-break break-word

  pre
    margin-left -1rem
    margin-right -1rem
    overflow-x scroll
    padding 0.375rem 0.5rem
    line-height 1.125
    background app-fg
    color txt
    & + figcaption
      margin-top -1.5rem
      background app-fg
      border 1px solid #eee
      border-top none
      padding 0.5rem
      color txt
      margin-bottom 1.5rem
    code
      margin-bottom 0
      font-weight normal
      background app-fg
      color txt
      padding 0
  p
    &:empty
      display none
    img
      margin-bottom 0

  iframe
    display block
    width 100vw
    height 56.25vw
    margin 0 -1rem 1.5rem

  img
    max-width 100%

  .image
    display flex
    align-items center
    justify-content center
    margin-bottom 1.5rem
    background app-fg
    padding 1rem
    border-top 1px solid bc
    img
      max-height 75vh
      max-width 87.5vw
      margin 0

  h1, h2, h3, h4, h5,  h6
    position relative
    line-height 1.25
    margin 1.5rem 0 0.75rem

    &:first-child
      margin-top 0

  h1
    margin-top 1.5rem

  h1 + p
    color dim
    font-size 1.25rem
    margin-top -0.5rem

  h2:not(:first-child)
    border-top 0.25rem solid bc
    padding-top 1.5rem
    margin-top 1.5rem

  h3:not(:first-child)
    padding-top 1.5rem

  h4:not(:first-child)
    padding-top 1.5rem
     
  table
    border 1px solid bc
    border-collapse collapse
    width 100%
    th
      font-weight 600
      background app-fg
      color dim
      border 1px solid #e0e0e0
      padding 0.25em 0.5em

  blockquote
    padding 0.75rem 1rem
    background app-fg
    position relative
    color txt

    & + h2
      margin-top 1.5rem

    p, ul, ol
      margin-bottom 0.75rem

      &:last-child
        margin-bottom 0


  p, hr, ul, ol, table, pre,  figcaption,  blockquote,  img,  iframe,  .ni-btn
    margin-bottom 1.5em
    + h2
      margin-bottom 3rem

  p code:before, p code:after
    letter-spacing -0.375em
    content "\00a0"

  ul, ol
    padding-left 1.5em

    ul, ol
      margin-bottom 0
      padding-top 0.25em

  ul li, ol li
    margin-bottom 0.5rem

  ul
    li
      list-style square
  ol
    li
      list-style decimal
 
  li
    p + ol,
    p + ol
      margin-top -1.5em
      &:last-child
        margin-bottom 1.5em

@media screen and (min-width: 768px)
  .ni-text
    pre
      margin-left 0
      margin-right 0

    .image
      img
        max-height 33.33vh
        max-width 33.333vh

    iframe
      margin-left 0
      margin-right 0
      max-width 44rem
      max-height 24.75rem

@media screen and (min-width: 1280px)
  .ni-text-container
    margin 0 auto
    max-width 1024px
    padding-left 0
    padding-right 0

  .ni-text
    h1
      padding-left width-side

    h2, h2:not(:first-child)
      border-top px solid bc
      padding-top 1.5rem
      padding-left 1rem

      width width-side - 1rem
      float left
      margin-top 0
      position relative

      font-size 1.5rem

      &:before
        position absolute
        top 0
        left 0

        content ''
        display block

        height 0.1875rem
        width 4rem
        background accent

    h2 + h3
      margin-top 0

    h2 + p, h2 + ul, h2 + ol, h2 + blockquote, h2 + pre
      border-top 1px solid bc
      padding-top 1.5rem

  .ni-text-container
    h2 + h3
      border-top 1px solid bc

    h3, h4, h5, h6, p, ul, ol, pre, blockquote, .ni-btn, iframe, > div
      margin-left width-side
      padding-left 0

      ul, ol
        margin-left 2rem

      p
        margin-left 0

    h3, h4, h5, h6, p, ul, ol
      padding-right 0.5rem
</style>
