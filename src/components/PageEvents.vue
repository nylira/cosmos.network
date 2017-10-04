<template>
  <page-split>
    <page-header
      :title="metadata.title"
      :subtitle="metadata.desc"
      slot="header"
      type="split">
    </page-header>
    <ni-section>
      <card-events :events="allEvent">
      </card-events>
  </ni-section>
</page-split>
</template>

<script>
import { mapGetters } from 'vuex'
import CardEvents from './CardEvents'
import NiSection from './NiSection'
import PageHeader from '@nylira/vue-page-header'
import PageSplit from '@nylira/vue-page-split'
export default {
  name: 'page-events',
  components: {
    CardEvents,
    NiSection,
    PageSplit,
    PageHeader
  },
  computed: {
    ...mapGetters(['allEvent'])
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
