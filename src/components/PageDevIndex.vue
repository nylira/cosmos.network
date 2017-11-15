<template lang="pug">
.parts
  part(title='  '): text-container
    h2 5 minute tutorial
    p Text.

  part(title='  '): text-container
    h2 Community
    p Text.

  part(title='  '): text-container
    h2 Documentation
    p All of the documentation for Cosmos SDK can be found here.
    btn(type="anchor" href="https://cosmos.read-the-docs.io"
      target="_blank" value="Documentation")
</template>

<script>
import {mapGetters} from 'vuex'
import Part from './common/NiPart'
import TextContainer from './common/NiTextContainer'
import Btn from '@nylira/vue-button'
export default {
  name: 'page-dev-index',
  components: {
    Btn,
    Part,
    TextContainer
  },
  computed: { ...mapGetters(['links']) }
}
</script>
