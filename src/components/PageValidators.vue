<template lang="pug">
.page-validators
  header.v-page-header
    .title
      h2 Introducing the
      h1 Validator Program
    btn(
      type="anchor"
      icon="comments-o"
      href="https://cosmos.rocket.chat/channel/cosmos_validators"
      value="Chat with us"
      target="_blank"
      size="lg")

  section.v-section: .v-section-container
    header.v-section-header Introduction
    main.v-section-main
      p Our goal for this validator program is to build out a robust network of validators before we launch the Cosmos Hub in December 2017.
      p The Interchain Foundation is now accepting candidates into our validator program. As a candidate, you will work closely with Zaki Manian (ICF Advisor) to build a secure node capable of validating transactions on the Cosmos network.

      .phase
        .phase-header Phase 1 - Onboarding
        ul
          li Release of the Delegation Game testnet 
          li On boarding of candidates to the testnet
          li Early drafts of best practices
      .phase
        .phase-header Phase 2 - Preproduction
        ul
          li Finalizing Validator Game Economics
          li Deployment of pre-production systems on Testnet
          li Publication of best practices and recommendation criteria
      .phase
        .phase-header Phase 3 - Launch 
        ul
          li Audits of Validator program participants
          li Recommendation for Genesis Validators and Staking participants
          li Network Launch

  section.v-section: .v-section-container

    header.v-section-header After Launch
    main.v-section-main
      p After launch in Q4, the atom holders will select a group of a dynamic set of 100 validators to execute the Tendermint Consensus protocol in the Cosmos Hub. The design of the Cosmos network is to strongly incentives every Atom holder to play an active and ongoing role 

  section.v-section: .v-section-container
    header.v-section-header Our Goals
    main.v-section-main
      ul
        li To launch the network with credible set of institutions in the genesis block to ensure end to end security for the network
        li To educate the Cosmos community on the delegation game and rewards 
        li The economics of validation game and rewards and risks of each player
        li To establish best practices for running a validator.
        li To make recommendations to the network about validators that meet or exceed the criteria in our best practices guide.

  section.v-section: .v-section-container
    header.v-section-header Join the Validator Program
    main.v-section-main
      btn(
        type="anchor"
        icon="comments-o"
        href="https://cosmos.rocket.chat/channel/cosmos_validators"
        value="Chat with us"
        target="_blank"
        size="lg")
</template>

<script>
import { mapGetters } from 'vuex'
import Btn from '@nylira/vue-button'
export default {
  name: 'page-validators',
  components: {
    Btn
  },
  computed: {
    ...mapGetters(['validators'])
  },
  head: {
    title () {
      return {
        inner: 'Validator Program',
        separator: '-',
        complement: 'Cosmos - Internet of Blockchains'
      }
    }
  }
}
</script>

<style lang="stylus">
@require '~@/styles/variables.styl'

.v-page-header
  padding 1.5rem
  background #000

  display flex
  flex-flow column nowrap
  height 20rem

  .title
    flex 1

    h2
      color #999
      text-transform uppercase
      margin-bottom 0.25rem

    h1
      font-size 2rem
      line-height 1.25
      color #eee

      margin-bottom 1.5rem
      font-weight 500

.v-section
  border-top 1px solid bc

.v-section-container
  max-width 1024px
  margin 0 auto

.v-section-header
  padding 1.5rem 1rem 0
  font-weight bold
  font-size 1.5rem
  line-height 1.25

.v-section-main
  padding 1rem 1rem 1.5rem


  p, .phase
    margin-bottom 1.5rem
    &:last-child
      margin-bottom 0

  .phase
    border 1px solid bc
    .phase-header
      font-weight bold
      border-bottom 1px solid bc
      background c-app-fg
      line-height 2rem
      padding 0 0.5rem

    ul
      li
        border-bottom 1px dotted bc
        padding 0.5rem
        &:last-of-type
          border-bottom none
</style>
