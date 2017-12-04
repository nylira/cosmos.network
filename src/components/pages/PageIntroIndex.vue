<template lang="pug">
page(title="What is Cosmos?" subtitle="Get started with an overview of Cosmos."): text-container
  h2 Building an Internet of Blockchains
  h3 Purpose
  p Cosmos is a project with an ambitious mission: To create a network of distributed ledgers that will solve long-standing problems in the cryptocurrency and blockchain communities.

  iframe(:src="links.cosmos.intro.video" width="1024" height="576" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen)

  h3 Architecture
  p The Cosmos network consists of many independent, parallel blockchains, called zones, each powered by classical Byzantine fault-tolerant (BFT) consensus protocols like #[a(:href='links.tm.website') Tendermint] (already used by platforms like #[a(href='https://github.com/hyperledger/burrow') Hyperledger's Burrow]). Some zones act as hubs with respect to other zones, allowing many zones to interoperate through a shared hub. The architecture is a more general application of the Bitcoin sidechains concept, using classic BFT and Proof-of-Stake algorithms, instead of Proof-of-Work.
  h3 Cosmos Hub
  p The first blockchain in the Cosmos network is the Cosmos hub. The Cosmos hub connects to zones via the novel IBC (inter-blockchain communication) protocol and keeps a record of the total number of tokens in each zone. Because all inter-zone token transfers go through the Cosmos hub, you can transfer tokens from one zone to another, quickly and securely, without the need for a liquid exchange or a trusted third party between zones.
  p The Cosmos hub can connect to many different kinds of zones, as long as each zone speaks IBC. As a result, Cosmos can support a variety of currencies and scripting languages like those found in Bitcoin, Ethereum, ZeroCash, CryptoNote, and more.

  h2 Interoperability
  .image: img(src="~assets/images/diagrams/ex_dist_exchange.png")
  p Cosmos can interoperate with multiple other applications and cryptocurrencies, something other blockchains can’t do well. By creating a new zone, you can plug any blockchain system into the Cosmos hub and pass tokens back and forth between those zones, without the need for an intermediary.
  p For example, if you wanted to trade bitcoins for ether today, you would have to do so on a centralized exchange. The problem is, many of our exchanges today are plagued by hacks, theft, and cons. Two prime examples are what happened at #[a(href='http://www.thedailybeast.com/articles/2016/05/19/behind-the-biggest-bitcoin-heist-in-history-inside-the-implosion-of-mt-gox.html') Mt. Gox] and more recently #[a(href='http://www.reuters.com/article/us-bitfinex-hacked-hongkong-idUSKCN10E0KP') Bitfinex].

  h2 Scalability
  .image: img(src="~assets/images/diagrams/ex_evm_sharding.png")
  p Scaling is another open issue for blockchains. Both Ethereum and Bitcoin support only a fraction of the transactions seen daily on payment networks like Visa or Mastercard. In contrast, zones allow Cosmos to scale out indefinitely. If your transaction speed slows in one zone because too many people are using it, you simply add another zone to the hub and direct half the users over that zone, thereby doubling your transaction speed. Meanwhile, the Cosmos hub ensures that any zones connected to it remain in sync.

  h2 Upgradability
  .image: img(src="~assets/images/diagrams/ex_evm_upgrading.png")
  p Another problem blockchains run into is how to handle upgrades when new versions come out. Getting all of the validators ('miners' in the case of Bitcoin) to upgrade to a new version of a blockchain simultaneously is tricky, and could lead to hard forks. This is exactly what happened when #[a(href='http://qz.com/730004/everything-you-need-to-know-about-the-ethereum-hard-fork/') Ethereum hard-forked] into ETH and ETC due to political/governance issues surrounding the DAO hack. With Cosmos, upgrading is not an issue. You simply plug a new zone into the Cosmos hub, and invite users to move their funds over to it at their leisure.</p>

  h2 Decentralization
  .image: img(src="~assets/images/diagrams/ex_network.png")
  p One of the great tragedies of cryptocurrencies today has been their failure to interoperate with existing systems — and each other. Cosmos offers a way to link them together, but without creating a new centralized clearinghouse or exchange.
  p Cosmos is built on principles of cryptography, sound economics, consensus theory, transparency, and accountability to serve as a new foundation for our future financial systems.
  p You can use Cosmos as a testing ground for a new cryptocurrency design, an upgrade to an existing cryptocurrency, as a means for decentralized exchange, or as a platform for scalable smart contracts.
  p Cosmos is not just a single distributed ledger, and the Cosmos hub isn't a walled garden or the center of its universe — anyone can use this protocol to create their own hub to compete with Cosmos in a free market of blockchains
  p The only question is, what will you build on Cosmos?
</template>

<script>
import {mapGetters} from 'vuex'
import Page from 'common/NiPage'
import TextContainer from 'common/NiTextContainer'
export default {
  name: 'page-intro-index',
  components: {
    Page,
    TextContainer
  },
  computed: { ...mapGetters(['links']) }
}
</script>
