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
  metaInfo: { title: 'Internet of Blockchains' },
  components: {
    SectionCover,
    SectionWhat,
    SectionBenefits
  }
}
</script>
