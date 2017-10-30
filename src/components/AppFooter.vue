<template lang='pug'>
.app-bottom(v-bind:class="{ 'toc-visible': tocVisible }")
  section-bottom
  footer.app-footer
    .sections
      section.copyright
        span &copy; {{ new Date().getFullYear() }} Interchain Foundation
        span.address
          p c/o Gubelstrasse 11
          p 6300 Zug, Switzerland
      section
        header Foundation
        nav
          router-link(to='/about', @click.native='close', exact='') About
          router-link(to='/faq', @click.native='close', exact='') FAQ
          router-link(to='/assets') Logo Assets
          a(:href='links.cosmos.fundraiser' target="_blank") Fundraiser
      section
        header Community
        a(:href='links.cosmos.bitcointalk' target="_blank")
          i.fa.fa-btc
          | BitcoinTalk
        a(:href='links.cosmos.reddit' target="_blank")
          i.fa.fa-reddit
          | Reddit
        a(:href='links.cosmos.chat' target="_blank")
          i.fa.fa-comments-o
          | Chat
        a(:href='links.cosmos.twitter' target="_blank")
          i.fa.fa-twatter
          | Twitter
      section
        header Developers
        a(:href='links.cosmos.github.organization' target='_blank') Cosmos on GitHub
        a(:href='links.cosmos.github.sdk' target='_blank') Cosmos SDK
        a(:href='links.cosmos.github.ui' target='_blank') Cosmos UI
        a(:href='links.tm.careers' target='_blank') Work at Tendermint
</template>

<script>
import { mapGetters } from 'vuex'
import SectionBottom from './SectionBottom'
export default {
  name: 'app-footer',
  components: {
    SectionBottom
  },
  computed: {
    ...mapGetters([ 'faqTocVisible', 'whitepaperTocVisible', 'links' ]),
    tocVisible () {
      let name = this.$route.name
      let visible = false
      if (name === 'faq' && this.faqTocVisible) { visible = true }
      if (name === 'whitepaper' && this.whitepaperTocVisible) { visible = true }
      return visible
    }
  }
}
</script>

<style lang="stylus">
@require '../styles/variables.styl'

.app-footer
  .sections
    padding 1rem 0
    color c-app-fg
    margin 0 auto

    display flex
    flex-flow row wrap

  section
    flex 0 0 50%
    padding 1rem 0.5rem

    header
      padding 0.25rem 0.5rem

      color light

      font-size 0.75rem
      font-weight bold
      text-transform uppercase
      letter-spacing 0.0625em

    a, span
      color txt
      display block
      padding 0.25rem 0.5rem
      i.fa
        display inine-block
        text-align center
        width 1.5rem
        margin-right 0.5rem
    &.copyright
      .address
        margin-top 0.5rem
        font-size 0.75rem
        color light

@media screen and (min-width: 360px)
  .app-footer
    .sections
      padding 1rem 0.5rem
    .section
      padding 1rem

@media screen and (min-width: 414px)
  .app-footer
    .sections
      padding 1rem

@media screen and (min-width: 768px)
  .app-footer
    .sections
      padding 2rem
    section
      flex 0 0 25%
      header
        margin-bottom 1rem

      &.copyright
        .address
          font-size 0.875rem

@media screen and (min-width: 1024px)
  .app-bottom.toc-visible
    margin-left 20rem

  .app-footer
    .sections
      max-width 1024px
    section
      flex 0 0 25%

      &.copyright
        .address
          font-size 1rem

@media screen and (min-width: 1280px)
  .app-bottom.toc-visible
    margin-left 26rem

  .app-footer
    .sections
      max-width 1280px
    section
      flex 0 0 25%
</style>
