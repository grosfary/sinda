<template>
  <div>
   <!-- 店铺 -->
    <div class="pctaxservices-body">
      <a class="pctaxservices-title">首页/店铺</a>
      <!-- 三级联动 -->
      <autourban @selected="selected" class="pcshop-auto" style="width:100% ;background: #f7f7f7;"></autourban>
      <el-row class="pcauto-wrap hidden-xs-only">
        <el-col :span="2"><div class="pcau-serv-classify">产品类型</div></el-col>
        <el-col :span="22"><ul class="pctax-servisenav clear">
          <!-- <li @click="goodFiltrate('')" class="pctax-svsnav-elem" :class='{"pxtax-clickst-1":(thePrTyCode=='')}' ><a href="javascript:void(0)">所有</a></li> -->
          <li @click="goodFiltrate(idx,producTy.name)" v-for="(producTy,idx) in producType":key="producTy.name" :class='{"pxtax-clickst-1":thePrTyCode==(idx)}' class="pctax-svsnav-elem"><a class="pxtax-clickst-1a" href="javascript:void(0)">{{producTy.name}}</a></li>
        </ul></el-col>
      </el-row>
    </div>
    <div class="pcsp-body">
      <!-- 财税服务 商品列表 -->
        <div class="pccny-gds">
          <ul class="pccn-ghead clear">
            <li @click="ascendingOrder(1)" :class='{"pxtax-clickst-1":sortindex==1}' class="pccn-ghcora">综合排序</li>
            <li @click="ascendingOrder(2)" :class='{"pxtax-clickst-1":sortindex==2}' class="pccn-ghrise">价格<span class="pccn-ghico"></span></li>
            <li @click="ascendingOrder(3)" :class='{"pxtax-clickst-1":sortindex==3}' class="pccn-ghrise">接单数<span class="pccn-ghico"></span></li>
          </ul>
          <div class="pcsp-shops">
            <el-row>
              <el-col :span="12" v-for="product in products" :key="product.providerName"  class="pcsp-shewp">
                <div class="pcsp-shelm clear">
                  <div class="pcsp-shell">
                    <div class="pcsp-imgwp">
                      <img :src="'http://115.182.107.203:8088/xinda/pic'+ product.providerImg"  alt="">
                    </div>
                    <p class="pcsp-gdser"><span class="pcsp-gsico"></span><span class="pcsp-gswd">金牌服务商</span></p>
                  </div>

                  <div class="pcsp-shelr">
                    <p class="pcsp-shenm">{{product.providerName}}</p>
                    <p class="pcsp-elrpt">
                      <span class="pcsh-repu">信誉</span>
                      <span :class='{"pcs-redje":product.goodJudge>0}' class="pcsh-jewel pcs-blkje"></span>
                      <span :class='{"pcs-redje":product.goodJudge>1}' class="pcsh-jewel pcs-blkje"></span>
                      <span :class='{"pcs-redje":product.goodJudge>2}' class="pcsh-jewel pcs-blkje"></span>
                      <span :class='{"pcs-redje":product.goodJudge>3}' class="pcsh-jewel pcs-blkje"></span>
                      <span :class='{"pcs-redje":product.goodJudge>4}' class="pcsh-jewel pcs-blkje"></span>
                    </p>
                    <p class="pcsp-eladr">{{product.regionName}}</p>
                    <p class="pcsp-elcnt">累计服务客户次数： {{product.orderNum}}</p>
                    <p class="pcsp-servs"><span class="pcsp-serv">{{ producTyname }}</span></p>
                    <div class="pcsp-enter" @click="toDetail(product.id)">进入店铺</div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
    </div>
    <router-view/>
   </div>
</template>

<script>
import autourban from "../taxationService/autourban";

export default {
  name: "shop",
  methods: {
    selected(code) {
      this.distCode = code;
      console.log("code===", code);
    },
    turnTobj(str){
      var arr = str.split(',');
      var newObj = {}
      for(var i in arr){
        newObj[i] = arr[i]
      }
      return newObj
    },
    toDetail(id){
      this.$router.push({path:'/merchandise/productdetail',query:{id:id}});
    },
    // 商品筛选
    goodFiltrate(thePrTyCo,producTyName) {
      this.producTyname = producTyName;
      // 商品
      this.thePrTyCode = thePrTyCo;
      // console.log(" this.thePrTyCode==", this.thePrTyCode);
    },
    // 商品排序方式
    ascendingOrder: function(sortindex) {
      this.sortindex = sortindex;
      // console.log("this.sortindex", this.sortindex);
    }
  },
  updated() {
    // console.log(' this.thePrTyCode==', this.thePrTyCode);
    var that = this;
    // 获取店铺列表信息
    this.ajax
      .post(
        "/xinda-api/provider/grid",
        this.qs.stringify({
          start: 0,
          limit: 6,
          productTypeCode: this.thePrTyCode,
          regionId: this.distCode,
          sort: this.sortindex
        })
      )
      .then(function(data) {
        // console.log('data.data.data=======',data.data.data);
        that.products = data.data.data;
      });
    this.products = that.products;
  },
  created() {
    // console.log(' this.thePrTyCode==', this.thePrTyCode);
    var that = this;
    // 获取店铺列表信息
    this.ajax
      .post(
        "/xinda-api/provider/grid",
        this.qs.stringify({
          start: 0,
          limit: 6,
          productTypeCode: this.thePrTyCode,
          regionId: this.distCode,
          sort: this.sortindex
        })
      )
      .then(function(data) {
        console.log("data=======", data);
        that.products = data.data.data;
      });
    this.products = that.products;
    // 获取产品类型列表信息
    this.ajax.post("/xinda-api/product/style/list").then(function(data) {
      // console.log('data=======标题',data.data.data);
      var items = data.data.data;
      for (var i in items) {
        for (var j in items[i].itemList) {
          that.producType.push(items[i].itemList[j]);
        }
      }
      that.producType.unshift({ name: "所有" });
    });
  },
  data() {
    return {
      producTyname: '',
      producType: [],
      products: [],
      sortindex: 1,
      distCode: "",
      thePrTyCode: ""
    };
  },
  components: { autourban }
};
</script>



<style scoped lang='less'>
// 点击样式
.pxtax-clickst-1 {
  background: #2693d4;
  color: #fff;
  a {
    color: #fff;
  }
  .pxtax-clickst-1a {
    color: #fff !important;
  }
}
.pctaxservices-body {
  max-width: 1200px;
  margin: 0 auto;
  .pctaxservices-title {
    display: inline-block;
    margin-top: 19px;
    font-size: 13px;
    color: #696969;
    line-height: 27px;
  }
  // 服务分类内容
  .pctax-servisenav {
    height: 44px;
    li {
      margin: 9px 0 0 15px;
      float: left;
      width: 80px;
      height: 25px;
      line-height: 25px;
      text-align: center;
      border-radius: 2px;
    }
  }
  // 公司工商单行
  .pcauto-wrap {
    background: #f7f7f7;
    // 行名称
    .pcau-serv-classify {
      text-align: center;
      height: 44px;
      line-height: 44px;
      border: 1px solid #ccc;
      border-top: 0;
    }
    // 行内容
    .pctax-servisenav {
      height: 44px;
      font-size: 13px;
      border: 1px solid #ccc;
      border-top: 0;
      border-left: 0;
      li {
        width: 80;
        height: 25px;
        border-radius: 2px;
        a {
          color: #626262;
        }
      }
      .pctax-svsnav-eleml {
        width: 106px;
      }
      li:hover {
        background: #2693d4;
        a {
          color: #fff;
        }
      }
    }
  }
}

.pccny-gds {
  // max-width: 1200px;
  // margin: 0 auto;
  margin-top: 25px;
  border: 1px solid #ccc;
}
// 排序方式选项
.pccn-ghead {
  height: 43px;
  background: #f7f7f7;
  border-bottom: 1px solid #ccc;
  border-left: 1px solid #ccc;
  li {
    float: left;
    height: 43px;
    width: 107px;
    text-align: center;
    line-height: 43px;
    .pccn-ghico {
      margin-left: 5px;
      display: inline-block;
      width: 12px;
      height: 12px;
      background: url(../../images/companyIdstry/cpnyIndus.png) -2px -457px;
    }
  }
}

// 店铺列表
.pcsp-body {
  max-width: 1200px;
  margin: 0 auto;
  .pcsp-shops {
    padding-top: 12px;
    .pcsp-shewp {
      .pcsp-shelm {
        margin: 0 14px 15px;
        min-height: 250px;
        border: 1px solid #e9e9e9;
        // 单个元素左侧
        .pcsp-shell {
          width: 35.1%;
          float: left;
          .pcsp-imgwp {
            margin: 92px 48px 68px 35px;
            width: 124px;
            height: 30px;
          }
          .pcsp-gdser {
            position: relative;
            font-size: 13px;
            color: #676767;
            .pcsp-gsico {
              display: inline-block;
              margin-left: 47px;
              width: 28px;
              height: 32px;
              background: transparent
                url("../../images/companyIdstry/m_xbt.png") -66px -75px;
            }
            .pcsp-gswd {
              position: absolute;
              top: 6px;
              left: 83px;
            }
          }
        }
        // 单个元素右侧
        .pcsp-shelr {
          padding-top: 13.5px;
          float: left;
          font-size: 13px;
          color: #676767;
          .pcsp-shenm {
            line-height: 38px;
          }
          // 信誉评价
          .pcsp-elrpt {
            overflow: hidden;
            line-height: 21px;
            // 小钻石
            span {
              float: left;
              display: inline-block;
            }
            .pcsh-repu {
              margin-right: 11px;
            }
            .pcsh-jewel {
              margin-right: 7px;
              width: 16px;
              height: 15px;
              background: lightcoral;
            }
            // 红钻石
            .pcs-redje {
              background: url("../../images/companyIdstry/m_xbt.png") !important;
            }
            // 黑钻石
            .pcs-blkje {
              background: url("../../images/companyIdstry/m_xbt.png") -20px 0;
            }
          }
          .pcsp-eladr {
            line-height: 21px;
          }
          .pcsp-elcnt {
            line-height: 37px;
          }
          .pcsp-servs {
            .pcsp-serv {
              display: inline-block;
              width: 71px;
              height: 22px;
              line-height: 22px;
              color: #fff;
              text-align: center;
              background: #2693d4;
              border-radius: 3px;
            }
          }
          .pcsp-enter {
            margin-top: 43px;
            width: 102px;
            height: 33px;
            color: #ffdcd6;
            text-align: center;
            line-height: 33px;
            background: #ff591b;
            border-radius: 3px;
          }
        }
      }
    }
  }
}
</style>


<style lang="less">
.pcshop-auto {
  background: #f7f7f7;
  .el-col-3 {
    width: 8.31%;
  }
  .el-col-21 {
    width: 91.69%;
  }
}
</style>