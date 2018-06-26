<template lang="pug">
part#section-events.ni-section-events(title="Recent & Upcoming Events")
  div(slot="menu"): router-link(:to="{ name: 'events' }") All Events
  card-event-small(v-for="e in filteredEvents" :event="e" :key="e.id")
</template>

<script>
import moment from "moment"
import { orderBy, reverse } from "lodash"
import { mapGetters } from "vuex"
import CardEventSmall from "cards/NiCardEventSmall"
import Part from "common/NiPart"
export default {
  name: "section-events",
  components: {
    CardEventSmall,
    Part
  },
  computed: {
    filteredEvents() {
      let events = this.events.filter(e => e.dates.start !== undefined)
      events = orderBy(
        events,
        [
          function(e) {
            return moment(e.dates.start)
          }
        ],
        "desc"
      )
      return reverse(events.slice(0, 4))
    },
    ...mapGetters(["events"])
  }
}
</script>

<style lang="stylus">
@require '~variables'

.ni-section-events
  border-top 1px solid bc

.ni-section-events .ni-event-sm__container:nth-of-type(1n+3)
  display none

@media screen and (min-width:768px)
  .ni-section-events .ni-event-sm__container:nth-of-type(3)
    display block

  .ni-section-events
    .ni-part-main
      display flex
      flex-flow row wrap

      .ni-event-sm__container
        flex 0 0 33.333%

@media screen and (min-width: 1024px)
  .ni-section-events .ni-event-sm__container:nth-of-type(4)
    display block

  .ni-section-events
    .ni-part-main
      .ni-event-sm__container
        flex 0 0 25%
</style>
