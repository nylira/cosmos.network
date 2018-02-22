<template lang="pug">
page(
  title="Delegators"
  subtitle="Stake your atoms to a validator as a delegator."
  splash="validator")
  text-container(
    url='https://api.github.com/repos/tendermint/aib-data/contents/md/staking-delegators.md')
</template>

<script>
import Page from 'common/NiPage'
import TextContainer from 'common/NiTextContainer'
export default {
  name: 'page-staking-delegators',
  metaInfo: { title: 'Delegators - Staking' },
  components: {
    Page,
    TextContainer
  }
}
</script>
