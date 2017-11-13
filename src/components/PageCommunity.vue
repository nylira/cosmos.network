<template lang="pug">
page(title="Community" subtitle="Join and contribute to the vibrant Cosmos community.")
  part(title='Discuss & Chat')
    card-community(
      dt='Forum'
      dd='Read the latest developer updates and join community discussions.'
      icon='forum'
      :anchor='links.cosmos.community.discourse')
    card-community(
      dt='Community Chat (Telegram)'
      dd='Join the `cosmosproject` group to join our community chat.'
      icon='chat'
      :anchor='links.cosmos.community.telegram')
    card-community(
      dt='Developer Chat (Matrix)'
      dd='Join the #cosmos:matrix.org room to join our developer chat.'
      icon='chat'
      :anchor='links.cosmos.community.matrix')
    card-community(
      dt='IRC'
      dd='Join the #cosmos_network channel on the irc.freenode.net server.'
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
      dd='Keep up with updates on our thread in the BitcoinTalk forum.'
      icon='forum'
      :anchor='links.cosmos.community.bitcointalk')
    card-community(
      dt='Facebook'
      dd='Like the `cosmosproject` page to get updates in your Facebook feed.'
      icon='people'
      :anchor='links.cosmos.community.facebook')
    card-community(
      dt='Reddit'
      dd='Subscribe to /r/cosmosnetwork to get news on your Reddit homepage.'
      icon='forum'
      :anchor='links.cosmos.community.reddit')
</template>

<script>
import {mapGetters} from 'vuex'
import CardCommunity from './CardCommunity'
import Page from './common/NiPage'
import Part from './common/NiPart'
export default {
  name: 'page-community',
  components: {
    CardCommunity,
    Page,
    Part
  },
  computed: {
    ...mapGetters(['links'])
  },
  mounted () {
    document.title = 'Community - Cosmos - Internet of Blockchains'
  }
}
</script>
