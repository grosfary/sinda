<template>
    <div class="hello">
        <div>
          <div class='home'>
            <div class='homepage'>
              <a href="">首页</a>
              <span>/</span>
              <a href="">个人主页</a>
            </div>
            <div class='informations'></div>
            <div class='set'>
              <div><span class='backa'><span>我的订单</span></span></div>
              <div><span class='backb'><span>用户评价</span></span></div>
              <div><span class='backc'><span>账户设置</span></span></div>
            </div>
          </div>
          <div></div>
        </div>
    </div>
</template>

<script>
import sinda_header from "../components/sinda_global_header";
import sinda_footer from "../components/sinda_global_footer";
export default {
  data() {
    return {};
  },
  components: { sinda_header, sinda_footer }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .home{
      margin-left:127px;
    .homepage{
      width:376px;
      height:47px;
      line-height:47px;
    }
    .informations{
      width:376px;
      height:270px;
      background:#e9e9e9;
    }
    .set{
      width:376px;
      height:188px;
      margin-top:16px;
      background:#f7f7f7;
      div{
        span{
        height:62px;
        font-size:22px;
        line-height:62px;
        margin-left:90px;
        }
      .backa{
      height:62px;
      margin-left:0;
              font-size:28px;
      background:url(../assets/pc/Sprites.png) no-repeat -476px -303px;
    }
      .backb{
      margin-left:0;
      height:62px;
              font-size:28px;
      background:url(../assets/pc/Sprites.png) no-repeat -324px -311px;
    }
      .backc{
      margin-left:0;
      height:62px;
              font-size:28px;
      background:url(../assets/pc/Sprites.png) no-repeat -403px -309px;
    }
      }
    }
  }
 
</style>