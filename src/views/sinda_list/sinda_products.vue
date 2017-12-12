<template>
  <div class="pro">
    <div class="pro_header">
      <div class="pro_img">
        <img :src="'http://115.182.107.203:8088/xinda/pic' + product.img" alt="">
      </div>
      <div class="pro_info">
        <ul>
          <li>
            <h2>{{providerProduct.serviceName}}</h2>
          </li>
          <li>{{providerProduct.serviceInfo}}</li>
          <li>
            <div>
              <p>
                市场价：
                <del>￥{{product.marketPrice}}.00</del>
              </p>
              <p>
                价　格：
                <strong>￥ {{providerProduct.price}}.00</strong>
                <span>{{providerProduct.unit}}</span>
              </p>
            </div>
          </li>
          <li>类　型：
            <span>{{product.name}}</span>
          </li>
          <li>地　区：{{regionText}}</li>
          <li>购买数量：
            <button @click="nSub">-</button><input type="text" v-model="number" readonly="readonly">
            <button @click="nAdd">+</button>
          </li>
          <li>
            <button>立即购买</button>
            <button @click="cartAdd">加入购物车</button>
          </li>
        </ul>
      </div>
      <div class="pro_server">
        <h2>顶级服务商</h2>
        <p>北京信达服务中心</p>
        <button>马上咨询</button>
        <div class="check_server">
          <button>查看服务商</button>
        </div>
      </div>
    </div>
    <div class="banner">
    </div>
    <div class="pro_main">
      <div class="main_title">
        <ul>
          <li v-for="(i,key,index) in proMainTitle" :key="i.tit" @click="titleBg(index)" :class="{bg:(index==nowIndex)}">
            {{i.tit}}
          </li>
        </ul>
      </div>
      <div class="main_main" v-for="(i,key,index) in proMainTitle" :key="i.tit" v-if="index==nowIndex">
        <div v-html="providerProduct.serviceContent" v-if="index==0"></div>
        <div v-if="index!=0">暂无评价</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "sinda_buyCart",
  data() {
    return {
      nowIndex: 0,
      proMainTitle: {
        a: { tit: "服务内容", info: "" },
        b: { tit: "商品评价", info: "222" }
      },
      product: {},
      providerProduct: {},
      regionText: {},
      number: 1
    };
  },
  methods: {
    ...mapActions(["setlistName"]),
    titleBg: function(index) {
      this.nowIndex = index;
    },
    cartAdd() {
      // 加入购物车按钮
      this.ajax
        .post(
          "/xinda-api/cart/add",
          this.qs.stringify({
            id: this.$route.query.id,
            num: this.number
          })
        )
        .then(data => {
          console.log(data);
        });
    },
    nAdd() {
      this.number += 1;
    },
    nSub() {
      if (this.number > 1) {
        this.number -= 1;
      }
    }
  },
  created() {
    var that = this;
    this.setlistName("商品详情");
    this.ajax
      .post(
        "/xinda-api/product/package/detail",
        this.qs.stringify({
          sId: this.$route.query.id
        })
      )
      .then(data => {
        console.log(data.data.data);
        that.product = data.data.data.product;
        that.providerProduct = data.data.data.providerProduct;
        that.regionText = data.data.data.regionText;
        console.log(that.product);
      });
    // this.ajax
    //   .post(
    //     "/xinda-api/product/judge/grid",
    //     this.qs.stringify({
    //       start: 1,
    //       limit: 1,
    //       serviceId: "efddc8a338944e998ff2a7142246362b",
    //       type: 1
    //     })
    //   )
    //   .then(data => {
    //     console.log(data);
    //     // that.product = data.data.data.product;
    //   });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.pro {
  // 商品详情页样式
  > div {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
  .pro_header {
    //  产品头部
    display: flex;
    margin-top: 13px;
  }
}

.pro_img {
  // 商品图片
  width: 525px;
  height: 393px;
  img {
    width: 100%;
    height: 100%;
  }
}
.pro_info {
  // 商品信息
  margin-left: 32px;
  width: 444px;
  height: 393px;
}
.pro_server {
  // 顶级服务商
  width: 197px;
  height: 223px;
  border: 1px solid #2793d4;
  text-align: center;
  position: relative;
  h2 {
    line-height: 50px;
  }
  p {
    line-height: 50px;
    font-size: 14px;
  }
  button {
    width: 88px;
    height: 28px;
    border: 1px solid #2693d4;
    border-radius: 1px;
    background: #fff;
    color: #2693d4;
  }
  .check_server {
    //查看服务商
    position: absolute;
    bottom: 0;
    width: 197px;
    height: 75px;
    background: #bdddf2;
    button {
      width: 110px;
      height: 30px;
      background: #2693d4;
      color: #fff;
      border: none;
      font-size: 14px;
      border-radius: 2px;
      vertical-align: middle;
      margin-top: 23px;
    }
  }
}

.banner {
  // 广告栏
  background: url("../../assets/pc/waiguoren.jpg") 0 0 no-repeat;
  background-size: 100% 100%;
  height: 98px;
  margin-top: 22px !important;
  margin-bottom: 38px !important;
}

.main_title {
  height: 41px;
  background: #f7f7f7;
  border: 1px solid #cccccc;
  position: relative;
  ul {
    display: flex;
    position: absolute;
    top: -1px;
    li {
      line-height: 43px;
      padding-left: 39px;
      padding-right: 39px;
      cursor: pointer;
      &.bg {
        background: #2693d4;
        color: #fff;
        position: relative;
        &::after {
          content: "";
          display: block;
          border: 4px solid #2693d4;
          border-left: 5.5px solid rgba(0, 0, 0, 0);
          border-right: 5.5px solid rgba(0, 0, 0, 0);
          border-bottom: 4px solid rgba(0, 0, 0, 0);
          position: absolute;
          left: 47%;
        }
      }
    }
  }
}
.main_main {
  width: 1198px;
  height: 743px;
  border: 1px solid #cccccc;
  border-top: none;
  margin-bottom: 69px;
}
</style>