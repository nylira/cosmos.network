<template>
  <div class="page-hackatom">
    <locale-menu></locale-menu>
    <header class="ha-header">
      <div class="image"></div>
      <div class="ha-container">
        <main>
          <a class="alert" href="https://blog.cosmos.network/announcement-hackatom-2-winners-d31fe584b70b" target="_blank">
            <span class="key"><i class="fa fa-exclamation-circle"></i> Update:</span>
            <span class="value">Announcing the 2nd Cosmos HackAtom Winners &rarr;</span>
          </a>
          <h1><strong>Hack</strong>Atom 2017 #2</h1>
          <ul>
            <li>August 5 &ndash; September 14</li>
            <li>$50k to be won</li>
            <li>Participate from anywhere</li>
          </ul>
          <p><strong>HackAtom</strong> is seeking individuals and teams worldwide for a $50k open-source hackathon from August 5 – September 14, 2017. Participants will turn innovative ideas into working applications, with rewards from the Cosmos community.</p>
          <p>HackAtom is four weeks long. You'll build a real product while the crypto and blockchain communities watch and cast their vote on the project that captures their imagination. Tell the story behind your innovative idea, turn it into a working product, get other members to join, and build something cool! <a @click='setModal(true)'>Sign up now!</a></p>
        </main>
      </div>
    </header>

    <section class="ha-section judging">
      <div class="ha-container">
        <header>Prizes</header>
        <main>
          <p>There is $50,000 worth of ETH to be won. The prizes for the best open source apps are as follows:</p>
          <ul class="prizes">
            <li class="grand">
              <i class="fa fa-trophy"></i>
              <div class="key">Grand Prize</div>
              <div class="value">$20k worth of ETH</div>
            </li>
            <li class="second">
              <i class="fa fa-trophy"></i>
              <div class="key">2nd Place</div>
              <div class="value">$10k worth of ETH</div>
            </li>
            <li class="third">
              <i class="fa fa-trophy"></i>
              <div class="key">3rd Place</div>
              <div class="value">$6k worth of ETH</div>
            </li>
            <li class="fourth">
              <i class="fa fa-trophy"></i>
              <div class="key">4th Place</div>
              <div class="value">$4k worth of ETH</div>
            </li>
          </ul>
          <P>Five prizes of $2,000 worth of ETH will also be awarded to recognize the hardworking volunteers who help us during HackAtom.</p>
        </main>
      </div>
    </section>

    <section class="ha-section participate">
      <div class="ha-container">
        <header>Participate from Anywhere</header>
        <main>
          <p>To participate in the hackathon, all you need to do is:</p>
          <ol class="participation-steps">
            <li>
              <div class="key">1.</div>
              <div class="value"><a @click='setModal(true)'>Sign up</a></div>
            </li>
            <li>
              <div class="key">2.</div>
              <div class="value">Build your open source app</div>
            </li>
            <li>
              <div class="key">3.</div>
              <div class="value">Submit by September 14 at 10:00 AM PDT</div>
            </li>
          </ol>
        </main>
      </div>
    </section>

    <section class="ha-section meetup">
      <div class="ha-container">
        <header>Meetup with Cosmonauts</header>
        <main>
          <p>We're having HackAtom meetups around the world. If you're located nearby&mdash;please do come join us! Meet us to get free tips and support while building your app.</p>
          <ul class="locations">
            <li><a href="https://www.meetup.com/Cosmos-Berlin/" target="_blank">
              <img src="../assets/images/hackatom/loc-berlin.jpg">
              <div class="kv">
                <div class="key">HackAtom Meetup</div>
                <div class="value">Berlin</div>
              </div>
            </a></li>
            <li><a href="https://www.meetup.com/Cosmos-NYC/" target="_blank">
              <img src="../assets/images/hackatom/loc-nyc.jpg">
              <div class="kv">
                <div class="key">HackAtom Meetup</div>
                <div class="value">New York City</div>
              </div>
            </a></li>
            <li><a href="https://www.meetup.com/Cosmos-Toronto/" target="_blank">
              <img src="../assets/images/hackatom/loc-toronto.jpg">
              <div class="kv">
                <div class="key">HackAtom Meetup</div>
                <div class="value">Toronto</div>
              </div>
            </a></li>
            <li><a href="https://www.meetup.com/Cosmos-SanFrancisco/" target="_blank">
              <img src="../assets/images/hackatom/loc-san-francisco.jpg">
              <div class="kv">
                <div class="key">HackAtom Meetup</div>
                <div class="value">San Francisco</div>
              </div>
            </a></li>
            <li><a href="https://www.meetup.com/Cosmos-Seoul/events/240518515/" target="_blank">
              <img src="../assets/images/hackatom/loc-seoul.jpg">
              <div class="kv">
                <div class="key">HackAtom Meetup</div>
                <div class="value">Seoul</div>
              </div>
            </a></li>
            <li><a href="https://www.meetup.com/Cosmos-Shanghai/events/240518574/" target="_blank">
              <img src="../assets/images/hackatom/loc-shanghai.jpg">
              <div class="kv">
                <div class="key">HackAtom Meetup</div>
                <div class="value">Shanghai</div>
              </div>
            </a></li>
          </ul>
        </main>
      </div>
    </section>

    <section class="ha-section judging">
      <div class="ha-container">
        <header>Judging</header>
        <main>
          <p>We’re looking for a high level of professionalism and quality, and have invited experienced hackers and entrepreneurs to influence the competition right from the start. You’ll be rewarded by the judges and the community. Your project will be judged by members of the Interchain Foundation.</p>
        </main>
      </div>
    </section>
    <section class="ha-section ha-section-join">
      <div class="ha-container">
        <header>Sign Up to Particpate</header>
        <main>
          <p>Enter your details in the form to participate in Cosmos HackAtom. You’ll receive further instructions on how to compete.</p>
          <btn
            @click.native="setModal(true)"
            size="lg"
            icon="clock-o"
            value="Sign Up for HackAtom">
          </btn>
          <p>For inquiries about hackathon, please contact us at <a href="mailto:hello@tendermint.com">hello@tendermint.com</a>.</p>
        </main>
      </div>
    </section>
    <section class="ha-section ha-section-hashtag">
      <div class="ha-container">
        <header><a href="https://twitter.com/intent/tweet?text=I'm%20going%20to%20%23hackatom2017%20@cosmos"><i class="fa fa-twatter"></i> #hackatom2017</a></header>
      </div>
    </section>
    <modal-agreement v-if='hackatom.modal'></modal-agreement>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ModalAgreement from './ModalAgreement'
import LocaleMenu from './PageHackAtomLocaleMenu'
import NiSection from './NiSection'
import PageHeader from '@nylira/vue-page-header'
import Btn from '@nylira/vue-button'
export default {
  name: 'page-hackatom',
  components: {
    Btn,
    LocaleMenu,
    ModalAgreement,
    NiSection,
    PageHeader
  },
  computed: {
    ...mapGetters(['allPeople', 'hackatom'])
  },
  head: {
    title () {
      return {
        inner: 'HackAtom 2017',
        separator: '-',
        complement: 'Cosmos - Internet of Blockchains'
      }
    }
  },
  methods: {
    ppl (tag) { return this.allPeople.filter(p => p.groups[tag]) },
    setModal (value) {
      this.$store.commit('setHackAtomModal', value)
    }
  }
}
</script>

<style lang="stylus">
@require '../styles/variables.styl'

.ha-container
  max-width 1024px
  margin 0 auto
  padding 1.5em

.ha-header
  display flex

  .alert
    display block
    border 1px solid bc
    line-height 1.5rem
    padding 0.25rem 0.5rem
    margin-bottom 1rem
    color txt
    .key
      text-transform uppercase
      font-weight bold
      font-size 0.75rem
    .value
      color link
      font-weight 400
      
  h1
    font-size 3em
    font-weight 200
    line-height 1
    letter-spacing -0.03em
    color txt
    margin-bottom 1rem
    text-transform uppercase
    strong
      display block
      font-weight 600
  ul
    margin 1.75rem 0
    li
      font-size 1.25rem
  p
    font-size 1em
    margin-bottom 1.5rem
    &:last-child
      margin-bottom 0

.ha-section
  border-top 1px solid bc
  header
    font-weight 600
    font-size 1.25em
  header + main
    margin-top 0.75rem

  main
    p
      margin-bottom 1.5em
      &:last-child
        margin-bottom 0

    .locations
      display flex
      flex-flow column nowrap

    .locations li
      margin-bottom 0.5rem
      display flex
      a
        position relative
        flex 1
        min-width 0
        margin 0
        &:before
          content ''
          position absolute
          top 0
          left 0
          right 0
          bottom 0
          border 2px solid hsla(0,0,0,0.25)
        &:hover:before
          border-color #000

        img
          width 100%
          display block

        .kv
          position absolute
          bottom 0
          left 0
          padding 0.5rem
          background hsla(0,0,0,0.666)
          .key, .value
            line-height 1
          .key
            font-size 0.66rem
            color #ccc
            margin-bottom 0.375rem
          .value
            font-size 1.25rem
            color #fff
            text-transform uppercase
            letter-spacing 0.05em

    .prizes + p
      margin-top 1.5rem
    .prizes
      display flex
      flex-flow row wrap
      align-items center
      justify-content center
      padding 0.5rem
      margin -0.5rem 1rem
      li
        flex 0 0 11rem
        height 11rem
        border 1px solid bc
        background c-app-fg
        margin 0.5rem

        display flex
        flex-flow column nowrap
        align-items center
        justify-content center

        i.fa
          margin-bottom 0.5rem
          border 1px solid bc
          width 4rem
          height 4rem
          border-radius 2rem
          display flex
          align-items center
          justify-content center

          color light
          font-size 2rem
        .key
          font-weight 600
        .value
          color light

        &.grand i.fa
          background url(../assets/images/hackatom/atom-avatar.png) center center no-repeat
          background-size cover
          color transparent
        &.second i.fa
          color hsl(51,100%,50%)
        &.third i.fa
          color hsl(0,0%,75%)
        &.fourth i.fa
          color hsl(30,75.6%,60.4)

    .participation-steps
      max-width 24rem
      margin 0 auto
      text-align left
      li
        display flex
        border 1px solid bc
        background c-app-fg
        align-items center
        .key, .value
          padding 0.75rem 1rem
        .key
          font-weight bold
          width 3rem
        .value
          flex 1
          border-left 1px solid bc
      li + li
        border-top none
        
  &.ha-section-location
    .ha-container
      padding-bottom 0
      main
        height 240px

  &.ha-section-join
    .ni-btn
      display inline-block
      margin-bottom 1.5rem

@media screen and (min-width: 768px)
  .ha-container
    padding 3rem

  .ha-header
    display flex
    flex-flow row nowrap
    align-items center
    align-content stretch
    .image
      background #fff url('../assets/images/hackatom/header.jpg') center center no-repeat
      background-size cover
      width 97px
      height 512px
      border-right 1px solid bc
    .ha-container
      flex 1
      padding 0 3rem
    h1
      strong
        display inline

  .ha-section
    header
      text-align center
      font-size 1.75em
      font-weight bold

    header + main
      margin-top 1.5em

    main
      text-align center
      p
        max-width 40rem
        margin-left auto
        margin-right auto
      .prizes
        li
          flex 0 0 12rem
          height 12rem
          i.fa
            margin-bottom 1rem
            width 6rem
            height 6rem
            border-radius 3rem
          .key
            font-size 1.25rem

    &.ha-section-location
      .ha-container
        main, iframe
          height 360px

    &.ha-section-join
      main
        text-align center
        max-width 32rem
        margin-left auto
        margin-right auto
      .ni-btn
        margin 0 auto 1.5rem

  .ha-section main .locations
    flex-flow row wrap
    align-items center
    justify-content center

  .ha-section main .locations li
    flex 0 0 47%
    margin 0.5rem
    text-align left

@media screen and (min-width: 1024px)
  .ha-header
    .image
      width 257px

  .ha-section main .judges
    display flex
    margin 0 -0.5rem
    .card-person-mini
      flex 1
      margin 0.5rem

@media screen and (min-width: 1200px)
  .ha-header
    .image
      width 513px
</style>
