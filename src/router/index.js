import Vue from 'vue' // vue模块
import Router from 'vue-router' // 路由模块
import global from '@/components/sinda_global' // 公共页
import LoginRegister from '../components/sinda_LoginRegister' // 登录和注册的公共页
import index from '../views/sinda_index' // 首页
import list from '../views/sinda_list' // 列表页
import login from '../views/sinda_login' //登录
import register from '../views/sinda_register' //注册
import line_item from '../views/sinda_line_item'
Vue.use(Router)

// pc端
// 信达的登录注册页面和其他页面的公共头部不一样，
// 所以有两个一级路由global和loginregister
// global里分别又有列表页和首页、列表页等等等等，注册登录页有注册有登录
// 又会有分别的子路由，如index、list、login、register等等等等
// 再往下肯定还会有三级路由 在views里
// 我的想法是 如果说要建立三级路由 就建一个跟二级路由相同的文件夹，把三级路由的文件放到这个文件夹中
export default new Router({
    routes: [{
            path: '/',
            name: 'sinda_global',
            component: global,
            children: [{
                path: '', // path为路径  在这里为首页   如 http://localhost:8081/#/
                component: index
            }, {
                path: 'list', // 在这里为列表页   如 http://localhost:8081/#/list
                component: list
            }, {
                path: 'line_item',
                component: line_item
            }]
        },
        {
            path: '/LoginRegister',
            name: 'sinda_LoginRegister',
            component: LoginRegister,
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