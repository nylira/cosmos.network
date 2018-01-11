import VueRouter from 'vue-router'
function r (page) { return require('../components/pages/Page' + page) }

const routes = [
  { path: '/', component: r('Index') },

  // ABOUT
  { path: '/about',
    component: r('About'),
    children: [
      { path: '/', name: 'about', component: r('AboutIndex') },
      { path: 'faq', name: 'faq', component: r('AboutFaq') },
      { path: 'roadmap', name: 'roadmap', component: r('Roadmap') },
      { path: 'team', name: 'team', component: r('AboutTeam') },
      { path: 'whitepaper', name: 'whitepaper', component: r('AboutWhitepaper') },
      { path: 'whitepaper/:locale', name: 'whitepaper-localized', component: r('Whitepaper') }
    ]
  },

  // DEVELOPERS
  { path: '/developers',
    component: r('Developers'),
    children: [
      { path: '/', name: 'developers', component: r('DevelopersIndex') }
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
  { path: '/assets', name: 'assets', component: r('Assets') },
  { path: '/plan', name: 'plan', component: r('Plan') },
  { path: '/plan/:locale', name: 'plan-localized', component: r('Plan') },
  { path: '/privacy', name: 'privacy', component: r('Privacy') },
  { path: '/security', name: 'security', component: r('Security') },

  // redirects
  { path: '/blog/:entry', redirect: '/blog' },
  { path: '/blog',
    beforeEnter: () => { window.location.assign('https://blog.cosmos.network') }
  },
  { path: '/faq', redirect: '/about/faq' },
  { path: '/dev', redirect: '/developers' },
  { path: '/dev/hackatom', redirect: '/developers/hackatom' },
  { path: '/dev/whitepaper', redirect: '/about/whitepaper' },
  { path: '/hackatom', redirect: '/developers/hackatom' },
  { path: '/intro/faq', redirect: '/about/faq' },
  { path: '/riot',
    beforeEnter: () => { window.location.assign('https://riot.im/app/#/room/#cosmos:matrix.org') }
  },
  { path: '/roadmap', redirect: '/about/roadmap' },
  { path: '/team', redirect: '/about/team' },
  { path: '/validator', redirect: '/validators' },
  { path: '/whitepaper', redirect: '/about/whitepaper' },
  { path: '/whitepaper/en-US', redirect: '/about/whitepaper' },

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
