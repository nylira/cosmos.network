<template lang="pug">
.page-index
  section-cover
</template>

<script>
import SectionCover from 'comp/SectionCover'
export default {
  name: 'page-index',
  components: {
    SectionCover
  },
  head: {
    title () {
      return {
        inner: 'Cosmos',
        separator: '-',
        complement: 'Internet of Blockchains'
      }
    }
  }
}
</script>
