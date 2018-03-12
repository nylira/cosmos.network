<template lang="pug">
page(
  title="Community"
  subtitle="The channels listed below are the official Cosmos communities.")

  part(title='Social Media'): .community-cards
    card-community(
      dt='Community Chat'
      dd='Join cosmosproject on Telegram'
      icon='telegram'
      :anchor='links.cosmos.community.telegram')
    card-community(
      dt='Developer Chat'
      dd='Join #cosmos:matrix.org with Riot'
      icon='rocketchat'
      :anchor='links.cosmos.community.matrix')
    card-community(
      dt='Forum'
      dd='Discuss the Cosmos Network.'
      icon='discourse'
      :anchor='links.cosmos.community.discourse')
    card-community(
      dt='IRC'
      dd='Join #cosmos_network on irc.freenode.net.'
      icon='hashtag'
      :anchor='links.cosmos.community.irc')
  part(title='Social Media'): .community-cards
    card-community(
      dt='Medium'
      dd='Read the latest on the Cosmos Blog'
      icon='medium'
      :anchor='links.cosmos.blog')
    card-community(
      dt='Twitter'
      dd='Follow @cosmos, our official account'
      icon='twitter'
      :anchor='links.cosmos.community.twitter')
    card-community(
      dt='Reddit'
      dd='Subscribe to /r/cosmosnetwork'
      icon='reddit'
      :anchor='links.cosmos.community.reddit')
    card-community(
      dt='BitcoinTalk'
      dd='Keep up with our thread on BitcoinTalk'
      icon='bitcoin'
      :anchor='links.cosmos.community.bitcointalk')
</template>

<script>
import { mapGetters } from 'vuex'
import CardCommunity from 'cards/CardCommunity'
import Page from 'common/NiPage'
import Part from 'common/NiPart'
import TextContainer from 'common/NiTextContainer'
export default {
  name: 'page-community',
  metaInfo: { title: 'Community' },
  components: {
    CardCommunity,
    Part,
    Page,
    TextContainer
  },
  computed: {
    ...mapGetters(['config'])
  }
}
</script>
