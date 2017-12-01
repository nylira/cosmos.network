<template lang="pug">
page-split
  page-header(:title='metadata.title', :subtitle='metadata.desc', slot='header', type='split')
  ni-section
    div(slot="title") Upcoming Events
    card-event(:events='eventsUpcoming')
  ni-section
    div(slot="title") Past Events
    card-event(:events='eventsPast')
</template>

<script>
import moment from 'moment'
import { mapGetters } from 'vuex'
import CardEvent from './CardEvent'
import NiSection from './NiSection'
import PageHeader from '@nylira/vue-page-header'
import PageSplit from '@nylira/vue-page-split'
export default {
  name: 'page-events',
  components: {
    CardEvent,
    NiSection,
    PageSplit,
    PageHeader
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
