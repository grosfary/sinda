import Vue from 'vue' // vue模块
import Router from 'vue-router' // 路由模块
import global from '@/components/sinda_global' // 公共页
import LoginRegister from '../components/sinda_LoginRegister' // 登录和注册的公共页
import index from '../views/sinda_index' // 首页
import list from '../views/sinda_list' // 列表页
import shop from '../views/sinda_shop' // 店铺页


import service from '../views/sinda_shop/sinda_service' // 三级服务页
import product from '../views/sinda_shop/sinda_product' // 三级产品页
import certificate from '../views/sinda_shop/sinda_certificate' // 三级证书页

import login from '../views/sinda_login' //登录
import register from '../views/sinda_register' //注册
import line_item from '../stores/line_item' //订单详情
import payment from '../views/sinda_payment' //支付页面
import payment_success from '../views/sinda_payment/sinda_payment_success' //支付成功页面
import payment_failure from '../views/sinda_payment/sinda_payment_failure' //支付失败页面
import member from '../views/sinda_member' //会员中心
import myYing from '../member-third/myYing' //会员中心
import center from '../member-third/center' //会员中心
import toeveluete from '../member-third/toeveluete' //会员中心
import evalu from '../member-third/evalu' //会员中心
import setting from '../member-third/setting' //会员中心
import modify from '../member-third/modify' //会员中心
import Join_Us from '../stores/Join_Us' //加盟我们
import store_list from '../stores/store_list' //店铺列表
import forgetPs from '../views/sinda_forgetPs.vue' //忘记密码
import tax from '../views/sinda_list/sinda_taxServer' //财税服务页
import cart from '../views/sinda_list/sinda_cart' //购物车
import pro from '../views/sinda_list/sinda_products' //商品详情
import com from '../views/sinda_list/company' //公司工商
import list_list from '../views/sinda_list/list_list' //公司工商
// -----------------------------------------------------------------------------------------------------------------------
// 手机端
import m_global from '../components/m_global' //手机端公共页
import m_index from '../m_sinda/m_index' //手机端首页
import m_success from '../m_sinda/m_success' //手机端首页
import m_failure from '../m_sinda/m_failure' //手机端首页
import m_shop from '../m_sinda/m_shop' //手机shop
import m_storelist from '../m_sinda/m_storelist' //手机shop
import m_joinus from '../m_sinda/m_joinus' //手机shop
import m_shop_service from '../m_sinda/m_shop/m_shop_service' //手机shop service
import m_out from '../components/m_out' //手机端公共页
import generic from '../components/generic' //未登录
import logged from '../components/logged' //已登录
import shoppingCard from '../components/shoppingCard' //购物车
import listPage from '../components/listPage' //购物车
import set from '../components/set' //账户设置
import myOrder from '../components/myOrder' //我的订单
import registerP from '../components/registerP' //手机端注册
Vue.use(Router)

// pc端
// 信达的登录注册页面和其他页面的公共头部不一样，
// 所以有两个一级路由global和loginregister
// global里分别又有列表页和首页、列表页等等等等，注册登录页有注册有登录
// 又会有分别的子路由，如index、list、login、register等等等等
// 再往下肯定还会有三级路由 在views里
// 我的想法是 如果说要建立三级路由 就建一个跟二级路由相同的文件夹，把三级路由的文件放到这个文件夹中

// , {
//     
export default new Router({
    routes: [{
        path: '/',
        name: 'sinda_global',
        component: global,
        redirect: 'index',
        children: [{
                path: 'index', // path为路径  在这里为首页   如 http://localhost:8081/#/
                component: index
            }, {
                path: 'list', // 在这里为列表页   如 http://localhost:8081/#/list
                component: list,
                children: [{
                    path: 'tax', //财税服务页   如 http://localhost:8081/#/list/tax
                    component: tax
                }, {
                    path: 'pro', //商品详情页   如 http://localhost:8081/#/list/cart
                    component: pro
                }, {
                    path: 'cart', //购物车页   如 http://localhost:8081/#/list/cart
                    component: cart
                }, {
                    path: 'com', //公司工商页   如 http://localhost:8081/#/list/cart
                    component: com
                }, {
                    path: 'list', //公司工商页   如 http://localhost:8081/#/list/cart
                    component: list_list
                }]
            }, {
                path: 'Join_Us', //加盟我们  如 http://localhost:8081/#/Join_Us
                component: Join_Us
            }, {
                path: 'line_item', //订单详情  如 http://localhost:8081/#/line_item
                component: line_item
            }, {
                path: 'store_list', //店铺列表 如 http://localhost:8081/#/store_list
                component: store_list
            },

            {
                path: '/shop',
                component: shop,
                redirect: "/shop/service", //店铺首页  http://localhost:8080/#/shop
                children: [{
                    path: 'service',
                    component: service,
                }, {
                    path: 'product',
                    component: product, //首页客服
                }, {
                    path: 'certificate',
                    component: certificate, //首页证书
                }]

            }, {
                path: 'payment',
                component: payment,
                children: [{
                    path: 'success', // 支付成功 http://localhost:8080/#/payment/success
                    component: payment_success,
                }, {
                    path: 'failure', //支付失败 http://localhost:8080/#/payment/failure
                    component: payment_failure,
                }]
            }, {
                path: 'member',
                component: member,
                children: [{
                        path: 'myYing', //用户评价三级页   如 http://localhost:8081/#/member/myYing
                        component: myYing
                    },
                    {
                        path: 'center', //会员中心三级页   如 http://localhost:8081/#/member/center
                        component: center
                    },
                    {
                        path: 'toeveluete', //去评价三级页   如 http://localhost:8081/#/member/toeveluete
                        component: toeveluete
                    },
                    {
                        path: 'setting', //账户设置三级页   如 http://localhost:8081/#/member/setting
                        component: setting
                    },
                    {
                        path: 'evalu', //账户设置三级页   如 http://localhost:8081/#/member/evalu
                        component: evalu
                    },
                    {
                        path: 'modify', //修改密码三级页   如 http://localhost:8081/#/member/modify
                        component: modify
                    }
                ]
            }
        ]
    }, {
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
            {
                path: 'forgetPs',
                component: forgetPs
            },
        ]
    }, {
        path: '/m.sinda', // 手机端公共页面 包含公共底部
        name: 'm.sinda',
        component: m_global,
        children: [{
            path: '/', // 手机端的首页
            component: m_index
        }, {
            path: 'shop', // 手机端的店铺页
            component: m_shop,
            redirect: "shop/service",
            children: [{
                path: 'service',
                component: m_shop_service,
            }]
        }, {
            path: '/m.out', // 手机端公共页面 不包含底部
            name: 'm.out',
            component: m_out,
            children: [{
                    path: 'm_storelist', //手机端店铺列表 如http://localhost:8081/#/m.out/m_stprelist
                    component: m_storelist
                }, {
                    path: 'm_joinus', //手机端加盟我们 如http://locahost:8801/#/.out/m_joinus
                    component: m_joinus,
                },{
                    path: 'success', // 手机端的支付成功
                    name: 'm_success',
                    component: m_success
                }, {
                    path: 'failure', // 手机端的支付失
                    name: 'm_failure',
                    component: m_failure
            }
            ]
                // children: [{}]
        }

    ]
    }, {
        path: '/generic', //未注册
        name: 'generic',
        component: generic
    }, {
        path: '/logged', //已登录
        name: 'logged',
        component: logged
    }, {
        path: '/set', //账户设置
        name: 'set',
        component: set
    }, {
        path: '/myOrder', //我的订单
        name: 'myOrder',
        component: myOrder
    }, {
        path: '/shoppingCard', //购物车
        name: 'shoppingCard',
        component: shoppingCard
    }, {
        path: '/listPage', //购物车
        name: 'listPage',
        component: listPage
    }]
})