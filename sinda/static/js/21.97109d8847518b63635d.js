webpackJsonp([21],{D2jB:function(n,e,t){"use strict";function a(n){t("R8x8")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(n){return t.e(53).then(function(){var e=[t("CF/t")];n.apply(null,e)}.bind(this)).catch(t.oe)},A={created:function(){var n=this;this.ajax.post("/xinda-api/product/style/list").then(function(e){var t=e.data.data,a=[];for(var i in t){var A=t[i].itemList;for(var o in A)a.push(A[o].name);n.names=a}}),this.ajax.post("/xinda-api/provider/grid",{start:0,limit:6,productTypeCode:10,regionId:110102,sort:1}).then(function(e){var t=e.data.data;for(var a in t)t[a].productTypes=t[a].productTypes.split(",");n.listt=t,n.disStores=t})},data:function(){return{names:[],listt:[],disStores:[],inner:"",show:!0,sortFlag:!0}},components:{dist:i},methods:{open:function(n,e,t){this.$router.push({path:"/shop/service",query:{id:e}})},sorts:function(){this.sortFlag?(this.listt.sort(function(n,e){return n.orderNum-e.orderNum}),this.sortFlag=!this.sortFlag):(this.listt.sort(function(n,e){return e.orderNum-n.orderNum}),this.sortFlag=!this.sortFlag)},changebg:function(n){this.inner=n,this.show=!1;var e=[];for(var t in this.listt)for(var a=0;a<this.listt[t].productTypes.length;a++){var i=this.listt[t].productTypes[a];if(i==this.inner){e.push(this.listt[t]);break}}this.disStores=e},changebgAll:function(){this.show=!0,this.inner="",this.disStores=this.listt}}},o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"body",staticStyle:{width:"1200px"}},[t("div",{staticClass:"header"},[t("a",{attrs:{href:"http://localhost:8080/#/Join_Us"}},[n._v("首页/店铺列表")]),n._v(" "),t("div",{staticClass:"header-boxI"},[t("span",[n._v("服务区域")]),n._v(" "),t("dist",{staticClass:"sanji"})],1),n._v(" "),t("div",{staticClass:"header-boxII"},[t("span",[n._v("产品类型")]),n._v(" "),t("p",{class:{blue:1==n.show},on:{click:n.changebgAll}},[n._v("所有")]),n._v(" "),t("div",{staticClass:"lages"},n._l(n.names,function(e){return t("p",{key:e,class:{blue:n.inner==e},on:{click:function(t){n.changebg(e)}}},[n._v("\n          "+n._s(e)+"\n        ")])}))])]),n._v(" "),t("div",{staticClass:"list"},[t("div",{staticClass:"list-header"},[t("ul",[t("li",[n._v("综合排序")]),n._v(" "),t("li",[n._v("价格↑↓")]),n._v(" "),t("li",{on:{click:function(e){n.sorts()}}},[n._v("接单数↑↓")])])]),n._v(" "),t("div",{staticClass:"lister"},n._l(n.disStores,function(e){return t("div",{key:e.id,staticClass:"lists"},[t("div",{staticClass:"image"},[t("img",{attrs:{src:"http://123.58.241.146:8088/xinda/pic"+e.providerImg}})]),n._v(" "),t("span"),n._v(" "),t("p",{staticClass:"medal"},[n._v("金牌服务商")]),n._v(" "),t("div",{staticClass:"lage"},[t("p",[n._v(n._s(e.providerName))]),n._v(" "),t("p",[n._v("信誉:★★★★★")]),n._v(" "),t("p",[n._v(n._s(e.regionName))]),n._v(" "),t("p",[n._v("累计客户服务次数:"+n._s(e.orderNum)+"丨好评率：100%")]),n._v(" "),n._l(e.productTypes,function(e){return t("p",{key:e.id,staticClass:"thirdname",staticStyle:{display:"inline"}},[n._v(n._s(e))])})],2),n._v(" "),t("button",{on:{click:function(t){n.open(e.providerName,e.id,e.providerImg)}}},[n._v("进入店铺")])])}))]),n._v(" "),n._m(0,!1,!1)])},d=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"footer"},[t("button",[n._v("上一页")]),n._v(" "),t("span",[n._v("1")]),n._v(" "),t("button",[n._v("下一页")])])}],r={render:o,staticRenderFns:d},c=r,s=t("VU/8"),p=a,l=s(A,c,!1,p,"data-v-6e095c2c",null);e.default=l.exports},R8x8:function(n,e,t){var a=t("mng3");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);t("rjj0")("5da9d079",a,!0)},k4cg:function(n,e,t){n.exports=t.p+"static/img/Sprites.7a5be37.png"},mng3:function(n,e,t){e=n.exports=t("FZ+f")(!0),e.push([n.i,"\n.body[data-v-6e095c2c] {\n  margin: auto;\n}\n.body .header[data-v-6e095c2c] {\n  margin-left: 100px;\n  margin-top: 15px;\n}\n.body .header .sanji[data-v-6e095c2c] {\n  margin-left: 100px;\n  margin-top: -40px;\n}\n.body .header a[data-v-6e095c2c] {\n  text-decoration: none;\n  color: #000000;\n  font-size: 15px;\n}\n.body .header .header-boxI[data-v-6e095c2c] {\n  height: 40px;\n  margin-top: 10px;\n  background: #f7f7f7;\n  border: 1px solid #cccccc;\n}\n.body .header .header-boxI .sanji[data-v-6e095c2c] {\n  margin-top: -37px;\n}\n.body .header .header-boxI span[data-v-6e095c2c] {\n  font-size: 15px;\n  font-weight: bold;\n  margin-right: 40px;\n  line-height: 40px;\n  margin-left: 10px;\n  border-right: 1px solid #ccc;\n  padding: 10px;\n}\n.body .header .header-boxII[data-v-6e095c2c] {\n  height: 40px;\n  background: #f7f7f7;\n  border: 1px solid #cccccc;\n  border-top: none;\n}\n.body .header .header-boxII .blue[data-v-6e095c2c] {\n  background: #2693d4;\n  border-radius: 10px;\n  color: #fff;\n}\n.body .header .header-boxII .lages[data-v-6e095c2c] {\n  margin-left: 200px;\n  margin-top: -40px;\n}\n.body .header .header-boxII p[data-v-6e095c2c] {\n  line-height: 40px;\n  text-align: center;\n  padding: 5px 20px;\n  margin: 0 20px;\n  display: inline;\n  margin-left: -35px;\n}\n.body .header .header-boxII p[data-v-6e095c2c]:hover {\n  color: #ffffff;\n  background: #2693d4;\n  line-height: 40px;\n  text-align: center;\n  border-radius: 10px;\n}\n.body .header .header-boxII span[data-v-6e095c2c] {\n  font-size: 15px;\n  font-weight: bold;\n  margin-right: 40px;\n  line-height: 40px;\n  margin-left: 10px;\n  border-right: 1px solid #ccc;\n  padding: 10px;\n}\n.body .lister[data-v-6e095c2c] {\n  width: 1098px;\n  height: 400px;\n  border: 1px solid #ccc;\n  border-top: none;\n  margin-left: 100px;\n}\n.body .list .lists[data-v-6e095c2c] {\n  float: left;\n  width: 470px;\n  height: 340px;\n  border: 1px solid #ccc;\n  margin: 36px;\n}\n.body .list .lists span[data-v-6e095c2c] {\n  width: 33px;\n  height: 37px;\n  display: block;\n  background: url("+t("k4cg")+") no-repeat -9px -131px;\n  margin-top: 60px;\n  margin-left: 27px;\n}\n.body .list .lists .medal[data-v-6e095c2c] {\n  margin-left: 60px;\n  margin-top: -24px;\n}\n.body .list .lists button[data-v-6e095c2c] {\n  margin-left: 170px;\n  color: #fff;\n  background: #ff591b;\n  border: none;\n  padding: 10px 25px;\n  border-radius: 10px;\n  font-size: 16px;\n}\n.body .list .lists .lage[data-v-6e095c2c] {\n  margin-left: 160px;\n  margin-top: -240px;\n  line-height: 30px;\n  height: 210px;\n}\n.body .list .lists .lage .thirdname[data-v-6e095c2c] {\n  background: #2693d4;\n  margin: 5px;\n  border-radius: 10px;\n  padding: 1px;\n  color: #ffffff;\n}\n.body .list .lists .lage .thirdname[data-v-6e095c2c]:hover {\n  background: #2693d4;\n  line-height: 30px;\n  text-align: center;\n  border-radius: 10px;\n  padding: 1px;\n}\n.body .list .lists .image[data-v-6e095c2c] {\n  margin-top: 100px;\n  width: 40px;\n}\n.body .list .lists .image img[data-v-6e095c2c] {\n  width: 156px;\n  height: 100px;\n}\n.body .list .list-header[data-v-6e095c2c] {\n  height: 40px;\n  background: #f7f7f7;\n  border: 1px solid #cccccc;\n  border-top: none;\n  margin-left: 100px;\n}\n.body .list .list-header li[data-v-6e095c2c] {\n  float: left;\n  line-height: 40px;\n  text-align: center;\n  padding: 0px 20px;\n}\n.body .list .list-header li[data-v-6e095c2c]:hover {\n  color: #ffffff;\n  background: #2693d4;\n  line-height: 40px;\n  text-align: center;\n  padding: 0px 20px;\n}\n.body .footer[data-v-6e095c2c] {\n  text-align: center;\n  margin-top: 20px;\n  margin-left: 90px;\n}\n.body .footer span[data-v-6e095c2c] {\n  border: 1px solid #2693d4;\n  color: #2693d4;\n  padding: 8px 20px;\n  margin: 0 10px;\n}\n.body .footer button[data-v-6e095c2c] {\n  border: 1px #ccc solid;\n  color: #ccc;\n  background: #fff;\n  padding: 10px;\n}\n","",{version:3,sources:["D:/aaa/学习文件/FileRecv/xinda/sinda/src/stores/store_list.vue"],names:[],mappings:";AACA;EACE,aAAa;CACd;AACD;EACE,mBAAmB;EACnB,iBAAiB;CAClB;AACD;EACE,mBAAmB;EACnB,kBAAkB;CACnB;AACD;EACE,sBAAsB;EACtB,eAAe;EACf,gBAAgB;CACjB;AACD;EACE,aAAa;EACb,iBAAiB;EACjB,oBAAoB;EACpB,0BAA0B;CAC3B;AACD;EACE,kBAAkB;CACnB;AACD;EACE,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;EAClB,6BAA6B;EAC7B,cAAc;CACf;AACD;EACE,aAAa;EACb,oBAAoB;EACpB,0BAA0B;EAC1B,iBAAiB;CAClB;AACD;EACE,oBAAoB;EACpB,oBAAoB;EACpB,YAAY;CACb;AACD;EACE,mBAAmB;EACnB,kBAAkB;CACnB;AACD;EACE,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,mBAAmB;CACpB;AACD;EACE,eAAe;EACf,oBAAoB;EACpB,kBAAkB;EAClB,mBAAmB;EACnB,oBAAoB;CACrB;AACD;EACE,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;EAClB,6BAA6B;EAC7B,cAAc;CACf;AACD;EACE,cAAc;EACd,cAAc;EACd,uBAAuB;EACvB,iBAAiB;EACjB,mBAAmB;CACpB;AACD;EACE,YAAY;EACZ,aAAa;EACb,cAAc;EACd,uBAAuB;EACvB,aAAa;CACd;AACD;EACE,YAAY;EACZ,aAAa;EACb,eAAe;EACf,gEAAoE;EACpE,iBAAiB;EACjB,kBAAkB;CACnB;AACD;EACE,kBAAkB;EAClB,kBAAkB;CACnB;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,oBAAoB;EACpB,aAAa;EACb,mBAAmB;EACnB,oBAAoB;EACpB,gBAAgB;CACjB;AACD;EACE,mBAAmB;EACnB,mBAAmB;EACnB,kBAAkB;EAClB,cAAc;CACf;AACD;EACE,oBAAoB;EACpB,YAAY;EACZ,oBAAoB;EACpB,aAAa;EACb,eAAe;CAChB;AACD;EACE,oBAAoB;EACpB,kBAAkB;EAClB,mBAAmB;EACnB,oBAAoB;EACpB,aAAa;CACd;AACD;EACE,kBAAkB;EAClB,YAAY;CACb;AACD;EACE,aAAa;EACb,cAAc;CACf;AACD;EACE,aAAa;EACb,oBAAoB;EACpB,0BAA0B;EAC1B,iBAAiB;EACjB,mBAAmB;CACpB;AACD;EACE,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;CACnB;AACD;EACE,eAAe;EACf,oBAAoB;EACpB,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;CACnB;AACD;EACE,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;CACnB;AACD;EACE,0BAA0B;EAC1B,eAAe;EACf,kBAAkB;EAClB,eAAe;CAChB;AACD;EACE,uBAAuB;EACvB,YAAY;EACZ,iBAAiB;EACjB,cAAc;CACf",file:"store_list.vue",sourcesContent:['\n.body[data-v-6e095c2c] {\n  margin: auto;\n}\n.body .header[data-v-6e095c2c] {\n  margin-left: 100px;\n  margin-top: 15px;\n}\n.body .header .sanji[data-v-6e095c2c] {\n  margin-left: 100px;\n  margin-top: -40px;\n}\n.body .header a[data-v-6e095c2c] {\n  text-decoration: none;\n  color: #000000;\n  font-size: 15px;\n}\n.body .header .header-boxI[data-v-6e095c2c] {\n  height: 40px;\n  margin-top: 10px;\n  background: #f7f7f7;\n  border: 1px solid #cccccc;\n}\n.body .header .header-boxI .sanji[data-v-6e095c2c] {\n  margin-top: -37px;\n}\n.body .header .header-boxI span[data-v-6e095c2c] {\n  font-size: 15px;\n  font-weight: bold;\n  margin-right: 40px;\n  line-height: 40px;\n  margin-left: 10px;\n  border-right: 1px solid #ccc;\n  padding: 10px;\n}\n.body .header .header-boxII[data-v-6e095c2c] {\n  height: 40px;\n  background: #f7f7f7;\n  border: 1px solid #cccccc;\n  border-top: none;\n}\n.body .header .header-boxII .blue[data-v-6e095c2c] {\n  background: #2693d4;\n  border-radius: 10px;\n  color: #fff;\n}\n.body .header .header-boxII .lages[data-v-6e095c2c] {\n  margin-left: 200px;\n  margin-top: -40px;\n}\n.body .header .header-boxII p[data-v-6e095c2c] {\n  line-height: 40px;\n  text-align: center;\n  padding: 5px 20px;\n  margin: 0 20px;\n  display: inline;\n  margin-left: -35px;\n}\n.body .header .header-boxII p[data-v-6e095c2c]:hover {\n  color: #ffffff;\n  background: #2693d4;\n  line-height: 40px;\n  text-align: center;\n  border-radius: 10px;\n}\n.body .header .header-boxII span[data-v-6e095c2c] {\n  font-size: 15px;\n  font-weight: bold;\n  margin-right: 40px;\n  line-height: 40px;\n  margin-left: 10px;\n  border-right: 1px solid #ccc;\n  padding: 10px;\n}\n.body .lister[data-v-6e095c2c] {\n  width: 1098px;\n  height: 400px;\n  border: 1px solid #ccc;\n  border-top: none;\n  margin-left: 100px;\n}\n.body .list .lists[data-v-6e095c2c] {\n  float: left;\n  width: 470px;\n  height: 340px;\n  border: 1px solid #ccc;\n  margin: 36px;\n}\n.body .list .lists span[data-v-6e095c2c] {\n  width: 33px;\n  height: 37px;\n  display: block;\n  background: url("../assets/kehu/Sprites.png") no-repeat -9px -131px;\n  margin-top: 60px;\n  margin-left: 27px;\n}\n.body .list .lists .medal[data-v-6e095c2c] {\n  margin-left: 60px;\n  margin-top: -24px;\n}\n.body .list .lists button[data-v-6e095c2c] {\n  margin-left: 170px;\n  color: #fff;\n  background: #ff591b;\n  border: none;\n  padding: 10px 25px;\n  border-radius: 10px;\n  font-size: 16px;\n}\n.body .list .lists .lage[data-v-6e095c2c] {\n  margin-left: 160px;\n  margin-top: -240px;\n  line-height: 30px;\n  height: 210px;\n}\n.body .list .lists .lage .thirdname[data-v-6e095c2c] {\n  background: #2693d4;\n  margin: 5px;\n  border-radius: 10px;\n  padding: 1px;\n  color: #ffffff;\n}\n.body .list .lists .lage .thirdname[data-v-6e095c2c]:hover {\n  background: #2693d4;\n  line-height: 30px;\n  text-align: center;\n  border-radius: 10px;\n  padding: 1px;\n}\n.body .list .lists .image[data-v-6e095c2c] {\n  margin-top: 100px;\n  width: 40px;\n}\n.body .list .lists .image img[data-v-6e095c2c] {\n  width: 156px;\n  height: 100px;\n}\n.body .list .list-header[data-v-6e095c2c] {\n  height: 40px;\n  background: #f7f7f7;\n  border: 1px solid #cccccc;\n  border-top: none;\n  margin-left: 100px;\n}\n.body .list .list-header li[data-v-6e095c2c] {\n  float: left;\n  line-height: 40px;\n  text-align: center;\n  padding: 0px 20px;\n}\n.body .list .list-header li[data-v-6e095c2c]:hover {\n  color: #ffffff;\n  background: #2693d4;\n  line-height: 40px;\n  text-align: center;\n  padding: 0px 20px;\n}\n.body .footer[data-v-6e095c2c] {\n  text-align: center;\n  margin-top: 20px;\n  margin-left: 90px;\n}\n.body .footer span[data-v-6e095c2c] {\n  border: 1px solid #2693d4;\n  color: #2693d4;\n  padding: 8px 20px;\n  margin: 0 10px;\n}\n.body .footer button[data-v-6e095c2c] {\n  border: 1px #ccc solid;\n  color: #ccc;\n  background: #fff;\n  padding: 10px;\n}\n'],sourceRoot:""}])}});
//# sourceMappingURL=21.97109d8847518b63635d.js.map