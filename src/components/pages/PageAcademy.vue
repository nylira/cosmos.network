<template lang="pug">
.page
  page-menu
  page(title="Cosmos Academy" subtitle="Participate in the Academy to learn how to build your project on the Cosmos Network.")
    text-container
      h2 Scheduled Meetups
      p Hello World

      h2 Learning Videos
      p A series of education videos on developing on Cosmos is soon. Stay tuned. Here are some of the upcoming topics.

      h3 Validator Program: An Introduction
      h3 Cosmos Academy: An Introduction
      h3 IBC: Interblockchain Communication Protocol
      h3 Get Started I: Your First Cosmos Zone
      h3 Get Started II: Build a UI For Your Zone
</template>

<script>
import Page from 'common/NiPage'
import PageMenu from 'common/NiPageMenu'
import TextContainer from 'common/NiTextContainer.vue'
export default {
  name: 'page-academy',
  metaInfo: { title: 'Academy' },
  components: {
    Page,
    PageMenu,
    TextContainer
  }
}
</script>
