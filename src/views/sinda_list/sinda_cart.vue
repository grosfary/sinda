<template>
  <div class="cart">
    <div class="all_pro">
      <p>全部商品（1）</p>
      <span></span>
      <div>
        <ul class="cart_tit">
          <li>公司</li>
          <li>服务商品</li>
          <li>单价</li>
          <li>数量</li>
          <li>金额</li>
          <li>操作</li>
        </ul>
        <div v-for="(i,key,index) in allProObj" :key="i.productId">
          <ul class="cart_store">
            <li>
              店铺：{{i.providerName}}
            </li>
          </ul>
          <ul class="cart_main">
            <li><img :src="'http://115.182.107.203:8088/xinda/pic'+i.providerImg" alt=""></li>
            <li>{{i.serviceName}}</li>
            <li>{{i.unitPrice}}</li>
            <li class="number">
              <button>-</button>
              <span>{{i.buyNum}}</span>
              <button>+</button>
            </li>
            <li>{{i.totalPrice}}</li>
            <li>
              <button>删除</button>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <ul class="sum">
          <li class="money">金额总计
            <span>￥ 800.00</span>
          </li>
          <li class="Shopping">
            <button class="continue" @click="continueShopping">继续购物</button>
            <button  @click="cart_submit">去结算</button>
          </li>
        </ul>
      </div>
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
      allProObj: {}
    };
  },
  methods: {
    ...mapActions(["setlistName", "setNum"]),
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
          console.log(data);0
          this.setNum(-sessionStorage.getItem("cartNumber"));
        });
    },
    continueShopping() {
      // 继续购物
      window.location = "/#/";
    }
  },
  created() {
    this.setlistName("购物车");
    this.ajax
      .post(
        "/xinda-api/cart/list",
        this.qs.stringify({
            sId: "0cb85ec6b63b41fc8aa07133b6144ea3"
        })
      )
      .then(data => {
        this.allProObj = data.data.data;
        if (this.allProObj) {
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
        // console.log(this.hotServerArr);
      });
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
  .sum {
    margin: 0 0 60px 1000px;
    width: 200px;
    .money{
         margin: 27px 0 17px 0;
    }
    
    li {
      button {
        display: block;
        border: 1px solid #2692d2;
        border-radius: 5px;
        background: #fff;
        color: #2692d2;
        text-align: center;
        padding: 6px;
      }
    }
    .Shopping {
      display: flex;
      .continue{
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
    display: flex;
    justify-content: space-between;

    li {
      width: 1px;
      font-size: 13px;
      color: #686868;
      display: inline;
      white-space: nowrap;
      span {
        display: inline-block;
      }
      button{
         color: #686868;
      }
    }
    .number {
      white-space: nowrap;
      span {
        display: inline-block;
        width: 33px;
        height: 20px;
        background: #fff;
        text-align: center;
        line-height: 20px;
      }
      button {
        width: 20px;
        height: 20px;
        color: #000;
        background: #bcbebd;
        text-align: center;
        line-height: 20px;
        border: none;
        cursor: pointer;
      }
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