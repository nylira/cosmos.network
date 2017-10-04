<template lang="pug">
.page-validators
  .prerelease PRE-RELEASE
  header.v-page-header
    .backdrop: img(src="../assets/images/bg-cover.png")
    .v-container
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

  section.v-section: .v-container
    header.v-section-header Introduction
    main.v-section-main
      p Our goal for this Validator Program is to build out a robust network of validators before we launch the Cosmos Hub in December 2017.
      p The Interchain Foundation is now accepting candidates into our Validator Program. As a candidate, you will work closely with Zaki Manian (ICF Advisor) to build a secure node capable of validating transactions on the Cosmos network.

  section.v-section: .v-container
    header.v-section-header Phases
    main.v-section-main
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

  section.v-section: .v-container
    header.v-section-header After Launch
    main.v-section-main
      p After launch in Q4, the atom holders will select a group of a dynamic set of 100 validators to execute the Tendermint Consensus protocol in the Cosmos Hub. The design of the Cosmos network is to strongly incentives every Atom holder to play an active and ongoing role 

  section.v-section: .v-container
    header.v-section-header Our Goals
    main.v-section-main
      ul
        li To launch the network with credible set of institutions in the genesis block to ensure end to end security for the network
        li To educate the Cosmos community on the delegation game and rewards 
        li The economics of validation game and rewards and risks of each player
        li To establish best practices for running a validator.
        li To make recommendations to the network about validators that meet or exceed the criteria in our best practices guide.

  section.v-section: .v-container
    header.v-section-header Validator Candidates
    main.v-section-main
      p This list shows the companies and individuals who have joined the Validator Program.
      li-validator(v-for="i in validators" key="i.companyName" :validator="i")

  section.v-section: .v-container
    header.v-section-header Join the Validator Program
    main.v-section-main
      p Get more information and discuss the finer details of being a Cosmos Validator on our community chat:
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
import LiValidator from './LiValidator'
export default {
  name: 'page-validators',
  components: {
    Btn,
    LiValidator
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

.prerelease
  position fixed
  bottom 0.5rem
  right 0.5rem
  border 2px solid #f00
  line-height 2rem
  font-weight bold
  padding 0 0.5rem
  color #f00

.v-container
  max-width 1024px
  margin 0 auto

.v-page-header
  background #000
  position relative
  overflow hidden

  .backdrop
    position absolute
    bottom -10vw - 10vh
    right -10vw - 10vh
    z-index 0
    img
      width 33vw + 33vh
      opacity 0.5

  .v-container
    position relative
    z-index 10

    height 20rem
    padding 1.5rem
    display flex
    flex-flow column nowrap

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
  .ni-btn
    max-width 16rem

.v-section
  border-top 1px solid bc

.v-section-header
  padding 1.5rem 1rem 0
  font-weight bold
  font-size 1.5rem
  line-height 1.25

.v-section-main
  padding 1rem 1rem 1.5rem

  .ni-btn
    width 100%
    max-width 16rem

  p, .phase
    margin-bottom 1.5rem
    &:last-child
      margin-bottom 0

  > ul
    list-style square
    padding-left 1.5rem
    li
      margin-bottom 0.5rem
      &:last-of-type
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

@media screen and (min-width: 768px)
  .v-page-header .v-container
    padding 3rem

  .v-page-header .title h2
    font-size 1.25rem
  .v-page-header .title h1
    font-size 2.5rem

  .v-section .v-container
    .v-section-header
      padding 3rem 3rem 0 3rem

    .v-section-main
      padding 3rem

@media screen and (min-width: 1024px)
  .v-section .v-container
    display flex

    .v-section-header
      padding 3rem
      flex 0 0 320px

    .v-section-main
      padding 3rem 3rem 3rem 0
      flex 1
</style>
