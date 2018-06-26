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
  { path: "/docs", redirect: "/docs" },
  { path: "/download", redirect: "/testnet" },
  { path: "/downloads", redirect: "/testnet" },
  { path: "/dev", redirect: "/docs" },
  { path: "/dev/*", redirect: "/docs" },
  { path: "/developers", redirect: "/docs" },
  { path: "/developers/*", redirect: "/docs" },
  { path: "/faq", redirect: "/docs" },
  { path: "/hackatom", redirect: "/events" },
  { path: "/intro", redirect: "/docs" },
  { path: "/intro/*", redirect: "/docs" },
  { path: "/introduction", redirect: "/docs" },
  { path: "/join-testnet", redirect: "/docs" },
  {
    path: "/matrix",
    beforeEnter: () => {
      window.location.assign("https://riot.im/app/#/room/#cosmos:matrix.org")
    }
  },
  { path: "/plan", redirect: "/docs" },
  { path: "/plan/:locale", redirect: "/docs" },
  { path: "/resources", redirect: "/docs" },
  { path: "/resources/*", redirect: "/docs" },
  {
    path: "/riot",
    beforeEnter: () => {
      window.location.assign("https://riot.im/app/#/room/#cosmos:matrix.org")
    }
  },
  { path: "/scaling-eth", redirect: "/docs" },
  { path: "/scalingeth", redirect: "/docs" },
  { path: "/scaling", redirect: "/docs" },
  {
    path: "/security",
    beforeEnter: () => {
      window.location.assign("https://tendermint.com/security")
    }
  },
  { path: "/staking", redirect: "/docs" },
  { path: "/staking/validators", redirect: "/docs" },
  { path: "/staking/validators-faq", redirect: "/docs" },
  { path: "/staking/delegators", redirect: "/docs" },
  { path: "/team", redirect: "/about" },
  {
    path: "/telegram",
    beforeEnter: () => {
      window.location.assign("https://t.me/cosmosproject")
    }
  },
  { path: "/testnet-tutorial", redirect: "/docs" },
  { path: "/ui", redirect: "/docs" },
  { path: "/validate", redirect: "/docs" },
  { path: "/validator", redirect: "/docs" },
  { path: "/validators", redirect: "/docs" },
  { path: "/validators/*", redirect: "/docs" },
  { path: "/voyager", redirect: "/docs" },
  { path: "/voyager/*", redirect: "/docs" },
  { path: "/whitepaper/en-US", redirect: "/docs" },
  { path: "/whitepaper", redirect: "/docs" },
  { path: "/wallet", redirect: "/docs" },

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
