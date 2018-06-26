import VueRouter from "vue-router"
import urls from "../store/modules/urls.js"

import PageIndex from "pages/PageIndex"
import PageAbout from "pages/PageAbout"
import PageAssets from "pages/PageAssets"
import PageCommunity from "pages/PageCommunity"
import PageEvents from "pages/PageEvents"
import PagePrivacy from "pages/PagePrivacy"
import PageRoadmap from "pages/PageRoadmap"
import PageTestnet from "pages/PageTestnet"

import Page404 from "pages/Page404"

function d(doc) {
  if ([0, 80, 443].includes(window.location.port)) {
    return window.location.assign(
      `${window.location.protocol}//${
        window.location.hostname
      }/docs/${doc}.html`
    )
  } else {
    return window.location.assign(
      `${window.location.protocol}//${window.location.hostname}:${
        window.location.port
      }/docs/${doc}.html`
    )
  }
}

const routes = [
  // PAGES
  { path: "/", name: "index", component: PageIndex },
  { path: "/about", name: "about", component: PageAbout },
  { path: "/assets", name: "assets", component: PageAssets },
  { path: "/community", name: "community", component: PageCommunity },
  { path: "/events", name: "events", component: PageEvents },
  { path: "/privacy", name: "privacy", component: PagePrivacy },
  { path: "/roadmap", name: "roadmap", component: PageRoadmap },
  { path: "/testnet", name: "testnet", component: PageTestnet },

  // REDIRECTS
  { path: "/about/*", redirect: "/about" },
  {
    path: "/academy",
    beforeEnter: () => {
      window.location.assign("https://github.com/cosmos/cosmos-academy")
    }
  },
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
      window.location.assign(urls.contactEvents)
    }
  },
  { path: "/download", redirect: "/testnet" },
  { path: "/downloads", redirect: "/testnet" },
  { path: "/dev", beforeEnter: () => d("sdk/overview") },
  { path: "/dev/hackatom", redirect: "/events" },
  {
    path: "/dev/scaling-eth",
    beforeEnter: () => d("resources/whitepaper#use-cases")
  },
  { path: "/dev/wallet", beforeEnter: () => d("getting-started/installation") },
  { path: "/developers", beforeEnter: () => d("sdk/overview") },
  { path: "/developers/hackatom", redirect: "/events" },
  {
    path: "/developers/scaling-eth",
    beforeEnter: () => d("resources/whitepaper#use-cases")
  },
  {
    path: "/developers/wallet",
    beforeEnter: () => d("getting-started/installation")
  },
  { path: "/faq", beforeEnter: () => d("introduction/faq") },
  { path: "/hackatom", redirect: "/events" },
  { path: "/intro", beforeEnter: () => d("introduction/cosmos-hub") },
  { path: "/intro/*", beforeEnter: () => d("introduction/cosmos-hub") },
  { path: "/introduction", beforeEnter: () => d("introduction/cosmos-hub") },
  {
    path: "/join-testnet",
    beforeEnter: () => d("getting-started/installation")
  },
  {
    path: "/matrix",
    beforeEnter: () => {
      window.location.assign("https://riot.im/app/#/room/#cosmos:matrix.org")
    }
  },
  { path: "/plan", redirect: "/roadmap" },
  { path: "/plan/:locale", redirect: "/roadmap" },
  { path: "/resources", redirect: "/docs" },
  {
    path: "/resources/academy",
    beforeEnter: () => {
      window.location.assign("https://github.com/cosmos/cosmos-academy")
    }
  },
  {
    path: "/resources/delegators",
    beforeEnter: () => d("resources/delegator-faq")
  },
  { path: "/resources/faq", beforeEnter: () => d("introduction/faq") },
  { path: "/resources/plan", redirect: "/roadmap" },
  {
    path: "/resources/whitepaper",
    beforeEnter: () => d("resources/whitepaper")
  },
  {
    path: "/riot",
    beforeEnter: () => {
      window.location.assign("https://riot.im/app/#/room/#cosmos:matrix.org")
    }
  },
  {
    path: "/scaling-eth",
    beforeEnter: () => d("resources/whitepaper#use-cases")
  },
  {
    path: "/scalingeth",
    beforeEnter: () => d("resources/whitepaper#use-cases")
  },
  { path: "/scaling", beforeEnter: () => d("resources/whitepaper#use-cases") },
  {
    path: "/security",
    beforeEnter: () => {
      window.location.assign("https://tendermint.com/security")
    }
  },
  { path: "/staking", beforeEnter: () => d("validators/overview") },
  { path: "/staking/validators", beforeEnter: () => d("validators/overview") },
  {
    path: "/staking/validators-faq",
    beforeEnter: () => d("validators/validator-faq")
  },
  {
    path: "/staking/delegators",
    beforeEnter: () => d("resources/delegator-faq")
  },
  { path: "/team", redirect: "/about" },
  {
    path: "/telegram",
    beforeEnter: () => {
      window.location.assign("https://t.me/cosmosproject")
    }
  },
  {
    path: "/testnet-tutorial",
    beforeEnter: () => d("getting-started/installation")
  },
  { path: "/ui", beforeEnter: () => d("getting-started/voyager") },
  { path: "/validate", beforeEnter: () => d("validators/overview") },
  { path: "/validator", beforeEnter: () => d("validators/overview") },
  {
    path: "/validators",
    beforeEnter: () => d("validators/overview")
  },
  { path: "/validators/faq", beforeEnter: () => d("validators/validator-faq") },
  {
    path: "/validators/tutorial",
    beforeEnter: () => d("getting-started/installation")
  },
  { path: "/voyager", beforeEnter: () => d("getting-started/voyager") },
  { path: "/voyager/*", beforeEnter: () => d("getting-started/voyager") },
  {
    path: "/whitepaper/en-US",
    beforeEnter: () => d("resources/whitepaper")
  },
  {
    path: "/whitepaper",
    beforeEnter: () => d("resources/whitepaper")
  },
  {
    path: "/wallet",
    beforeEnter: () => d("getting-started/installation")
  },
  // WILDROUTES
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
