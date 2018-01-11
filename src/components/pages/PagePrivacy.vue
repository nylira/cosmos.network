<template lang="pug">
page-split.page-privacy
  page-header(
    title='Privacy Policy'
    subtitle='Learn about our privacy policy.'
    type='split'
    slot='header')
  article-body: markdown-content
</template>

<script>
import MarkdownContent from 'content/en-US/privacy-policy.md'
import PageHeader from '@nylira/vue-page-header'
import PageSplit from '@nylira/vue-page-split'
import ArticleBody from '@nylira/vue-article-body'
export default {
  name: 'page-privacy',
  metaInfo: { title: 'Privacy Policy' },
  components: {
    ArticleBody,
    PageHeader,
    PageSplit,
    MarkdownContent
  }
}
</script>
