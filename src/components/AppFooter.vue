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
    part(title="Get Newsletter")
      form-email-signup
  .app-footer-row
    part(title='Discuss & Chat')
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
    part(title='Social Media')
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
import Btn from '@nylira/vue-button'
import CardCommunity from './CardCommunity'
import FormEmailSignup from './FormEmailSignup'
import Part from './common/NiPart'
export default {
  name: 'page-community',
  components: {
    Btn,
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
  border-top 1px solid bc

.app-footer-container
  max-width 1024px
  margin 0 auto

.app-footer-row
  width 100%

.actions
  .ni-part
    border-bottom 1px solid bc

  .ni-part-main
    padding 1rem

    .ni-btn:only-child
      width 100%
      max-width 20rem

    .form-email-signup
      max-width 20rem
      margin 0

.app-footer-copyright
  border-top 1px solid bc
  padding 1rem
  color dim
  text-align center

@media screen and (min-width: 768px)
  .app-footer-row
    display flex
    flex-flow row nowrap

    .ni-part
      flex 1

    .ni-part:first-child
      border-right 1px solid bc
</style>
