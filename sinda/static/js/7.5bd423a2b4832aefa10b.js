webpackJsonp([7],{NMp2:function(n,t,A){"use strict";function a(n){A("SbgD")}Object.defineProperty(t,"__esModule",{value:!0});var i=A("Dd8w"),e=A.n(i),o=A("NYxO"),r={name:"sinda_buyCart",data:function(){return{nowIndex:0,proMainTitle:{a:{tit:"服务内容",info:""},b:{tit:"商品评价",info:"222"}},product:{},providerProduct:{},regionText:{},number:1,show:!1,errorImg:'this.src="'+A("rD1e")+'"',flag:!0}},methods:e()({},Object(o.b)(["setlistName","setNum"]),Object(o.c)(["getuserName"]),{titleBg:function(n){this.nowIndex=n},addtoCart:function(n,t,A){var a=this;sessionStorage.getItem("userName")?this.ajax.post("/xinda-api/cart/add",this.qs.stringify({id:t,num:A})).then(function(t){1==t.data.status?a.setNum():console.log("添加购物车失败提示信息===非常抱歉，系统开小差了，请稍后再试"),n&&a.$router.push({path:"/list/cart"})}):this.show=!0},nowBuy:function(){sessionStorage.getItem("userName")?(this.flag=!1,this.addtoCart(!0,this.$route.query.id,this.number)):this.addtoCart(!0,this.$route.query.id,this.number)},cartAdd:function(){this.addtoCart(!1,this.$route.query.id,this.number)},nAdd:function(){this.number+=1},nSub:function(){this.number>1&&(this.number-=1)},queding:function(){this.$router.push({path:"/LoginRegister/login"})},quxiao:function(){this.show=!1}}),created:function(){var n=this;this.setlistName("商品详情"),this.ajax.post("/xinda-api/product/package/detail",this.qs.stringify({sId:this.$route.query.id})).then(function(t){n.product=t.data.data.product,n.providerProduct=t.data.data.providerProduct,n.regionText=t.data.data.regionText})}},b=function(){var n=this,t=n.$createElement,A=n._self._c||t;return A("div",[A("div",{staticClass:"pro"},[A("div",{staticClass:"pro_header"},[A("div",{staticClass:"pro_img"},[A("img",{attrs:{src:"http://115.182.107.203:8088/xinda/pic"+n.product.img,onerror:n.errorImg}})]),n._v(" "),A("div",{staticClass:"pro_info"},[A("ul",[A("li",[A("h2",[n._v(n._s(n.providerProduct.serviceName))])]),n._v(" "),A("li",{staticClass:"account"},[n._v(n._s(n.providerProduct.serviceInfo))]),n._v(" "),A("li",[A("div",{staticClass:"price"},[A("p",[n._v("\n                市场价：\n                "),A("del",[n._v("￥"+n._s(n.product.marketPrice)+".00")])]),n._v(" "),A("p",[n._v("\n                价　格：\n                "),A("strong",{staticClass:"cost"},[n._v("￥ "+n._s(n.providerProduct.price)+".00")]),n._v(" "),A("span",[n._v(n._s(n.providerProduct.unit))])])])]),n._v(" "),A("li",{staticClass:"type"},[n._v("类　型：\n            "),A("span",[n._v(n._s(n.product.name))])]),n._v(" "),A("li",{staticClass:"area"},[n._v("地　区："+n._s(n.regionText))]),n._v(" "),A("li",{staticClass:"number"},[A("span",[n._v("购买数量：")]),n._v(" "),A("button",{staticClass:"less",on:{click:n.nSub}},[n._v("-")]),A("input",{directives:[{name:"model",rawName:"v-model",value:n.number,expression:"number"}],attrs:{type:"text",readonly:"readonly"},domProps:{value:n.number},on:{input:function(t){t.target.composing||(n.number=t.target.value)}}}),n._v(" "),A("button",{staticClass:"more",on:{click:n.nAdd}},[n._v("+")])]),n._v(" "),A("li",{staticClass:"once"},[A("button",{staticClass:"buy",on:{click:function(t){n.flag&&n.nowBuy()}}},[n._v("立即购买")]),n._v(" "),A("button",{staticClass:"join",on:{click:n.cartAdd}},[n._v("加入购物车")])])])]),n._v(" "),n._m(0,!1,!1)]),n._v(" "),A("div",{staticClass:"banner"}),n._v(" "),A("div",{staticClass:"pro_main"},[A("div",{staticClass:"main_title"},[A("ul",n._l(n.proMainTitle,function(t,a,i){return A("li",{key:t.tit,class:{bg:i==n.nowIndex},on:{click:function(t){n.titleBg(i)}}},[n._v("\n            "+n._s(t.tit)+"\n          ")])}))]),n._v(" "),n._l(n.proMainTitle,function(t,a,i){return i==n.nowIndex?A("div",{key:t.tit,staticClass:"main_main"},[0==i?A("div",{domProps:{innerHTML:n._s(n.providerProduct.serviceContent)}}):n._e(),n._v(" "),0!=i?A("div",[n._m(1,!0,!1),n._v(" "),n._m(2,!0,!1),n._v(" "),n._m(3,!0,!1)]):n._e()]):n._e()})],2),n._v(" "),A("transition",{attrs:{name:"reversal"}},[n.show?A("div",{staticClass:"message"},[n.show?A("div",[A("h3",[n._v("请您先登录")]),n._v(" "),A("p",[n._v("马上登录账号？")]),n._v(" "),A("button",{on:{click:n.queding}},[n._v("确定\n            "),A("span")]),n._v(" "),A("button",{on:{click:n.quxiao}},[n._v("取消")])]):n._e()]):n._e()])],1)])},p=[function(){var n=this,t=n.$createElement,A=n._self._c||t;return A("div",{staticClass:"pro_server"},[A("h2",[n._v("顶级服务商")]),n._v(" "),A("p",[n._v("北京信达服务中心")]),n._v(" "),A("button",[n._v("马上咨询")]),n._v(" "),A("div",{staticClass:"check_server"},[A("button",[n._v("查看服务商")])])])},function(){var n=this,t=n.$createElement,A=n._self._c||t;return A("div",{staticClass:"estimate"},[A("h1",[n._v("0%")]),n._v(" "),A("span",[n._v("好评")]),n._v(" "),A("div",{staticClass:"appraise"},[A("div",{staticClass:"apra"},[A("p",{staticClass:"evaluate"},[n._v("好评 （0%）")]),n._v(" "),A("p",{staticClass:"grey"})]),n._v(" "),A("div",{staticClass:"apra"},[A("p",{staticClass:"evaluate"},[n._v("中评 （0%）")]),n._v(" "),A("p",{staticClass:"grey"})]),n._v(" "),A("div",{staticClass:"apra"},[A("p",{staticClass:"evaluate"},[n._v("差评 （0%）")]),n._v(" "),A("p",{staticClass:"grey"})])]),n._v(" "),A("p",{staticClass:"thread"}),n._v(" "),A("div",{staticClass:"impression"},[A("p",[n._v("客户印象")]),n._v(" "),A("p",[n._v("暂无添加印象的标签")])])])},function(){var n=this,t=n.$createElement,A=n._self._c||t;return A("div",{staticClass:"whole"},[A("p",[n._v("全部评价 （0）")]),n._v(" "),A("p",[n._v("好评 （0）")]),n._v(" "),A("p",[n._v("中评 （0）")]),n._v(" "),A("p",[n._v("差评 （0）")])])},function(){var n=this,t=n.$createElement,A=n._self._c||t;return A("div",{staticClass:"satisfaction"},[A("p",[n._v("评价")]),n._v(" "),A("p",[n._v("满意度")]),n._v(" "),A("p",[n._v("用户")])])}],d={render:b,staticRenderFns:p},s=d,C=A("VU/8"),l=a,c=C(r,s,!1,l,"data-v-50b6b3b4",null);t.default=c.exports},SbgD:function(n,t,A){var a=A("r41G");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);A("rjj0")("585dd65a",a,!0)},"iu+k":function(n,t,A){n.exports=A.p+"static/img/waiguoren.efcd71a.jpg"},r41G:function(n,t,A){t=n.exports=A("FZ+f")(!0),t.push([n.i,'\n.pro > div[data-v-50b6b3b4] {\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.pro .pro_header[data-v-50b6b3b4] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-top: 13px;\n}\n.pro_img[data-v-50b6b3b4] {\n  width: 525px;\n  height: 393px;\n}\n.pro_img img[data-v-50b6b3b4] {\n  width: 100%;\n  height: 100%;\n}\n.pro_info[data-v-50b6b3b4] {\n  margin-left: 32px;\n  margin-right: 52px;\n  width: 390px;\n  height: 393px;\n}\n.pro_info h2[data-v-50b6b3b4] {\n  font-size: 23px;\n  color: #000000;\n}\n.pro_info .account[data-v-50b6b3b4] {\n  line-height: 36px;\n}\n.pro_info .area[data-v-50b6b3b4] {\n  line-height: 38px;\n}\n.pro_info .number[data-v-50b6b3b4] {\n  line-height: 40px;\n  font-size: 0;\n}\n.pro_info .number[data-v-50b6b3b4]::after {\n  content: "";\n  display: block;\n  clear: both;\n}\n.pro_info .number span[data-v-50b6b3b4] {\n  font-size: 13px;\n}\n.pro_info .number .less[data-v-50b6b3b4] {\n  height: 26px;\n  width: 30px;\n  background: #f7f8fa;\n  outline: none;\n  border: 1px solid #cccccc;\n  border-right: 0;\n}\n.pro_info .number .more[data-v-50b6b3b4] {\n  height: 26px;\n  width: 30px;\n  background: #f7f8fa;\n  outline: none;\n  border: 1px solid #cccccc;\n  border-left: 0;\n}\n.pro_info .number input[data-v-50b6b3b4] {\n  height: 24px;\n  width: 49px;\n  border: 1px solid #cccccc;\n  text-align: center;\n}\n.pro_info .once[data-v-50b6b3b4] {\n  margin-left: 60px;\n  margin-top: 20px;\n}\n.pro_info .once .buy[data-v-50b6b3b4] {\n  height: 27px;\n  width: 95px;\n  background: #2693d4;\n  color: #fff;\n  margin-right: 15px;\n  outline: none;\n  border: none;\n}\n.pro_info .once .join[data-v-50b6b3b4] {\n  height: 27px;\n  width: 95px;\n  color: #2693d4;\n  outline: none;\n  border: 1px solid #2693d4;\n  background: #ffffff;\n}\n.pro_info .type span[data-v-50b6b3b4] {\n  border: 1px solid #2693d4;\n  display: inline-block;\n  color: #2693d4;\n  line-height: 20px;\n  padding: 5px;\n  margin: 10px 0;\n}\n.pro_info li[data-v-50b6b3b4] {\n  font-size: 13px;\n  color: #636363;\n}\n.pro_info .price[data-v-50b6b3b4] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 75px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background: #f7f7f7;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.pro_server[data-v-50b6b3b4] {\n  width: 197px;\n  height: 223px;\n  border: 1px solid #2793d4;\n  text-align: center;\n  position: relative;\n}\n.pro_server h2[data-v-50b6b3b4] {\n  line-height: 50px;\n}\n.pro_server p[data-v-50b6b3b4] {\n  line-height: 50px;\n  font-size: 14px;\n}\n.pro_server button[data-v-50b6b3b4] {\n  width: 88px;\n  height: 28px;\n  border: 1px solid #2693d4;\n  border-radius: 1px;\n  background: #fff;\n  color: #2693d4;\n}\n.pro_server .check_server[data-v-50b6b3b4] {\n  position: absolute;\n  bottom: 0;\n  width: 197px;\n  height: 75px;\n  background: #bdddf2;\n}\n.pro_server .check_server button[data-v-50b6b3b4] {\n  width: 110px;\n  height: 30px;\n  background: #2693d4;\n  color: #fff;\n  border: none;\n  font-size: 14px;\n  border-radius: 2px;\n  vertical-align: middle;\n  margin-top: 23px;\n}\n.banner[data-v-50b6b3b4] {\n  background: url('+A("iu+k")+') 0 0 no-repeat;\n  background-size: 100% 100%;\n  height: 98px;\n  margin-top: 22px !important;\n  margin-bottom: 38px !important;\n}\n.main_title[data-v-50b6b3b4] {\n  height: 41px;\n  background: #f7f7f7;\n  border: 1px solid #cccccc;\n  position: relative;\n}\n.main_title ul[data-v-50b6b3b4] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  top: -1px;\n}\n.main_title ul li[data-v-50b6b3b4] {\n  line-height: 43px;\n  padding-left: 39px;\n  padding-right: 39px;\n  cursor: pointer;\n}\n.main_title ul li.bg[data-v-50b6b3b4] {\n  background: #2693d4;\n  color: #fff;\n  position: relative;\n}\n.main_title ul li.bg[data-v-50b6b3b4]::after {\n  content: "";\n  display: block;\n  border: 4px solid #2693d4;\n  border-left: 5.5px solid rgba(0, 0, 0, 0);\n  border-right: 5.5px solid rgba(0, 0, 0, 0);\n  border-bottom: 4px solid rgba(0, 0, 0, 0);\n  position: absolute;\n  left: 47%;\n}\n.main_main[data-v-50b6b3b4] {\n  width: 1198px;\n  min-height: 743px;\n  border: 1px solid #cccccc;\n  border-top: none;\n  margin-bottom: 69px;\n}\n.pro .message[data-v-50b6b3b4] {\n  background: rgba(0, 0, 0, 0.3);\n  top: 0;\n  left: 0;\n  max-width: 100% !important;\n  height: 100%;\n  position: fixed;\n}\n.pro .message > div[data-v-50b6b3b4] {\n  border-radius: 6px;\n  margin: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: #fff;\n  width: 384px;\n  height: 200px;\n}\n.pro .message > div h3[data-v-50b6b3b4] {\n  line-height: 53px;\n  text-align: center;\n  background: #f2f2f2;\n}\n.pro .message > div p[data-v-50b6b3b4] {\n  padding-left: 28px;\n  line-height: 70px;\n  color: #797a8b;\n}\n.pro .message > div button[data-v-50b6b3b4] {\n  font-size: 18px;\n  border-radius: 6px;\n  width: 150px;\n  height: 45px;\n  background: #d8d8d8;\n  border: none;\n  margin-left: 28px;\n  cursor: pointer;\n}\n.reversal-enter-active[data-v-50b6b3b4] {\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n.reversal-leave-active[data-v-50b6b3b4] {\n  -webkit-transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);\n  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);\n}\n.reversal-enter[data-v-50b6b3b4] {\n  -webkit-transform: translateX(100px);\n          transform: translateX(100px);\n  opacity: 0;\n}\n.reversal-leave-to[data-v-50b6b3b4] {\n  opacity: 0;\n}\n.estimate[data-v-50b6b3b4] {\n  width: 1180px;\n  height: 120px;\n  border-top: 1px solid #e1e1e1;\n  color: #169bd5;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 20px;\n}\n.estimate h1[data-v-50b6b3b4] {\n  width: 65px;\n  height: 120px;\n  color: #169bd5;\n  line-height: 100px;\n}\n.estimate span[data-v-50b6b3b4] {\n  font-size: 16px;\n  line-height: 120px;\n}\n.appraise[data-v-50b6b3b4] {\n  width: 300px;\n  height: 110px;\n  color: #333;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.apra[data-v-50b6b3b4] {\n  margin-top: 15px;\n  margin-left: 20px;\n  width: 300px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.evaluate[data-v-50b6b3b4] {\n  width: 100px;\n  height: 20px;\n}\n.grey[data-v-50b6b3b4] {\n  width: 167px;\n  height: 20px;\n  background-color: #e4e4e4;\n}\n.thread[data-v-50b6b3b4] {\n  width: 1px;\n  height: 83px;\n  margin-left: 440px;\n  background-color: #bcbcbc;\n  margin-top: 12px;\n}\n.impression[data-v-50b6b3b4] {\n  font-size: 15px;\n  margin-left: 25px;\n  color: #333;\n  margin-top: 20px;\n}\n.whole[data-v-50b6b3b4] {\n  width: 1200px;\n  height: 50px;\n  background-color: #f2f2f2;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.whole p[data-v-50b6b3b4] {\n  width: 170px;\n  height: 50px;\n  border-right: 1px solid #d7d7d7;\n  line-height: 50px;\n  text-align: center;\n}\n.satisfaction[data-v-50b6b3b4] {\n  width: 1150px;\n  height: 50px;\n  margin: 0 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.satisfaction p[data-v-50b6b3b4] {\n  width: 380px;\n  height: 50px;\n  border-bottom: 1px solid #e6e6e6;\n  line-height: 50px;\n  text-align: center;\n  color: #766674;\n  font-size: 12px;\n}\n',"",{version:3,sources:["D:/aaa/学习文件/FileRecv/xinda/sinda/src/views/sinda_list/sinda_products.vue"],names:[],mappings:";AACA;EACE,YAAY;EACZ,kBAAkB;EAClB,eAAe;CAChB;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,iBAAiB;CAClB;AACD;EACE,aAAa;EACb,cAAc;CACf;AACD;EACE,YAAY;EACZ,aAAa;CACd;AACD;EACE,kBAAkB;EAClB,mBAAmB;EACnB,aAAa;EACb,cAAc;CACf;AACD;EACE,gBAAgB;EAChB,eAAe;CAChB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,kBAAkB;EAClB,aAAa;CACd;AACD;EACE,YAAY;EACZ,eAAe;EACf,YAAY;CACb;AACD;EACE,gBAAgB;CACjB;AACD;EACE,aAAa;EACb,YAAY;EACZ,oBAAoB;EACpB,cAAc;EACd,0BAA0B;EAC1B,gBAAgB;CACjB;AACD;EACE,aAAa;EACb,YAAY;EACZ,oBAAoB;EACpB,cAAc;EACd,0BAA0B;EAC1B,eAAe;CAChB;AACD;EACE,aAAa;EACb,YAAY;EACZ,0BAA0B;EAC1B,mBAAmB;CACpB;AACD;EACE,kBAAkB;EAClB,iBAAiB;CAClB;AACD;EACE,aAAa;EACb,YAAY;EACZ,oBAAoB;EACpB,YAAY;EACZ,mBAAmB;EACnB,cAAc;EACd,aAAa;CACd;AACD;EACE,aAAa;EACb,YAAY;EACZ,eAAe;EACf,cAAc;EACd,0BAA0B;EAC1B,oBAAoB;CACrB;AACD;EACE,0BAA0B;EAC1B,sBAAsB;EACtB,eAAe;EACf,kBAAkB;EAClB,aAAa;EACb,eAAe;CAChB;AACD;EACE,gBAAgB;EAChB,eAAe;CAChB;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,aAAa;EACb,6BAA6B;EAC7B,8BAA8B;MAC1B,2BAA2B;UACvB,uBAAuB;EAC/B,oBAAoB;EACpB,yBAAyB;MACrB,sBAAsB;UAClB,wBAAwB;CACjC;AACD;EACE,aAAa;EACb,cAAc;EACd,0BAA0B;EAC1B,mBAAmB;EACnB,mBAAmB;CACpB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,kBAAkB;EAClB,gBAAgB;CACjB;AACD;EACE,YAAY;EACZ,aAAa;EACb,0BAA0B;EAC1B,mBAAmB;EACnB,iBAAiB;EACjB,eAAe;CAChB;AACD;EACE,mBAAmB;EACnB,UAAU;EACV,aAAa;EACb,aAAa;EACb,oBAAoB;CACrB;AACD;EACE,aAAa;EACb,aAAa;EACb,oBAAoB;EACpB,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;CAClB;AACD;EACE,wDAA+D;EAC/D,2BAA2B;EAC3B,aAAa;EACb,4BAA4B;EAC5B,+BAA+B;CAChC;AACD;EACE,aAAa;EACb,oBAAoB;EACpB,0BAA0B;EAC1B,mBAAmB;CACpB;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,mBAAmB;EACnB,UAAU;CACX;AACD;EACE,kBAAkB;EAClB,mBAAmB;EACnB,oBAAoB;EACpB,gBAAgB;CACjB;AACD;EACE,oBAAoB;EACpB,YAAY;EACZ,mBAAmB;CACpB;AACD;EACE,YAAY;EACZ,eAAe;EACf,0BAA0B;EAC1B,0CAA0C;EAC1C,2CAA2C;EAC3C,0CAA0C;EAC1C,mBAAmB;EACnB,UAAU;CACX;AACD;EACE,cAAc;EACd,kBAAkB;EAClB,0BAA0B;EAC1B,iBAAiB;EACjB,oBAAoB;CACrB;AACD;EACE,+BAA+B;EAC/B,OAAO;EACP,QAAQ;EACR,2BAA2B;EAC3B,aAAa;EACb,gBAAgB;CACjB;AACD;EACE,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,OAAO;EACP,QAAQ;EACR,UAAU;EACV,SAAS;EACT,iBAAiB;EACjB,aAAa;EACb,cAAc;CACf;AACD;EACE,kBAAkB;EAClB,mBAAmB;EACnB,oBAAoB;CACrB;AACD;EACE,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;CAChB;AACD;EACE,gBAAgB;EAChB,mBAAmB;EACnB,aAAa;EACb,aAAa;EACb,oBAAoB;EACpB,aAAa;EACb,kBAAkB;EAClB,gBAAgB;CACjB;AACD;EACE,kCAAkC;EAClC,0BAA0B;CAC3B;AACD;EACE,0DAA0D;EAC1D,kDAAkD;CACnD;AACD;EACE,qCAAqC;UAC7B,6BAA6B;EACrC,WAAW;CACZ;AACD;EACE,WAAW;CACZ;AACD;EACE,cAAc;EACd,cAAc;EACd,8BAA8B;EAC9B,eAAe;EACf,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,mBAAmB;CACpB;AACD;EACE,YAAY;EACZ,cAAc;EACd,eAAe;EACf,mBAAmB;CACpB;AACD;EACE,gBAAgB;EAChB,mBAAmB;CACpB;AACD;EACE,aAAa;EACb,cAAc;EACd,YAAY;EACZ,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,oBAAoB;MAChB,gBAAgB;CACrB;AACD;EACE,iBAAiB;EACjB,kBAAkB;EAClB,aAAa;EACb,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,oBAAoB;MAChB,gBAAgB;CACrB;AACD;EACE,aAAa;EACb,aAAa;CACd;AACD;EACE,aAAa;EACb,aAAa;EACb,0BAA0B;CAC3B;AACD;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,0BAA0B;EAC1B,iBAAiB;CAClB;AACD;EACE,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;CAClB;AACD;EACE,cAAc;EACd,aAAa;EACb,0BAA0B;EAC1B,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;CACf;AACD;EACE,aAAa;EACb,aAAa;EACb,gCAAgC;EAChC,kBAAkB;EAClB,mBAAmB;CACpB;AACD;EACE,cAAc;EACd,aAAa;EACb,eAAe;EACf,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;CACf;AACD;EACE,aAAa;EACb,aAAa;EACb,iCAAiC;EACjC,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;EACf,gBAAgB;CACjB",file:"sinda_products.vue",sourcesContent:['\n.pro > div[data-v-50b6b3b4] {\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.pro .pro_header[data-v-50b6b3b4] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-top: 13px;\n}\n.pro_img[data-v-50b6b3b4] {\n  width: 525px;\n  height: 393px;\n}\n.pro_img img[data-v-50b6b3b4] {\n  width: 100%;\n  height: 100%;\n}\n.pro_info[data-v-50b6b3b4] {\n  margin-left: 32px;\n  margin-right: 52px;\n  width: 390px;\n  height: 393px;\n}\n.pro_info h2[data-v-50b6b3b4] {\n  font-size: 23px;\n  color: #000000;\n}\n.pro_info .account[data-v-50b6b3b4] {\n  line-height: 36px;\n}\n.pro_info .area[data-v-50b6b3b4] {\n  line-height: 38px;\n}\n.pro_info .number[data-v-50b6b3b4] {\n  line-height: 40px;\n  font-size: 0;\n}\n.pro_info .number[data-v-50b6b3b4]::after {\n  content: "";\n  display: block;\n  clear: both;\n}\n.pro_info .number span[data-v-50b6b3b4] {\n  font-size: 13px;\n}\n.pro_info .number .less[data-v-50b6b3b4] {\n  height: 26px;\n  width: 30px;\n  background: #f7f8fa;\n  outline: none;\n  border: 1px solid #cccccc;\n  border-right: 0;\n}\n.pro_info .number .more[data-v-50b6b3b4] {\n  height: 26px;\n  width: 30px;\n  background: #f7f8fa;\n  outline: none;\n  border: 1px solid #cccccc;\n  border-left: 0;\n}\n.pro_info .number input[data-v-50b6b3b4] {\n  height: 24px;\n  width: 49px;\n  border: 1px solid #cccccc;\n  text-align: center;\n}\n.pro_info .once[data-v-50b6b3b4] {\n  margin-left: 60px;\n  margin-top: 20px;\n}\n.pro_info .once .buy[data-v-50b6b3b4] {\n  height: 27px;\n  width: 95px;\n  background: #2693d4;\n  color: #fff;\n  margin-right: 15px;\n  outline: none;\n  border: none;\n}\n.pro_info .once .join[data-v-50b6b3b4] {\n  height: 27px;\n  width: 95px;\n  color: #2693d4;\n  outline: none;\n  border: 1px solid #2693d4;\n  background: #ffffff;\n}\n.pro_info .type span[data-v-50b6b3b4] {\n  border: 1px solid #2693d4;\n  display: inline-block;\n  color: #2693d4;\n  line-height: 20px;\n  padding: 5px;\n  margin: 10px 0;\n}\n.pro_info li[data-v-50b6b3b4] {\n  font-size: 13px;\n  color: #636363;\n}\n.pro_info .price[data-v-50b6b3b4] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 75px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background: #f7f7f7;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.pro_server[data-v-50b6b3b4] {\n  width: 197px;\n  height: 223px;\n  border: 1px solid #2793d4;\n  text-align: center;\n  position: relative;\n}\n.pro_server h2[data-v-50b6b3b4] {\n  line-height: 50px;\n}\n.pro_server p[data-v-50b6b3b4] {\n  line-height: 50px;\n  font-size: 14px;\n}\n.pro_server button[data-v-50b6b3b4] {\n  width: 88px;\n  height: 28px;\n  border: 1px solid #2693d4;\n  border-radius: 1px;\n  background: #fff;\n  color: #2693d4;\n}\n.pro_server .check_server[data-v-50b6b3b4] {\n  position: absolute;\n  bottom: 0;\n  width: 197px;\n  height: 75px;\n  background: #bdddf2;\n}\n.pro_server .check_server button[data-v-50b6b3b4] {\n  width: 110px;\n  height: 30px;\n  background: #2693d4;\n  color: #fff;\n  border: none;\n  font-size: 14px;\n  border-radius: 2px;\n  vertical-align: middle;\n  margin-top: 23px;\n}\n.banner[data-v-50b6b3b4] {\n  background: url("../../assets/pc/waiguoren.jpg") 0 0 no-repeat;\n  background-size: 100% 100%;\n  height: 98px;\n  margin-top: 22px !important;\n  margin-bottom: 38px !important;\n}\n.main_title[data-v-50b6b3b4] {\n  height: 41px;\n  background: #f7f7f7;\n  border: 1px solid #cccccc;\n  position: relative;\n}\n.main_title ul[data-v-50b6b3b4] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  top: -1px;\n}\n.main_title ul li[data-v-50b6b3b4] {\n  line-height: 43px;\n  padding-left: 39px;\n  padding-right: 39px;\n  cursor: pointer;\n}\n.main_title ul li.bg[data-v-50b6b3b4] {\n  background: #2693d4;\n  color: #fff;\n  position: relative;\n}\n.main_title ul li.bg[data-v-50b6b3b4]::after {\n  content: "";\n  display: block;\n  border: 4px solid #2693d4;\n  border-left: 5.5px solid rgba(0, 0, 0, 0);\n  border-right: 5.5px solid rgba(0, 0, 0, 0);\n  border-bottom: 4px solid rgba(0, 0, 0, 0);\n  position: absolute;\n  left: 47%;\n}\n.main_main[data-v-50b6b3b4] {\n  width: 1198px;\n  min-height: 743px;\n  border: 1px solid #cccccc;\n  border-top: none;\n  margin-bottom: 69px;\n}\n.pro .message[data-v-50b6b3b4] {\n  background: rgba(0, 0, 0, 0.3);\n  top: 0;\n  left: 0;\n  max-width: 100% !important;\n  height: 100%;\n  position: fixed;\n}\n.pro .message > div[data-v-50b6b3b4] {\n  border-radius: 6px;\n  margin: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: #fff;\n  width: 384px;\n  height: 200px;\n}\n.pro .message > div h3[data-v-50b6b3b4] {\n  line-height: 53px;\n  text-align: center;\n  background: #f2f2f2;\n}\n.pro .message > div p[data-v-50b6b3b4] {\n  padding-left: 28px;\n  line-height: 70px;\n  color: #797a8b;\n}\n.pro .message > div button[data-v-50b6b3b4] {\n  font-size: 18px;\n  border-radius: 6px;\n  width: 150px;\n  height: 45px;\n  background: #d8d8d8;\n  border: none;\n  margin-left: 28px;\n  cursor: pointer;\n}\n.reversal-enter-active[data-v-50b6b3b4] {\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n.reversal-leave-active[data-v-50b6b3b4] {\n  -webkit-transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);\n  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);\n}\n.reversal-enter[data-v-50b6b3b4] {\n  -webkit-transform: translateX(100px);\n          transform: translateX(100px);\n  opacity: 0;\n}\n.reversal-leave-to[data-v-50b6b3b4] {\n  opacity: 0;\n}\n.estimate[data-v-50b6b3b4] {\n  width: 1180px;\n  height: 120px;\n  border-top: 1px solid #e1e1e1;\n  color: #169bd5;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 20px;\n}\n.estimate h1[data-v-50b6b3b4] {\n  width: 65px;\n  height: 120px;\n  color: #169bd5;\n  line-height: 100px;\n}\n.estimate span[data-v-50b6b3b4] {\n  font-size: 16px;\n  line-height: 120px;\n}\n.appraise[data-v-50b6b3b4] {\n  width: 300px;\n  height: 110px;\n  color: #333;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.apra[data-v-50b6b3b4] {\n  margin-top: 15px;\n  margin-left: 20px;\n  width: 300px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.evaluate[data-v-50b6b3b4] {\n  width: 100px;\n  height: 20px;\n}\n.grey[data-v-50b6b3b4] {\n  width: 167px;\n  height: 20px;\n  background-color: #e4e4e4;\n}\n.thread[data-v-50b6b3b4] {\n  width: 1px;\n  height: 83px;\n  margin-left: 440px;\n  background-color: #bcbcbc;\n  margin-top: 12px;\n}\n.impression[data-v-50b6b3b4] {\n  font-size: 15px;\n  margin-left: 25px;\n  color: #333;\n  margin-top: 20px;\n}\n.whole[data-v-50b6b3b4] {\n  width: 1200px;\n  height: 50px;\n  background-color: #f2f2f2;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.whole p[data-v-50b6b3b4] {\n  width: 170px;\n  height: 50px;\n  border-right: 1px solid #d7d7d7;\n  line-height: 50px;\n  text-align: center;\n}\n.satisfaction[data-v-50b6b3b4] {\n  width: 1150px;\n  height: 50px;\n  margin: 0 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.satisfaction p[data-v-50b6b3b4] {\n  width: 380px;\n  height: 50px;\n  border-bottom: 1px solid #e6e6e6;\n  line-height: 50px;\n  text-align: center;\n  color: #766674;\n  font-size: 12px;\n}\n'],sourceRoot:""}])}});
//# sourceMappingURL=7.5bd423a2b4832aefa10b.js.map