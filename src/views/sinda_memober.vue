<template>
    <div class="hello">
     

        <div>
          <div class='home'>
            <div class='homepage'>
              <a href="">首页</a>
              <span>/</span>
              <a href="">公司工商</a>
            </div>
            <div class='informations'></div>
            <div class='set'>
              <div><div class='backa'><div>我的订单</div></div></div>
              <div class='backd'><div class='backb'><div>用户评价</div></div></div>
              <div class='backe'><div class='backc'><div>账户设置</div></div></div>
            </div>
          </div>
        </div>
      <router-view></router-view>
    </div>
</template>

<script>
import sinda_header from "../components/sinda_global_header";
import sinda_footer from "../components/sinda_global_footer";
export default {
  data() {
    name:'sinda_memober'
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
        width:376px;
        height:62px;
        font-size:17px;
        line-height:62px;
        text-indent:90px;
      .backa{
      width:101px;
      height:62px;
      font-size:17px;
      background:url(../assets/pc/Sprites.png) no-repeat -476px -294px;
    }
      .backb{
      width:101px;
      height:62px;
      font-size:17px;
      background:url(../assets/pc/Sprites.png) no-repeat -324px -294px;
    }
      .backc{
      width:101px;
      height:62px;
      font-size:17px;
      background:url(../assets/pc/Sprites.png) no-repeat -403px -294px;
    }
      }
    }
  }
.backd{
        background:#e9e9e9;
}

</style>