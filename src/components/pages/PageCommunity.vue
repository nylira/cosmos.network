<template lang="pug">
page(
  title="Community"
  subtitle="These are the only official Cosmos communication channels.")

  part(title='Social Media'): .community-cards
    card-social(
      dt='Twitter'
      dd='Follow @cosmos, our official account'
      icon='twitter'
      :anchor='links.cosmos.community.twitter')
    card-social(
      dt='Medium'
      dd='Read the latest on the Cosmos Blog'
      icon='medium'
      :anchor='links.cosmos.blog')
  part(title='Chat'): .community-cards
    card-social(
      dt='Community Chat'
      dd='Join cosmosproject on Telegram'
      icon='telegram'
      :anchor='links.cosmos.community.telegram')
    card-social(
      dt='Developer Chat'
      dd='Join #cosmos:matrix.org with Riot'
      icon='rocketchat'
      :anchor='links.cosmos.community.matrix')
    card-social(
      dt='IRC'
      dd='Join #cosmos_network on irc.freenode.net.'
      icon='hashtag'
      :anchor='links.cosmos.community.irc')
  part(title='Forums'): .community-cards
    card-social(
      dt='Reddit'
      dd='Subscribe to /r/cosmosnetwork'
      icon='reddit'
      :anchor='links.cosmos.community.reddit')
    card-social(
      dt='Forum'
      dd='Discuss the Cosmos Network'
      icon='discourse'
      :anchor='links.cosmos.community.discourse')
    card-social(
      dt='BitcoinTalk'
      dd='Keep up with our thread on BitcoinTalk'
      icon='bitcoin'
      :anchor='links.cosmos.community.bitcointalk')
</template>

<script>
import { mapGetters } from 'vuex'
import CardSocial from 'cards/CardSocial'
import Page from 'common/NiPage'
import Part from 'common/NiPart'
import TextContainer from 'common/NiTextContainer'
export default {
  name: 'page-community',
  metaInfo: { title: 'Community' },
  components: {
    CardSocial,
    Part,
    Page,
    TextContainer
  },
  computed: {
    ...mapGetters(['links'])
  }
}
</script>
