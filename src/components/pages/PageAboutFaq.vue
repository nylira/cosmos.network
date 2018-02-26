<template lang="pug">
page(title="Cosmos FAQ" subtitle="Answers to frequently asked questions about the Cosmos Network.")
  text-container(url="https://api.github.com/repos/tendermint/aib-data/contents/md/cosmos-faq.md")
</template>

<script>
import Page from 'common/NiPage'
import TextContainer from 'common/NiTextContainer'
export default {
  name: 'page-about-faq',
  metaInfo: { title: 'FAQ - About' },
  components: {
    Page,
    TextContainer
  }
}
</script>
