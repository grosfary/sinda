<template>
<div>
  <div class="carousel">
    <transition-group tag="ul" name="image">
      <li v-for="(image,index) in img" :key="index" v-show="index===mark">
        <a href="#/"><img :src="image"></a>
      </li>
    </transition-group>
  </div>
  <div class="bullet">
    <span v-for="(item,index) in img.length" :class="{'active':index===mark}" @click="change(index)" :key="index"></span>
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
        require("../assets/pc/lou.jpg"),
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1927986978,2546133654&fm=27&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2523007129,1951728501&fm=27&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1032378099,515442160&fm=27&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4220262347,3856549398&fm=27&gp=0.jpg"
      ]
    };
  },
  methods: {
    change(i) {
      this.mark = i;
    },
    autoPlay() {
      this.mark++;
      if (this.mark === 4) {
        this.mak === 0;
        return;
      }
    },
    play() {
      setInterval(this.autoPlay, 1000);
    },
  },
  // created:{
  //   this.play();
  // }
  // components: { sinda_header, sinda_footer }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
// 顶部轮播部分
.carousel {
  width: 1200px;
  height: 500px;
  img {
    width: 1200px;
    height: 500px;
  }
  li {
    position: absolute;
  }
}

// 轮播按钮样式
.bullet {
  top: 0;
  position: absolute;
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
    background: #fff;
    cursor: pointer;
    &:hover {
      background: #126;
    }
    &.active {
      background: red;
    }
  }
}

// 顶部轮播动画效果
.image-enter-active {
  transform: translateX(0);
  transition: all 1s ease;
}
.image-leave-active {
  transform: translateX(-100%);
  transition: all 1s ease;
}
.image-enter {
  transform: translateX(100%);
}
.image-leave {
  transform: translateX(0);
}
</style>