<template lang="pug">
page(title="Error 404" subtitle="Page Not Found")
  text-container
    h2 Whoops!
    p The page you visited either does not exist or has been moved in a website reshuffle. We're sorry for the inconvenience. Try navigating with the website menu above.
    p Please notify us at #[a(:href="'mailto:' + links.cosmos.email") {{links.cosmos.email}}] and we will fix this error as soon as we can. Thank you for your patience.
</template>

<script>
import {mapGetters} from 'vuex'
import Page from 'common/NiPage'
import TextContainer from 'common/NiTextContainer'
export default {
  name: 'page-intro',
  components: {
    Page,
    TextContainer
  },
  computed: { ...mapGetters(['links']) },
  mounted () {
    document.title = '404 - Cosmos - Internet of Blockchains'
  }
}
</script>
