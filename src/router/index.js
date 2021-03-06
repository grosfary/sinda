import Vue from 'vue' // vue模块
import Router from 'vue-router' // 路由模块
import {
  MessageBox
} from "mint-ui";
Vue.use(Router)
const global = resolve => require(['@/components/sinda_global'], resolve);
const LoginRegister = resolve => require(['../components/sinda_LoginRegister'], resolve);
const index = resolve => require(['../views/sinda_index'], resolve);
const list = resolve => require(['../views/sinda_list'], resolve);
const shop = resolve => require(['../views/sinda_shop'], resolve);
// import global from '@/components/sinda_global' // 公共页
// import LoginRegister from '../components/sinda_LoginRegister' // 登录和注册的公共页
// import index from '../views/sinda_index' // 首页
// import list from '../views/sinda_list' // 列表页
// import shop from '../views/sinda_shop' // 店铺页


const service = resolve => require(['../views/sinda_shop/sinda_service'], resolve);
const product = resolve => require(['../views/sinda_shop/sinda_product'], resolve);
const certificate = resolve => require(['../views/sinda_shop/sinda_certificate'], resolve);
// import service from '../views/sinda_shop/sinda_service' // 三级服务页
// import product from '../views/sinda_shop/sinda_product' // 三级产品页
// import certificate from '../views/sinda_shop/sinda_certificate' // 三级证书页

const login = resolve => require(['../views/sinda_login'], resolve);
const register = resolve => require(['../views/sinda_register'], resolve);
const line_item = resolve => require(['../stores/line_item'], resolve);
const payment = resolve => require(['../views/sinda_payment'], resolve);
// import login from '../views/sinda_login' //登录
// import register from '../views/sinda_register' //注册
// import line_item from '../stores/line_item' //订单详情
// import payment from '../views/sinda_payment' //支付页面


const payment_success = resolve => require(['../views/sinda_payment/sinda_payment_success'], resolve);
const payment_failure = resolve => require(['../views/sinda_payment/sinda_payment_failure'], resolve);
// import payment_success from '../views/sinda_payment/sinda_payment_success' //支付成功页面
// import payment_failure from '../views/sinda_payment/sinda_payment_failure' //支付失败页面


const member = resolve => require(['../views/sinda_member'], resolve);
const myYing = resolve => require(['../member-third/myYing'], resolve);
const center = resolve => require(['../member-third/center'], resolve);
const toeveluete = resolve => require(['../member-third/toeveluete'], resolve);
const evalu = resolve => require(['../member-third/evalu'], resolve);
const setting = resolve => require(['../member-third/setting'], resolve);
const modify = resolve => require(['../member-third/modify'], resolve);
// import member from '../views/sinda_member' //会员中心
// import myYing from '../member-third/myYing' //会员中心
// import center from '../member-third/center' //会员中心
// import toeveluete from '../member-third/toeveluete' //会员中心
// import evalu from '../member-third/evalu' //会员中心
// import setting from '../member-third/setting' //会员中心
// import modify from '../member-third/modify' //会员中心


const Join_Us = resolve => require(['../stores/Join_Us'], resolve);
const store_list = resolve => require(['../stores/store_list'], resolve);
const forgetPs = resolve => require(['../views/sinda_forgetPs.vue'], resolve);
const tax = resolve => require(['../views/sinda_list/sinda_taxServer'], resolve);
const cart = resolve => require(['../views/sinda_list/sinda_cart'], resolve);
// import Join_Us from '../stores/Join_Us' //加盟我们
// import store_list from '../stores/store_list' //店铺列表
// import forgetPs from '../views/sinda_forgetPs.vue' //忘记密码
// import tax from '../views/sinda_list/sinda_taxServer' //财税服务页
// import cart from '../views/sinda_list/sinda_cart' //购物车
const pay = resolve => require(['../stores/pay'], resolve);
// import pay from '../stores/pay' //支付界面

const pro = resolve => require(['../views/sinda_list/sinda_products'], resolve);
const com = resolve => require(['../views/sinda_list/company'], resolve);
const list_list = resolve => require(['../views/sinda_list/list_list'], resolve);
// import pro from '../views/sinda_list/sinda_products' //商品详情
// import com from '../views/sinda_list/company' //公司工商
// import list_list from '../views/sinda_list/list_list' //公司工商

// -----------------------------------------------------------------------------------------------------------------------
// 手机端

const m_global = resolve => require(['../components/m_global'], resolve);
const m_index = resolve => require(['../m_sinda/m_index'], resolve);
// import m_global from '../components/m_global' //手机端公共页
// import m_index from '../m_sinda/m_index' //手机端首页

const m_classify = resolve => require(['../m_sinda/m_classify'], resolve);
// import m_classify from '../m_sinda/m_classify' //手机端列表选择


const m_success = resolve => require(['../m_sinda/m_success'], resolve);
// import m_success from '../m_sinda/m_success' //手机端支付成功
const m_failure = resolve => require(['../m_sinda/m_failure'], resolve);
// import m_failure from '../m_sinda/m_failure' //手机端支付失败
const m_shop = resolve => require(['../m_sinda/m_shop'], resolve);
// import m_shop from '../m_sinda/m_shop' //手机shop
const m_storelist = resolve => require(['../m_sinda/m_storelist'], resolve);
const m_joinus = resolve => require(['../m_sinda/m_joinus'], resolve);
const m_lineitem = resolve => require(['../m_sinda/m_lineitem'], resolve);
const m_shop_service = resolve => require(['../m_sinda/m_shop/m_shop_service'], resolve);
// import m_storelist from '../m_sinda/m_storelist' //手机店铺
// import m_joinus from '../m_sinda/m_joinus' //手机加盟
// import m_lineitem from '../m_sinda/m_lineitem' //手机支付方式
// import m_shop_service from '../m_sinda/m_shop/m_shop_service' //手机shop service

const m_out = resolve => require(['../components/m_out'], resolve);
const generic = resolve => require(['../components/generic'], resolve);
const logged = resolve => require(['../components/logged'], resolve);
const shoppingCard = resolve => require(['../components/shoppingCard'], resolve);
// import m_out from '../components/m_out' //手机端公共页
// import generic from '../components/generic' //未登录
// import logged from '../components/logged' //已登录
// import shoppingCard from '../components/shoppingCard' //购物车
const listPage = resolve => require(['../components/listPage'], resolve);
const shoppingstalley = resolve => require(['../components/shoppingstalley.vue'], resolve);
const set = resolve => require(['../components/set'], resolve);
const myOrder = resolve => require(['../components/myOrder'], resolve);
// import listPage from '../components/listPage' //购物车
// import shoppingstalley from '../components/shoppingstalley.vue' //购物车空
// import set from '../components/set' //账户设置
// import myOrder from '../components/myOrder' //我的订单
const registerP = resolve => require(['../components/registerP'], resolve);
const m_details = resolve => require(['../m_sinda/m_details'], resolve);
const loginP = resolve => require(['../components/loginP'], resolve);
const cipher = resolve => require(['../components/cipher'], resolve);
// import registerP from '../components/registerP' //手机端注册
// import m_details from '../m_sinda/m_details' //手机端商品详情
// import loginP from '../components/loginP' //手机端登录
// import cipher from '../components/cipher' //手机端忘记密码


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
      }, {
        path: 'pay', //店铺列表 如 http://localhost:8081/#/pay
        component: pay
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
    component: m_global,
    children: [{
        path: '/', // 手机端的首页
        component: m_index
      }, {
        path: '/classify', // 手机端的列表页
        component: m_classify
      }, {

        path: '/shoppingCard', //购物车
        name: 'shoppingCard',
        component: shoppingCard
      }, {
        path: '/generic', //未注册
        name: 'generic',
        component: generic
      }, {
        path: '/logged', //已登录
        name: 'logged',
        component: logged
      }, {
        path: '/m_storelist', //手机端店铺列表 如http://localhost:8081/#/m.out/m_stprelist
        component: m_storelist
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
          path: 'success', // 手机端的支付成功
          name: 'm_success',
          component: m_success
        }, {
          path: 'failure', // 手机端的支付失
          name: 'm_failure',
          component: m_failure
        }]
        // children: [{}]
      }, {
        path: '/myOrder', //已登录
        name: 'myOrder',
        component: myOrder
      }, {
        path: '/listPage', //列表页
        name: 'listPage',
        component: listPage
      }, {
        path: '/set', //已登录
        name: 'set',
        component: set
      },{
        path: '/details', //列表页
        name: 'details',
        component: m_details
      }, {
        path: '/registerP', //注册
        name: 'registerP',
        component: registerP
      }, {
        path: '/loginP', //登录
        name: 'loginP',
        component: loginP
      },

    ]
  }, {
    path: '/m_joinus', //手机端加盟我们 如http://locahost:8801/#/m_joinus
    component: m_joinus,
  }, {
    path: '/m_lineitem', //手机端支付 如http://locahost:8801/#/m_lineitem
    component: m_lineitem
  }, {
    path: '/m_joinus', //手机端加盟我们 如http://locahost:8801/#/m_joinus
    component: m_joinus,
  }, {
    path: '/m_lineitem', //手机端支付 如http://locahost:8801/#/m_lineitem
    component: m_lineitem
  }, {
    path: '/cipher', //忘记密码
    name: 'cipher',
    component: cipher
  }]
})
