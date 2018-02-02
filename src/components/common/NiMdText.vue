<template lang="pug">
.ni-md-text(v-html="markdown(text)")
</template>

<script>
import MarkdownIt from 'markdown-it'
import axios from 'axios'
export default {
  name: 'ni-md-text',
  data: () => ({
    text: '## Loading...'
  }),
  methods: {
    markdown (text) {
      let md = new MarkdownIt()
      return md.render(text)
    }
  },
  async mounted () {
    let data = (await axios.get(this.url)).data
    this.text = window.atob(data.content)
  },
  props: ['url']
}
</script>

<style lang="stylus">
.ni-md-text
  h1:first-child
    display none
  h2:nth-child(2)
    margin-top 0
</style>
