<template lang="pug">
page(title="Wallet FAQ" subtitle="Frequently asked questions and answers about the Cosmos Wallet.")
  text-container
    h2 Q&A

    h3 Where can I get some tokens to test the wallet?
    p You can get Fermions from the unofficial #[a(href="https://cosmosvalidators.com")] Cosmos Validators faucet. Scroll halfway down the page, enter your wallet address, solve the captcha, and there you go! Note: you may have to click the Refresh button on the Balances page of the wallet in order to see your updateupdated funds.

    h3 Will we support iOS and Android?
    p We will work on iOS and Android wallets after the release of the Cosmos Hub.

    h3 When will there be a Cosmos Network Monitor?
    p We will work on the network monitor after the launch of Cosmos Hub. There is already a blockchain explorer in the current release of the wallet.

    h3 Is there a Windows installer or a Mac DMG?
    p No, we do currently have installers for Windows or macOS X. The reason is because we aim to only release deterministic builds. Deterministic builds are builds that can be recreated on any machine. Replicable builds increase the security of our network. Right now we're attempting to solve the issue of differing timestamps from building a Windows or macOS DMG installer.

    h3 I forgot my wallet seed. What can I do?
    p Unfortunately there's nothing you can do, if you did not back up your wallet seed somewhere. Luckily this is just a testnet wallet. You'll have to create a new account.

    h2 Didn't answer your question?
    p View the #[router-link(to="/wallet/support") support page] to learn how to create an issue on the project repository.
</template>

<script>
import Page from 'common/NiPage'
import TextContainer from 'common/NiTextContainer.vue'
export default {
  name: 'page-wallet-faq',
  metaInfo: { title: 'Wallet FAQ' },
  components: {
    Page,
    TextContainer
  }
}
</script>
