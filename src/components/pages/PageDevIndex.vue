<template lang="pug">
page(title="Developers" subtitle="Learn how to bootstrap your blockchain with Cosmos."): text-container
  h2 Cosmos Hub

  h3 Gaia
  p Gaia is the testing version of the Cosmos Hub. When the Hub is complete, it will contain the Tendermint consensus engine, wallet, staking, and governing components. We're currently working hard on getting the components ready for public release by the end of February, 2018.

  p Gaia is a testnet designed to get validators acquainted with staking concepts and procedures. For testing purposes, the Gaia validator set is determined as validators with the top 100 bonded atoms. The validator set is undated every block. All bonding and unbonding is instantaneous (no queue). Absent features: delegation, validator rewards, and the unbonding wait period.

  ul
    li: a(href="https://github.com/cosmos/cosmos-sdk") Gaia on GitHub
    li: router-link(to="/validators") Learn about Cosmos Validators

  h2 Blockchain Frameworks

  h3 Cosmos SDK
  p The Cosmos SDK affords you all the tools you need to rapidly develop robust blockchains and blockchain applications which are interoperable with the Cosmos Hub. It is a blockchain development 'starter-pack' of common blockchain modules while not enforcing their use thus giving maximum flexibility for application customization. For example, does your app require fees, how do you want to log messages, do you enable IBC, do you even have a cryptocurrency? In this way, the Cosmos SDK is the #[strong "Rails" of cryptocurrencies].

  p NOTE: The Cosmos SDK is under heavy development and it's not yet ready for release. Keep up to date with Cosmos SDK news #[a(href="https://blog.cosmos.network") on our blog].

  // ul
    li: a(href="https://github.com/cosmos/cosmos-sdk") Cosmos SDK on GitHub
    li: a(href="http://cosmos-sdk.readthedocs.io/en/latest/") Cosmos SDK Documentation

  h3 Ethermint
  p Ethermint is a blazing fast Proof-of-Stake implementation of Ethereum that is built on top of Tendermint using the ABCI protocol. Ethermint lets you use the full power of the Ethereum Virtual Machine in connection to other blockchains (with IBC) on the Cosmos Network.
  ul
    li: a(href="https://ethermint.zone") Ethermint Website
    li: a(href="https://github.com/tendermint/ethermint") Ethermint on GitHub

  h3 Lotion
  p Lotion is a new way to create blockchain apps in JavaScript, which aims to make writing new blockchains fast and fun. It builds on top of Tendermint using the ABCI protocol. Lotion lets you write secure, scalable applications that can easily interoperate with other blockchains on the Cosmos Network using IBC.
  ul
    li: a(href="https://lotionjs.com") Lotion Website
    li: a(href="https://github.com/keppel/lotion") Lotion on GitHub

  h2 Blockchain Consensus

  h3 Tendermint
  p Tendermint is the byzantine-fault tolerant consensus engine behind Cosmos SDK, Ethermint, and Lotion. Tendermint applications can be written in any programming language.
  ul
    li: a(href="https://tendermint.com") Tendermint Website
    li: a(href="https://github.com/tendermint/tendermint") Tendermint on GitHub
</template>

<script>
import {mapGetters} from 'vuex'
import Btn from '@nylira/vue-button'
import Page from 'common/NiPage'
import Part from 'common/NiPart'
import TextContainer from 'common/NiTextContainer'
export default {
  name: 'page-dev-index',
  components: {
    Btn,
    Page,
    Part,
    TextContainer
  },
  computed: { ...mapGetters(['links']) }
}
</script>
