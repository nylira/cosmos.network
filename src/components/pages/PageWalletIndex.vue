<template lang="pug">
.page-wallet-index
  .wallet-section.wallet-section-cover
    h1 Welcome to Voyager
    p The open source cryptocurrency wallet for Cosmos, built for the entire network
    btn(size="lg" icon="cloud_download" value="Download")
  .wallet-section.wallet-section-benefits
    .wallet-section-header
      .wallet-section-header__title Voyager Benefits
      .wallet-section-header__subtitle Section Subtitle
    .wallet-section-main
      p Hello World
  .wallet-section.wallet-section-features
    .wallet-section-header
      .wallet-section-header__title Voyager Features
      .wallet-section-header__subtitle Section Subtitle
    .wallet-section-main
      p Hello World
  .wallet-section.wallet-section-development
    .wallet-section-header
      .wallet-section-header__title Voyager Development Toolkit
      .wallet-section-header__subtitle Future releases of Voyager will allow developers to build innovative applications directly for the wallet. Whether you'd like create your own cryptocurrency, distributed exchange, or develop a blockchain-based game, it will be easy to build it as a Voyager plugin.
    .wallet-section-main
      p Hello World
  .wallet-section.wallet-section-design
    .wallet-section-header
      .wallet-section-header__title Voyager Design
      .wallet-section-header__subtitle Section Subtitle
    .wallet-section-main
      p Hello World
  .wallet-section.wallet-section-interface
    .wallet-section-header
      .wallet-section-header__title Voyager UI Library
      .wallet-section-header__subtitle Using components from the Voyager UI library, you can quickly scaffold up your own Voyager plugin. If you're feeling ambitious, you can fork Voyager to create a wallet for your own Cosmos Hub.
    .wallet-section-main
      .card-feature
        .card-feature__title Design Voyager Plugins
        .card-feature__main You won't need to hire a designer to come up with a great user interface design. We'll provide you with the design framework and components to make your project fit into the Cosmos Network.
        .card-feature__title Rapid UI Creation
        .card-feature__main Components in Voyager are plug and play. Quickly mockup the functionality of your plugin without touching the design at all.
        .card-feature__title Create Custom Themes
        .card-feature__main You'll be able to customize the theme for any UI component in Voyager. Imagine just setting five different colors (and perhaps a typeface) to instantly match the Voyager UI with your brand.
  .wallet-section.wallet-section-download
    .wallet-section-header
      .wallet-section-header__title Download
      .wallet-section-header__subtitle Get the latest version of Voyager.
    .wallet-section-main
      .card-download
        .card-download__title Windows
        .card-download__subtitle 32-bit
        btn(icon="cloud_download" value="Download")
      .card-download
        .card-download__title macOS
        .card-download__subtitle 64-bit
        btn(icon="cloud_download" value="Download")
      .card-download
        .card-download__title Linux
        .card-download__subtitle 64-bit
        btn(icon="cloud_download" value="Download")
</template>

<script>
import Page from 'common/NiPage'
import Btn from '@nylira/vue-button'
import TextContainer from 'common/NiTextContainer.vue'
export default {
  name: 'page-wallet-index',
  metaInfo: { title: 'Wallet Overview' },
  components: {
    Btn,
    Page,
    TextContainer
  }
}
</script>

<style lang="stylus">
@require '~variables'
</style>
