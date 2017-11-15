<template lang="pug">
.app-footer: .app-footer-container
  .app-footer-row.actions
    part(title="Get Started")
      btn#whitepaper-btn(
        type="link"
        to="/intro"
        size="lg"
        icon="description"
        value="Read Introduction")
    part(title="Get Newsletter"): form-email-signup
  .app-footer-row
    part(title='Discuss & Chat'): .community-cards
      card-community(
        dt='Forum'
        dd='Read and discuss the latest developer updates.'
        icon='forum'
        :anchor='links.cosmos.community.discourse')
      card-community(
        dt='Community Chat (Telegram)'
        dd='Join the `cosmosproject` group on Telegram.'
        icon='chat'
        :anchor='links.cosmos.community.telegram')
      card-community(
        dt='Developer Chat (Matrix)'
        dd='Join the #cosmos:matrix.org room with Riot.'
        icon='chat'
        :anchor='links.cosmos.community.matrix')
      card-community(
        dt='IRC'
        dd='Join #cosmos_network on irc.freenode.net.'
        icon='chat'
        :anchor='links.cosmos.community.irc')
    part(title='Social Media'): .community-cards
      card-community(
        dt='Twitter'
        dd='Follow @cosmos, our official Twitter account.'
        icon='chat'
        :anchor='links.cosmos.community.twitter')
      card-community(
        dt='BitcoinTalk'
        dd='Keep up with our thread on BitcoinTalk.'
        icon='forum'
        :anchor='links.cosmos.community.bitcointalk')
      card-community(
        dt='Facebook'
        dd='Like the `cosmosproject` page.'
        icon='people'
        :anchor='links.cosmos.community.facebook')
      card-community(
        dt='Reddit'
        dd='Subscribe to /r/cosmosnetwork.'
        icon='forum'
        :anchor='links.cosmos.community.reddit')
  .app-footer-copyright &copy; {{ new Date().getFullYear() }} Interchain Foundation
</template>

<script>
import {mapGetters} from 'vuex'
import Cards from './common/NiCards'
import Btn from '@nylira/vue-button'
import CardCommunity from './CardCommunity'
import FormEmailSignup from './FormEmailSignup'
import Part from './common/NiPart'
export default {
  name: 'page-community',
  components: {
    Btn,
    Cards,
    CardCommunity,
    FormEmailSignup,
    Part
  },
  computed: {
    ...mapGetters(['links'])
  }
}
</script>

<style lang="stylus">
@require '../styles/variables.styl'

.app-footer
  background darken(app-bg, 12.5%)
  padding-top 1.5rem

.app-footer-container
  max-width 1024px
  margin 0 auto

.app-footer-row
  width 100%
  margin-bottom 1rem

.actions
  .ni-part-main
    padding 1rem
    background app-fg
    margin-top 0.25rem

    .ni-btn:only-child
      width 100%
      max-width 20rem

    .form-email-signup
      max-width 20rem
      margin 0

.app-footer-copyright
  padding 1rem
  color dim

@media screen and (min-width: 768px)
  .app-footer
    padding 3rem 0 1.5rem

  .app-footer-row
    display flex
    flex-flow row nowrap

    .ni-part:first-child
      margin-right 0.5rem
    .ni-part:last-child
      margin-left 0.5rem

    .ni-part
      flex 1
</style>
