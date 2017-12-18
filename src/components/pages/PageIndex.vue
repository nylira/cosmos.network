<template lang="pug">
.page-index
  section-cover
  section-what
  section-benefits
</template>

<script>
import SectionCover from 'sections/SectionCover'
import SectionWhat from 'sections/SectionWhat'
import SectionBenefits from 'sections/SectionBenefits'
export default {
  name: 'page-index',
  components: {
    SectionCover,
    SectionWhat,
    SectionBenefits
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
