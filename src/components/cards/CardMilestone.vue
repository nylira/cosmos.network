<template lang="pug">
.ni-milestone(:class="cardClass" :style="cardStyle")
  .ni-milestone__container(:id="milestone.id")
    .ni-milestone__main
      .ni-milestone__header
        .ni-milestone__icon
          i.material-icons.done(v-if="milestone.date") done
          i.material-icons(v-else) timelapse
        .ni-milestone__title {{ milestone.title }}
      .ni-milestone__value {{ milestone.description }}
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
  props: ["milestone", "type"]
}
</script>

<style scoped lang="stylus">
@import '~variables'

.ni-milestone
  margin 1rem
  &.ni-milestone--done
    .ni-milestone__main
      color var(--bright)
      background var(--app-fg)
      border-color var(--link)

.ni-milestone__container
  width 100%

.ni-milestone__main
  max-width 40rem
  border 2*px solid var(--bc)
  background var(--app-bg)

.ni-milestone__header
  height 2rem
  display flex
  align-items center
  border-bottom 1px solid var(--bc)

.ni-milestone__icon

  i.material-icons
    width 2rem
    height 2rem
    display flex
    align-items center
    justify-content center
    color var(--dim)
  i.done
    color var(--bright)
    background var(--link)

.ni-milestone__title
  padding 0 0.5rem
  color var(--bright)
  font-weight 500

.ni-milestone__value
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
  border-bottom 1px solid var(--bc)

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
