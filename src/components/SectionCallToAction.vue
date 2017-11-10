<template>
  <div class="section-cta">
    <div class="section-cta-container">
      <header class="section-cta-header">
        <h2 class="section-cta-title">Cosmos Fundraiser</h2>
        <div class="section-cta-subtitle">raised {{ amountRaised }} in half an hour</div>
      </header>
      <main class="section-cta-main">
        <btn
          type="anchor"
          class="section-cta-btn"
          size="lg"
          value="Fundraiser Ended"
          icon="assessment"
          target="_blank"
          :href="config.FUNDRAISER_URL">
        </btn>
        <div class="section-cta-description">Join our <a :href="links.cosmos.chat">community chat</a>.</div>
      </main>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Btn from '@nylira/vue-button'
import FormEmailSignup from './FormEmailSignup'
export default {
  name: 'section-cta',
  components: {
    Btn,
    FormEmailSignup
  },
  computed: {
    ...mapGetters(['config', 'links'])
  },
  data: () => ({
    amountRaised: '$17 million',
    pdtEndDate: 'April 6, 2017 6:28AM PDT'
  })
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'

.section-cta
  background app-fg

.section-cta-container
  max-width 40rem
  margin 0 auto

  text-align center
  padding 2rem 1.5rem

.section-cta-header, .section-cta-description
  margin-bottom 1.5rem

.section-cta-title
  font-size 1.5rem
  font-weight 600

.section-cta-subtitle
  font-size 1.375rem

.section-cta-form
  margin-bottom 1.5rem
  margin-left auto
  margin-right auto

.section-cta-description
  margin-left auto
  margin-right auto
  max-width 24rem
  font-size 0.875rem
  &:last-of-type
    margin-bottom 0

.section-cta-btn.ni-btn
  max-width 20rem
  width 100%
  margin-bottom 1.5rem

@media screen and (min-width: 768px)
  .section-cta-container
    padding-top 4rem
    padding-bottom 4rem

  .section-cta-header
    margin-bottom 2rem

  .section-cta-title
    font-size 2rem

  .section-cta-subtitle
    font-size 1.66rem

  .section-cta-form, .section-cta-btn.ni-btn,
  .section-cta-description
    margin-bottom 2.25rem

  .section-cta-description
    font-size 1rem
</style>
