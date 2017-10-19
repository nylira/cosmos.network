<template lang="pug">
.page-roadmap
  header.v-page-header
    .v-container
      .title
        h2 Cosmos Roadmap
        h1 The Road to Success

  section.v-section: .v-container
    header.v-section-header Adoption
    main.v-section-main
      h3 1. OmiseGo DEX
      p This will be the first big application that is launched on top of Cosmos and will provide a usable zone that users can use. Our main problem is that we are not building user facing application and hence we rely on others to use our infrastructure to provide end user value.

      h3 2. Ethermint
      p Our goal is to scale token launches. Currently Ethereum’s main activity comes from token launches and with Ethermint we need to make it as easy to launch your own token. A token launch on Ethermint is the easiest way to stand up a new zone with a separate validator set.

      h3 3. Ethereum Peg Zone
      p Allowing the movement of ERC20 tokens and Ethers through a peg zone into the Cosmos hub will enable a huge amount of value transfer and usability. It is paramount to achieve this, since decentralised finance is one of the biggest use cases of blockchains. Furthermore, this will enhance the value of the DEX massively as well as make launching a token on Ethermint much more feasible.

      h3 4. Developer Adoption
      p We are not building end user applications and hence we are not competing for users directly. We are building infrastructure and one of the only metrics in our long-term success is whether we can attract promising (and hopefully successful) projects onto Cosmos. The Cosmos ecosystem needs to become the default choice for new entrants to the blockchain space. Some people started with Bitcoin, I started with Ethereum and from now on our goal is that everyone starts with Cosmos.


  section.v-section: .v-container
    header.v-section-header Core
    main.v-section-main
      h3 5. Gaia
      p We need a solid hub that allows zones to move tokens between each other.
      h3 6. Tendermint Core
      p Everything builds on top of Tendermint Core and hence this software stack has to be rock solid.
      h3 7. Cosmos-sdk
      p The sdk is what most developers use to build their own zone. It allows developers to write awesome light clients through mobile bindings.

  section.v-section: .v-container
    header.v-section-header Glue
    main.v-section-main
      h3 8. Validators
      p These members form the backbone of the Cosmos hub and the security of the entire network.
      h3 9. Governance
      p The community needs a voice in order to affect change across the Cosmos ecosystem
      h3 10. Economics
      p Validators are not nice people. They need a crypto-economic incentive not to cheat and to continuously validate the network.
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

</style>
