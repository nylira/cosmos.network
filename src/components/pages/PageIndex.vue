<template lang="pug">
.page-index
  section-cover
  section-what
  section-benefits
  section-blog
</template>

<script>
import SectionBlog from 'sections/sectionBlog'
import SectionCover from 'sections/SectionCover'
import SectionWhat from 'sections/SectionWhat'
import SectionBenefits from 'sections/SectionBenefits'
export default {
  name: 'page-index',
  metaInfo: { title: 'Internet of Blockchains' },
  components: {
    SectionBlog,
    SectionCover,
    SectionWhat,
    SectionBenefits
  }
}
</script>
