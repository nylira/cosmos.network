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
        header.h6 Foundation
        nav
          router-link(to='/about', @click.native='close', exact='') About
          router-link(to='/faq', @click.native='close', exact='') FAQ
          router-link(to='/assets') Logo Assets
          a(:href='links.cosmos.fundraiser' target="_blank") Fundraiser
      section
        header.h6 Community
        a(:href='links.cosmos.bitcointalk' target="_blank") BitcoinTalk
        a(:href='links.cosmos.reddit' target="_blank") Reddit
        a(:href='links.cosmos.chat' target="_blank") Chat
        a(:href='links.cosmos.twitter' target="_blank") Twitter
      section
        header.h6 Developers
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
    color app-fg
    margin 0 auto

    display flex
    flex-flow row wrap

  section
    flex 0 0 50%
    padding 1rem 0.5rem

    header
      padding 0.25rem 0.5rem

      color dim

    a, span
      color txt
      display block
      padding 0.25rem 0.5rem

    a
      &:hover
        color hover

    &.copyright
      .address
        margin-top 0.5rem
        color dim

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
      padding 2rem 0
    section
      flex 0 0 25%
      header
        margin-bottom 1rem

@media screen and (min-width: 1024px)
  .app-bottom.toc-visible
    margin-left 20rem

  .app-footer
    .sections
      max-width 1024px
    section
      flex 0 0 25%
</style>
