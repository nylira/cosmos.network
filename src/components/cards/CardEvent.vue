<template lang="pug">
.events-container
  .event(v-for='item in events')
    .thumbnail
      img(:src="image('events', item.location, 'jpg')")
    .title.h3 {{item.title}}
    .date.h4 {{item.dates.start}} to {{ item.dates.end }}
    .details
      | {{item.details}}
      a(:href='item.href', target='_blank') Event website ›
</template>

<script>
import { image } from 'scripts/cdn'
export default {
  name: 'events-container',
  data: () => ({
    image: image
  }),
  props: ['events']
}
</script>

<style lang="stylus">
@require '~variables'

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
