<template>
    <div class="hello">
          <div>
          <div class='home'>
            <div class='homepage'>
              <a href="">首页</a>
              <span>/</span>
              <a href="">公司工商</a>
            </div>
            <div class='informations'>
              <div>
                <img src="../assets/pc/u5086.jpg" alt="">
              </div>
              <div><span>12345678912</span></div>
            </div>
            <div class='set'>
              <div class='backe'><div class='backa'><div>我的订单</div></div></div>
              <div class='backd'><div class='backb'><div>用户评价</div></div></div>
              <div class='backf'><div class='backc'><div>账户设置</div></div></div>
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
  components: { sinda_header, sinda_footer },
  
};
</script>
<style scoped lang="less">
  .hello{
    margin-top:-172px;
    margin-left:35px;
  }
  .home{
      margin-left:235px;
      margin-top:203px;
      margin-bottom:25px;
    .homepage{
      width:376px;
      height:47px;
      line-height:47px;
    }
    .informations{
      width:243px;
      height:141px;
      background:#e9e9e9;
      div{
        width:97px;
        height:97px;
        margin-top:10px;
        margin-left:73px;
        img{
          width:100%;
          height:100%;
        }
      }
    }
    .set{
      width:243px;
      height:244px;
      margin-top:16px;
      background:#f7f7f7;
        div{
        width:243px;
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
</style>