import VueRouter from 'vue-router'
function r (page) { return require('../components/pages/Page' + page) }

const routes = [
  { path: '/', name: 'home', component: r('Index') },

  // PAGES
  { path: '/about', name: 'about', component: r('About') },
  { path: '/assets', name: 'assets', component: r('Assets') },
  { path: '/community', name: 'community', component: r('Community') },
  { path: '/events', name: 'events', component: r('Events') },
  { path: '/faq', name: 'faq', component: r('Faq') },
  { path: '/intro', name: 'intro', component: r('Intro') },
  { path: '/plan', name: 'fundraiser-plan', component: r('Plan') },
  { path: '/privacy', name: 'privacy-policy', component: r('Privacy') },
  { path: '/roadmap', name: 'roadmap', component: r('Roadmap') },
  { path: '/whitepaper', name: 'whitepaper', component: r('Whitepaper') },
  { path: '/whitepaper/:locale', name: 'whitepaper-i18n', component: r('Whitepaper') },

  // DEVELOPERS
  { path: '/developers',
    component: r('Developers'),
    children: [
      { path: '/', name: 'developers', component: r('DevelopersIndex') },
      { path: 'academy', name: 'academy', component: r('DevelopersAcademy') },
      { path: 'hackatom', name: 'hackatom', component: r('DevelopersHackAtom') },
      { path: 'scaling-eth', name: 'scaling-eth', component: r('DevelopersScalingEth') },
      { path: 'wallet', name: 'wallet', component: r('DevelopersWallet') }
    ]
  },

  // STAKING
  { path: '/staking',
    component: r('Staking'),
    children: [
      { path: '/', name: 'staking', component: r('StakingIndex') },
      { path: 'delegators', name: 'delegators', component: r('StakingDelegators') },
      { path: 'validators', name: 'validators', component: r('StakingValidators') },
      { path: 'validators-faq', name: 'validators-faq', component: r('StakingValidatorsFaq') }
    ]
  },

  // VOYAGER
  { path: '/voyager',
    component: r('Voyager'),
    children: [
      { path: '/', name: 'voyager', component: r('VoyagerIndex') },
      { path: 'faq', name: 'voyager-faq', component: r('VoyagerFaq') },
      { path: 'support', name: 'voyager-support', component: r('VoyagerSupport') }
    ]
  },

  // redirects
  { path: '/about/faq', redirect: '/faq' },
  { path: '/about/team', redirect: '/about' },
  { path: '/about/whitepaper', redirect: '/whitepaper' },
  { path: '/academy', redirect: '/developers/academy' },
  { path: '/blog/:entry', redirect: '/blog' },
  { path: '/blog',
    beforeEnter: () => { window.location.assign('https://blog.cosmos.network') }
  },
  { path: '/download', redirect: '/voyager' },
  { path: '/downloads', redirect: '/voyager' },
  { path: '/dev', redirect: '/developers' },
  { path: '/dev/hackatom', redirect: '/developers/hackatom' },
  { path: '/dev/whitepaper', redirect: '/whitepaper' },
  { path: '/developers/scaling', redirect: '/developers/scaling-eth' },
  { path: '/hackatom', redirect: '/developers/hackatom' },
  { path: '/intro/faq', redirect: '/faq' },
  { path: '/introduction', redirect: '/intro' },
  { path: '/matrix',
    beforeEnter: () => {
      window.location.assign('https://riot.im/app/#/room/#cosmos:matrix.org')
    }
  },
  { path: '/plan/:locale', redirect: '/plan' },
  { path: '/riot',
    beforeEnter: () => {
      window.location.assign('https://riot.im/app/#/room/#cosmos:matrix.org')
    }
  },
  { path: '/scaling-eth', redirect: '/developers/scaling-eth' },
  { path: '/scalingeth', redirect: '/developers/scaling-eth' },
  { path: '/scaling', redirect: '/developers/scaling-eth' },
  { path: '/security',
    beforeEnter: () => { window.location.assign('https://tendermint.com/security') }
  },
  { path: '/team', redirect: '/about' },
  { path: '/telegram',
    beforeEnter: () => { window.location.assign('https://t.me/cosmosproject') }
  },
  { path: '/scaling-eth', redirect: '/developers/scaling-eth' },
  { path: '/ui', redirect: '/voyager' },
  { path: '/validator', redirect: '/staking/validators' },
  { path: '/validators', redirect: '/staking/validators' },
  { path: '/validators/faq', redirect: '/staking/validators-faq' },
  { path: '/whitepaper/en-US', redirect: '/whitepaper' },
  { path: '/wallet', redirect: '/developers/wallet' },

  // wildcards
  { path: '/404', component: r('404') },
  { path: '*', component: r('404') }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      console.log('theres a hash')
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
