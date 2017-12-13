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
              <div><router-link tag='a' active-class="backe" to="/member/toeveluete"><div><div class='backa'><span>我的订单</span></div></div></router-link></div>
              <div><router-link tag='a' active-class="backe" to="/member/myYing"><div><div class='backb'><span>用户评价</span></div></div></router-link></div>
              <div><router-link tag='a' active-class="backe" to="/member/setting"><div><div class='backc'><span>账户设置</span></div></div></router-link></div>
            </div>
          </div>
        </div>
      <router-view></router-view>
    </div>
</template>
<script>
import sinda_header from "../components/sinda_global_header";
import sinda_footer from "../components/sinda_global_footer";
  export function data() {
    name:'sinda_member'
    return {
      data:''
    };
  }
export default {
  components: { sinda_header, sinda_footer },
  methods:{
    sum:function(data){
      this.data = data
      console.log(data)
    },
  }
};
</script>
<style scoped lang="less">

  .hello{
    margin-top:-172px;
    margin-left:35px;
  }
  .home{
      margin-left:163px;
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
      span{
        margin-left:95px;
        white-space:nowrap;
      }
      a{
        text-decoration:none;
        color:#000;
      }
        div{
        width:243px;
        height:62px;
        font-size:17px;
        line-height:62px;
      .backa{
      width:100%;
      height:62px;
      font-size:17px;
      background:url(../assets/pc/Sprites.png) no-repeat -476px -294px;
    }
      .backb{
      width:46%;
      height:62px;
      font-size:17px;
      background:url(../assets/pc/Sprites.png) no-repeat -324px -294px;
    }
      .backc{
      width:46%;
      height:62px;
      font-size:17px;
      background:url(../assets/pc/Sprites.png) no-repeat -403px -294px;
    }
      }
    }
  }
  .backe{
    width:243px;
    height:62px;
    display: inline-block;
    background : #e9e9e9
}
 

</style>