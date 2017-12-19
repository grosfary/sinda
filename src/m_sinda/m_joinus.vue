<template>
    <div class="m-body">
        <div class="m-head">
        <img src="../assets/pc/jiameng.jpg" alt="">
            <div class="text">
                <p>加盟我们</p>
                <p>只做有价值的平台</p>
            </div>
        </div>
        <div class="m-server">
            <p>TO JOIN IN</p>
            <span>
                <div class="txt">
                    <p>服务商加盟</p>
                </div>
            </span>
             <h5>www.xinda.com</h5>
             <h4>信达提供线上精准营销方案、帮助服务商快捷、低成本的获取有效客户,为传统优质服务商插上互联网的翅膀,助力企业腾飞。</h4>
             <img src="../assets/pc/lv.jpg" alt="">
        </div>
        <div class="m-receive">
            <p>PROFESSIONAL</p>
            <span class="backgroundI">
                <div class="ts">
                    <p>你将获得</p>
                </div>
            </span>
            <h5>www.xinda.com</h5>
            <div class="receive">
            <span class="backgroundII">
                <div class="tx">
                    <p>精准的线上曝光机会</p>
                </div>
                </span>
           <span class="backgroundIII">
               <div class="tx">
                    <p>万亿市场份额</p>
                </div>
                </span>  
            <span class="backgroundIV">
                <div class="tx">
                    <p>系统化的营销解决方案</p>
                </div>
            </span>
           <span class="backgroundV">
               <div class="tx">
                    <p>各种补贴优惠</p>
                </div>
           </span>
        </div>
        </div>
        <div class="m-occupation">
             <p>PROFESSIONAL</p>
            <span class="img">
                <div class="txt">
                    <p>哪些可以加盟</p>
                </div>
            </span>
             <h5>www.xinda.com</h5>
             <div class="iamges">
            <span class="iamgeI"><p id="gs">
                <div class="tst">
                    <p>工商注册 RIGISTERED</p>
                </div>
            </span>
            <span class="iamgeII"><p id="cw">
                 <div class="tst">
                    <p>财税服务 SERVICECER</p>
                </div>
            </span>
            <span class="iamgeIII"><p id="zs">
                 <div class="tst">
                    <p>知识产权INTTAULPROPERTY</p>
                </div>
            </span>
            <span class="iamgeIV"><P id="hr"></P>
             <div class="tst">
                    <p> 人力外包HR&nbspOUTSOURCING</p>
                </div>
                </span>
                
        </div>
        </div>
    </div>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.m-body {
  width: 7.5rem;
  margin: 0 auto;
  .m-head {
    font-size: 0.15rem;
    position: relative;
    .text{
        position: absolute;
        width: 100%;
        top: 0.5rem;
        line-height: 0.3rem;
        text-align: center;
    }
    img {
      width: 100%;
    }
  }
  .m-server {
    font-size: 0.2rem;
    text-align: center;
    margin-top: 0.3rem;
    .txt{
        top: 0.4rem;
        position: absolute;
         text-align: center;
         width: 100%;
         font-size: 0.3rem;
         color: red;
    }
    h5{
        margin-top: -0.25rem;
        color: #ccc;
    }
      span {
      position: relative;
      width: 3.23rem;
      height: 1.09rem; //给背景设置宽高
      display: block; //设置为块级元素
      background: url("../assets/pc/ditu.png") no-repeat 0 0;
      margin: 0 auto;}
  }
  .m-receive{
      font-size: 0.2rem;
    text-align: center;
    margin-top: 0.3rem;
    background: #ccc;
    .ts{
        top: 0.4rem;
        position: absolute;
         text-align: center;
         width: 100%;
         font-size: 0.3rem;
         color: red;
    }
    h5{
        margin-top: -0.25rem;
        color: #ccc;
    }
    h4{
        font-size: 0.13rem;
         margin-top: 0.2rem;
    }
     .backgroundI{
      position: relative;
      width: 3.23rem;
      height: 1.09rem; //给背景设置宽高
      display: block; //设置为块级元素
      background: url("../assets/pc/ditu.png") no-repeat 0 0;
      margin: 0 auto;}

  }
  .receive{
      margin-top:0.5rem;
      span{
           position: relative;
      }
   .backgroundII {
      width: 0.81rem;
      height: 0.78rem;
      display: block;
      background: url("../assets/pc/Sprites.png") no-repeat -427px -450px;
      margin-left: 0.3rem;
    }
    .backgroundIII {
      width: 0.92rem;
      height: 0.67rem;
      display: block;
      background: url("../assets/pc/Sprites.png") no-repeat -150px -284px;
        margin-left: 5.5rem;
      margin-top: -0.77rem;
    }
    .backgroundIV {
      width: 0.67rem;
      height: 0.84rem;
      display: block;
      background: url("../assets/pc/Sprites.png") no-repeat -166px -382px;
       margin-top: 1.30rem;
        margin-left: 0.3rem;
    }
    .backgroundV {
      width: 0.58rem;
      height: 0.66rem;
      display: block;
      background: url("../assets/pc/Sprites.png") no-repeat -267px -374px;
        margin-left: 5.5rem;
      margin-top: -0.77rem;
    }
    .tx{
        position:absolute;
         text-align: center;
         width: 1.5rem;
         font-size: 0.15rem;
         color:#696969;
         left: 0.7rem;
         top: 0.3rem;

    }
  }
  .m-occupation{
      font-size: 0.2rem;
    text-align: center;
    margin-top: 0.3rem;
    .txt{
        top: 0.4rem;
        position: absolute;
         text-align: center;
         width: 100%;
         font-size: 0.3rem;
         color: red;
    }
    h5{
        margin-top: -0.25rem;
        color: #ccc;
    }
     .img {
      position: relative;
      width: 3.23rem;
      height: 1.09rem; //给背景设置宽高
      display: block; //设置为块级元素
      background: url("../assets/pc/ditu.png") no-repeat 0 0;
      margin: 0 auto;}
      .iamges{
         span{
             float: left;
             margin-left: 0.3rem;
             position: relative;
         }
          .iamgeI {
      width: 1.55rem;
      height: 1.65rem;
      display: block;
      background: url("../assets/pc/gongshang.jpg") no-repeat;
    }
    .iamgeII {
      width: 1.55rem;
      height: 1.65rem;
      display: block;
      background: url("../assets/pc/guanshui.jpg") no-repeat;
    }
    .iamgeIII {
      width: 1.55rem;
      height: 1.65rem;
      display: block;
      background: url("../assets/pc/zhishichanquan.jpg") no-repeat;
    }
    .iamgeIV {
      width: 1.55rem;
      height: 1.65rem;
      display: block;
      background: url("../assets/pc/renli.jpg") no-repeat;
    }
   
      }
       .tst{
        position: absolute;
        top:1.6rem;
        text-align: center;
        font-size: 0.16rem;
        p:hover{
            color: blue;
        }
    }
  }
}
</style>