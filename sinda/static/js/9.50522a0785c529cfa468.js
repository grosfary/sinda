webpackJsonp([9],{"7/bQ":function(n,t,a){var i=a("r1MF");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);a("rjj0")("3b9a210c",i,!0)},"7UHh":function(n,t,a){"use strict";function i(n){a("7/bQ")}Object.defineProperty(t,"__esModule",{value:!0});var e={name:"sinda_index",data:function(){return{mark:0,img:["https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1927986978,2546133654&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2523007129,1951728501&fm=27&gp=0.jpg","https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1032378099,515442160&fm=27&gp=0.jpg","https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4220262347,3856549398&fm=27&gp=0.jpg"],noviceMust:[],serverArr:[],zscqObj:{a:{class:"zzrz",title:"资质认证",info:"服务商100%实名认证"},b:{class:"zfaq",title:"支付安全",info:"明码标价支付"},c:{class:"bxpf",title:"保险赔付",info:"出现问题平台赔付"},d:{class:"shwy",title:"售后无忧",info:"客服经理全程跟进"}},btn:{a:{name:"推荐服务商"},b:{name:"推荐服务"}},indexs:0}},methods:{change:function(n){this.stopPlay(),this.mark=n},autoPlay:function(){3!=this.mark?this.mark++:this.mark=0},play:function(){window.autoPlay=setInterval(this.autoPlay,2500)},stopPlay:function(){clearInterval(window.autoPlay)},a:function(n){this.indexs=n}},created:function(){var n=this;this.play(),this.ajax.post("/xinda-api/recommend/list").then(function(t){n.noviceMust=t.data.data.product}),this.ajax.post("/xinda-api/product/package/search-grid",this.qs.stringify({start:0,limit:4,searchName:"代理",sort:3})).then(function(t){n.serverArr=t.data.data})},destroyed:function(){clearInterval(window.autoPlay)}},A=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"sinda_index"},[a("div",{staticClass:"carousel"},[a("div",{staticClass:"carousel_inner",on:{mousemove:function(t){n.stopPlay()},mouseout:function(t){n.play()}}},[a("transition-group",{attrs:{tag:"ul",name:"image"}},n._l(n.img,function(t,i){return i===n.mark?a("li",{key:i},[a("a",{attrs:{href:"#/"}},[a("img",{attrs:{src:t}})])]):n._e()}))],1),n._v(" "),a("div",{staticClass:"bullet"},n._l(n.img.length,function(t,i){return a("span",{key:i,class:{active:i===n.mark},on:{click:function(t){n.change(i)},mousemove:function(t){n.stopPlay()},mouseout:function(t){n.play()}}})}))]),n._v(" "),a("div",{staticClass:"starGoods"},[n._m(0,!1,!1),n._v(" "),a("div",{staticClass:"star_main"},n._l(n.noviceMust,function(t,i){return a("div",{key:t.id,staticClass:"star_pro"},[a("div",[a("img",{attrs:{src:"http://123.58.241.146:8088/xinda/pic"+t.providerImg,alt:""}}),n._v(" "),a("p",[n._v(n._s(t.providerName))])]),n._v(" "),a("h4",[n._v(n._s(t.serviceName))]),n._v(" "),a("p",{staticClass:"star_Info"},[n._v(n._s(t.serviceInfo))]),n._v(" "),a("p",[n._v("￥"+n._s(t.marketPrice)+"\n          "),a("span",[n._v(n._s(t.unit))])])])}))]),n._v(" "),a("div",{staticClass:"noviceMust"},[n._m(1,!1,!1),n._v(" "),a("div",{staticClass:"novice_main"},n._l(n.noviceMust,function(t,i){return a("div",{key:t.id,staticClass:"novice_pro"},[a("div",[a("img",{attrs:{src:"http://123.58.241.146:8088/xinda/pic"+t.providerImg,alt:""}}),n._v(" "),a("p",[n._v(n._s(t.providerName))])]),n._v(" "),a("h4",[n._v(n._s(t.serviceName))]),n._v(" "),a("p",{staticClass:"novice_Info"},[n._v(n._s(t.serviceInfo))]),n._v(" "),a("p",[n._v("￥"+n._s(t.marketPrice)+"\n          "),a("span",[n._v(n._s(t.unit))])]),n._v(" "),a("button",[n._v("查看详情")])])}))]),n._v(" "),a("div",{staticClass:"knowledge"},[n._m(2,!1,!1),n._v(" "),n._m(3,!1,!1),n._v(" "),a("div",{staticClass:"know_footer"},n._l(n.zscqObj,function(t,i){return a("div",{key:t.class},[a("div",{staticClass:"know_f_bg icon_global",class:t.class}),n._v(" "),a("ul",[a("li",{staticClass:"know_f_t"},[n._v(n._s(t.title))]),n._v(" "),a("li",[n._v(n._s(t.info))])])])}))]),n._v(" "),a("div",{staticClass:"server"},[a("div",{staticClass:"server_title"},[a("div",n._l(n.btn,function(t,i,e){return a("a",{key:t.name,class:{active:n.indexs==e},on:{click:function(t){n.a(e)}}},[n._v("\n          "+n._s(t.name)+"\n        ")])})),n._v(" "),a("span")]),n._v(" "),n._l(n.serverArr,function(t,i){return a("div",{directives:[{name:"show",rawName:"v-show",value:0==n.indexs,expression:"indexs==0"}],key:t.id,staticClass:"server_pro"},[a("div",[a("img",{attrs:{src:"http://123.58.241.146:8088/xinda/pic"+t.providerImg,alt:""}}),n._v(" "),a("p",[n._v(n._s(t.providerName))])]),n._v(" "),a("h4",[n._v(n._s(t.serviceName))]),n._v(" "),a("p",[n._v("服务指数：8.9分")]),n._v(" "),a("p",[n._v("提供的服务")]),n._v(" "),a("span",[n._v(n._s(t.serviceName))]),n._v(" "),a("span",[n._v(n._s(t.serviceName))]),n._v(" "),a("span",[n._v(n._s(t.serviceName))]),n._v(" "),a("span",[n._v(n._s(t.serviceName))])])}),n._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:1==n.indexs,expression:"indexs==1"}],staticClass:"novice_main"},n._l(n.noviceMust,function(t,i){return a("div",{key:t.id,staticClass:"novice_pro"},[a("div",[a("img",{attrs:{src:"http://123.58.241.146:8088/xinda/pic"+t.providerImg,alt:""}}),n._v(" "),a("p",[n._v(n._s(t.providerName))])]),n._v(" "),a("h4",[n._v(n._s(t.serviceName))]),n._v(" "),a("p",{staticClass:"novice_Info"},[n._v(n._s(t.serviceInfo))]),n._v(" "),a("p",[n._v("￥"+n._s(t.marketPrice)+"\n          "),a("span",[n._v(n._s(t.unit))])]),n._v(" "),a("button",[n._v("查看详情")])])}))],2),n._v(" "),n._m(4,!1,!1)])},o=[function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"index_title"},[a("p",[n._v("明星产品推荐")]),n._v(" "),a("span")])},function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"index_title"},[a("p",[n._v("初创企业必备")]),n._v(" "),a("span")])},function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"index_title"},[a("p",[n._v("知识产权")]),n._v(" "),a("span")])},function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"know_main"},[a("div",{staticClass:"know_Zs"},[a("ul",{staticClass:"title"},[a("li",[n._v("知识产权")])]),n._v(" "),a("ul",[a("li",[n._v("| 商标注册")]),n._v(" "),a("li",[n._v("| 版权注册")]),n._v(" "),a("li",[n._v("| 专利申请")])])]),n._v(" "),a("div",[a("div",{staticClass:"SB"},[a("div",{staticClass:"SB_SB"},[a("ul",[a("li",{staticClass:"ZSCQ_title"},[n._v("商标注册")]),n._v(" "),a("li",{staticClass:"ZSCQ_info"},[n._v("极速申报，办理简单")]),n._v(" "),a("li",{staticClass:"ZSCQ_price"},[a("span",{staticClass:"price"},[n._v("￥1000")]),n._v(" "),a("span",[n._v("/次")])])])]),n._v(" "),a("div",{staticClass:"SB_BQ"},[a("ul",[a("li",{staticClass:"ZSCQ_title"},[n._v("版权专利")]),n._v(" "),a("li",{staticClass:"ZSCQ_info"},[n._v("快速提交，全程跟踪")]),n._v(" "),a("li",{staticClass:"ZSCQ_price"},[a("span",{staticClass:"price"},[n._v("￥1000")]),n._v(" "),a("span",[n._v("/次")])])])])]),n._v(" "),a("div",{staticClass:"Zz"},[a("ul",[a("li",{staticClass:"ZSCQ_title"},[n._v("著作权")]),n._v(" "),a("li",{staticClass:"ZSCQ_info"},[n._v("专业顾问，经验丰富，快速响应，顺利拿证。")]),n._v(" "),a("li",{staticClass:"ZSCQ_price"},[a("span",{staticClass:"price"},[n._v("￥1000")]),n._v(" "),a("span",[n._v("/次")])])])])])])},function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"sindaFriend"},[a("div",{staticClass:"index_title"},[a("p",[n._v("合作伙伴")]),n._v(" "),a("span")]),n._v(" "),a("div",{staticClass:"friend_main"})])}],r={render:A,staticRenderFns:o},s=r,d=a("VU/8"),p=i,b=d(e,s,!1,p,"data-v-b24db130",null);t.default=b.exports},Hk3w:function(n,t,a){n.exports=a.p+"static/img/jiamengshang.ef2ea25.jpg"},YK5L:function(n,t,a){n.exports=a.p+"static/img/zhuzuoquan.e88471f.jpg"},hjTt:function(n,t,a){n.exports=a.p+"static/img/zhishichanquan.16a2731.jpg"},r1MF:function(n,t,a){t=n.exports=a("FZ+f")(!0),t.push([n.i,"\n.icon_global[data-v-b24db130] {\n  background-image: url("+a("2jVg")+');\n}\n.sinda_index > div[data-v-b24db130] {\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.index_title[data-v-b24db130] {\n  line-height: 31px;\n  color: #000;\n  font-size: 16px;\n}\n.index_title p[data-v-b24db130] {\n  padding-left: 10px;\n}\n.index_title > span[data-v-b24db130] {\n  display: block;\n  height: 2px;\n  background: #2693d4;\n  width: 1200px;\n  position: relative;\n}\n.index_title > span[data-v-b24db130]::after {\n  content: "";\n  display: block;\n  border: 2px solid #2693d4;\n  border-bottom: 2px solid rgba(0, 0, 0, 0);\n  border-right: 2px solid rgba(0, 0, 0, 0);\n  position: absolute;\n  left: 44px;\n  bottom: 0px;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.carousel[data-v-b24db130] {\n  position: relative;\n}\n.carousel_inner[data-v-b24db130] {\n  margin: 0 auto;\n  overflow: hidden;\n  max-width: 1200px;\n  height: 400px;\n  position: relative;\n}\n.carousel_inner ul[data-v-b24db130] {\n  overflow: hidden;\n}\n.carousel_inner img[data-v-b24db130] {\n  width: 1200px;\n  height: 400px;\n}\n.carousel_inner li[data-v-b24db130] {\n  position: absolute;\n}\n.bullet[data-v-b24db130] {\n  bottom: 0;\n  position: absolute;\n  left: 500px;\n  margin: 0 auto;\n}\n.bullet[data-v-b24db130]::after {\n  content: "";\n  display: block;\n  clear: both;\n}\n.bullet span[data-v-b24db130] {\n  float: left;\n  width: 25px;\n  height: 25px;\n  display: block;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.5);\n  cursor: pointer;\n}\n.bullet span[data-v-b24db130]:hover {\n  background: #126;\n}\n.bullet span.active[data-v-b24db130] {\n  background: rgba(255, 255, 255, 0.8);\n}\n.image-enter-active[data-v-b24db130] {\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n  -webkit-transition: all 0.8s ease;\n  transition: all 0.8s ease;\n}\n.image-leave-active[data-v-b24db130] {\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%);\n  -webkit-transition: all 0.8s ease;\n  transition: all 0.8s ease;\n}\n.image-enter[data-v-b24db130] {\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%);\n}\n.image-leave[data-v-b24db130] {\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n}\n.star_main[data-v-b24db130] {\n  margin-top: 48px;\n  margin-bottom: 53px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.star_main .star_pro[data-v-b24db130] {\n  width: 270px;\n  height: 462px;\n  border: 1px solid #e8e8e8;\n  text-align: center;\n  padding: 0 15px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.star_main .star_pro div img[data-v-b24db130] {\n  margin-top: 31px;\n  margin-bottom: 26px;\n  width: 114px;\n  height: 60px;\n}\n.star_main .star_pro div p[data-v-b24db130] {\n  font-size: 17px;\n  line-height: 53px;\n  height: 53px;\n}\n.star_main .star_pro h4[data-v-b24db130] {\n  height: 63px;\n}\n.star_main .star_pro p[data-v-b24db130] {\n  height: 70px;\n  font-size: 38px;\n  color: #2693d4;\n  font-weight: 100;\n}\n.star_main .star_pro p span[data-v-b24db130] {\n  font-size: 16px;\n  color: #000;\n  display: inline-block;\n  margin-left: 6px;\n}\n.star_main .star_pro .star_Info[data-v-b24db130] {\n  text-align: left;\n  font-size: 14px;\n  line-height: 18px;\n  color: #000;\n  height: 72px;\n}\n.star_main .star_pro button[data-v-b24db130] {\n  width: 157px;\n  height: 44px;\n  border: 2px solid #2693d4;\n  background: #fafafa;\n  font-size: 18px;\n  color: #2693d4;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.novice_main[data-v-b24db130] {\n  margin-top: 48px;\n  margin-bottom: 53px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.novice_main .novice_pro[data-v-b24db130] {\n  width: 270px;\n  height: 462px;\n  border: 1px solid #e8e8e8;\n  text-align: center;\n  padding: 0 15px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.novice_main .novice_pro div img[data-v-b24db130] {\n  margin-top: 31px;\n  margin-bottom: 26px;\n  width: 114px;\n  height: 60px;\n}\n.novice_main .novice_pro div p[data-v-b24db130] {\n  font-size: 17px;\n  line-height: 53px;\n  height: 53px;\n}\n.novice_main .novice_pro h4[data-v-b24db130] {\n  height: 63px;\n}\n.novice_main .novice_pro p[data-v-b24db130] {\n  height: 70px;\n  font-size: 38px;\n  color: #2693d4;\n  font-weight: 100;\n}\n.novice_main .novice_pro p span[data-v-b24db130] {\n  font-size: 16px;\n  color: #000;\n  display: inline-block;\n  margin-left: 6px;\n}\n.novice_main .novice_pro .novice_Info[data-v-b24db130] {\n  text-align: left;\n  font-size: 14px;\n  line-height: 18px;\n  color: #000;\n  height: 72px;\n}\n.novice_main .novice_pro button[data-v-b24db130] {\n  width: 157px;\n  height: 44px;\n  border: 2px solid #2693d4;\n  background: #fafafa;\n  font-size: 18px;\n  color: #2693d4;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.know_main[data-v-b24db130] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-top: 37px;\n  margin-bottom: 43px;\n}\n.know_main ul .ZSCQ_title[data-v-b24db130] {\n  font-size: 18px;\n  color: #000;\n}\n.know_main ul .ZSCQ_info[data-v-b24db130] {\n  font-size: 14px;\n  color: #696969;\n  line-height: 34px;\n}\n.know_main ul .ZSCQ_price[data-v-b24db130] {\n  font-size: 0;\n  position: relative;\n  left: -5px;\n}\n.know_main ul .ZSCQ_price .price[data-v-b24db130] {\n  font-size: 26px;\n  color: #2693d4;\n}\n.know_main ul .ZSCQ_price span[data-v-b24db130] {\n  font-size: 18px;\n  color: #2693d4;\n}\n.know_Zs[data-v-b24db130] {\n  width: 327px;\n  height: 482px;\n  background: url('+a("hjTt")+") no-repeat 0 0;\n  background-size: 100% 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  color: #5ea3d5;\n  font-size: 14px;\n}\n.know_Zs ul[data-v-b24db130] {\n  margin-top: 24px;\n}\n.know_Zs li[data-v-b24db130] {\n  line-height: 26px;\n}\n.know_Zs .title[data-v-b24db130] {\n  font-size: 18px;\n  width: 126px;\n  height: 78px;\n  text-align: center;\n}\n.know_Zs .title li[data-v-b24db130] {\n  line-height: 78px;\n}\n.SB[data-v-b24db130] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.SB > div[data-v-b24db130] {\n  width: 414px;\n  height: 230px;\n  margin-left: 23px;\n}\n.SB .SB_SB[data-v-b24db130] {\n  background: url("+a("2qb/")+") no-repeat 0 0;\n  background-size: 100% 100%;\n}\n.SB .SB_BQ[data-v-b24db130] {\n  background: url("+a("yyph")+") no-repeat 0 0;\n  background-size: 100% 100%;\n}\n.SB ul[data-v-b24db130] {\n  margin-top: 85px;\n  margin-left: 242px;\n}\n.Zz[data-v-b24db130] {\n  margin-top: 22px;\n  margin-left: 23px;\n  background: url("+a("YK5L")+') no-repeat 0 0;\n  background-size: 100% 100%;\n  width: 850px;\n  height: 230px;\n}\n.Zz > ul[data-v-b24db130] {\n  position: relative;\n  padding-top: 95px;\n  padding-left: 505px;\n}\n.know_footer[data-v-b24db130] {\n  height: 154px;\n  background: #f7f7f7;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-bottom: 58px;\n  color: #696969;\n}\n.know_footer .know_f_bg[data-v-b24db130] {\n  width: 54px;\n  height: 62px;\n  float: left;\n  margin-right: 18px;\n}\n.know_footer .zzrz[data-v-b24db130] {\n  background-position: -169px -190px;\n}\n.know_footer .zfaq[data-v-b24db130] {\n  background-position: -270px -379px;\n}\n.know_footer .bxpf[data-v-b24db130] {\n  background-position: -170px -108px;\n}\n.know_footer .shwy[data-v-b24db130] {\n  background-position: -362px -425px;\n}\n.know_footer ul[data-v-b24db130] {\n  float: right;\n  font-size: 16px;\n}\n.know_footer ul .know_f_t[data-v-b24db130] {\n  font-size: 24px;\n}\n.server_title div[data-v-b24db130] {\n  margin-left: 5px;\n}\n.server_title a[data-v-b24db130] {\n  line-height: 31px;\n  font-size: 16px;\n  cursor: pointer;\n  margin-right: 15px;\n}\n.server_title a[data-v-b24db130]:hover {\n  text-decoration: none;\n  color: #369;\n}\n.server_title .active[data-v-b24db130] {\n  color: #2693d4;\n  position: relative;\n}\n.server_title .active[data-v-b24db130]::after {\n  content: "";\n  display: block;\n  border: 2px solid #2693d4;\n  border-bottom: 2px solid rgba(0, 0, 0, 0);\n  border-right: 2px solid rgba(0, 0, 0, 0);\n  position: absolute;\n  left: 39px;\n  bottom: -7px;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.server_title .active[data-v-b24db130]:hover {\n  text-decoration: none;\n  color: #2693d4;\n}\n.server_title span[data-v-b24db130] {\n  display: block;\n  height: 2px;\n  width: 100%;\n  background: #2693d4;\n}\n.server[data-v-b24db130] {\n  margin-top: 48px;\n  margin-bottom: 53px;\n}\n.server .novice_main[data-v-b24db130] {\n  margin-bottom: 63px;\n}\n.server[data-v-b24db130]::after {\n  content: "";\n  display: block;\n  clear: both;\n}\n.server > div[data-v-b24db130] {\n  margin-right: 40px;\n}\n.server div[data-v-b24db130]:first-child {\n  margin-right: 0;\n}\n.server div[data-v-b24db130]:nth-child(5) {\n  margin-right: 0;\n}\n.server div[data-v-b24db130]:last-child {\n  margin-right: 0;\n}\n.server .server_pro[data-v-b24db130] {\n  float: left;\n  width: 270px;\n  height: 462px;\n  border: 1px solid #e8e8e8;\n  text-align: center;\n  padding: 0 15px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin-top: 48px;\n  margin-bottom: 63px;\n}\n.server .server_pro div img[data-v-b24db130] {\n  margin-top: 31px;\n  margin-bottom: 26px;\n  width: 114px;\n  height: 60px;\n}\n.server .server_pro div p[data-v-b24db130] {\n  font-size: 17px;\n  line-height: 53px;\n  height: 53px;\n}\n.server .server_pro h4[data-v-b24db130] {\n  height: 63px;\n}\n.server .server_pro p[data-v-b24db130] {\n  height: 21px;\n  font-size: 14px;\n  color: #000;\n}\n.server .server_pro span[data-v-b24db130] {\n  display: inline-block;\n  overflow: hidden;\n  width: 74px;\n  height: 29px;\n  line-height: 29px;\n  background: #ffecb7;\n  text-align: center;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin: 10px 20px;\n}\n.friend_main[data-v-b24db130] {\n  height: 147px;\n  width: 100%;\n  margin-top: 42px;\n  margin-bottom: 100px;\n  background: url('+a("Hk3w")+") 0 0 no-repeat;\n  background-size: 100% 100%;\n}\n","",{version:3,sources:["D:/aaa/学习文件/FileRecv/xinda/sinda/src/views/sinda_index.vue"],names:[],mappings:";AACA;EACE,gDAAkD;CACnD;AACD;EACE,YAAY;EACZ,kBAAkB;EAClB,eAAe;CAChB;AACD;EACE,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;CACjB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,eAAe;EACf,YAAY;EACZ,oBAAoB;EACpB,cAAc;EACd,mBAAmB;CACpB;AACD;EACE,YAAY;EACZ,eAAe;EACf,0BAA0B;EAC1B,0CAA0C;EAC1C,yCAAyC;EACzC,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,iCAAiC;UACzB,yBAAyB;CAClC;AACD;EACE,mBAAmB;CACpB;AACD;EACE,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,cAAc;EACd,mBAAmB;CACpB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,cAAc;EACd,cAAc;CACf;AACD;EACE,mBAAmB;CACpB;AACD;EACE,UAAU;EACV,mBAAmB;EACnB,YAAY;EACZ,eAAe;CAChB;AACD;EACE,YAAY;EACZ,eAAe;EACf,YAAY;CACb;AACD;EACE,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,qCAAqC;EACrC,gBAAgB;CACjB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,qCAAqC;CACtC;AACD;EACE,iCAAiC;UACzB,yBAAyB;EACjC,kCAAkC;EAClC,0BAA0B;CAC3B;AACD;EACE,qCAAqC;UAC7B,6BAA6B;EACrC,kCAAkC;EAClC,0BAA0B;CAC3B;AACD;EACE,oCAAoC;UAC5B,4BAA4B;CACrC;AACD;EACE,iCAAiC;UACzB,yBAAyB;CAClC;AACD;EACE,iBAAiB;EACjB,oBAAoB;EACpB,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,0BAA0B;MACtB,uBAAuB;UACnB,+BAA+B;CACxC;AACD;EACE,aAAa;EACb,cAAc;EACd,0BAA0B;EAC1B,mBAAmB;EACnB,gBAAgB;EAChB,+BAA+B;UACvB,uBAAuB;CAChC;AACD;EACE,iBAAiB;EACjB,oBAAoB;EACpB,aAAa;EACb,aAAa;CACd;AACD;EACE,gBAAgB;EAChB,kBAAkB;EAClB,aAAa;CACd;AACD;EACE,aAAa;CACd;AACD;EACE,aAAa;EACb,gBAAgB;EAChB,eAAe;EACf,iBAAiB;CAClB;AACD;EACE,gBAAgB;EAChB,YAAY;EACZ,sBAAsB;EACtB,iBAAiB;CAClB;AACD;EACE,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;EACZ,aAAa;CACd;AACD;EACE,aAAa;EACb,aAAa;EACb,0BAA0B;EAC1B,oBAAoB;EACpB,gBAAgB;EAChB,eAAe;EACf,mBAAmB;EACnB,gBAAgB;CACjB;AACD;EACE,iBAAiB;EACjB,oBAAoB;EACpB,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,0BAA0B;MACtB,uBAAuB;UACnB,+BAA+B;CACxC;AACD;EACE,aAAa;EACb,cAAc;EACd,0BAA0B;EAC1B,mBAAmB;EACnB,gBAAgB;EAChB,+BAA+B;UACvB,uBAAuB;CAChC;AACD;EACE,iBAAiB;EACjB,oBAAoB;EACpB,aAAa;EACb,aAAa;CACd;AACD;EACE,gBAAgB;EAChB,kBAAkB;EAClB,aAAa;CACd;AACD;EACE,aAAa;CACd;AACD;EACE,aAAa;EACb,gBAAgB;EAChB,eAAe;EACf,iBAAiB;CAClB;AACD;EACE,gBAAgB;EAChB,YAAY;EACZ,sBAAsB;EACtB,iBAAiB;CAClB;AACD;EACE,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;EACZ,aAAa;CACd;AACD;EACE,aAAa;EACb,aAAa;EACb,0BAA0B;EAC1B,oBAAoB;EACpB,gBAAgB;EAChB,eAAe;EACf,mBAAmB;EACnB,gBAAgB;CACjB;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,iBAAiB;EACjB,oBAAoB;CACrB;AACD;EACE,gBAAgB;EAChB,YAAY;CACb;AACD;EACE,gBAAgB;EAChB,eAAe;EACf,kBAAkB;CACnB;AACD;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;CACZ;AACD;EACE,gBAAgB;EAChB,eAAe;CAChB;AACD;EACE,gBAAgB;EAChB,eAAe;CAChB;AACD;EACE,aAAa;EACb,cAAc;EACd,wDAAsE;EACtE,2BAA2B;EAC3B,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,eAAe;EACf,gBAAgB;CACjB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,gBAAgB;EAChB,aAAa;EACb,aAAa;EACb,mBAAmB;CACpB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;CACf;AACD;EACE,aAAa;EACb,cAAc;EACd,kBAAkB;CACnB;AACD;EACE,wDAAkE;EAClE,2BAA2B;CAC5B;AACD;EACE,wDAAgE;EAChE,2BAA2B;CAC5B;AACD;EACE,iBAAiB;EACjB,mBAAmB;CACpB;AACD;EACE,iBAAiB;EACjB,kBAAkB;EAClB,wDAAmE;EACnE,2BAA2B;EAC3B,aAAa;EACb,cAAc;CACf;AACD;EACE,mBAAmB;EACnB,kBAAkB;EAClB,oBAAoB;CACrB;AACD;EACE,cAAc;EACd,oBAAoB;EACpB,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,0BAA0B;MACtB,8BAA8B;EAClC,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;EAC5B,oBAAoB;EACpB,eAAe;CAChB;AACD;EACE,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,mBAAmB;CACpB;AACD;EACE,mCAAmC;CACpC;AACD;EACE,mCAAmC;CACpC;AACD;EACE,mCAAmC;CACpC;AACD;EACE,mCAAmC;CACpC;AACD;EACE,aAAa;EACb,gBAAgB;CACjB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,kBAAkB;EAClB,gBAAgB;EAChB,gBAAgB;EAChB,mBAAmB;CACpB;AACD;EACE,sBAAsB;EACtB,YAAY;CACb;AACD;EACE,eAAe;EACf,mBAAmB;CACpB;AACD;EACE,YAAY;EACZ,eAAe;EACf,0BAA0B;EAC1B,0CAA0C;EAC1C,yCAAyC;EACzC,mBAAmB;EACnB,WAAW;EACX,aAAa;EACb,iCAAiC;UACzB,yBAAyB;CAClC;AACD;EACE,sBAAsB;EACtB,eAAe;CAChB;AACD;EACE,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,oBAAoB;CACrB;AACD;EACE,iBAAiB;EACjB,oBAAoB;CACrB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,YAAY;EACZ,eAAe;EACf,YAAY;CACb;AACD;EACE,mBAAmB;CACpB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,YAAY;EACZ,aAAa;EACb,cAAc;EACd,0BAA0B;EAC1B,mBAAmB;EACnB,gBAAgB;EAChB,+BAA+B;UACvB,uBAAuB;EAC/B,iBAAiB;EACjB,oBAAoB;CACrB;AACD;EACE,iBAAiB;EACjB,oBAAoB;EACpB,aAAa;EACb,aAAa;CACd;AACD;EACE,gBAAgB;EAChB,kBAAkB;EAClB,aAAa;CACd;AACD;EACE,aAAa;CACd;AACD;EACE,aAAa;EACb,gBAAgB;EAChB,YAAY;CACb;AACD;EACE,sBAAsB;EACtB,iBAAiB;EACjB,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,oBAAoB;EACpB,mBAAmB;EACnB,wBAAwB;EACxB,oBAAoB;EACpB,kBAAkB;CACnB;AACD;EACE,cAAc;EACd,YAAY;EACZ,iBAAiB;EACjB,qBAAqB;EACrB,wDAA+D;EAC/D,2BAA2B;CAC5B",file:"sinda_index.vue",sourcesContent:['\n.icon_global[data-v-b24db130] {\n  background-image: url("../assets/pc/Sprites.png");\n}\n.sinda_index > div[data-v-b24db130] {\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.index_title[data-v-b24db130] {\n  line-height: 31px;\n  color: #000;\n  font-size: 16px;\n}\n.index_title p[data-v-b24db130] {\n  padding-left: 10px;\n}\n.index_title > span[data-v-b24db130] {\n  display: block;\n  height: 2px;\n  background: #2693d4;\n  width: 1200px;\n  position: relative;\n}\n.index_title > span[data-v-b24db130]::after {\n  content: "";\n  display: block;\n  border: 2px solid #2693d4;\n  border-bottom: 2px solid rgba(0, 0, 0, 0);\n  border-right: 2px solid rgba(0, 0, 0, 0);\n  position: absolute;\n  left: 44px;\n  bottom: 0px;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.carousel[data-v-b24db130] {\n  position: relative;\n}\n.carousel_inner[data-v-b24db130] {\n  margin: 0 auto;\n  overflow: hidden;\n  max-width: 1200px;\n  height: 400px;\n  position: relative;\n}\n.carousel_inner ul[data-v-b24db130] {\n  overflow: hidden;\n}\n.carousel_inner img[data-v-b24db130] {\n  width: 1200px;\n  height: 400px;\n}\n.carousel_inner li[data-v-b24db130] {\n  position: absolute;\n}\n.bullet[data-v-b24db130] {\n  bottom: 0;\n  position: absolute;\n  left: 500px;\n  margin: 0 auto;\n}\n.bullet[data-v-b24db130]::after {\n  content: "";\n  display: block;\n  clear: both;\n}\n.bullet span[data-v-b24db130] {\n  float: left;\n  width: 25px;\n  height: 25px;\n  display: block;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.5);\n  cursor: pointer;\n}\n.bullet span[data-v-b24db130]:hover {\n  background: #126;\n}\n.bullet span.active[data-v-b24db130] {\n  background: rgba(255, 255, 255, 0.8);\n}\n.image-enter-active[data-v-b24db130] {\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n  -webkit-transition: all 0.8s ease;\n  transition: all 0.8s ease;\n}\n.image-leave-active[data-v-b24db130] {\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%);\n  -webkit-transition: all 0.8s ease;\n  transition: all 0.8s ease;\n}\n.image-enter[data-v-b24db130] {\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%);\n}\n.image-leave[data-v-b24db130] {\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n}\n.star_main[data-v-b24db130] {\n  margin-top: 48px;\n  margin-bottom: 53px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.star_main .star_pro[data-v-b24db130] {\n  width: 270px;\n  height: 462px;\n  border: 1px solid #e8e8e8;\n  text-align: center;\n  padding: 0 15px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.star_main .star_pro div img[data-v-b24db130] {\n  margin-top: 31px;\n  margin-bottom: 26px;\n  width: 114px;\n  height: 60px;\n}\n.star_main .star_pro div p[data-v-b24db130] {\n  font-size: 17px;\n  line-height: 53px;\n  height: 53px;\n}\n.star_main .star_pro h4[data-v-b24db130] {\n  height: 63px;\n}\n.star_main .star_pro p[data-v-b24db130] {\n  height: 70px;\n  font-size: 38px;\n  color: #2693d4;\n  font-weight: 100;\n}\n.star_main .star_pro p span[data-v-b24db130] {\n  font-size: 16px;\n  color: #000;\n  display: inline-block;\n  margin-left: 6px;\n}\n.star_main .star_pro .star_Info[data-v-b24db130] {\n  text-align: left;\n  font-size: 14px;\n  line-height: 18px;\n  color: #000;\n  height: 72px;\n}\n.star_main .star_pro button[data-v-b24db130] {\n  width: 157px;\n  height: 44px;\n  border: 2px solid #2693d4;\n  background: #fafafa;\n  font-size: 18px;\n  color: #2693d4;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.novice_main[data-v-b24db130] {\n  margin-top: 48px;\n  margin-bottom: 53px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.novice_main .novice_pro[data-v-b24db130] {\n  width: 270px;\n  height: 462px;\n  border: 1px solid #e8e8e8;\n  text-align: center;\n  padding: 0 15px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.novice_main .novice_pro div img[data-v-b24db130] {\n  margin-top: 31px;\n  margin-bottom: 26px;\n  width: 114px;\n  height: 60px;\n}\n.novice_main .novice_pro div p[data-v-b24db130] {\n  font-size: 17px;\n  line-height: 53px;\n  height: 53px;\n}\n.novice_main .novice_pro h4[data-v-b24db130] {\n  height: 63px;\n}\n.novice_main .novice_pro p[data-v-b24db130] {\n  height: 70px;\n  font-size: 38px;\n  color: #2693d4;\n  font-weight: 100;\n}\n.novice_main .novice_pro p span[data-v-b24db130] {\n  font-size: 16px;\n  color: #000;\n  display: inline-block;\n  margin-left: 6px;\n}\n.novice_main .novice_pro .novice_Info[data-v-b24db130] {\n  text-align: left;\n  font-size: 14px;\n  line-height: 18px;\n  color: #000;\n  height: 72px;\n}\n.novice_main .novice_pro button[data-v-b24db130] {\n  width: 157px;\n  height: 44px;\n  border: 2px solid #2693d4;\n  background: #fafafa;\n  font-size: 18px;\n  color: #2693d4;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.know_main[data-v-b24db130] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-top: 37px;\n  margin-bottom: 43px;\n}\n.know_main ul .ZSCQ_title[data-v-b24db130] {\n  font-size: 18px;\n  color: #000;\n}\n.know_main ul .ZSCQ_info[data-v-b24db130] {\n  font-size: 14px;\n  color: #696969;\n  line-height: 34px;\n}\n.know_main ul .ZSCQ_price[data-v-b24db130] {\n  font-size: 0;\n  position: relative;\n  left: -5px;\n}\n.know_main ul .ZSCQ_price .price[data-v-b24db130] {\n  font-size: 26px;\n  color: #2693d4;\n}\n.know_main ul .ZSCQ_price span[data-v-b24db130] {\n  font-size: 18px;\n  color: #2693d4;\n}\n.know_Zs[data-v-b24db130] {\n  width: 327px;\n  height: 482px;\n  background: url("../assets/gongyon/zhishichanquan.jpg") no-repeat 0 0;\n  background-size: 100% 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  color: #5ea3d5;\n  font-size: 14px;\n}\n.know_Zs ul[data-v-b24db130] {\n  margin-top: 24px;\n}\n.know_Zs li[data-v-b24db130] {\n  line-height: 26px;\n}\n.know_Zs .title[data-v-b24db130] {\n  font-size: 18px;\n  width: 126px;\n  height: 78px;\n  text-align: center;\n}\n.know_Zs .title li[data-v-b24db130] {\n  line-height: 78px;\n}\n.SB[data-v-b24db130] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.SB > div[data-v-b24db130] {\n  width: 414px;\n  height: 230px;\n  margin-left: 23px;\n}\n.SB .SB_SB[data-v-b24db130] {\n  background: url("../../static/g_img/shangbiao.jpg") no-repeat 0 0;\n  background-size: 100% 100%;\n}\n.SB .SB_BQ[data-v-b24db130] {\n  background: url("../../static/g_img/banquan.jpg") no-repeat 0 0;\n  background-size: 100% 100%;\n}\n.SB ul[data-v-b24db130] {\n  margin-top: 85px;\n  margin-left: 242px;\n}\n.Zz[data-v-b24db130] {\n  margin-top: 22px;\n  margin-left: 23px;\n  background: url("../../static/g_img/zhuzuoquan.jpg") no-repeat 0 0;\n  background-size: 100% 100%;\n  width: 850px;\n  height: 230px;\n}\n.Zz > ul[data-v-b24db130] {\n  position: relative;\n  padding-top: 95px;\n  padding-left: 505px;\n}\n.know_footer[data-v-b24db130] {\n  height: 154px;\n  background: #f7f7f7;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-bottom: 58px;\n  color: #696969;\n}\n.know_footer .know_f_bg[data-v-b24db130] {\n  width: 54px;\n  height: 62px;\n  float: left;\n  margin-right: 18px;\n}\n.know_footer .zzrz[data-v-b24db130] {\n  background-position: -169px -190px;\n}\n.know_footer .zfaq[data-v-b24db130] {\n  background-position: -270px -379px;\n}\n.know_footer .bxpf[data-v-b24db130] {\n  background-position: -170px -108px;\n}\n.know_footer .shwy[data-v-b24db130] {\n  background-position: -362px -425px;\n}\n.know_footer ul[data-v-b24db130] {\n  float: right;\n  font-size: 16px;\n}\n.know_footer ul .know_f_t[data-v-b24db130] {\n  font-size: 24px;\n}\n.server_title div[data-v-b24db130] {\n  margin-left: 5px;\n}\n.server_title a[data-v-b24db130] {\n  line-height: 31px;\n  font-size: 16px;\n  cursor: pointer;\n  margin-right: 15px;\n}\n.server_title a[data-v-b24db130]:hover {\n  text-decoration: none;\n  color: #369;\n}\n.server_title .active[data-v-b24db130] {\n  color: #2693d4;\n  position: relative;\n}\n.server_title .active[data-v-b24db130]::after {\n  content: "";\n  display: block;\n  border: 2px solid #2693d4;\n  border-bottom: 2px solid rgba(0, 0, 0, 0);\n  border-right: 2px solid rgba(0, 0, 0, 0);\n  position: absolute;\n  left: 39px;\n  bottom: -7px;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.server_title .active[data-v-b24db130]:hover {\n  text-decoration: none;\n  color: #2693d4;\n}\n.server_title span[data-v-b24db130] {\n  display: block;\n  height: 2px;\n  width: 100%;\n  background: #2693d4;\n}\n.server[data-v-b24db130] {\n  margin-top: 48px;\n  margin-bottom: 53px;\n}\n.server .novice_main[data-v-b24db130] {\n  margin-bottom: 63px;\n}\n.server[data-v-b24db130]::after {\n  content: "";\n  display: block;\n  clear: both;\n}\n.server > div[data-v-b24db130] {\n  margin-right: 40px;\n}\n.server div[data-v-b24db130]:first-child {\n  margin-right: 0;\n}\n.server div[data-v-b24db130]:nth-child(5) {\n  margin-right: 0;\n}\n.server div[data-v-b24db130]:last-child {\n  margin-right: 0;\n}\n.server .server_pro[data-v-b24db130] {\n  float: left;\n  width: 270px;\n  height: 462px;\n  border: 1px solid #e8e8e8;\n  text-align: center;\n  padding: 0 15px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin-top: 48px;\n  margin-bottom: 63px;\n}\n.server .server_pro div img[data-v-b24db130] {\n  margin-top: 31px;\n  margin-bottom: 26px;\n  width: 114px;\n  height: 60px;\n}\n.server .server_pro div p[data-v-b24db130] {\n  font-size: 17px;\n  line-height: 53px;\n  height: 53px;\n}\n.server .server_pro h4[data-v-b24db130] {\n  height: 63px;\n}\n.server .server_pro p[data-v-b24db130] {\n  height: 21px;\n  font-size: 14px;\n  color: #000;\n}\n.server .server_pro span[data-v-b24db130] {\n  display: inline-block;\n  overflow: hidden;\n  width: 74px;\n  height: 29px;\n  line-height: 29px;\n  background: #ffecb7;\n  text-align: center;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin: 10px 20px;\n}\n.friend_main[data-v-b24db130] {\n  height: 147px;\n  width: 100%;\n  margin-top: 42px;\n  margin-bottom: 100px;\n  background: url("../assets/pc/jiamengshang.jpg") 0 0 no-repeat;\n  background-size: 100% 100%;\n}\n'],sourceRoot:""}])},yyph:function(n,t,a){n.exports=a.p+"static/img/banquan.c5d04e4.jpg"}});
//# sourceMappingURL=9.50522a0785c529cfa468.js.map