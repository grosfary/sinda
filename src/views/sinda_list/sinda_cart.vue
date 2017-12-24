<template>
  <div class="cart">
    <div class="all_pro" v-if="display">
      <p>全部商品（{{allProObj.length}}）</p>
      <span></span>
      <div class="cart_inside">
        <ul class="cart_tit">
          <li>公司</li>
          <li>服务商品</li>
          <li>单价</li>
          <li>数量</li>
          <li>金额</li>
          <li>操作</li>
        </ul>
        <div v-for="(i,index) in allProObj" :key="i.productId">
          <ul class="cart_store">
            <li>
              店铺：{{i.providerName}}
            </li>
          </ul>
          <ul class="cart_main">
            <li><img :src="'http://115.182.107.203:8088/xinda/pic'+i.providerImg" alt=""></li>
            <li>
              <span :title="i.serviceName" style="display:inline-block;width:200px;overflow:hidden;text-overflow:ellipsis;">{{i.serviceName}}</span>
            </li>
            <li>{{i.unitPrice}}</li>
            <li class="number">
              <button @click="nAdd(i.serviceId,-1,i.buyNum,index)">-</button>
              <span>{{i.buyNum}}</span>
              <button @click="nAdd(i.serviceId,1,i.buyNum,index)">+</button>
            </li>
            <li>{{i.totalPrice}}</li>
            <li>
              <span @click="delOrder(i.serviceId)" style="cursor: pointer;">删除</span>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <ul class="sum">
          <li class="money">金额总计
            <span style="color:#2692d2;font-size:25px;">￥{{totalPrice}}.00</span>
          </li>
          <li class="Shopping">
            <button class="continue" @click="continueShopping">继续购物</button>
            <button @click="cart_submit">去结算</button>
          </li>
        </ul>
      </div>
    </div>

    <div class="null_cart" v-if="!display">
      <div><img src="../../assets/pc/null_cart_03.png" alt="" style="width:250px"></div>
      <ul>
        <li>
          <h3>您的购物车空空如也，马上行动吧，您可以：</h3>
        </li>
        <li>马上去
          <a href="/#/">看看别人都在买什么</a>
        </li>
        <li>看看
          <a href="/#/member/setting">已经买到的宝贝</a>
        </li>
      </ul>
    </div>

    <div class="hot_server">
      <p>热门服务</p>
      <span></span>
      <div>
        <div v-for="(i,key,index) in hotServerObj" :key="i.id" class="hotBox">
          <ul>
            <li class="hot_tit" :title="i.serviceName">
              <p>{{i.serviceName}}</p>
            </li>
            <li class="hot_line"></li>
            <li class="hot_info" :title="i.serviceInfo">{{i.serviceInfo}}</li>
            <li class="hot_price">￥ {{i.price}}.00</li>
            <li class="hot_details">
              <del>原价：￥{{i.marketPrice}}</del>
              <span>查看详情>>></span>
            </li>
          </ul>
        </div>
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
      hotServerObj: {},
      allProObj: {},
      totalPrice: "",
      display: false,
      totalPrice: 0,
    };
  },
  methods: {
    ...mapActions(["setlistName", "setNum"]),
    cartList() {
      this.ajax
        .post("/xinda-api/cart/list", this.qs.stringify({}))
        .then(data => {
          this.allProObj = data.data.data; // 定义一个变量接受返回的数据
          var totalPrice = 0; // 初始一个总价
          for (var i in this.allProObj) {
            totalPrice += this.allProObj[i].totalPrice;
          }
          this.totalPrice = totalPrice;
          if (this.allProObj.length == 0) {
            this.display = false;
          } else {
            this.display = true;
          }
        });
    },
    delOrder(id) {
      //删除订单
      this.ajax
        .post(
          "/xinda-api/cart/del",
          this.qs.stringify({
            id: id
          })
        )
        .then(data => {
          if (data.data.status === 1) {
            // 如果成功删除订单 刷新当前页面
            this.$router.go(0);
          } else {
            console.log("系统正在开小差中，请稍后重试");
          }
        });
    },
    cart_submit: function() {
      // 购物车结算
      this.ajax
        .post(
          "/xinda-api/cart/submit",
          this.qs.stringify({
            //   sId: "0cb85ec6b63b41fc8aa07133b6144ea3"
          })
        )
        .then(data => {
          if (data.data.status == 1) {
            this.$router.push({
              path: "/line_item",
              query: { id: data.data.data }
            });
          }
        });
    },
    continueShopping() {
      // 继续购物
      window.location = "/#/";
    },
    nAdd(id, num, count, index) {
      this.ajax
        .post(
          "/xinda-api/cart/add",
          this.qs.stringify({
            id: id,
            num: num
          })
        )
        .then(data => {
          if (data.data.status == 1) {
            this.allProObj[index].buyNum += num;
            // console.log(this.allProObj[index])
            var unit = this.allProObj[index].unitPrice;
            var total = this.allProObj[index].totalPrice;
            num === 1 ? (total += unit) : (total -= unit);
            this.allProObj[index].totalPrice = total;
            num === 1 ? (this.totalPrice += unit) : (this.totalPrice -= unit);
          }
        });
    }
  },
  created() {
    this.setlistName("购物车");
    this.ajax // 判断当前用户是否登录ajax请求
      .post("/xinda-api/sso/login-info", this.qs.stringify({}))
      .then(data => {
        if (data.data.status === 0) {
          this.$router.push({ path: "/LoginRegister/login" });
        }
      });

    this.ajax
      .post(
        "/xinda-api/recommend/list",
        this.qs.stringify({
          sId: "0cb85ec6b63b41fc8aa07133b6144ea3"
        })
      )
      .then(data => {
        this.hotServerObj = data.data.data.hq;
      });
    this.cartList();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.cart {
  > div {
    width: 1200px;
    margin: 0 auto;
    > p {
      color: #3e9bd8;
      padding-left: 65px;
      line-height: 32px;
    }
  }
}
.all_pro {
  // 全部商品
  .cart_inside div:nth-child(2n) {
    background: #f7f7f7;
  }
  .sum {
    margin: 0 22px 60px 978px;
    width: 200px;
    &::after {
      content: "";
      display: block;
      clear: both;
    }
    .money {
      margin: 27px 0 17px 0;
    }

    li {
      float: right;
      button {
        // display: block;
        border: 1px solid #2692d2;
        border-radius: 5px;
        background: #fff;
        color: #2692d2;
        text-align: center;
        width: 101px;
        height: 26px;
        cursor: pointer;
      }
    }
    .Shopping {
      display: flex;
      .continue {
        margin-right: 6px;
      }
    }
  }
  & > span {
    display: block;
    height: 1px;
    width: 100%;
    background: #bdbdbd;
  }
  ul {
    width: 1080px;
    margin-left: 65px;
  }
  .cart_tit {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    line-height: 29px;
    color: #272727;
    margin-top: 18.5px;
    li {
      font-size: 13px;
      color: #686868;
      width: 1px;
      white-space: nowrap;
    }
  }
  .cart_store {
    display: flex;
    font-size: 14px;
    line-height: 29px;
    color: #272727;
    li {
      font-size: 13px;
      color: #686868;
    }
  }
  .cart_main {
    margin-top: 24px;
    padding-bottom: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 41px;
      height: 41px;
    }

    li {
      width: 1px;
      font-size: 13px;
      color: #686868;
      display: inline;
      white-space: nowrap;
      &::after {
        content: "";
        display: block;
        clear: both;
      }
    }
    .number {
      white-space: nowrap;
      font-size: 0;
      span {
        font-size: 13px;
        display: inline-block;
        width: 33px;
        height: 20px;
        background: #fff;
        text-align: center;
        line-height: 20px;
        vertical-align: top;
      }
      button {
        font-size: 13px;
        width: 20px;
        height: 20px;
        color: #000;
        background: #bcbebd;
        text-align: center;
        line-height: 20px;
        border: none;
        cursor: pointer;
        vertical-align: top;
      }
    }
  }
}
// -----------------------------------------------------------------------------------------------------------
.null_cart {
  display: flex;
  img {
    margin: 100px;
  }
  ul {
    margin-top: 100px;
    li {
      margin-bottom: 5px;
    }
    a {
      color: #3e9bd8;
    }
  }
}
// -----------------------------------------------------------------------------------------------------------
.hot_server {
  & > span {
    display: block;
    height: 1px;
    width: 100%;
    background: #bdbdbd;
  }
  > div {
    display: flex;
    justify-content: space-around;
  }
}
.hotBox {
  // 热门服务的四个盒子
  margin-top: 34px;
  width: 265px;
  height: 189px;
  border: 1px solid #b6b6b6;
  margin-bottom: 99px;
  .hot_tit {
    p {
      color: #242424;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 239px;
      margin: 0 auto;
      margin-top: 9px;
      line-height: 39px;
    }
  }
  .hot_line {
    //   蓝色的线
    margin-left: 14px;
    width: 165px;
    height: 8px;
    background: url("../../assets/pc/Sprites.png") -219px -488px no-repeat;
  }
  .hot_info {
    margin-top: 3.5px;
    height: 50px;
    line-height: 25px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    width: 239px;
    font-size: 14px;
    color: #676767;
    margin: 0 auto;
  }
  .hot_price {
    color: #2693d4;
    padding-left: 8px;
    font-size: 40px;
    font-weight: 1000;
  }
  .hot_details {
    &::after {
      content: "";
      display: block;
      clear: both;
    }
    del {
      float: left;
      margin-left: 14px;
      color: #787878;
    }
    span {
      float: right;
      font-size: 14px;
      color: #73b2de;
      cursor: pointer;
      margin-right: 14px;
    }
  }
}
</style>