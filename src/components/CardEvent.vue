<template>
  <div class="card-events">
    <div class="flexlist" v-for="item in events">
      <div class="img-box"><img :src="image('events', item.location, 'jpg')"></div>
      <div class="title">{{item.title}}</div>
      <div class="date">{{item.dates.start}} to {{ item.dates.end }}</div>
      <div class="details">{{item.details}}</div>
      <div class="href">
        <a :href="item.href" target="_blank">Visit event website -></a>
      </div>
    </div>
  </div>
</template>

<script>
import { image } from '../scripts/cdn.js'
export default {
  name: 'card-events',
  data: () => ({
    image: image
  }),
  props: ['events']
}
</script>

<style lang="stylus">
  @require '../styles/variables.styl'
  .card-events
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .flexlist
      width: 48%;
      padding 1vh 2vh 0vh 0vh
      padding-top 20px

      .img-box
        height 280px
        overflow hidden
      .img-box img
        position relative
        width 100%
        top 50%
        transform translateY(-50%)

      .title
        padding-top 18px;
        font-size 16px;
        font-weight bold;
        color txt;

      .date
        color dim;
        font-weight bold;
        padding-top 2px;
        font-size 16px;

      .details
        font-size 16px;
        font-weight normal;
        padding-top 24px;
        color light;

      .href
        padding-top 24px;
        font-size 16px;

  @media screen  and (min-width: 768px) and (max-width: 1360px)
    .card-events
      .flexlist
        .img-box
          height 180px !important

  @media screen  and (max-width: 768px)
    .card-events
      .flexlist
        width: 100%;

        .img-box
            height 180px !important
</style>
