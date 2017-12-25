<template>
  <div class="detail">
    <div class="headed">
      <div>
        <img src :src="'http://115.182.107.203:8088/xinda/pic' + product.img" alt="图片无法显示">
      </div>
      <div class="company">
        <p>{{product.name}}</p>
        <span>{{product.info}}</span>
      </div>
    </div>
    <div class="bodyed">
      <div class="areo">
        <p>区域：{{regionText}}</p>
        <div class="price">
          <p>价格：</p>
          <span>￥{{providerProduct.price}}.00</span>
          <del>￥{{product.marketPrice}}</del>
        </div>
      </div>
      <div class="Merchant">
        <div class="merchant">
          <p>服务商家</p>
          <span></span>
        </div>
        <div class="service">
          <div class="picture">
            <img :src="'http://115.182.107.203:8088/xinda/pic' + provider.providerImg" alt="图片无法显示">
          </div>
          <ul>
            <li>{{provider.name}}</li>
            <li>信誉: <img src="../assets/gongyon/xinyu.png" alt=""></li>
            <li>地区:{{shop.providerRegionText}}</li>
            <li>服务次数:{{providerBusiness.serviceNum}}</li>
            <li>
              <button @click="enter">进入店铺</button>
            </li>
            <li class="gold"><img src="../assets/gongyon/jinpai.png" alt="">
              <p>金牌服务商</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="matter">
        <div class="introduce">
          <p>服务介绍</p>
          <span></span>
        </div>
        <div v-html="serv" class='intro'></div>
      </div>
      <div class="User">
        <div class="user">
          <p>用户评价</p>
          <span></span>
        </div>
        <div class='assess'>
          <div class='img'><img src="" alt=""></div>
          <div class="appraise">
            <p>满意度：</p>
            <span>评　价：</span>
          </div>
        </div>
      </div>
    </div>
    <div class='base'>
      <div class="footer">
        <button class="relation"><img src="../assets/gongyon/kefu.png" alt="">
          <p>联系商家</p>
        </button>
        <button class="join">加入购物车</button>
        <button class="immediately">立即购买</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: [],
      provider: [],
      providerProduct: [],
      regionText: "",
      providerBusiness: [],
      shop: [],
      serviceList: [],
      serv: [],
      evaluate: []
    };
  },
  created() {
    var that = this;
    this.ajax
      .post(
        "/xinda-api/product/package/detail", //商品接口
        this.qs.stringify({
          sId: this.$route.query.id
          // sId: "64a9c8a15fe7493b967d74164b1a4ed5"
        })
      )
      .then(function(data) {
        // console.log(that.$router.query.id)
        var shop = data.data.data;
        that.product = shop.product;
        that.provider = shop.provider;
        that.providerProduct = shop.providerProduct;
        that.regionText = shop.regionText;
        that.providerBusiness = shop.providerBusiness;
        that.shop = shop;
        that.serviceList = shop.serviceList;
        that.serv = shop.serviceList[0].serviceContent;
        console.log(that.serv);
      });
    this.ajax
      .post(
        "/xinda-api/product/judge/grid", //评价接口
        this.qs.stringify({
          start: 0,
          limit: 10,
          serviceId: "64a9c8a15fe7493b967d74164b1a4ed5",
          type: 1
        })
      )
      .then(function(data) {
        var evaluate = data.data.data;
        // console.log(evaluate);
      });
  },
  methods: {
    enter() {
      return;
    }
  }
};
</script> 
<style scoped lang="less">
@media screen and (max-width: 1200px) {
  .detail {
    width: 7.5rem;
    .footer {
      bottom: 0;
    }
    .headed {
      position: relative;
      img {
        width: 7.5rem;
      }
      .company {
        background: rgba(0, 0, 0, 0.5);
        position: absolute;
        display: block;
        width: 7.5rem;
        height: 2.25rem;
        top: 3.4rem;
      }
      .company p {
        line-height: 0.45rem;
        font-weight: 500;
        margin: 0.6rem 0.33rem 0;
        font-size: 0.5rem;
        color: #fff;
      }
      .company span {
        line-height: 0.45rem;
        margin-left: 0.33rem;
        font-size: 0.35rem;
        color: #fff;
        position: relative;
        top: -0.4rem;
      }
    }
    .bodyed {
      .areo {
        font-size: 0.31rem;
        color: #000000;
        border-bottom: 2px solid #ebebeb;
        p {
          border-bottom: 1px solid #c5c5c5;
          margin: 0.23rem auto 0.18rem 0.42rem;
          padding-bottom: 0.2rem;
        }
      }
      .price {
        margin: 0.23rem auto 0.18rem 0.42rem;
      }
      .price p {
        display: inline-block;
        outline: none;
        border: none;
        margin: 0;
      }
      .price span {
        color: #fd0100;
      }
      .price del {
        margin-left: 0.4rem;
      }
    }
    .footer {
      display: flex;
        position: fixed;      
        z-index: 1001;
        width: 100%;
        
      button {
        width: 33.33%;
        height: 1.15rem;
        border: none;
        outline: none;
        vertical-align: bottom;
      }
      .relation {
        background: #eeeff3;
        color: #2e2e2e;
      }
      .join {
        background: #2693d4;
        color: #fff;
      }
      .immediately {
        background: red;
        color: #fff;
      }
    }
    .Merchant {
      border-bottom: 2px solid #ebebeb;
      .merchant {
        border-bottom: 2px solid #2693d4;
        position: relative;
        padding: 0.1rem;
        p {
          font-size: 0.39rem;
          color: #000000;
          margin-left: 0.4rem;
        }
        span {
          position: absolute;
          right: 6.35rem;
          top: 0.61rem;
          border-top: 4px solid #fff;
          border-bottom: 4px solid #2693d4;
          border-left: 4px solid #fff;
          border-right: 4px solid #fff;
        }
      }
      .service {
        padding: 0.5rem;
        display: flex;
        .picture {
          img {
            width: 1.8rem;
            height: 0.54rem;
          }
        }
        ul {
          margin-left: 1.2rem;
          position: relative;
          width: 2.6rem;
        }
        ul li {
          font-size: 0.21rem;
          color: #242424;
          line-height: 0.35rem;
          button {
            border: 1px solid #ff591b;
            border-radius: 3px;
            background: #ff591b;
            color: #fff;
            padding: 0.09rem 0.22rem;
            margin-top: 0.2rem;
          }
          img {
            vertical-align: bottom;
            margin-bottom: 0.05rem;
            margin-left: 0.05rem;
          }
        }
        .gold {
          position: absolute;
          left: -3rem;
          top: 1.5rem;
          display: flex;
          align-items: center;
          p {
            margin-left: 0.1rem;
          }
        }
      }
    }
    .matter {
      position: relative;
      font-size: 22px;
      border-bottom: 5px solid #ebebeb;
      .introduce {
        padding: 0.1rem;
        border-bottom: 2px solid #2693d4;
        p {
          font-size: 0.39rem;
          color: #000000;
          margin-left: 0.4rem;
        }
      }
      .content {
        color: #010101;
        font-size: 0.29rem;
        margin-left: 0.4rem;
        margin-top: 0.18rem;
      }
      span {
        position: absolute;
        right: 6.35rem;
        top: 0.62rem;
        border-top: 4px solid #fff;
        border-bottom: 4px solid #2693d4;
        border-left: 4px solid #fff;
        border-right: 4px solid #fff;
      }
      .intro {
        text-indent: 37px;
        margin-bottom: 20px;
      }
    }
    .User {
      position: relative;
      .assess {
        width: 100%;
        display: flex;
        border-bottom: 3px solid #ebebeb;
        margin-bottom: 1.15rem;
        .img {
          width: 8%;
          height: 0.58rem;
          background: #000;
          margin-top: 0.39rem;
          margin-left: 0.26rem;
        }
        .appraise {
          width: 92%;
          font-size: 0.33rem;
          margin-top: 0.26rem;
          margin-left: 0.26rem;
          margin-bottom: 0.35rem;
        }
      }
    }
    .user {
      padding: 0.1rem;
      border-bottom: 2px solid #2693d4;
      p {
        font-size: 0.39rem;
        color: #000000;
        margin-left: 0.4rem;
      }
      span {
        position: absolute;
        right: 6.35rem;
        top: 0.62rem;
        border-top: 4px solid #fff;
        border-bottom: 4px solid #2693d4;
        border-left: 4px solid #fff;
        border-right: 4px solid #fff;
      }
    }
  }
}
</style>
