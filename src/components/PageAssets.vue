<template lang="pug">
page-split
  page-header(title='Logo Assets', subtitle='We have an open approach towards the use of the Cosmos logo that is community-friendly and supports the greater Cosmos and crypto ecosystem.<br><br>All current Cosmos logos are under Creative Commons attribution 3.0.', slot='header', type='split')
  article-body
    h2 Visual Identity Guide
    p Please read and follow the Cosmos Visual Identity Guide.
    a(href="https://github.com/tendermint/aib-data/raw/master/assets/cosmos-visual-identity.pdf") Download Guide (741 KB)
    h2 Download Logo Assets
    p Download the Cosmos Logo Assets to get access to our logo in vector, alpha, and high resolution formats.
    a(href="https://github.com/tendermint/aib-data/raw/master/assets/cosmos-logo-assets.zip") Download Assets (3.5 MB)

</template>

<script>
import PageSplit from '@nylira/vue-page-split'
import PageHeader from '@nylira/vue-page-header'
import ArticleBody from '@nylira/vue-article-body'
export default {
  name: 'page-assets',
  components: {
    PageSplit,
    PageHeader,
    ArticleBody
  },
  mounted () {
    document.title = 'Logo - Cosmos - Internet of Blockchains'
  }
}
</script>
