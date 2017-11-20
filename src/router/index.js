import VueRouter from 'vue-router'
function r (page) { return require('../components/Page' + page) }

const routes = [
  { path: '/', component: r('Index') },
  { path: '/about', name: 'about', component: r('About') },
  { path: '/assets', name: 'assets', component: r('Assets') },
  { path: '/blog', component: r('RedirectToMedium') },
  { path: '/community', component: r('Community') },
  { path: '/events', name: 'events', component: r('Events') },
  { path: '/faq', name: 'faq', component: r('Faq') },
  { path: '/hackatom', name: 'hackatom-en-us', component: r('HackAtom') },
  { path: '/hackatom/zh-cn', name: 'hackatom-zh-cn', component: r('HackAtomZhCn') },
  { path: '/plan', name: 'plan', component: r('Plan') },
  { path: '/plan/:locale', name: 'plan-localized', component: r('Plan') },
  { path: '/privacy', name: 'privacy', component: r('Privacy') },
  { path: '/roadmap', name: 'roadmap', component: r('Roadmap') },
  { path: '/validators', name: 'validators', component: r('Validators') },
  { path: '/validators/faq', name: 'validators', component: r('ValidatorsFaq') },
  { path: '/whitepaper', name: 'whitepaper', component: r('Whitepaper') },
  { path: '/whitepaper/:locale', name: 'whitepaper-localized', component: r('Whitepaper') },

  // redirects
  { path: '/whitepaper/en-US', redirect: '/whitepaper' },
  { path: '/validator', redirect: '/validators' },
  { path: '/blog/:entry', redirect: '/blog' },
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
