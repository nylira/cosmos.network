<template lang="pug">
page(
  title="Fundraiser Plan"
  subtitle="Our original plan and roadmap for the April 2017 fundraiser.")
  text-container(
    url='https://api.github.com/repos/tendermint/aib-data/contents/md/fundraiser-plan.md')
</template>

<script>
import TextContainer from 'common/NiTextContainer'
import Page from 'common/NiPage'
export default {
  name: 'page-plan',
  metaInfo: { title: 'Fundraiser Plan' },
  components: {
    Page,
    TextContainer
  }
}
</script>
