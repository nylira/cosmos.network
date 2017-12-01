<template lang="pug">
ul.locations
  li
    a(:href='links.cosmos.meetups.berlin' target='_blank')
      img(src='../assets/images/hackatom/loc-berlin.jpg')
      .kv
        .key HackAtom Meetup
        .value Berlin
  li
    a(:href='links.cosmos.meetups.nyc' target='_blank')
      img(src='../assets/images/hackatom/loc-nyc.jpg')
      .kv
        .key HackAtom Meetup
        .value New York City
  li
    a(:href='links.cosmos.meetups.toronto' target='_blank')
      img(src='../assets/images/hackatom/loc-toronto.jpg')
      .kv
        .key HackAtom Meetup
        .value Toronto
  li
    a(:href='links.cosmos.meetups.sf' target='_blank')
      img(src='../assets/images/hackatom/loc-san-francisco.jpg')
      .kv
        .key HackAtom Meetup
        .value San Francisco
  li
    a(:href='links.cosmos.meetups.seoul' target='_blank')
      img(src='../assets/images/hackatom/loc-seoul.jpg')
      .kv
        .key HackAtom Meetup
        .value Seoul
  li
    a(:href='links.cosmos.meetups.shanghai' target='_blank')
      img(src='../assets/images/hackatom/loc-shanghai.jpg')
      .kv
        .key HackAtom Meetup
        .value Shanghai
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'meetup-locations',
  computed: {
    ...mapGetters(['links'])
  }
}
</script>
