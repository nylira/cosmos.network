<template lang="pug">
.section-social: .section-social__container
  .app-footer__row.app-footer__row-actions
    part(title="Testnet Status: LIVE")
      btn(
        type="anchor"
        href="http://explorer.cosmos.network"
        icon="assessment"
        size="lg"
        target="_blank"
        value="Testnet Explorer")
    part(title="Get Newsletter"): form-email-signup
  .app-footer__row
    part(title='Discuss & Chat'): .community-cards
      card-social(
        dt="Community Chat"
        dd="Join #cosmos:matrix.org"
        icon-type="mi"
        icon="chat"
        :anchor="links.cosmos.community.matrix")
      card-social(
        dt="Cosmos SDK Chat"
        dd="Join #cosmos-sdk:matrix.org"
        icon-type="mi"
        icon="chat"
        anchor="https://riot.im/app/#/room/#cosmos-sdk:matrix.org")
      card-social(
        dt="Cosmos Validator Chat"
        dd="Join #cosmos_validators:matrix.org"
        icon-type="mi"
        icon="chat"
        anchor="https://riot.im/app/#/room/#cosmos_validators:matrix.org")
    part(title='Social Media'): .community-cards
      card-social(
        dt='Medium'
        dd='Read the latest on the Cosmos Blog'
        icon='medium'
        :anchor='links.cosmos.blog')
      card-social(
        dt='Twitter'
        dd='Follow @cosmos, our official account'
        icon='twitter'
        :anchor='links.cosmos.community.twitter')
      card-social(
        dt='Reddit'
        dd='Subscribe to /r/cosmosnetwork'
        icon='reddit'
        :anchor='links.cosmos.community.reddit')
</template>

<script>
import { mapGetters } from "vuex"
import Btn from "@nylira/vue-button"
import Cards from "common/NiCards"
import CardSocial from "cards/CardSocial"
import FormEmailSignup from "forms/FormEmailSignup"
import Part from "common/NiPart"
export default {
  name: "app-footer",
  components: {
    Btn,
    Cards,
    CardSocial,
    FormEmailSignup,
    Part
  },
  computed: {
    ...mapGetters(["links"])
  }
}
</script>

<style lang="stylus">
@require '~variables'

.section-social__container
  max-width 1024px
  margin 1.5rem auto 0

.app-footer__row-actions
  margin-bottom 1rem
  .ni-part-main
    padding 1rem
    margin-top 0.25rem

    .ni-btn:only-child
      width 100%
      max-width 20rem

    .form-email-signup
      max-width 20rem
      margin 0

@media screen and (min-width: 768px)
  .app-footer__row
    display flex
    flex-flow row nowrap
    margin 0 0 1rem

    .ni-part:first-child
      margin-right 0.5rem
    .ni-part:last-child
      margin-left 0.5rem

    .ni-part
      flex 1
</style>
