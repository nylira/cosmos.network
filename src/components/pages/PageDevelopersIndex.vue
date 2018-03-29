<template lang="pug"> 
page(title="Developers" subtitle="Learn about and contribute to the code that powers the Cosmos Network."): text-container
  h2 Cosmos Hub

  h3 Gaia
  p Gaia is the testing version of the Cosmos Hub. When the Hub is complete, it will contain the Tendermint consensus engine, staking, and governing, and token exchange components. We're currently working hard on getting the components #[router-link(:to="{name: 'roadmap'}") ready for public release].

  p Gaia is a testnet designed to get validators acquainted with staking concepts and procedures. For testing purposes, the Gaia validator set is determined as validators with the top 100 bonded atoms. The validator set is undated every block. All bonding and unbonding is instantaneous (no queue). Absent features: delegation, validator rewards, and the unbonding wait period.

  ul
    li: a(href="https://github.com/cosmos/gaia" target="_blank") Gaia on GitHub
    li: router-link(:to="{name: 'staking'}") Learn about staking

  h2 Blockchain Frameworks

  h3 Cosmos SDK
  p The Cosmos SDK is an ABCI framework written in Golang that affords you all the tools you need to rapidly develop robust blockchains and blockchain applications which are interoperable with the Cosmos Hub. It is a blockchain development 'starter-pack' of common blockchain modules while not enforcing their use thus giving maximum flexibility for application customization. It is perfect to build highly-customizable public proof-of-stake blockchains.

  p WARNING: The Cosmos SDK is under heavy development and it's #[router-link(:to="{name: 'roadmap'}") not yet ready] for release. Keep up to date with Cosmos SDK news #[a(href="https://blog.cosmos.network" target="_blank") on our blog].

  ul
    li: a(href="https://github.com/cosmos/cosmos-sdk" target="_blank") Cosmos SDK on GitHub
    li: a(href="https://cosmos-sdk.readthedocs.io/en/develop/" target="_blank") Cosmos SDK Documentation

  h3 Application-Blockchain Interface (ABCI)
  p The Application-Blockchain Interface (ABCI) allows you to deploy the business logic of your blockchain application in any language. It handles the connection with the underlying Tendermint engine, which is responsible for the networking and consensus parts of the software. With the ABCI, you can deploy any type of blockchain application - public or private - in no time.
  ul
    li: a(href="http://tendermint.readthedocs.io/projects/tools/en/master/introduction.html#abci-overview" target="_blank") ABCI in Docs
    li: a(href="https://github.com/tendermint/abci" target="_blank") ABCI on GitHub


  h3 Ethermint
  p Ethermint is a blazing fast Proof-of-Stake implementation of Ethereum that is built on top of Tendermint using the ABCI protocol. Ethermint lets you use the full power of the Ethereum Virtual Machine in connection to other blockchains (with IBC) on the Cosmos Network.
  ul
    li: a(href="https://ethermint.zone" target="_blank") Ethermint Website
    li: a(href="https://github.com/tendermint/ethermint" target="_blank") Ethermint on GitHub

  h3 Lotion
  p Lotion is a new way to create blockchain apps in JavaScript, which aims to make writing new blockchains fast and fun. It builds on top of Tendermint using the ABCI protocol. Lotion lets you write secure, scalable applications that can easily interoperate with other blockchains on the Cosmos Network using IBC.
  ul
    li: a(href="https://lotionjs.com" target="_blank") Lotion Website
    li: a(href="https://github.com/keppel/lotion" target="_blank") Lotion on GitHub

  h2 Blockchain Consensus

  h3 Tendermint
  p Tendermint is the byzantine-fault tolerant consensus engine behind Cosmos SDK, Ethermint, and Lotion. Tendermint applications can be written in any programming language.
  ul
    li: a(href="https://tendermint.com" target="_blank") Tendermint Website
    li: a(href="https://github.com/tendermint/tendermint" target="_blank") Tendermint on GitHub
</template>

<script>
import {mapGetters} from 'vuex'
import Btn from '@nylira/vue-button'
import Page from 'common/NiPage'
import Part from 'common/NiPart'
import TextContainer from 'common/NiTextContainer'
export default {
  name: 'page-developers-index',
  metaInfo: { title: 'Overview - Developers' },
  components: {
    Btn,
    Page,
    Part,
    TextContainer
  },
  computed: { ...mapGetters(['links']) }
}
</script>
