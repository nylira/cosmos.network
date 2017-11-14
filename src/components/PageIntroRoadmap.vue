<template lang="pug">
part(title="Cosmos Roadmap"): text-container
  h2 2017 Roadmap

  h3 October
  ul
    li Alpha testnet for the Cosmos Hub (just staking, no ibc or governance)
    li Translation of Whitepaper into Chinese

  h3 November
  ul
    li Public testnet for the Cosmos Hub
    li Alpha testnet for Ethermint
    li Beta version of the Cosmos SDK
    li Translation of whitepaper into Dutch and French

  h3 December
  ul
    li Public testnet for Ethermint
    li Alpha Ethereum peg zone
    // li Alpha OmiseGo DEX zone
    li Stable version of the Cosmos SDK
    li Translation of Whitepaper into Spanish and Korean

  h2 2018 Roadmap

  h3 January
  ul
    li Live Cosmos Hub
    li Public testnet Ethereum peg zone
    li IBC connection between Ethermint and Cosmos Hub on testnets
    // li Public testnet for OmiseGo DEX zone
    // li OpenMined launches on Ethermint testnet 

  h3 February
  ul
    li Live Ethermint network
    li Connect Ethermint to Cosmos Hub with IBC
    // li Live OmiseGo DEX zone with IBC
    // li BlockFinance goes live with fiat-crypto gateway

  h3 March
  ul
    // li OpenMined launches on live Ethermint
    li First token launches are conducted on Ethermint to create new zones

  h3 April
  ul
    li Bitcoin peg zone
    li Incubator zone to bootstrap projects that do not have the resources to launch their own validator set

  h3 May
  ul
    li Work on arbitrary data transfer

  h3 June
  ul
    li Identity zone launches on Cosmos to enable anonymous and decentralised KYC
</template>

<script>
import { mapGetters } from 'vuex'
import Part from './common/NiPart'
import TextContainer from './common/NiTextContainer'
export default {
  name: 'page-intro-roadmap',
  components: {
    Part,
    TextContainer
  },
  computed: { ...mapGetters(['links']) }
}
</script>
