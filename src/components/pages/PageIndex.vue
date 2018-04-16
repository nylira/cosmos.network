<template lang="pug">
.page-index
  section-cover
  section-events
  section-what
  section-benefits
  section-blog
</template>

<script>
import SectionBlog from "@/components/sections/SectionBlog"
import SectionCover from "@/components/sections/SectionCover"
import SectionEvents from "@/components/sections/SectionEvents"
import SectionWhat from "@/components/sections/SectionWhat"
import SectionBenefits from "@/components/sections/SectionBenefits"
export default {
  name: "page-index",
  metaInfo: { title: "Internet of Blockchains" },
  components: {
    SectionBlog,
    SectionCover,
    SectionEvents,
    SectionWhat,
    SectionBenefits
  }
}
</script>
