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
    <div class="index_title">
      <p>初创企业必备</p>
      <span></span>
    </div>
  </div>
  <div class="knowledge">
    <div class="index_title">
      <p>知识产权</p>
      <span></span>
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
// import sinda_header from "../components/sinda_global_header";
// import sinda_footer from "../components/sinda_global_footer";
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
      ]
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
  },
  destroyed: function() {
    // 生命周期结束，停止轮播
    clearInterval(window.autoPlay);
  }
  // components: { sinda_header, sinda_footer }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
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
  p{
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
      position: absolute; left: 44px;bottom:0px;
      transform: rotate(45deg)
    }
  }
}

// 首页全局样式----------start------------↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

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
// 轮播----------start------------↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
</style>