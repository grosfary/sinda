webpackJsonp([17],{"53Pz":function(n,a,t){"use strict";function e(n){t("wWgL")}Object.defineProperty(a,"__esModule",{value:!0});var A=t("HA7E"),i=t("g9jJ"),o={name:"payment_failure",data:function(){return{}},components:{sinda_header:A.default,sinda_footer:i.default}},p=function(){var n=this,a=n.$createElement;n._self._c;return n._m(0,!1,!1)},s=[function(){var n=this,a=n.$createElement,e=n._self._c||a;return e("div",{staticClass:"failure"},[e("div",{staticClass:"headed"},[e("p",{staticClass:"pay"},[n._v("支付失败")])]),n._v(" "),e("div",{staticClass:"bodyed"},[e("div",{staticClass:"logo"},[e("img",{attrs:{src:t("wjjK"),alt:""}})]),n._v(" "),e("div",{staticClass:"right"},[e("p",{staticClass:"alipay"},[n._v("支付失败!")]),n._v(" "),e("div",{staticClass:"payment"},[e("p",[n._v("支付未成功 ：让我们再试一次吧 ! ")]),n._v(" "),e("a",{staticClass:"return",attrs:{href:"http://localhost:8080/#/line_item"}},[n._v("返回支付页")])]),n._v(" "),e("div",{staticClass:"question"},[e("span",{staticClass:"problem"},[n._v("如有问题，请联系客服：")]),n._v(" "),e("span",{staticClass:"phone"},[n._v("010-53380229")])])])])])}],r={render:p,staticRenderFns:s},d=r,l=t("VU/8"),C=e,B=l(o,d,!1,C,"data-v-67245286",null);a.default=B.exports},S4Xe:function(n,a,t){a=n.exports=t("FZ+f")(!0),a.push([n.i,"\n.bodyed[data-v-67245286] {\n  height: 302px;\n  background: #f7f7f7;\n  margin: 20px -2px;\n}\n.logo[data-v-67245286] {\n  float: left;\n  width: 210px;\n  height: 210px;\n  margin-top: 50px;\n  margin-left: 133px;\n}\n.pay[data-v-67245286] {\n  padding: 10px 0;\n  border-bottom: 1px solid #ccc;\n  color: #2793d3;\n}\n.payment[data-v-67245286] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  margin-top: 20px;\n}\n.payment p[data-v-67245286] {\n  color: #333333;\n  font-size: 18px;\n  line-height: 50px;\n}\n.payment a[data-v-67245286] {\n  border: 1px solid #2793d3;\n  border-radius: 5px;\n  width: 100px;\n  text-align: center;\n  text-decoration: none;\n  line-height: 38px;\n  color: #2793d3;\n  margin: 10px 10px;\n}\n.alipay[data-v-67245286] {\n  font-size: 30px;\n  color: #2793d3;\n  padding-top: 60px;\n}\n.problem[data-v-67245286] {\n  color: #020202;\n  font-size: 14px;\n}\n.phone[data-v-67245286] {\n  color: #000;\n  font-weight: bold;\n}\n.right[data-v-67245286] {\n  margin-left: 400px;\n}\n","",{version:3,sources:["D:/aaa/学习文件/FileRecv/xinda/sinda/src/views/sinda_payment/sinda_payment_failure.vue"],names:[],mappings:";AACA;EACE,cAAc;EACd,oBAAoB;EACpB,kBAAkB;CACnB;AACD;EACE,YAAY;EACZ,aAAa;EACb,cAAc;EACd,iBAAiB;EACjB,mBAAmB;CACpB;AACD;EACE,gBAAgB;EAChB,8BAA8B;EAC9B,eAAe;CAChB;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,sBAAsB;MAClB,kBAAkB;EACtB,iBAAiB;CAClB;AACD;EACE,eAAe;EACf,gBAAgB;EAChB,kBAAkB;CACnB;AACD;EACE,0BAA0B;EAC1B,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,sBAAsB;EACtB,kBAAkB;EAClB,eAAe;EACf,kBAAkB;CACnB;AACD;EACE,gBAAgB;EAChB,eAAe;EACf,kBAAkB;CACnB;AACD;EACE,eAAe;EACf,gBAAgB;CACjB;AACD;EACE,YAAY;EACZ,kBAAkB;CACnB;AACD;EACE,mBAAmB;CACpB",file:"sinda_payment_failure.vue",sourcesContent:["\n.bodyed[data-v-67245286] {\n  height: 302px;\n  background: #f7f7f7;\n  margin: 20px -2px;\n}\n.logo[data-v-67245286] {\n  float: left;\n  width: 210px;\n  height: 210px;\n  margin-top: 50px;\n  margin-left: 133px;\n}\n.pay[data-v-67245286] {\n  padding: 10px 0;\n  border-bottom: 1px solid #ccc;\n  color: #2793d3;\n}\n.payment[data-v-67245286] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  margin-top: 20px;\n}\n.payment p[data-v-67245286] {\n  color: #333333;\n  font-size: 18px;\n  line-height: 50px;\n}\n.payment a[data-v-67245286] {\n  border: 1px solid #2793d3;\n  border-radius: 5px;\n  width: 100px;\n  text-align: center;\n  text-decoration: none;\n  line-height: 38px;\n  color: #2793d3;\n  margin: 10px 10px;\n}\n.alipay[data-v-67245286] {\n  font-size: 30px;\n  color: #2793d3;\n  padding-top: 60px;\n}\n.problem[data-v-67245286] {\n  color: #020202;\n  font-size: 14px;\n}\n.phone[data-v-67245286] {\n  color: #000;\n  font-weight: bold;\n}\n.right[data-v-67245286] {\n  margin-left: 400px;\n}\n"],sourceRoot:""}])},wWgL:function(n,a,t){var e=t("S4Xe");"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);t("rjj0")("c9321c1e",e,!0)},wjjK:function(n,a,t){n.exports=t.p+"static/img/failure.05c3b48.jpg"}});
//# sourceMappingURL=17.e1f4558bfa87ddbee0fb.js.map