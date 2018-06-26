<template lang="pug">
.ni-milestone(:class="cardClass" :style="cardStyle")
  .ni-milestone__container(:id="milestone.id")
    .ni-milestone__header(v-if="milestone.date" @click="toggleDetails")
      .ni-milestone__icon
        i.material-icons.done done
      .ni-milestone__title {{ milestone.title }}
      .ni-milestone__action
        i.material-icons(v-if="!details") help_outline
        i.material-icons(v-else) close
    .ni-milestone__header(v-else)
      .ni-milestone__icon
        i.material-icons hourglass_empty
      .ni-milestone__title {{ milestone.title }}
    .ni-milestone__details(v-if="details")
      .ni-milestone__description {{ milestone.description }}
      .ni-milestone__footer(v-if="milestone.date")
        .ni-milestone__date {{ milestone.date }}
        .ni-milestone__network {{ milestone.network }}
</template>

<script>
export default {
  name: "ni-milestone",
  computed: {
    cardClass() {
      let value = ""
      if (this.milestone.date) {
        value += "ni-milestone--done "
      }
      if (this.type) {
        value += `ni-milestone--${this.type}`
      }
      return value
    },
    cardStyle() {
      let offset = this.milestone.offset
      let height = offset * 6 + 0.5
      return {
        marginBottom: height + "rem"
      }
    }
  },
  data: () => ({
    details: true
  }),
  mounted() {
    if (this.milestone.date) {
      this.details = false
    }
  },
  methods: {
    toggleDetails() {
      this.details = !this.details
    }
  },
  props: ["milestone", "type"]
}
</script>

<style scoped lang="stylus">
@import '~variables'

.ni-milestone
  margin 1rem
  &.ni-milestone--done
    .ni-milestone__header
      cursor pointer
    &:hover
      .ni-milestone__header
        background var(--app-fg)
      .ni-milestone__action i.material-icons
        color var(--hover)

.ni-milestone__container
  max-width 40rem
  border 1px solid var(--bc)
  background var(--app-fg)

.ni-milestone__header
  height 2rem
  display flex
  align-items center
  justify-content space-between
  background var(--app-bg)

.ni-milestone__icon
  i.material-icons
    width 2rem
    height 2rem
    display flex
    align-items center
    justify-content center
    color var(--dim)
    border-right 1px solid var(--bc)
    color var(--bright)
    background var(--bc)
  i.done
    color var(--bright)
    background var(--link)
    border-right none

.ni-milestone__title
  flex 1
  padding 0 0.5rem
  color var(--bright)
  font-weight 500

.ni-milestone__action
  i.material-icons
    width 2rem
    height 2rem
    display flex
    align-items center
    justify-content center
    color var(--dim)

.ni-milestone__header + .ni-milestone__details
  border-top 1px solid var(--bc)

.ni-milestone__description
  color var(--txt)
  padding 0.5rem 0.75rem
  font-size sm

.ni-milestone__footer
  height 2rem
  background var(--app-bg)
  padding 0 0.75rem
  display flex
  align-items center
  justify-content space-between

  font-size sm
  color var(--dim)

.ni-milestone__network
  margin-left 0.5rem
  color var(--accent)

@media screen and (min-width: 768px)
  .ni-milestone__key
    font-size 1.25rem
    font-weight 400
    line-height 3rem
</style>
