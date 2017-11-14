import VueRouter from 'vue-router'
function r (page) { return require('../components/Page' + page) }

const routes = [
  { path: '/', component: r('Index') },
  { path: '/assets', name: 'assets', component: r('Assets') },
  { path: '/events', name: 'events', component: r('Events') },

  // INTRODUCTION
  { path: '/intro',
    component: r('Intro'),
    children: [
      { path: '/', name: 'intro', component: r('IntroIndex') },
      { path: 'faq', name: 'faq', component: r('IntroFaq') },
      { path: 'roadmap', name: 'roadmap', component: r('IntroRoadmap') }
    ]
  },

  // DEVELOPERS
  { path: '/dev',
    component: r('Dev'),
    children: [
      { path: '/', name: 'dev', component: r('DevIndex') },
      { path: 'hackatom', name: 'hackatom-en-us', component: r('HackAtom') },
      { path: 'hackatom/zh-cn', name: 'hackatom-zh-cn', component: r('HackAtomZhCn') },
      { path: 'whitepaper', name: 'whitepaper', component: r('Whitepaper') },
      { path: 'whitepaper/:locale', name: 'whitepaper-localized', component: r('Whitepaper') }
    ]
  },

  // ABOUT
  { path: '/about', name: 'about', component: r('About') },

  // OTHERS
  { path: '/plan', name: 'plan', component: r('Plan') },
  { path: '/plan/:locale', name: 'plan-localized', component: r('Plan') },
  { path: '/privacy', name: 'privacy', component: r('Privacy') },
  { path: '/validators', name: 'validators', component: r('Validators') },

  // redirects
  { path: '/faq', redirect: '/intro/faq' },
  { path: '/roadmap', redirect: '/intro/roadmap' },

  { path: '/hackatom', redirect: '/dev/hackatom' },
  { path: '/whitepaper', redirect: '/dev/whitepaper' },
  { path: '/whitepaper/en-US', redirect: '/dev/whitepaper' },

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
      return {
        selector: to.hash
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
