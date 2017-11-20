<template lang="pug">
.page-validators
  header.v-page-header
    .v-container
      .title
        h2 Cosmos
        h1 Validators FAQ
      .validator-icon: img(src="../assets/images/cosmos-validator-small.png")
</template>

<script>
export default {
  name: 'page-validators',
  head: {
    title () {
      return {
        inner: 'Validators FAQ',
        separator: '-',
        complement: 'Cosmos - Internet of Blockchains'
      }
    }
  }
}
</script>
