<template lang="pug">
.ni-event-container: .ni-event
  .ni-event__image
    img(:src="image('events', event.image, 'jpg')" v-if="event.image")
    i.material-icons(v-else) location_city
  .ni-event__content
    .ni-event__header
      a.ni-event__title(:href="event.href", target="_blank") {{ event.title }}
      .ni-event__subtitle
        .ni-event__date
          i.material-icons date_range
          | {{ dateStart }}
          template(v-if="event.dates.end")  - {{ dateEnd }}
        .ni-event__location
          i.material-icons room
          | {{ event.location }}
    .ni-event__body {{ event.body }}
    .ni-event__footer
      btn(type="anchor" color="primary" :href="event.href" target="_blank" value="Learn more")
      btn(type="anchor" :href="addToCalendarGoogle" value="Add to calendar")
</template>

<script>
import moment from 'moment'
import { image } from 'scripts/cdn'
import Btn from '@nylira/vue-button'
export default {
  name: 'ni-event-container',
  components: {
    Btn
  },
  computed: {
    dateStart () {
      let dateStart = this.event.dates.start
      if (dateStart) {
        if (this.status === 'ended') {
          return moment(dateStart).format('YYYY MMMM D')
        } else {
          return moment(dateStart).format('MMMM D')
        }
      }
    },
    dateEnd () {
      let dateEnd = this.event.dates.end
      if (dateEnd) {
        return moment(dateEnd).format('D')
      }
    },
    addToCalendarGoogle () {
      let eventTitle = this.event.title
      let eventLoc = this.event.title
      let eventDesc = `For details, go to: ${this.event.href}`
      let eventDates = ''
      let eventStart = moment(this.event.dates.start).format('Ymd\\THi00\\Z')
      let eventEnd = moment(this.event.dates.end).format('Ymd\\THi00\\Z')
      if (this.eventEnd) {
        eventDates = eventStart + '/' + eventEnd
      } else {
        eventDates = eventStart
      }
      console.log('eventDates', eventDates)
      return `https://www.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&dates=${eventDates}&details=${eventDesc}&location=${eventLoc}&sf=true&output=xml`
    }
  },
  data: () => ({
    image: image
  }),
  props: ['event', 'status']
}
</script>

<style lang="stylus">
@require '~variables'

.ni-event__image
  padding 1rem 1rem 0
  img
    display block
    max-width 100%
    height auto
  i.material-icons
    display block
    font-size 3rem
    height 10rem
    color bc
    background app-fg
    display flex
    align-items center
    justify-content center

.ni-event__content
  padding 1rem

.ni-event__header
.ni-event__body
  margin 0 0 0.5rem

.ni-event__title
  font-size h3
  font-weight 500

.ni-event__subtitle
  display flex

.ni-event__date
.ni-event__location
  font-size sm
  display flex
  align-items center
  i
    color dim
    margin-right 0.25rem

.ni-event__date
  margin-right 0.75rem

.ni-event__footer
  .ni-btn
    margin-right 0.5rem
    &:last-of-type
      margin-right 0

@media screen and (min-width: 768px)
  .ni-event
    display flex

  .ni-event__image
    padding 1rem 0 1rem 1rem
    flex 0 0 16rem

  .ni-event__header
  .ni-event__body
    margin-bottom 1rem

@media screen and (min-width: 1024px)
  .ni-event__image
    flex 0 0 20rem
</style>
