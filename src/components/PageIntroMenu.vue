<template lang="pug">
.page-intro-menu
  btn(to="/intro/brief" value="Brief")
  btn(to="/intro/whitepaper" value="Whitepaper")
  btn(to="/intro/roadmap" value="Roadmap")
  btn(to="/intro/faq" value="FAQ")
</template>

<script>
import Btn from '@nylira/vue-button'
export default {
  name: 'page-intro-menu',
  components: {
    Btn
  }
}
</script>
