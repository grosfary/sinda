<template>
  <div class="m_index">
    <div class="header">
      <div class="city">
        <span>
        </span>
        <p>北京市</p>
      </div>
      <div>
        <span></span>
        <h3>信达</h3>
      </div>
    </div>
    <!-- Swiper -->
    <div class="home_swiper">
      <div class="swiper-container">
        <div class="swiper-wrapper" style="">
          <div v-for="i in img" :key="i" class="swiper-slide">
            <img :src="i" style="width:100%;height:100%;">
          </div>
        </div>
        <div class="swiper-pagination">

        </div>
      </div>
    </div>
    <!-- Swiper end  -->
    <!-- Nav  -->
    <div class="home_nav">
      <div v-for="i in navObj" :key="i.name" @click="toDetail(i.code,i.id)">
        <div>
          <img :src='i.imgSrc'>
        </div>
        <p>{{i.name}}</p>
      </div>
    </div>
    <!-- Nav end -->
    <!-- 公共标题 -->
    <div class="title">
      <p>知识产权</p>
      <span></span>
    </div>
    <!-- 公共标题 end -->
    <!-- 知识产权 -->
    <div class="knowledge">
      <div v-for="i in knowledge" :key="i.name" :class="i.class">
        <p>{{i.name}}</p>
      </div>
    </div>
    <!-- 知识产权 end -->
    <!-- 公共标题 -->
    <div class="title">
      <p>初创企业</p>
      <span></span>
    </div>
    <!-- 公共标题 end -->
    <!-- 初创企业必备 -->
    <div class="novice_main" v-for="(i,index) in noviceMust" :key="i.id">
      <div class="novice_pro">
        <!-- 初创企业必备产品 -->
        <div class="logo">
          <img :src="'http://115.182.107.203:8088/xinda/pic'+i.providerImg" alt="">
          <!-- 公司logo -->
        </div>
        <div>
          <h4>{{i.serviceName}}</h4>
          <!-- 产品名称 -->
          <p class="novice_Info">{{i.serviceInfo}}</p>
          <!-- 产品内容 -->
          <p>￥{{i.marketPrice}}
            <span>{{i.unit}}</span>
          </p>
          <!-- 产品价格 -->
        </div>

      </div>
      <span></span>
    </div>
    <!-- 初创企业必备 end -->
    <div class="footer">
      <div>
        <span></span>
        <h3>信达</h3>
      </div>
      <p>一站式企业交易中心</p>
    </div>
  </div>
</template>

<script>
import Swiper from "../../static/swiper.min.js";
require("../assets/swiper.min.css");
export default {
  name: "m_index",
  data() {
    return {
      img: [
        // 轮播图片
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1927986978,2546133654&fm=27&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2523007129,1951728501&fm=27&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1032378099,515442160&fm=27&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4220262347,3856549398&fm=27&gp=0.jpg"
      ],
      navObj: {
        a: {
          name: "财税服务",
          imgSrc: "../../static/m_img/caishui.png",
          code: 3,
          id: ""
        },
        b: {
          name: "开公司",
          imgSrc: "../../static/m_img/kaigongsi.png",
          code: 0,
          id: "19b94314bc1a4b078d2402f8727c388b"
        },
        c: {
          name: "公司变更",
          imgSrc: "../../static/m_img/gongsibiangeng.png",
          code: 5,
          id: ""
        },
        d: {
          name: "个人社保",
          imgSrc: "../../static/m_img/gerenshebao.png",
          code: 7,
          id: ""
        },
        e: {
          name: "公司社保",
          imgSrc: "../../static/m_img/gongsishebao.png",
          code: 6,
          id: ""
        },
        f: {
          name: "知识产权",
          imgSrc: "../../static/m_img/zhishichanquan.png",
          code: 10,
          id: ""
        },
        g: {
          name: "全部服务",
          imgSrc: "../../static/m_img/quanbufuwu.png",
          code: 0,
          id: ""
        }
      },
      knowledge: {
        a: {
          name: "商标注册",
          imgSrc: "../../static/g_img/shangbiao.jpg",
          class: "shangbiao"
        },
        b: {
          name: "版权专利",
          imgSrc: "../../static/g_img/banquan.jpg",
          class: "banquan"
        },
        c: {
          name: "著作权",
          imgSrc: "../../static/g_img/zhuzuoquan.jpg",
          class: "zhuzuo"
        }
      },
      // 初创企业必备接口数组
      noviceMust: [],
      serverArr: [],
      zscqObj: {
        a: { class: "zzrz", title: "资质认证", info: "服务商100%实名认证" },
        b: { class: "zfaq", title: "支付安全", info: "明码标价支付" },
        c: { class: "bxpf", title: "保险赔付", info: "出现问题平台赔付" },
        d: { class: "shwy", title: "售后无忧", info: "客服经理全程跟进" }
      },
      btn: { a: { name: "推荐服务商" }, b: { name: "推荐服务" } },
      indexs: 0
    };
  },
  methods: {
    a(index) {
      this.indexs = index;
    },
    toDetail(n, i) {
      if (n != 0) {
        this.$router.push({ path: "/listPage", query: { id: i, code: n } });
      }else{
        this.$router.push({ path: "/classify" });
      }
    }
  },
  created() {
    // 初创企业必备接口
    this.ajax
      .post(
        "/xinda-api/recommend/list" /* ,this.qs.stringify({cellphone:this.phone,smsType:1,imgCode:this.imgCode}) */
      )
      .then(data => {
        this.noviceMust = data.data.data.product;
      });
    this.ajax
      .post(
        "/xinda-api/product/package/search-grid",
        this.qs.stringify({
          start: 0,
          limit: 4,
          searchName: "代理",
          sort: 3
        })
      )
      .then(data => {
        this.serverArr = data.data.data;
      });
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      autoplay: 3000, //可选选项，自动滑动
      speed: 500,
      autoplayDisableOnInteraction: false,
      width: 750, //你的slide宽度
      loop: true,
      // dynamicBullets: true,
      pagination: ".swiper-pagination"
      // paginationType : 'custom' // 设置分页器自定义
    });
  },
  destroyed: function() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.m_index {
  width: 7.5rem;
  margin: 0 auto;
  &::after {
    content: "";
    display: block;
    clear: both;
  }
}

// ---------------------------------------------------------------------------------------------------
// 公共标题样式
.title {
  p {
    font-size: 26px;
    margin-left: 0.23rem;
    line-height: 50px;
  }
  span {
    display: block;
    width: 100%;
    height: 2px;
    background: #2693d4;
    position: relative;
    &::after {
      content: "";
      display: block;
      border: 5px solid #2693d4;
      border-right: 5px solid rgba(0, 0, 0, 0);
      border-bottom: 5px solid rgba(0, 0, 0, 0);
      transform: rotate(45deg);
      position: absolute;
      bottom: -5px;
      left: 1rem;
    }
  }
}
// ---------------------------------------------------------------------------------------------------
// 头部样式
.header {
  z-index: 1000;
  background: #fff;
  top: 0;
  margin-top: 0.09rem;
  margin-bottom: 0.07rem;
  &::after {
    content: "";
    display: block;
    clear: both;
  }
  .city {
    float: left;
    margin-top: 0.14rem;
    padding: 0;
    &::after {
      content: "";
      display: block;
      clear: both;
    }
    span {
      float: left;
      position: relative;
      top: 5px;
      background: none;
      margin-left: 18px;
      margin-right: 6px;
      transform: rotate(45deg);
      width: 13px;
      height: 13px;
      border: 0.01rem solid #595959;
      border-left: none;
      border-top: none;
    }
    p {
      font-size: 22px;
      float: left;
    }
  }
  > div {
    display: flex;
    justify-content: center;
    span {
      width: 52px;
      height: 56px;
      background: url("../assets/sinda_icon.png") 0 0 no-repeat;
      background-size: 100% 100%;
    }
    h3 {
      font-size: 30px;
      line-height: 56px;
      vertical-align: top;
      margin-left: 0.12rem;
    }
  }
}

// swiper----------start------------↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

.home_swiper {
  width: 7.5rem;
  height: 2.54rem;
  .swiper-container {
    width: 100%;
    height: 100%;
    position: relative;
  }
}

// ----------end------------↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

// ---------------------------------------------------------------------------------------------------
// 导航栏样式
.home_nav {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.19rem;
  > div {
    width: 25%;
    > div {
      margin: 0 auto;
      width: 1.1rem;
      height: 1.1rem;
      margin-top: 0.17rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  p {
    line-height: 43px;
    font-size: 18px;
    text-align: center;
  }
}
// ---------------------------------------------------------------------------------------------------
// 初创企业必备
.novice_main {
  .novice_pro {
    // 初创企业必备产品
    display: flex;
    margin: 0.27rem 0.16rem 0.21rem 0.17rem;

    .logo {
      width: 1.68rem;
      height: 1.68rem;
      border: 0.02rem solid #e3e3e3;
      margin: 0;
      img {
        width: 100%;
      }
    }
    > div {
      width: 5.47rem;
      height: 1.7rem;
      margin-left: 0.24rem;
      h4 {
        // 产品标题
        overflow: hidden;
        font-size: 0.3rem;
        font-weight: 100;
      }
      p {
        // 产品价格
        overflow: hidden;
        font-size: 0.24rem;
        color: red;
        line-height: 0.3rem;
        font-weight: 100;
        height: 1rem;
        span {
          // 元
          font-size: 0.16rem;
          color: #000;
          display: inline-block;
          margin-left: 6px;
        }
      }
      .novice_Info {
        // 产品内容
        text-align: left;
        color: #000;
      }
    }
  }
  > span {
    display: block;
    width: 100%;
    height: 1px;
    background: #cfcfcf;
  }
}
// ---------------------------------------------------------------------------------------------------
// 知识产权样式
.knowledge {
  margin-top: 0.44rem;
  margin-bottom: 0.2rem;
  display: flex;
  flex-wrap: wrap;
  padding-left: 0.17rem;
  padding-right: 0.16rem;
  > div {
    position: relative;
    background-size: 100% 100%;
    height: 1.9rem;
  }
  p {
    bottom: 0;
    right: 0.36rem;
    position: absolute;
    font-size: 25px;
    height: 0.79rem;
    line-height: 0.79rem;
  }
  .shangbiao {
    background-image: url("../../static/g_img/shangbiao.jpg");
    margin-right: 0.21rem;
    width: 3.48rem;
  }
  .banquan {
    background-image: url("../../static/g_img/banquan.jpg");
    width: 3.48rem;
  }
  .zhuzuo {
    background-image: url("../../static/g_img/zhuzuoquan.jpg");
    width: 100%;
    margin-top: 0.15rem;
  }
}

// ---------------------------------------------------------------------------------------------------
// 脚部样式
.footer {
  padding-top: 0.26rem;
  padding-bottom: 0.2rem;
  margin-bottom: 0.96rem;
  > div {
    display: flex;
    justify-content: center;
    &::after {
      content: "";
      display: block;
      clear: both;
    }
    span {
      float: left;
      width: 52px;
      height: 56px;
      background: url("../assets/sinda_icon.png") 0 0 no-repeat;
      background-size: 100% 100%;
    }
    h3 {
      float: left;
      font-size: 30px;
      line-height: 56px;
      vertical-align: top;
      margin-left: 0.12rem;
    }
  }
  p {
    text-align: center;
    font-size: 24px;
    color: #aeaeae;
    line-height: 56px;
  }
}
</style>