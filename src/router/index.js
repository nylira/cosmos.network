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

function docs(doc) {
  return window.location.assign(`${window.location.hostname}/docs/${doc}.html`)
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
  { path: "/dev", redirect: "/docs/sdk/overview.html" },
  { path: "/dev/hackatom", redirect: "/events" },
  {
    path: "/dev/scaling-eth",
    redirect: "/docs/resources/whitepaper.html#use-cases"
  },
  { path: "/dev/wallet", redirect: "/docs/getting-started/installation.html" },
  { path: "/developers", redirect: "/docs/sdk/overview.html" },
  { path: "/developers/hackatom", redirect: "/events" },
  {
    path: "/developers/scaling-eth",
    redirect: "/docs/resources/whitepaper.html#use-cases"
  },
  {
    path: "/developers/wallet",
    redirect: "/docs/getting-started/installation.html"
  },
  { path: "/faq", redirect: "/docs/introduction/faq.html" },
  { path: "/hackatom", redirect: "/events" },
  { path: "/intro", redirect: "/docs/introduction/cosmos-hub.html" },
  { path: "/intro/*", redirect: "/docs/introduction/cosmos-hub.html" },
  { path: "/introduction", redirect: "/docs/introduction/cosmos-hub.html" },
  {
    path: "/join-testnet",
    redirect: "/docs/getting-started/installation.html"
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
    redirect: "/docs/resources/delegator-faq.html"
  },
  { path: "/resources/faq", redirect: "/docs/introduction/faq.html" },
  { path: "/resources/plan", redirect: "/roadmap" },
  {
    path: "/resources/whitepaper",
    redirect: "/docs/resources/whitepaper.html"
  },
  {
    path: "/riot",
    beforeEnter: () => {
      window.location.assign("https://riot.im/app/#/room/#cosmos:matrix.org")
    }
  },
  {
    path: "/scaling-eth",
    redirect: "/docs/resources/whitepaper.html#use-cases"
  },
  {
    path: "/scalingeth",
    redirect: "/docs/resources/whitepaper.html#use-cases"
  },
  { path: "/scaling", redirect: "/docs/resources/whitepaper.html#use-cases" },
  {
    path: "/security",
    beforeEnter: () => {
      window.location.assign("https://tendermint.com/security")
    }
  },
  { path: "/staking", redirect: "/docs/validators/overview.html" },
  { path: "/staking/validators", redirect: "/docs/validators/overview.html" },
  {
    path: "/staking/validators-faq",
    redirect: "/docs/validators/validator-faq.html"
  },
  {
    path: "/staking/delegators",
    redirect: "/docs/resources/delegator-faq.html"
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
    redirect: "/docs/getting-started/installation.html"
  },
  { path: "/ui", redirect: "/docs/getting-started/voyager.html" },
  { path: "/validate", redirect: "/docs/validators/overview.html" },
  { path: "/validator", redirect: "/docs/validators/overview.html" },
  {
    path: "/validators",
    beforeEnter: docs("validators/overview")
  },
  { path: "/validators/faq", redirect: "/docs/validators/validator-faq.html" },
  {
    path: "/validators/tutorial",
    redirect: "/docs/getting-started/installation.html"
  },
  { path: "/voyager", redirect: "/docs/getting-started/voyager.html" },
  { path: "/voyager/*", redirect: "/docs/getting-started/voyager.html" },
  { path: "/whitepaper/en-US", redirect: "/docs/resources/whitepaper.html" },
  {
    path: "/whitepaper",
    beforeEnter: () =>
      window.location.assign(
        window.location.hostname + "/docs/resources/whitepaper.html"
      )
  },
  { path: "/wallet", redirect: "/docs/getting-started/installation.html" },

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
