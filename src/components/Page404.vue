<template lang="pug">
page-split
  page-header(title='Error 404', subtitle='Page Not Found', slot='header', type='split')
  article-body
    p
      strong Whoops!
      |  The page you visited either does not exist or has been moved in a website reshuffle. We're sorry for the inconvenience. Try visiting one of these pages below:
    ul
      li: router-link(:to="'/'") Home
      li: router-link(:to="'/whitepaper'") Whitepaper
      li: router-link(:to="'/events'") Conferences
      li: router-link(:to="'/hackatom'") HackAtom
      li: router-link(:to="'/validators'") Validators
      li: a(:href='links.cosmos.blog', target='_blank') Blog
    p Please notify us at #[a(:href="'mailto:' + links.cosmos.email") {{links.cosmos.email}} ] and we will fix this error as soon as we can. Thank you for your patience.
</template>

<script>
import {mapGetters} from 'vuex'
import PageSplit from '@nylira/vue-page-split'
import PageHeader from '@nylira/vue-page-header'
import ArticleBody from '@nylira/vue-article-body'
export default {
  name: 'page-404',
  components: {
    PageSplit,
    PageHeader,
    ArticleBody
  },
  computed: { ...mapGetters(['links']) },
  mounted () {
    document.title = '404 - Cosmos - Internet of Blockchains'
  }
}
</script>
