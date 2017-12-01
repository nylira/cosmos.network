<template lang="pug">
page(title="Validator FAQ" subtitle="Frequently asked questions about Cosmos Validators.")
  text-container: body-text
</template>

<script>
import { mapGetters } from 'vuex'
import BodyText from 'content/en-US/validators-faq.md'
import Btn from '@nylira/vue-button'
import Page from 'common/NiPage'
import Part from 'common/NiPart'
import TextContainer from 'common/NiTextContainer'
export default {
  name: 'page-validators',
  components: {
    BodyText,
    Btn,
    Page,
    Part,
    TextContainer
  },
  computed: {
    ...mapGetters(['validators', 'links'])
  },
  mounted () {
    document.title = 'Validators FAQ - Cosmos - Internet of Blockchains'
  }
}
</script>
