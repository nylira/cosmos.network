import VueRouter from 'vue-router'
function r (page) { return require('../components/Page' + page) }

const routes = [
  { path: '/', component: r('Index') },
  { path: '/blog', component: r('RedirectToMedium') },
  { path: '/faq', name: 'faq', component: r('Faq') },
  { path: '/plan', name: 'plan', component: r('Plan') },
  { path: '/plan/:locale', name: 'plan-localized', component: r('Plan') },
  { path: '/events', name: 'events', component: r('Events') },
  { path: '/about', name: 'about', component: r('About') },
  { path: '/whitepaper', name: 'whitepaper', component: r('Whitepaper') },
  { path: '/whitepaper/:locale', name: 'whitepaper-localized', component: r('Whitepaper') },
  { path: '/privacy', name: 'privacy', component: r('Privacy') },

  { path: '/hackatom', name: 'hackatom-en-us', component: r('HackAtom') },
  { path: '/hackatom/zh-cn', name: 'hackatom-zh-cn', component: r('HackAtomZhCn') },
  { path: '/assets', name: 'assets', component: r('Assets') },
  { path: '/validators', name: 'validators', component: r('Validators') },

  // redirects
  { path: '/whitepaper/en-US', redirect: '/whitepaper' },
  { path: '/validator', redirect: '/validators' },
  { path: '/blog/:entry', redirect: '/blog' },
  { path: '/riot',
    beforeEnter: () => {
      location.assign('https://riot.im/app/#/room/#cosmos:matrix.org')
  }},

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
