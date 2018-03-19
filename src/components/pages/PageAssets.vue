<template lang="pug">
page(title="Media Assets" subtitle="Cosmos branding, logo, and media assets.")
  text-container
    h2 Overview
    p We have an open approach towards the use of the Cosmos logo that is community-friendly and supports the greater Cosmos and crypto ecosystem.
    p All current Cosmos logos are under Creative Commons attribution 3.0.

    h3 Visual Identity
    p Please read and follow the Cosmos Visual Identity Guide. (PDF)
    btn(type="anchor" :href="links.cosmos.assets.visualIdentity" value="Download Guide" size="lg" icon="description")

    h3 Logo Assets
    p Download the Cosmos Logo Assets to get access to our logo in vector, alpha, and high resolution formats. (ZIP)
    btn(type="anchor" :href="links.cosmos.assets.logoAssets" value="Download Assets" size="lg" icon="image")
</template>

<script>
import {mapGetters} from 'vuex'
import Btn from '@nylira/vue-button'
import Page from 'common/NiPage'
import TextContainer from 'common/NiTextContainer'
export default {
  name: 'page-media-assets',
  metaInfo: { title: 'Media Assets' },
  components: {
    Btn,
    Page,
    TextContainer
  },
  computed: { ...mapGetters(['links']) }
}
</script>
