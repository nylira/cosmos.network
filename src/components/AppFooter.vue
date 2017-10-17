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
          router-link(to='/fundraiser') Fundraiser
      section
        header Community
        a(href='https://bitcointalk.org/index.php?topic=1607111.0')
          i.fa.fa-btc
          | BitcoinTalk
        a(href='http://webchat.freenode.net/?channels=%23cosmos_network')
          i.fa.fa-commenting-o
          | IRC
        a(href='https://www.reddit.com/r/cosmosnetwork')
          i.fa.fa-reddit
          | Reddit
        a(href='https://cosmos.rocket.chat')
          i.fa.fa-rocket
          | Chat on Rocket
        a(href='https://twitter.com/cosmos')
          i.fa.fa-twatter
          | Twitter
      section
        header Developers
        a(href='https://github.com/tendermint/tendermint/wiki/Contributing' target='_blank') Contributing
        a(href='https://tendermint.com/careers' target='_blank') Work at Tendermint
        a(href='https://github.com/cosmos' target='_blank') GitHub (Cosmos)
        a(href='https://github.com/tendermint' target='_blank') GitHub (Tendermint)
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
    ...mapGetters([
      'faqTocVisible',
      'whitepaperTocVisible'
    ]),
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
