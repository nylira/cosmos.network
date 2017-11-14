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
    p Text.
</template>

<script>
import {mapGetters} from 'vuex'
import Part from './common/NiPart'
import TextContainer from './common/NiTextContainer'
export default {
  name: 'page-dev-index',
  components: {
    Part,
    TextContainer
  },
  computed: { ...mapGetters(['links']) }
}
</script>
