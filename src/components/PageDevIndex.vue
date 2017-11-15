<template lang="pug">
.parts
  part(title='  '): text-container
    h2 5 minute tutorial
    p Text.

  part(title='  '): text-container
    h2 Code Repositories

    h3 Cosmos SDK
    p Cosmos SDK is...

    h3 Ethermint
    p Ethermint is...

    h3 Lotion
    p Lotion is...

  part(title='  '): text-container
    h2 Documentation
    p All of the documentation for Cosmos SDK can be found on Read the Docs.
    btn(type="anchor" href="http://cosmos-sdk.readthedocs.io/en/latest/" size="lg"
      target="_blank" icon="description" value="View Docs")
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
