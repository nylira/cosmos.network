<template lang="pug">
page-split
  page-header(title='Cosmos Design' subtitle='Typography, colors, and buttons.' slot='header' type='split')
  .variables
    h1 The quick brown fox jumps over the lazy dog.
    h2 The quick brown fox jumps over the lazy dog.
    h3 The quick brown fox jumps over the lazy dog.
    h4 The quick brown fox jumps over the lazy dog.
    h5 The quick brown fox jumps over the lazy dog.
    h6 The quick brown fox jumps over the lazy dog.
</template>

<script>
import {mapGetters} from 'vuex'
import PageSplit from '@nylira/vue-page-split'
import PageHeader from '@nylira/vue-page-header'
import ArticleBody from '@nylira/vue-article-body'
export default {
  name: 'page-assets',
  components: {
    PageSplit,
    PageHeader,
    ArticleBody
  },
  computed: { ...mapGetters(['links']) },
  mounted () {
    document.title = 'Logo - Cosmos - Internet of Blockchains'
  }
}
</script>

<style lang="stylus">
.variables
  padding 1rem

  h1, h2, h3, h4, h5, h6
    border-bottom 1px solid #ddd
    padding 1rem 0
  h1
    font-weight 500
    font-size 2.25rem
    line-height 3rem
  h2
    font-weight 700
    font-size 1.75rem
    line-height 2.25rem
  h3
    font-weight 400
    font-size 1.5rem
    line-height 2rem
  h4
    font-weight 400
    font-size 1.25rem
    line-height 1.75rem

@media screen and (min-width: 768px)
  .variables
    padding 3rem
</style>
