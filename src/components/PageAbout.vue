<template lang="pug">
page(:title="metadata.title")
  div(slot="subtitle")
    p Cosmos is run by the Interchain Foundation (ICF). The Tendermint team has been contracted by the ICF to develop the Cosmos Essential Software Services (CESS).

  div(slot="menu")
    btn(type="link" to="/assets" value="Media Assets")
    btn(type="anchor" href="https://tendermint.com/careers" value="Careers" target="_blank")

  part(title='Interchain Foundation')
    .people
      card-person(group='icf', v-for="person in ppl('icf')", :key='person.slug', :person='person')
  part(title='Tendermint Team')
    .people
      card-person(group='aib', v-for="person in ppl('aib')", :key='person.slug', :person='person')
</template>

<script>
import { mapGetters } from 'vuex'
import Btn from '@nylira/vue-button'
import CardPerson from './CardPerson'
import Page from './common/NiPage'
import Part from './common/NiPart'
export default {
  name: 'page-about',
  components: {
    Btn,
    CardPerson,
    Page,
    Part
  },
  computed: {
    ...mapGetters(['allPeople'])
  },
  data () {
    return {
      metadata: {
        title: 'About',
        desc: 'Tendermint, Inc. is currently working full time on bringing Cosmos to reality. We are hiring!'
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
    },
    meta () {
      return [
        { n: 'description', c: this.metadata.desc },
        { n: 'twitter:title', c: this.metadata.title },
        { n: 'twitter:description', c: this.metadata.desc },
        { p: 'og:title', c: this.metadata.title },
        { p: 'og:description', c: this.metadata.desc }
      ]
    }
  },
  methods: {
    ppl (tag) { return this.allPeople.filter(p => p.groups[tag]) }
  }
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'

.people
  max-width 1024px

@media screen and (min-width: 768px)
  .people
    display flex
    flex-flow row wrap

    .person-wrapper
      flex 0 0 50%

@media screen and (min-width: 1280px)
  .people
    margin 0 auto
    .person-wrapper
      flex 0 0 33.333%
</style>
