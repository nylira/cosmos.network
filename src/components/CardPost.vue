<template>
  <div class="card-post">
    <template v-if="url.substr(0,4) === 'http'">
      <a :href="url">
        <div class="title">{{ title }}</div>
        <div class="meta">{{ meta }}</div>
        <div class="desc">{{ desc }}</div>
      </a>
    </template>
    <template v-else>
      <router-link :to="url">
        <div class="title">{{ title }}</div>
        <div class="meta">{{ meta }}</div>
        <div class="desc">{{ desc }}</div>
      </router-link>
    </template>
  </div>
</template>

<script>
export default {
  name: 'card-post',
  props: ['title', 'desc', 'meta', 'url']
}
</script>


<style lang="stylus">
@require '../styles/variables.styl'

.card-post
  margin-bottom 1rem

  a
    border 1px solid bc
    padding 1rem
    display block
    color txt
    &:hover .title
      color link

  &:last-of-type
    margin-bottom 0

  .title
    font-weight 600
    line-height 1.25
    color txt

  .title
    margin-bottom 0.25rem

  .meta
    line-height 2

  .desc
    max-width 40em
    color dim

@media screen and (min-width: 360px)
  .card-post
    .title
      font-size 1.125em

@media screen and (min-width: 768px)
  .card-post
    .title
      font-size 1.25*x
    a
      padding 1.5rem
</style>
