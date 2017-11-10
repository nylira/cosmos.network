<template>
  <section class="section-media">
    <div class="sm-container">
      <div class="sm-logos">
        <img src="../assets/images/press/australian-business-review.png"
          alt="Australian Business Review">
        <img src="../assets/images/press/bitcoin-magazine.png"
          alt="Bitcoin Magazine">
        <img src="../assets/images/press/blockchain-news.png"
          alt="Blockchain News">
        <img src="../assets/images/press/brave-new-coin.png"
          alt="Brave New Coin">
        <img src="../assets/images/press/coinalert.png"
          alt="CoinAlert">
        <img src="../assets/images/press/coindesk.png"
          alt="CoinDesk">
        <img src="../assets/images/press/coinreport.png"
          alt="CoinReport">
        <img src="../assets/images/press/cointelegraph.png"
          alt="CoinTelegraph">
        <img src="../assets/images/press/cryptocoinsnews.png"
          alt="CryptoCoinsNews">
        <img src="../assets/images/press/epicenter.png"
          alt="Epicenter Bitcoin">
        <img src="../assets/images/press/finextra.png"
          alt="FinExtra">
        <img src="../assets/images/press/forklog.png"
          alt="ForkLog">
        <img src="../assets/images/press/fortune-magazine.png"
          alt="Fortune Magazine">
        <img src="../assets/images/press/hedgeweek.png"
          alt="Hedgeweek">
        <img src="../assets/images/press/international-business-times.png"
          alt="International Business Times">
        <img src="../assets/images/press/linuxcom.png"
          alt="Linux.com">
        <img src="../assets/images/press/networks-asia.png"
          alt="NetworksAsia">
        <img src="../assets/images/press/on-msft.png"
          alt="On MSFT">
        <img src="../assets/images/press/silicon-angle.png"
          alt="Silicon Angle">
        <img src="../assets/images/press/the-globe-and-mail.png"
          alt="The Globe and Mail">
        <img src="../assets/images/press/the-merkle.png"
          alt="The Merkle">
        <img src="../assets/images/press/zdnet.png"
          alt="ZDNet">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'section-media'
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'

.section-media
  background app-fg
  padding 2rem 0
  border-top 1px solid bc

.sm-container
  margin 0 auto
  padding 0 1rem

.sm-logos
  display flex
  flex-flow row wrap
  justify-content center
  img
    margin 0.5rem 0.25rem
    height 1.5rem
    width auto

@media screen and (min-width: 360px)
  .sm-logos
    img
      height 1.75rem
      
@media screen and (min-width: 768px)
  .section-media
    padding 3rem 0
  .sm-container
    padding 0 1.5rem
  .sm-logos
    img
      margin 0.75rem 0.5rem
      height 2rem

@media screen and (min-width: 1024px)
  .sm-logos
    img
      margin-right 0.75rem
      margin-left 0.75rem

</style>
