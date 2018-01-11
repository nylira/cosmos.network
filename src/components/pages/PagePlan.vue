<template lang="pug">
.page-plan
  article-body: text-en-us
</template>

<script>
import ArticleBody from '@nylira/vue-article-body'
import TextEnUs from 'content/en-US/PLAN.md'
export default {
  name: 'page-plan',
  metaInfo: {
    meta: [
      { name: 'description', content: 'Information about the Cosmos fundraising plan. The details in this plan override what is currently in the whitepaper, and all other plans published prior.' }
    ],
    title: 'Fundraising Plan'
  },
  components: {
    ArticleBody,
    TextEnUs
  }
}
</script>
