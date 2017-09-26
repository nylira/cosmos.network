<template>
<div class="card-person-mini">
  <div class="card-person-mini-header">
    <div class="avatar">
      <img v-if="person.slug !==''" :src="avatarSrc(person.slug)" :alt="person.name">
      <i v-else class="fa fa-user"></i>
    </div>
    <div class="text">
      <div class="name">{{ person.name }}</div>
      <div class="title">{{ person.groups['aib'] }}</div>
    </div>
  </div>
  <div class="card-person-mini-footer">
    <a v-if="person.ids.email"
      :href="'mailto:' + person.ids.email + '@tendermint.com'">
      <i class="fa fa-envelope"></i>
      <span class="label">{{ person.ids.email }}@tendermint.com</span>
    </a>
    <a v-if="person.ids.github" :href="'https://github.com/' + person.ids.github">
      <i class="fa fa-github-alt"></i>
      <span class="label">github.com/{{ person.ids.github }}</span>
    </a>
    <a v-if="person.ids.keybase" :href="'https://keybase.io/' + person.ids.keybase">
      <i class="fa fa-key"></i>
      <span class="label">keybase.io/{{ person.ids.keybase }}</span>
    </a>
    <a v-if="person.ids.linkedin" :href="'https://www.linkedin.com/in/' + person.ids.linkedin">
      <i class="fa fa-linkedout"></i>
      <span class="label">{{ person.name }}</span>
    </a>
    <a v-if="person.ids.twitter" :href="'https://twitter.com/' + person.ids.twitter">
      <i class="fa fa-twatter"></i>
      <span class="label">@{{ person.ids.twitter }}</span>
    </a>
    <a v-if="person.ids.website" :href="'http://' + person.ids.website">
      <i class="fa fa-globe"></i>
      <span class="label">{{ person.ids.website }}</span>
    </a>
  </div>
</div>
</template>

<script>
export default {
  name: 'card-person-mini',
  methods: {
    avatarSrc (slug) {
      return require('../assets/images/people/' + slug + '.jpg')
    }
  },
  props: ['person']
}
</script>

<style lang="stylus">
@require '../styles/variables.styl'

.card-person-mini
  border 1px solid bc
  margin 0 0 1rem
  text-align left

  &:last-of-type
    margin-bottom 0

.card-person-mini-header
  display flex
  border-bottom 1px solid bc
  padding 1rem

  .avatar
    flex 0 0 3rem
    height 3rem
    margin-right 0.75rem

    img, i.fa
      display block
      width 100%

    i.fa
      font-size 2rem
      color light
      background bc
      display flex
      align-items center
      justify-content center

  .text
    display flex
    flex-flow column nowrap
    justify-content center

    .name
      font-weight 600
      line-height 1.25

    .title
      color dim
      font-size 0.875rem

.card-person-mini-main
  font-size 0.75rem
  border-bottom 1px solid bc
  padding 0.75rem 1rem

.card-person-mini-footer
  display flex
  flex-flow row wrap
  background lighten(bc, 75%)
  a
    width 3rem
    height 2rem
    display block
    display flex
    align-items center
    justify-content center
    border-right 1px dotted bc
    &:last-of-type
      border-right none
    i.fa
      color light
      font-size 1rem
    &:hover
      i.fa
        color link
    .label
      display none

@media screen and (min-width:360px)
  .card-person-mini-header .avatar
    flex 0 0 3.5rem
    height 3.5rem
 
@media screen and (min-width:414px)
  .card-person-mini-main
    font-size 0.875rem

  .card-person-mini-header .avatar
    flex 0 0 4rem
    height 4rem
</style>
