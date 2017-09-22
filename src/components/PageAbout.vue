<template>
  <page-split>
    <page-header
      :title="metadata.title"
      subtitle="Cosmos is run by the Interchain Foundation (ICF).<br><br>The Tendermint team has been contracted by the ICF to develop the Cosmos Essential Software Services (CESS).<br><br><a href='https://tendermint.com/careers' target='_blank'>Tendermint is hiring!</a>"
      slot="header"
      type="split">
    </page-header>
    <ni-section>
      <div slot="title">Interchain Foundation</div>
      <div class="people">
        <card-person
          group="icf"
          v-for="person in ppl('icf')"
          :key="person.slug"
          :person="person">
        </card-person>
      </div>
    </ni-section>
    <ni-section>
      <div slot="title">Tendermint Team</div>
      <div class="people">
        <card-person
          group="aib"
          v-for="person in ppl('aib')"
          :key="person.slug"
          :person="person">
        </card-person>
      </div>
    </ni-section>
  </page-split>
</template>

<script>
import { mapGetters } from 'vuex'
import CardPerson from './CardPerson'
import NiSection from './NiSection'
import PageHeader from '@nylira/vue-page-header'
import PageSplit from '@nylira/vue-page-split'
export default {
  name: 'page-about',
  components: {
    CardPerson,
    NiSection,
    PageSplit,
    PageHeader
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
