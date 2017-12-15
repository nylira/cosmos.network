<template lang="pug">
page(title="Team" subtitle="Cosmos is run by the Interchain Foundation (ICF). The Tendermint team has been contracted by the ICF for development.")

  part(title='Interchain Foundation')
    cards.people
      card-person(group='icf', v-for="person in ppl('icf')", :key='person.slug', :person='person')

  part(title='Tendermint Team')
    cards.people
      card-person(group='aib', v-for="person in ppl('aib')", :key='person.slug', :person='person')
</template>

<script>
import { mapGetters } from 'vuex'
import Btn from '@nylira/vue-button'
import CardPerson from 'comp/CardPerson'
import Cards from 'common/NiCards'
import Page from 'common/NiPage'
import Part from 'common/NiPart'
export default {
  name: 'page-about-index',
  components: {
    Btn,
    Cards,
    CardPerson,
    Page,
    Part
  },
  computed: {
    ...mapGetters(['allPeople'])
  },
  methods: {
    ppl (tag) { return this.allPeople.filter(p => p.groups[tag]) }
  },
  mounted () {
    document.title = 'About - Cosmos - Internet of Blockchains'
  }
}
</script>

<style lang="stylus">
@import '~variables'

.people
  margin-bottom 1rem

@media screen and (min-width: 768px)
  .people
    .ni-card-person
      flex 0 0 50%

@media screen and (min-width: 1024px)
  .people
    .ni-card-person
      flex 0 0 33.333%
</style>
