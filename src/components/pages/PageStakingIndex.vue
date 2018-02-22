<template lang="pug">
page(
  title="Staking"
  subtitle="What is staking? What are validators and delegators?"
  splash="validator")
  text-container(
    url='https://api.github.com/repos/tendermint/aib-data/contents/md/staking-index.md')
</template>

<script>
import Page from 'common/NiPage'
import TextContainer from 'common/NiTextContainer'
export default {
  name: 'page-staking-index',
  metaInfo: { title: 'Overview - Staking' },
  components: {
    Page,
    TextContainer
  }
}
</script>
