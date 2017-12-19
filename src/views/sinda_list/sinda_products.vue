<template>
  <div>

    <div class="pro">
      <div class="pro_header">
        <div class="pro_img">
          <img :src="'http://115.182.107.203:8088/xinda/pic' + product.img" :onerror="errorImg" >
        </div>
        <div class="pro_info">
          <ul>
            <li>
              <h2>{{providerProduct.serviceName}}</h2>
            </li>
            <li class="account">{{providerProduct.serviceInfo}}</li>
            <li>
              <div class="price">
                <p>
                  市场价：
                  <del>￥{{product.marketPrice}}.00</del>
                </p>
                <p>
                  价　格：
                  <strong class="cost">￥ {{providerProduct.price}}.00</strong>
                  <span>{{providerProduct.unit}}</span>
                </p>
              </div>
            </li>
            <li class="type">类　型：
              <span>{{product.name}}</span>
            </li>
            <li class="area">地　区：{{regionText}}</li>
            <li class="number">购买数量：
              <button class="less" @click="nSub">-</button><input type="text" v-model="number" readonly="readonly">
              <button class="more" @click="nAdd">+</button>
            </li>
            <li class="once">
              <button class="buy" @click="nowBuy">立即购买</button>
              <button class="join" @click="cartAdd">加入购物车</button>
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
          <div v-if="index!=0">
            <div class="estimate">
              <h1>0%</h1>
              <span>好评</span>
              <div class="appraise">
                <div class="apra">
                  <p class="evaluate">好评 （0%）</p>
                  <p class="grey"></p>
                </div>
                <div class="apra">
                  <p class="evaluate">中评 （0%）</p>
                  <p class="grey"></p>
                </div>
                <div class="apra">
                  <p class="evaluate">差评 （0%）</p>
                  <p class="grey"></p>
                </div>
              </div>
              <p class="thread"></p>
              <div class="impression">
                <p>客户印象</p>
                <p>暂无添加印象的标签</p>
              </div>
            </div>
            <div class="whole">
              <p>全部评价 （0）</p>
              <p>好评 （0）</p>
              <p>中评 （0）</p>
              <p>差评 （0）</p>
            </div>
            <div class="satisfaction">
              <p>评价</p>
              <p>满意度</p>
              <p>用户</p>
            </div>
            
          </div>
        </div>
      </div>
      <transition name="reversal">
        <div class="message" v-if="show">

          <div v-if="show">
            <h3>请您先登录</h3>
            <p>马上登录账号？</p>
            <button @click="queding">确定
              <span></span>
            </button>
            <button @click="quxiao">取消</button>
          </div>

        </div>
      </transition>
    </div>
  </div>

</template>

<script>
import { mapGetters, mapActions } from "vuex";
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
      number: 1,
      show: false,
      errorImg: 'this.src="' + require("../../assets/pc/not_found.jpg") + '"'
    };
  },
  methods: {
    ...mapActions(["setlistName", "setNum"]),
    ...mapGetters(["getuserName"]),
    titleBg: function(index) {
      this.nowIndex = index;
    },
    addtoCart(jump,id,num) { // 立即购买或者加入购物车
      if (sessionStorage.getItem("userName")) {
        // 判断现在是否为登录状态
        this.ajax
          .post(
            "/xinda-api/cart/add",
            this.qs.stringify({
              id: id,
              num: num
            })
          )
          .then(data => {
            // 如果成功添加购物车，返回值为1 并将数量加入购物车当中
            if (data.data.status == 1) {
              this.setNum();
            } else {
              console.log("添加购物车失败提示信息===" + "非常抱歉，系统开小差了，请稍后再试");
            }
            if (jump) {
              this.$router.push({ path: "/list/cart" });
            }
          });
      } else {
        this.show = true;
      }
    },
    nowBuy() {
      // 立即购买按钮
      this.addtoCart(true,(this.$route.query.id),this.number);
    },
    cartAdd() {
      // 加入购物车按钮
      this.addtoCart(false,(this.$route.query.id),this.number);
    },
    nAdd() {
      this.number += 1;
    },
    nSub() {
      if (this.number > 1) {
        this.number -= 1;
      }
    },
    queding() {
      this.$router.push({ path: "/LoginRegister/login" });
    },
    quxiao() {
      this.show = false;
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
        that.product = data.data.data.product;
        that.providerProduct = data.data.data.providerProduct;
        that.regionText = data.data.data.regionText;
      });
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
  margin-right: 52px;
  width: 390px;
  height: 393px;
  h2 {
    font-size: 23px;
    color: #000000;
  }
  .account {
    line-height: 36px;
  }

  .area {
    line-height: 38px;
  }
  .number {
    line-height: 40px;

    .less {
      height: 26px;
      width: 30px;
      background: #f7f8fa;
      outline: none;
      border: 1px solid #cccccc;
      border-right: 0;
    }
    .more {
      height: 26px;
      width: 30px;
      background: #f7f8fa;
      outline: none;
      border: 1px solid #cccccc;
      border-left: 0;
    }
    input {
      height: 24px;
      width: 49px;
      border: 1px solid #cccccc;
      text-align: center;
    }
  }
  .once {
    margin-left: 60px;
    margin-top: 20px;

    .buy {
      height: 27px;
      width: 95px;
      background: #2693d4;
      color: #fff;
      margin-right: 15px;
      outline: none;
      border: none;
    }
    .join {
      height: 27px;
      width: 95px;
      color: #2693d4;
      outline: none;
      border: 1px solid #2693d4;
      background: #ffffff;
    }
  }
  .type span {
    border: 1px solid #2693d4;
    display: inline-block;
    color: #2693d4;
    line-height: 20px;
    padding: 5px;
    // height: 20px;
    margin: 10px 0;
  }
  li {
    font-size: 13px;
    color: #636363;
  }
  .price {
    display: flex;
    height: 75px;
    flex-direction: column;
    background: #f7f7f7;
    justify-content: center;
  }
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
  // padding: 22px;
  width: 1198px;
  height: 743px;
  border: 1px solid #cccccc;
  border-top: none;
  margin-bottom: 69px;
}

// 登录消息提示框

.pro .message {
  background: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
  max-width: 100% !important;
  height: 100%;
  position: fixed;
  > div {
    border-radius: 6px;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #fff;
    width: 384px;
    height: 200px;
    h3 {
      line-height: 53px;
      text-align: center;
      background: #f2f2f2;
    }
    p {
      padding-left: 28px;
      line-height: 70px;
      color: #797a8b;
    }
    button {
      font-size: 18px;
      border-radius: 6px;
      width: 150px;
      height: 45px;
      background: #d8d8d8;
      border: none;
      margin-left: 28px;
      cursor: pointer;
    }
  }
}

.reversal-enter-active {
  transition: all 0.3s ease;
}
.reversal-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.reversal-enter {
  transform: translateX(100px);
  opacity: 0;
}
.reversal-leave-to {
  opacity: 0;
}

.estimate {
  width: 1180px;
  height: 120px;
  border-top: 1px solid #e1e1e1;
  color: #169bd5;
  display: flex;
  padding-left: 20px;
  h1 {
    width: 65px;
    height: 120px;
    color: #169bd5;
    line-height: 100px;
  }
  span {
    font-size: 16px;
    line-height: 120px;
  }
}
.appraise {
  width: 300px;
  height: 110px;
  color: #333;
  display: flex;
  flex-wrap: wrap;
}
.apra{
  margin-top: 15px;
  margin-left: 20px;
  width: 300px;
  display: flex;
  flex-wrap: wrap;
}
.evaluate {
  width: 100px;
  height: 20px;
}
.grey {
  width: 167px;
  height: 20px;
  background-color: #e4e4e4;
}
.thread{
  width: 1px;
  height: 83px;
  margin-left: 440px;
  background-color: #bcbcbc;
  margin-top: 12px;
}
.impression{
  font-size: 15px;
  margin-left: 25px;
  color: #333;
  margin-top: 20px;
}
.whole{
  width: 1200px;
  height: 50px;
  background-color: #f2f2f2;
  display: flex;
  p{
    width: 170px;
    height: 50px;
    border-right: 1px solid #d7d7d7;
    line-height: 50px;
    text-align: center;
  }
}
.satisfaction{
  width: 1150px;
  height: 50px;
  margin: 0 auto;
  display: flex;
  p{
    width:380px;
    height: 50px;
    border-bottom: 1px solid #e6e6e6;
    line-height: 50px;
    text-align: center;
    color: #766674;
    font-size: 12px;
  }
}
</style>