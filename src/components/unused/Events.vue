<template>
  <div class="events-container">
    <div class="event" v-for="item in events">
      <div class="thumbnail"><img :src="image('events', item.location, 'jpg')"></div>
      <div class="title h3">{{item.title}}</div>
      <div class="date h4">{{item.dates.start}} to {{ item.dates.end }}</div>
      <div class="details">
        {{item.details}}
        <a :href="item.href" target="_blank">Event website&nbsp;&rsaquo;</a>
      </div>
    </div>
  </div>
</template>

<script>
import { image } from '../scripts/cdn.js'
export default {
  name: 'events-container',
  data: () => ({
    image: image
  }),
  props: ['events']
}
</script>

<style lang="stylus">
@require '../styles/variables.styl'

.events-container
  padding 0.5rem
  &:empty
    display none
  .event
    margin-bottom 0.5rem
    padding 0.5rem
    &:last-child
      margin-bottom 0

    .thumbnail
      height 20vh
      overflow hidden
      margin-bottom 1.5rem

    .thumbnail img
      position relative
      width 100%
      top 50%
      transform translateY(-50%)

    .date
      color dim
      margin-top -0.5rem

    .details
      margin-bottom 1rem

@media screen and (min-width: 1024px)
  .events-container
    display flex
    flex-flow row wrap
    .event
      flex 0 0 50%

</style>
