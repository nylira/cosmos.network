<template>
  <div v-html="text"></div>
</template>

<script>
import { Base64 } from "js-base64"
import MarkdownIt from "markdown-it"
import axios from "axios"
export default {
  name: "md-getter",
  data: () => ({
    text: ""
  }),
  async mounted() {
    let data = (await axios.get(this.url)).data
    let content = Base64.decode(data.content)
    let md = new MarkdownIt({
      html: true,
      linkify: true,
      typographer: true
    })

    this.text = md.render(content)
  },
  props: ["url"]
}
</script>
