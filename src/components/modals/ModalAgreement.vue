<template>
  <modal class="modal-agreement" size='fullscreen'>
    <div slot="title">HackAtom Participation Agreement</div>
    <article-body>
      <markdown-content></markdown-content>
    </article-body>
    <div slot="footer">
      <btn value="Cancel" @click.native="no"></btn>
      <btn value="Agree" @click.native="yes"></btn>
    </div>
  </modal>
</template>

<script>
import { mapGetters } from 'vuex'
import MarkdownContent from '../../content/en-US/participation-agreement.md'
import Btn from '@nylira/vue-button'
import Modal from './Modal'
import ArticleBody from '@nylira/vue-article-body'
export default {
  name: 'modal-agreement',
  components: {
    ArticleBody,
    Btn,
    MarkdownContent,
    Modal
  },
  computed: {
    ...mapGetters(['links'])
  },
  methods: {
    yes () {
      this.$store.commit('setHackAtomAgreed', true)
      window.location.href = this.links.cosmos.hackathon.two
    },
    no () {
      this.$store.commit('setHackAtomModal', false)
    }
  }
}
</script>
