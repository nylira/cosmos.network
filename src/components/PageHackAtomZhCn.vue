<template lang="pug">
.page-hackatom
  locale-menu
  header.ha-header
    .image
    .ha-container
      main
        a.alert(href='https://medium.com/cosmos-blockchain/cosmos-hackatom-is-underway-52c6032f6a61', target='_blank')
          span.key
            i.fa.fa-exclamation-circle
            |  更新： 
          span.value CosmosHackAtom正在进行 →
        h1
          strong Hack
          | Atom 2017
        ul
          li 6月9日-7月9日
          li 来自世界各地的参与者
          li 5万美元的奖金等待您的获取
        p
          strong HackAtom
          | 正在全球范围内寻找个人或者团队来参加总奖金高达5万美金的黑客马拉松活动。活动时间从6月9日至7月9日。参与者将创新的想法转化为可运行的应用程序，就能从Cosmos社区赢取奖金。
        p
          | HackAtom大赛为期四周，期间您将创建一个真正的产品。加密和区块链社区会观赛并投票，选出他们满意的项目。说出你创新想法背后的故事，并把它变成一个有用的产品。同时，带动大家一起参与，共同打造超酷的东西。
          a(@click='setModal(true)') 注册!
  section.ha-section.judging
    .ha-container
      header 奖品
      main
        p 活动奖金是价值5万美金的以太币（ETH）。奖金对获奖应用的分配方案如下：
        ul.prizes
          li.grand
            i.fa.fa-trophy
            .key 大奖
            .value 价值2万美金的以太币
          li.second
            i.fa.fa-trophy
            .key 第二名
            .value 价值 1万美金的以太币
          li.third
            i.fa.fa-trophy
            .key 第三名
            .value 价值6000美金的以太币
          li.fourth
            i.fa.fa-trophy
            .key 第四名
            .value 价值4000美金的以太币
        p 还有5份（每份价值2千美金的以太币）奖品，奖励给那些我们认可的在活动期间辛苦工作的志愿者。
  section.ha-section.participate
    .ha-container
      header 从世界各地参与
      main
        p 想要参与黑客马拉松（hackathon），你需做到以下几点：
        ol.participation-steps
          li
            .key 1.
            .value 注册
              a(@click='setModal(true)') 注册
          li
            .key 2.
            .value 构建你的应用
          li
            .key 3.
            .value 于太平洋时间七月九日上午十时前提交
  section.ha-section.meetup
    .ha-container
      header 与Cosmonauts聚会
      main
        p 2017年6月9日当地时间下午7:00，我们将在世界各地举办HackAtom聚会。如果你在附近，请来加入我们！在构建应用时，请与我们联系，以获取免费提示和支持。
        meetup-locations

  section.ha-section.judging
    .ha-container
      header 评审
      main
        p 我们期待的是高水平的专业性和质量，因此从一开始就邀请了经验丰富的黑客和企业家来影响本次竞赛。你将会获得来自社区与评审员的专业评审。
  section.ha-section.ha-section-join
    .ha-container
      header 报名参加
      main
        p 在表单中，填写你的详细信息，并提交，以参与CosmosHackAtom。您将收到关于如何比赛的进一步说明。
        btn(@click.native='setModal(true)', size='lg', icon='clock-o', value='Sign Up for HackAtom')
        p
          | 想要咨询黑客马拉松活动，请通过邮件与我们联系：
          a(:href="'mailto:' + links.cosmos.email") {{links.cosmos.email}}
          | 。
  section.ha-section.ha-section-hashtag
    .ha-container
      header
        a(href="https://twitter.com/intent/tweet?text=I'm%20going%20to%20%23hackatom2017%20@cosmos")
          i.fa.fa-twatter
          |  #hackatom2017
  modal-agreement(v-if='hackatom.modal')
</template>

<script>
import { mapGetters } from 'vuex'
import Btn from '@nylira/vue-button'
import LocaleMenu from './PageHackAtomLocaleMenu'
import MeetupLocations from './MeetupLocations'
import ModalAgreement from './ModalAgreement'
import NiSection from './NiSection'
import PageHeader from '@nylira/vue-page-header'
export default {
  name: 'page-hackatom',
  components: {
    Btn,
    LocaleMenu,
    MeetupLocations,
    ModalAgreement,
    NiSection,
    PageHeader
  },
  computed: {
    ...mapGetters(['allPeople', 'hackatom', 'links'])
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
    ppl (tag) { return this.allPeople.filter(p => p.tags.includes(tag)) },
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

@media screen and (min-width: 1200px)
  .ha-header
    .image
      width 513px
</style>
