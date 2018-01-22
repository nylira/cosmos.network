<template lang="pug">
.page
  page-menu
  page(title="Cosmos Academy" subtitle="Participate in the Academy to learn how to build your project on the Cosmos Network.")
    text-container(url='https://raw.githubusercontent.com/tendermint/aib-data/master/md/academy.md')

</template>

<script>
import {mapGetters} from 'vuex'
import Page from 'common/NiPage'
import PageMenu from 'common/NiPageMenu'
import TextContainer from 'common/NiTextContainer.vue'
export default {
  name: 'page-academy',
  metaInfo: { title: 'Academy' },
  components: {
    Page,
    PageMenu,
    TextContainer
  },
  computed: { ...mapGetters(['links']) }
}
</script>
