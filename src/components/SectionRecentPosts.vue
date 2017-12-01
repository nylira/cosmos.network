<template>
  <section class="section-home sh-text sh-updates" id="home-intro">
    <div class="section-container">
      <h2>Latest Updates</h2>
      <div class="section-content">
        <router-link
          class="post-summary"
          :to="'/blog/' + post.slug"
          v-for="post in posts"
          :key="post.slug">
          <div class="title">{{ post.title }}</div>
          <div class="date">{{ post.dateFriendly }}</div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'section-recent-posts',
  components: {
  },
  computed: {
    posts () {
      if (this.allPosts) {
        return this.allPosts.slice(0, 2)
      }
      return []
    },
    ...mapGetters(['allPosts'])
  }
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'

.post-summary
  display block
  border 1px solid bc
  padding 0.75rem 1rem
  margin 0.5rem
  display flex
  flex-flow column nowrap
  .title
    color txt
    font-weight 500
    flex 1
  .date
    color light

.sh-updates .section-content
  display flex
  flex-flow column nowrap

@media screen and (min-width: 1024px)
  .sh-updates .section-content
    flex-flow row
    padding 0 0.5rem !important
  .post-summary
    flex 1
</style>
