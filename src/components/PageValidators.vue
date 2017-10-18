<template lang="pug">
.page-validators
  header.v-page-header
    .v-container
      .title
        h2 Cosmos
        h1 Validator Working Group (VWG)
      .validator-icon: img(src="../assets/images/cosmos-validator-small.png")

  section.v-section: .v-container
    header.v-section-header What are Cosmos validators?
    main.v-section-main
      h3 Role
      p Validators are responsible for committing new blocks in the blockchain. These validators participate in the consensus protocol by broadcasting votes which contain cryptographic signatures signed by each validator's public key. Validators have a cryptographic key-pair for signing and have some amount of “voting power” in proportion to the number of staked ATOMs.
      p Some Proof-of-Stake consensus algorithms aim to create a completely decentralized system where all stakeholders &ndash; even those who are not always online &ndash; participate in committing blocks. Tendermint has a different approach to block creation&mdash;Cosmos validator nodes need to be able to demonstrate 100% uptime. Maintaining high availability potentially involves multiple ISPs, redundant server power, and backup hosting locations.

      h3 Economics
      p Validators can bond their own ATOMs or have ATOMs "delegated", or staked, to them by holders of the token. The Cosmos Hub will have 100 validators, but over time this will increase to 300 validators according to a predefined schedule. The validators are determined by who has the most stake delegated to them — the top 100 full nodes with the most stake will become Cosmos validators.
      p Validators and the parties that delegate stake to them will earn ATOMs as transaction fees and block rewards through execution of the Tendermint consensus protocol. If validators double sign, are frequently offline or are compromised in some arbitrary way, their staked ATOMs can be slashed.
      p Nuts and bolts of validator economics about bonding period, slashing conditions, etc. will be finalized come late October/early November.

      h3 Ethos
      p The validator bears the burden of securing the Cosmos network and is in return rewarded for “good” behavior as defined by protocol rules. The philosophy of acting as responsible stewards to the network is a goal that Tendermint seeks to meet through well-defined economic incentives for rational actors.
      p While validator candidacy is determined by the weight of their staked tokens, in Tendermint Proof-of-Stake, the incentives for whales and users alike are more closely aligned than in Proof-of-Work blockchains because whales with staked tokens now hold stake in the network security itself, not just in the value of the token. Pumping a token for the sake of inflating the price becomes a disincentive for the staked token holder because: 1) a significant portion of their tokens are bonded for a long period of time (>2 months), and 2) introducing unstable growth to the network will make their work of securing the network more difficult.


  section.v-section: .v-container
    header.v-section-header What's the process of becoming a validator?
    main.v-section-main
      h3 1. Join our Validator Working Group
      p The goal of the Validator Working Group (VWG) is to join a community of validators to learn the best practices of running an effective validator node. Join our Matrix chat channel:
      
      btn(
        target="_blank"
        size="lg"
        type="anchor"
        :href="links.cosmos.validators.chat"
        icon="comments-o"
        value="Join #cosmos_validators")

      p The VWG can act as resource and source of support for those running validating nodes on a full-time basis. The learning curve for setting up secure validating nodes and infrastructure monitoring can be steep and the pitfalls various. To bootstrap initial validators and provide ongoing support, a community-driven effort is critical for a self-sustaining ecosystem of expert validators securing the Cosmos network.

      p The Tendermint team and a few independent security experts will lead weekly roundtables where validators can share their hard lessons, best practices and experiences. Since this is an open-source community, validators are encouraged to create pull requests to the Cosmos Validator Guide repository (coming soon) where best practices are pooled. Remote roundtables where the VWG convenes will be held in our Matrix chat channel.

      h3 2. Become a validator on our testnet 

      p The goal of the Validator Working Group is to build a robust network of validators before we launch the Cosmos Hub in December 2017, You can learn how to properly set up and secure a full validator node.

      // TODO: Gaia Testnet Tutorial
      // p Confirm with Rige to finalize this doc: https://github.com/cosmos/gaia/pull/22 URL link to ATLAS-GAIA-TESTNET TUTORIAL. 

      btn(
        target="_blank"
        size="lg"
        type="anchor"
        :href="links.cosmos.validators.tutorials.text"
        icon="book"
        value="Read the tutorial")

      iframe.youtube(:src="links.cosmos.validators.tutorials.video" frameborder="0" allowfullscreen)

      p Note that this is a learning opportunity. It will not guarantee your placement in the validator set upon mainnet launch or at any future time. 

      h3 3. Independent attestation (optional)

      p We encourage interested validators to work with Independent Attestation Organizations. These are security industry experts within the Validator Working Group who have the knowledge to build up best-in-class services. They include:
      ul
        li #[strong Documentation: ] maintain a high-quality set of documented procedures on how they’ve set up their validation node.
        li #[strong High Availability: ] ability to demonstrate near 100% uptime.
        li #[strong Technical Support: ] operators are needed to continuously monitor their nodes and respond to issues on a 24/7 basis.
        li #[strong General Attack Mitigation: ] as the Cosmos network becomes more valuable, the risk of attacks increases. Validators need to be vigilant of zero day attacks and build patches to prevent such attempts to undermine the network’s security.
        li #[strong Denial-of-Service Mitigation: ] if a validator is DoS’d and is prevented from committing blocks, this poses significant risk to the liveness of the network. Thus, the protocol can slash a validator’s staked tokens.
        li #[strong Secure Hardware: ] introducing hardware into the validator network requires those hardware to be undeniably secure. Taking measures like purchasing server components in person, observing hardware assembly and auditing of hardware by security experts are expected.
        li #[strong Physical Attack Mitigation: ] servers should be located in physically secure facilities with access controls.

      p Stay tuned for follow-up information about the Validator Working Group as we near mainnet launch in December. 

  section.v-section: .v-container
    header.v-section-header Join Cosmos VWG 
    main.v-section-main
      h3 Chat with us to learn more
      p Get more information and discuss the finer details of being a Validator on our community chat:

      btn(
        target="_blank"
        size="lg"
        type="anchor"
        :href="links.cosmos.validators.chat"
        icon="comments-o"
        value="Join #cosmos_validators")

  // section.v-section: .v-container
    header.v-section-header Validator Candidates
    main.v-section-main
      p This list shows the companies and individuals who have joined the Validator Program.
      li-validator(v-for="i in validators" key="i.companyName" :validator="i")
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
    ...mapGetters(['validators', 'links'])
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
  .v-container
    position relative
    z-index 10
    padding 1.5rem
    display flex
    flex-flow column nowrap
    align-items center

  .title
    margin-bottom 0.75rem
    display flex
    flex-flow column nowrap
    align-items flex-start
    width 100%
    h2
      text-transform uppercase
      font-weight 600
      letter-spacing 0.1rem
      margin-bottom 0.25rem

    h1
      font-size 2.5rem
      line-height 1.25
      font-weight 300

  .validator-icon
    display flex
    align-items center
    justify-content center
    margin-bottom 1rem
    img
      width 33vw + 33vh
      max-width 14rem

.v-section
  border-top 1px solid bc

.v-section-header
  padding 1.5rem 1rem 0
  font-weight bold
  font-size 1.5rem
  line-height 1.25

.v-section-main
  padding 2rem 1rem 1.5rem

  h3
    font-size 1.333 rem
    font-weight 500
    margin-bottom 0.75rem

  p + h3
    margin-top 2rem

  .ni-btn
    width 100%
    max-width 17rem
    margin-bottom 1.5rem

  .youtube
    display block
    width 100vw
    height 56.25vw
    margin-left -1rem

  p, iframe, ul, ol, blockquote
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

@media screen and (min-width: 768px)
  .v-page-header .v-container
    padding 3rem

  .v-page-header
    .v-container
      flex-flow row nowrap

    .title
    .validator-icon
      margin 0

    .title
      flex 0 0 66.7%
    .validator-icon
      flex 0 0 33.3%

    .title
      h2
        font-size 1.25rem
      h1
        font-size 3rem

  .v-section .v-container
    .v-section-header
      padding 3rem 3rem 0 3rem

    .v-section-main
      padding 3rem
      
    .youtube
      display block
      width 42rem
      height 23.625rem
      margin-left 0

@media screen and (min-width: 1024px)
  .v-section .v-container
    display flex

    .v-section-header
      padding 3rem
      flex 0 0 19rem

    .v-section-main
      padding 3rem 3rem 3rem 0
      flex 1
</style>
