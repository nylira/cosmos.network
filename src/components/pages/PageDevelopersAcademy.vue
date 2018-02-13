<template lang="pug">
page(title="Cosmos Academy" subtitle="Participate in the Academy to learn how to build your project on the Cosmos Network.")
  text-container(
    url='https://api.github.com/repos/tendermint/aib-data/contents/md/academy.md')
</template>

<script>
import {mapGetters} from 'vuex'
import Page from 'common/NiPage'
import TextContainer from 'common/NiTextContainer.vue'
export default {
  name: 'page-academy',
  metaInfo: { title: 'Academy' },
  components: {
    Page,
    TextContainer
  },
  computed: { ...mapGetters(['links']) }
}
</script>
