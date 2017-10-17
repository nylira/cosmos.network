<template lang="pug">
page-split
  page-header(:title='metadata.title', :subtitle='metadata.desc', slot='header', type='split')
  ni-section
    card-event(:events='allEvents')
</template>

<script>
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
    ...mapGetters(['allEvents'])
  },
  data () {
    return {
      metadata: {
        title: 'Conferences',
        desc: 'Meet up with our team and community members at blockchain conferences around the world.'
      }
    }
  },
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
