<template lang="pug">
.page
  page-menu
  page(title="Cosmos Academy" subtitle="Participate in the Academy to learn how to build your project on the Cosmos Network.")
    text-container
      h2 Meetups in SF
      p COMING SOON! We will host regular #[a(href="https://www.meetup.com/Cosmos_SF/" target="_blank") evening meetups in San Francisco] for developers who are interested in learning about developing for Cosmos. The Academy meetups will be from 6PM - 7PM on week nights. Dinner is on us!
      p Developers of all levels of familiarity with blockchain engineering are welcome, as engineers will get the most value out of these events. Interested people can join to learn about architecting the next decentralized application on top of the Cosmos Network.

      ul
        li Monday: Intro to Tendermint
        li Tuesday: Intro to Ethermint
        li Wednesday: Intro to Cosmos SDK
        li Thursday: Intro to Cosmos IBC

      p &nbsp;

      h2 Online Course
      p COMING SOON! A series of educational videos for developers interested in developing on Cosmos. Follow #[a(href="links.cosmos.community.twitter") @cosmos on Twitter] to get the latest releases. If you have topics that you think could use an explainer video, please talk to us on #[a(:href="links.cosmos.community.matrix") Developer Chat]. Here are some of the upcoming topics.

      h3 Validator Program: An Introduction
      p Learn about running and securing a validator for the Cosmos Hub.

      h3 Cosmos Academy: An Introduction
      p An overview of what you can learn in the Cosmos Academy.

      h3 IBC: Interblockchain Communication Protocol
      p An in-depth tour of IBC, the network communication protocol that allows the exchange of tokens between blockchains through the Cosmos Hub.

      h3 Get Started I: Your First Cosmos Zone
      p We'll teach you everything that you need to know in order to build your own Bitcoin in less than 100 lines of code. It covers everything from Ethereum smart contracts to building an application in Golang/Rust on top of the Cosmos SDK.

      h3 Get Started II: Build a UI For Your Zone
      p Learn how easy it is to build a custom, theme-able UI for your zone with our reactive UI component library.
</template>

<script>
import {mapGetters} from 'vuex'
import Page from 'common/NiPage'
import PageMenu from 'common/NiPageMenu'
import TextContainer from 'common/NiTextContainer.vue'
export default {
  name: 'page-academy',
  metaInfo: { title: 'Academy' },
  components: {
    Page,
    PageMenu,
    TextContainer
  },
  computed: { ...mapGetters(['links']) }
}
</script>
