<template>
<div class="sinda_index">
  <div class="carousel">
    <div class="carousel_inner" @mousemove="stopPlay()" @mouseout="play()">
      <transition-group tag="ul" name="image">
        <li v-for="(image,index) in img" :key="index" v-if="index===mark">
          <a href="#/"><img :src="image"></a>
        </li>
      </transition-group>
    </div>
    <div class="bullet">
      <span v-for="(item,index) in img.length" :class="{'active':index===mark}" @click="change(index)" :key="index" @mousemove="stopPlay()" @mouseout="play()"></span>
    </div>
  </div>
  <div class="starGoods">
    <div class="index_title">
      <p>明星产品推荐</p>
      <span></span>
    </div>
  </div>
  <div class="noviceMust">
    <!-- 初创企业必备部分 -->
    <div class="index_title">
      <p>初创企业必备</p>
      <span></span>
    </div>
    <div class="novice_main">
      <div class="novice_pro" v-for="(i,index) in noviceMust" :key="i.id">
        <!-- 初创企业必备产品 -->
        <div>
          <img :src="'http://115.182.107.203:8088/xinda/pic'+i.providerImg" alt="">
          <!-- 公司logo -->
          <p>{{i.providerName}}</p>
          <!-- 公司名称 -->
        </div>
        <h4>{{i.serviceName}}</h4>
        <!-- 产品名称 -->
        <p class="novice_Info">{{i.serviceInfo}}</p>
        <!-- 产品内容 -->
        <p>￥{{i.marketPrice}}<span>{{i.unit}}</span></p>
        <!-- 产品价格 -->
        <button>查看详情</button>
        <!-- 查看详情按钮 -->
      </div>
    </div>
  </div>
  <div class="knowledge">
    <div class="index_title">
      <p>知识产权</p>
      <span></span>
    </div>
    <div class="know_main">
      <div class="know_Zs">
        <ul class="title">
          <li>知识产权</li>
        </ul>
        <ul>
          <li>| 商标注册</li>
          <li>| 版权注册</li>
          <li>| 专利申请</li>
        </ul>
      </div>
      <div>
        <div class="SB">
          <div class="SB_SB">
            <ul>
              <li class="ZSCQ_title">商标注册</li>
              <li class="ZSCQ_info">极速申报，办理简单</li>
              <li class="ZSCQ_price"><span class="price">￥1000</span><span>/次</span></li>
            </ul>
          </div>
          <div class="SB_BQ">
            <ul>
              <li class="ZSCQ_title">版权专利</li>
              <li class="ZSCQ_info">快速提交，全程跟踪</li>
              <li class="ZSCQ_price"><span class="price">￥1000</span><span>/次</span></li>
            </ul>
          </div>
        </div>
        <div class="Zz" >
          <ul>
            <li class="ZSCQ_title">著作权</li>
            <li class="ZSCQ_info">专业顾问，经验丰富，快速响应，顺利拿证。</li>
            <li class="ZSCQ_price"><span class="price">￥1000</span><span>/次</span></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="know_footer">
      <div v-for="(i,index) in zscqObj" :key="i.class">
        <div :class="i.class" class="know_f_bg icon_global"></div>
        <ul>
          <li class="know_f_t">{{i.title}}</li>
          <li>{{i.info}}</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="server">
    <div class="index_title">
      <p>推荐服务商</p>
      <span></span>
    </div>
  </div>
  <div class="sindaFriend">
    <div class="index_title">
      <p>合作伙伴</p>
      <span></span>
    </div>
  </div>
</div>
  
</template>

<script>
export default {
  name: "sinda_index",
  data() {
    return {
      mark: 0,
      img: [
        // require("../assets/pc/lou.jpg"),
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1927986978,2546133654&fm=27&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2523007129,1951728501&fm=27&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1032378099,515442160&fm=27&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4220262347,3856549398&fm=27&gp=0.jpg"
      ],
      // 初创企业必备接口数组
      noviceMust: [],
      zscqObj: {
        a: { class: "zzrz", title: "资质认证", info: "服务商100%实名认证" },
        b: { class: "zfaq", title: "支付安全", info: "明码标价支付" },
        c: { class: "bxpf", title: "保险赔付", info: "出现问题平台赔付" },
        d: { class: "shwy", title: "售后无忧", info: "客服经理全程跟进" }
      }
    };
  },
  methods: {
    change(i) {
      this.stopPlay();
      this.mark = i;
    },
    autoPlay() {
      this.mark != 3 ? this.mark++ : (this.mark = 0);
    },
    play() {
      // 鼠标移出，开始轮播
      window.autoPlay = setInterval(this.autoPlay, 2500);
    },
    stopPlay() {
      // 鼠标进入，停止轮播
      clearInterval(window.autoPlay);
    }
  },
  created() {
    // 生命周期开始，开始轮播
    this.play();
    // 初创企业必备接口
    this.ajax
      .post(
        "/xinda-api/recommend/list" /* ,this.qs.stringify({cellphone:this.phone,smsType:1,imgCode:this.imgCode}) */
      )
      .then(data => {
        this.noviceMust = data.data.data.product;
        console.log(this.noviceMust);
      });
  },
  destroyed: function() {
    // 生命周期结束，停止轮播
    clearInterval(window.autoPlay);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
// 雪碧图----------start------------↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

.icon_global {
  background-image: url("../assets/pc/Sprites.png");
}
// -----------end-------------↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

// 首页全局样式----------start------------↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

.sinda_index > div {
  // 全局宽度1200居中对齐
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
.index_title {
  line-height: 31px;
  color: #000;
  font-size: 16px;
  p {
    padding-left: 10px;
  }
  > span {
    display: block;
    height: 2px;
    background: #2693d4;
    width: 1200px;
    position: relative;
    &::after {
      content: "";
      display: block;
      border: 2px solid #2693d4;
      border-bottom: 2px solid rgba(0, 0, 0, 0);
      border-right: 2px solid rgba(0, 0, 0, 0);
      position: absolute;
      left: 44px;
      bottom: 0px;
      transform: rotate(45deg);
    }
  }
}

// ----------end------------↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

// 轮播----------start------------↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
.carousel {
  position: relative;
}
.carousel_inner {
  margin: 0 auto;
  overflow: hidden;
  max-width: 1200px;
  height: 400px;
  position: relative;
  ul {
    overflow: hidden;
  }
  img {
    width: 1200px;
    height: 400px;
  }
  li {
    position: absolute;
  }
}

// 轮播按钮样式
.bullet {
  bottom: 0;
  position: absolute;
  left: 500px;
  margin: 0 auto;
  &::after {
    content: "";
    display: block;
    clear: both;
  }
  span {
    float: left;
    width: 25px;
    height: 25px;
    display: block;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    &:hover {
      background: #126;
    }
    &.active {
      background: rgba(255, 255, 255, 0.8);
    }
  }
}

// 顶部轮播动画效果
.image-enter-active {
  transform: translateX(0);
  transition: all 0.8s ease;
}
.image-leave-active {
  transform: translateX(-100%);
  transition: all 0.8s ease;
}
.image-enter {
  transform: translateX(100%);
}
.image-leave {
  transform: translateX(0);
}
// ----------end------------↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

// 初创企业必备----------start------------↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
.novice_main {
  margin-top: 48px;
  margin-bottom: 53px;
  display: flex;
  justify-content: space-between;
  .novice_pro {
    // 初创企业必备产品
    width: 270px;
    height: 462px;
    border: 1px solid #e8e8e8;
    text-align: center;
    padding: 0 15px;
    box-sizing: border-box;
    div {
      img {
        // 公司logo
        margin-top: 31px;
        margin-bottom: 26px;
        width: 114px;
        height: 60px;
      }
      p {
        // 公司标题
        font-size: 17px;
        line-height: 53px;
        height: 53px;
      }
    }
    h4 {
      // 产品标题
      height: 63px;
    }
    p {
      // 产品价格
      height: 70px;
      font-size: 38px;
      color: #2693d4;
      font-weight: 100;
      span {
        // 元
        font-size: 16px;
        color: #000;
        display: inline-block;
        margin-left: 6px;
      }
    }
    .novice_Info {
      // 产品内容
      text-align: left;
      font-size: 14px;
      line-height: 18px;
      color: #000;
      height: 72px;
    }
    button {
      // 查看产品详情按钮
      width: 157px;
      height: 44px;
      border: 2px solid #2693d4;
      background: #fafafa;
      font-size: 18px;
      color: #2693d4;
      border-radius: 4px;
      cursor: pointer;
    }
  }
}

// ----------end------------↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

// 知识产权----------start------------↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
.know_main {
  display: flex;
  margin-top: 37px;
  margin-bottom: 43px;
  ul {
    .ZSCQ_title {
      font-size: 18px;
      color: #000;
    }
    .ZSCQ_info {
      font-size: 14px;
      color: #696969;
      line-height: 34px;
    }
    .ZSCQ_price {
      font-size: 0;
      position: relative;
      left: -5px;
      .price {
        font-size: 26px;
        color: #2693d4;
      }
      span {
        font-size: 18px;
        color: #2693d4;
      }
    }
  }
}
.know_Zs {
  width: 327px;
  height: 482px;
  background: url("../assets/gongyon/zhishichanquan.jpg") no-repeat 0 0;
  background-size: 100% 100%;
  display: flex;
  color: #5ea3d5;
  font-size: 14px;
  ul {
    margin-top: 24px;
  }
  li {
    line-height: 26px;
  }
  .title {
    font-size: 18px;
    width: 126px;
    height: 78px;
    text-align: center;
    li {
      line-height: 78px;
    }
  }
}
.SB {
  display: flex;
  > div {
    width: 414px;
    height: 230px;
    margin-left: 23px;
  }
  .SB_SB {
    background: url("../assets/gongyon/shangbiao.jpg") no-repeat 0 0;
    background-size: 100% 100%;
  }
  .SB_BQ {
    background: url("../assets/gongyon/banquan.jpg") no-repeat 0 0;
    background-size: 100% 100%;
  }
  ul {
    margin-top: 85px;
    margin-left: 242px;
  }
}
.Zz {
  margin-top: 22px;
  margin-left: 23px;
  background: url("../assets/gongyon/zhuzuoquan.jpg") no-repeat 0 0;
  background-size: 100% 100%;
  width: 850px;
  height: 230px;
  > ul {
    position: relative;
    padding-top: 95px;
    padding-left: 505px;
  }
}
.know_footer {
  height: 154px;
  background: #f7f7f7;
  display: flex;
  justify-content: space-around;
 align-items: center;
  margin-bottom: 58px;
  color: #696969;
  .know_f_bg {
    width: 54px;
    height: 62px;
    float: left;
    margin-right: 18px;
  }
  .zzrz {
    background-position: -169px -190px;
  }
  .zfaq{
    background-position: -270px -379px;
  }
  .bxpf{
    background-position: -170px -108px;
  }
  .shwy{
    background-position: -362px -425px;
  }
  ul {
    float: right;
    font-size: 16px;
    .know_f_t{
      font-size: 24px;
    }
  }
}
// ----------end------------↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
</style>