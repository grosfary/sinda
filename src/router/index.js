import Vue from 'vue'
import Router from 'vue-router'
import sinda_index from '@/components/sinda_index'
import server from '../components/server'
import sinda_bottom from '../components/sinda_bottom'
import sinda_top from '../components/sinda_top'
import outter from '../components/outter'
import login from '../views/login'
import register from '../views/register'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'sinda_index',
      component: sinda_index
    },
    {
      path: '/server',
      name: 'server',
      component: server
    },
    {
      path: '/outter',
      name: 'outter',
      component: outter,
      children: [{
          path: 'login',
          component: login
        },
        {
          path: 'register',
          component: register
        },
      ]
    }
  ]
})
