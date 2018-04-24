import VueRouter from "vue-router"
import config from "../store/modules/config.js"

import PageIndex from "pages/PageIndex"
import PageAbout from "pages/PageAbout"
import PageAssets from "pages/PageAssets"
import PageCommunity from "pages/PageCommunity"
import PageEvents from "pages/PageEvents"
import PageFaq from "pages/PageFaq"
import PagePlan from "pages/PagePlan"
import PagePrivacy from "pages/PagePrivacy"
import PageRoadmap from "pages/PageRoadmap"
import PageWhitepaper from "pages/PageWhitepaper"

import PageIntro from "pages/PageIntro"
import PageIntroIndex from "pages/PageIntroIndex"
import PageIntroHub from "pages/PageIntroHub"
import PageIntroFurther from "pages/PageIntroFurther"

import PageDevelopers from "pages/PageDevelopers"
import PageDevelopersIndex from "pages/PageDevelopersIndex"
import PageDevelopersHackAtom from "pages/PageDevelopersHackAtom"
import PageDevelopersScalingEth from "pages/PageDevelopersScalingEth"
import PageDevelopersWallet from "pages/PageDevelopersWallet"
import PageDevelopersAcademy from "pages/PageDevelopersAcademy"

import PageStaking from "pages/PageStaking"
import PageStakingIndex from "pages/PageStakingIndex"
import PageStakingDelegators from "pages/PageStakingDelegators"
import PageStakingValidators from "pages/PageStakingValidators"
import PageStakingValidatorsFaq from "pages/PageStakingValidatorsFaq"

import PageVoyager from "pages/PageVoyager"
import PageVoyagerIndex from "pages/PageVoyagerIndex"
import PageVoyagerFaq from "pages/PageVoyagerFaq"
import PageVoyagerSupport from "pages/PageVoyagerSupport"

import Page404 from "pages/Page404"

const routes = [
  // PAGES
  { path: "/", name: "index", component: PageIndex },
  { path: "/about", name: "about", component: PageAbout },
  { path: "/assets", name: "assets", component: PageAssets },
  { path: "/community", name: "community", component: PageCommunity },
  { path: "/events", name: "events", component: PageEvents },
  { path: "/faq", name: "faq", component: PageFaq },
  { path: "/plan", name: "plan", component: PagePlan },
  { path: "/privacy", name: "privacy", component: PagePrivacy },
  { path: "/roadmap", name: "roadmap", component: PageRoadmap },
  { path: "/whitepaper", name: "whitepaper", component: PageWhitepaper },
  {
    path: "/whitepaper/:locale",
    name: "whitepaper-i18n",
    component: PageWhitepaper
  },

  // INTRO
  {
    path: "/intro",
    component: PageIntro,
    children: [
      { path: "/", name: "intro", component: PageIntroIndex },
      { path: "hub", name: "intro-hub", component: PageIntroHub },
      {
        path: "further",
        name: "intro-further",
        component: PageIntroFurther
      }
    ]
  },

  // DEVELOPERS
  {
    path: "/developers",
    component: PageDevelopers,
    children: [
      { path: "/", name: "developers", component: PageDevelopersIndex },
      { path: "academy", name: "academy", component: PageDevelopersAcademy },
      {
        path: "hackatom",
        name: "hackatom",
        component: PageDevelopersHackAtom
      },
      {
        path: "scaling-eth",
        name: "scaling-eth",
        component: PageDevelopersScalingEth
      },
      { path: "wallet", name: "wallet", component: PageDevelopersWallet }
    ]
  },

  // STAKING
  {
    path: "/staking",
    component: PageStaking,
    children: [
      { path: "/", name: "staking", component: PageStakingIndex },
      {
        path: "delegators",
        name: "delegators",
        component: PageStakingDelegators
      },
      {
        path: "validators",
        name: "validators",
        component: PageStakingValidators
      },
      {
        path: "validators-faq",
        name: "validators-faq",
        component: PageStakingValidatorsFaq
      }
    ]
  },

  // VOYAGER
  {
    path: "/voyager",
    component: PageVoyager,
    children: [
      { path: "/", name: "voyager", component: PageVoyagerIndex },
      { path: "faq", name: "voyager-faq", component: PageVoyagerFaq },
      {
        path: "support",
        name: "voyager-support",
        component: PageVoyagerSupport
      }
    ]
  },

  // redirects
  { path: "/about/faq", redirect: "/faq" },
  { path: "/about/team", redirect: "/about" },
  { path: "/about/whitepaper", redirect: "/whitepaper" },
  { path: "/academy", redirect: "/developers/academy" },
  { path: "/blog/:entry", redirect: "/blog" },
  {
    path: "/blog",
    beforeEnter: () => {
      window.location.assign("https://blog.cosmos.network")
    }
  },
  {
    path: "/contact-events",
    beforeEnter: () => {
      window.location.assign(config.state.CONTACT_EVENTS_URL)
    }
  },
  { path: "/download", redirect: "/voyager" },
  { path: "/downloads", redirect: "/voyager" },
  { path: "/dev", redirect: "/developers" },
  { path: "/dev/hackatom", redirect: "/developers/hackatom" },
  { path: "/dev/whitepaper", redirect: "/whitepaper" },
  { path: "/developers/scaling", redirect: "/developers/scaling-eth" },
  { path: "/hackatom", redirect: "/developers/hackatom" },
  { path: "/intro/faq", redirect: "/faq" },
  { path: "/introduction", redirect: "/intro" },
  {
    path: "/matrix",
    beforeEnter: () => {
      window.location.assign("https://riot.im/app/#/room/#cosmos:matrix.org")
    }
  },
  { path: "/plan/:locale", redirect: "/plan" },
  {
    path: "/riot",
    beforeEnter: () => {
      window.location.assign("https://riot.im/app/#/room/#cosmos:matrix.org")
    }
  },
  { path: "/scaling-eth", redirect: "/developers/scaling-eth" },
  { path: "/scalingeth", redirect: "/developers/scaling-eth" },
  { path: "/scaling", redirect: "/developers/scaling-eth" },
  {
    path: "/security",
    beforeEnter: () => {
      window.location.assign("https://tendermint.com/security")
    }
  },
  { path: "/team", redirect: "/about" },
  {
    path: "/telegram",
    beforeEnter: () => {
      window.location.assign("https://t.me/cosmosproject")
    }
  },
  { path: "/scaling-eth", redirect: "/developers/scaling-eth" },
  { path: "/ui", redirect: "/voyager" },
  { path: "/validator", redirect: "/staking/validators" },
  { path: "/validators", redirect: "/staking/validators" },
  { path: "/validators/faq", redirect: "/staking/validators-faq" },
  { path: "/whitepaper/en-US", redirect: "/whitepaper" },
  { path: "/wallet", redirect: "/developers/wallet" },

  // wildcards
  { path: "/404", component: Page404 },
  { path: "*", component: Page404 }
]

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        offset: { x: 0, y: 48 + 3 }
      }
    }
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
