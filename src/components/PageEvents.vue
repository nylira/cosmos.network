<template lang="pug">
page(:title="metadata.title" :subtitle="metadata.desc")
  part(title='Upcoming Events' v-if="eventsUpcoming.length > 0")
    events(:events='eventsUpcoming')
  part(title='Past Events')
    events(:events='eventsPast' v-if="eventsPast.length > 0")
</template>

<script>
import moment from 'moment'
import { mapGetters } from 'vuex'
import Events from './Events'
import Page from './common/NiPage'
import Part from './common/NiPart'
export default {
  name: 'page-events',
  components: {
    Events,
    Page,
    Part
  },
  computed: {
    ...mapGetters(['allEvents']),
    eventsPast () {
      if (this.allEvents && this.allEvents.length > 0) {
        return this.allEvents.filter(i => moment(i.dates.end).isBefore(moment()))
      } else {
        return []
      }
    },
    eventsUpcoming () {
      if (this.allEvents && this.allEvents.length > 0) {
        return this.allEvents.filter(i => moment(i.dates.end).isAfter(moment()))
      } else {
        return []
      }
    }
  },
  data: () => ({
    metadata: {
      title: 'Conferences',
      desc: 'Meet up with our team and community members at blockchain conferences around the world.'
    }
  }),
  head: {
    title () {
      return {
        inner: this.metadata.title,
        separator: '-',
        complement: 'Cosmos - Internet of Blockchains'
      }
    }
  }
}
</script>
