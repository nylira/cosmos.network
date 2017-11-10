<template lang="pug">
.page-roadmap
  header.v-page-header
    .v-container
      .title
        h2 Cosmos 
        h1 Roadmap

  section.v-section: .v-container
    header.v-section-header 2017-2018
    main.v-section-main
      .roadmap
        .month
          h3 October 2017
          ul
            li Alpha testnet for the Cosmos Hub (just staking, no ibc or governance)
            li Translation of Whitepaper into Chinese
        .month
          h3 November 2017
          ul
            li Public testnet for the Cosmos Hub
            li Alpha testnet for Ethermint
            li Beta version of the Cosmos SDK
            li Translation of whitepaper into Dutch and French
        .month
          h3 December 2017
          ul
            li Public testnet for Ethermint
            li Alpha Ethereum peg zone
            // li Alpha OmiseGo DEX zone
            li Stable version of the Cosmos SDK
            li Translation of Whitepaper into Spanish and Korean
        .month
          h3 January 2018
          ul
            li Live Cosmos Hub
            li Public testnet Ethereum peg zone
            li IBC connection between Ethermint and Cosmos Hub on testnets
            // li Public testnet for OmiseGo DEX zone
            // li OpenMined launches on Ethermint testnet 
        .month
          h3 February 2018
          ul
            li Live Ethermint network
            li Connect Ethermint to Cosmos Hub with IBC
            // li Live OmiseGo DEX zone with IBC
            // li BlockFinance goes live with fiat-crypto gateway
        .month
          h3 March 2018
          ul
            // li OpenMined launches on live Ethermint
            li First token launches are conducted on Ethermint to create new zones
        .month
          h3 April 2018
          ul
            li Bitcoin peg zone
            li Incubator zone to bootstrap projects that do not have the resources to launch their own validator set
        .month
          h3 May 2018
          ul
            li Work on arbitrary data transfer
        .month
          h3 June 2018
          ul
            li Identity zone launches on Cosmos to enable anonymous and decentralised KYC

  // section.v-section: .v-container
    header.v-section-header Ongoing Research
    main.v-section-main
      ul
        li Multiple apps protected by the same validator set
        li IBC
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'page-roadmap',
  computed: {
    ...mapGetters(['links'])
  },
  head: {
    title () {
      return {
        inner: 'Roadmap',
        separator: '-',
        complement: 'Cosmos - Internet of Blockchains'
      }
    }
  }
}
</script>

<style lang="stylus">
@require '~@/styles/variables.styl'

.roadmap
  .month
    margin-left 1rem
    border-left 0.25rem solid bc
    padding-left 2rem
    position relative
    &:before
      box-sizing border-box
      display block
      content ''
      background app-bg

      width 2rem
      height 2rem

      border 0.25rem solid link
      border-radius 2rem

      position absolute
      top 0
      left -1rem
      margin-left -0.125rem
    ul
      padding-bottom 2rem
</style>
