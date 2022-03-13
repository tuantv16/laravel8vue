
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => {
    if (err.name !== 'NavigationDuplicated') throw err
  });
}

const router = new Router({
   mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: require('../components/MainComponent').default
    // },
    {
      path: '/news',
      name: 'News',
      component: require('./page_components/NewsComponent.vue').default
    },
    {
        path: '/contact',
        name: 'Contact',
        component: require('./page_components/contact/ContactComponent.vue').default
      }
    // {
    //   path: '*',
    //   redirect: '/'
    // }
  ]
})
export default router
