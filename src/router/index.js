import VueRouter from 'vue-router'
function r (page) { return require('../components/pages/Page' + page) }

const routes = [
  { path: '/', component: r('Index') },
  { path: '/events', name: 'events', component: r('Events') },

  // ABOUT
  { path: '/about',
    component: r('About'),
    children: [
      { path: '/', name: 'about', component: r('AboutIndex') },
      { path: 'faq', name: 'faq', component: r('AboutFaq') },
      { path: 'whitepaper', name: 'whitepaper', component: r('Whitepaper') },
      { path: 'whitepaper/:locale', name: 'whitepaper-localized', component: r('Whitepaper') }
    ]
  },

  // TEAM
  { path: '/team',
    component: r('Team'),
    children: [
      { path: '/', name: 'team', component: r('TeamIndex') }
    ]
  },

  // DEVELOPERS
  { path: '/developers',
    component: r('Dev'),
    children: [
      { path: '/', name: 'developers', component: r('DevIndex') }
      // { path: 'hackatom', name: 'hackatom-en-us', component: r('HackAtom') },
      // { path: 'hackatom/zh-cn', name: 'hackatom-zh-cn', component: r('HackAtomZhCn') }
    ]
  },

  // VALIDATORS
  { path: '/validators',
    component: r('Validators'),
    children: [
      { path: '/', name: 'validators', component: r('ValidatorsIndex') },
      { path: 'faq', name: 'validators-faq', component: r('ValidatorsFaq') }
    ]
  },

  // OTHERS
  { path: '/plan', name: 'plan', component: r('Plan') },
  { path: '/plan/:locale', name: 'plan-localized', component: r('Plan') },
  { path: '/privacy', name: 'privacy', component: r('Privacy') },
  { path: '/validators', name: 'validators', component: r('Validators') },
  { path: '/assets', name: 'assets', component: r('Assets') },
  { path: 'roadmap', name: 'roadmap', component: r('Roadmap') },

  // redirects
  { path: '/faq', redirect: '/about/faq' },
  { path: '/roadmap', redirect: '/about/roadmap' },

  { path: '/dev', redirect: '/developers' },
  { path: '/hackatom', redirect: '/developers/hackatom' },
  { path: '/whitepaper', redirect: '/developers/whitepaper' },
  { path: '/whitepaper/en-US', redirect: '/developers/whitepaper' },

  { path: '/validator', redirect: '/validators' },
  { path: '/blog/:entry', redirect: '/blog' },
  { path: '/blog',
    beforeEnter: () => {
      window.location.assign('https://blog.cosmos.network')
    }
  },
  { path: '/riot',
    beforeEnter: () => {
      window.location.assign('https://riot.im/app/#/room/#cosmos:matrix.org')
    }
  },

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
