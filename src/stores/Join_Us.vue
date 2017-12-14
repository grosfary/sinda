<template>
    <div class="body" style="width:1200px;">
      <!-- 顶部图片文字 -->
       <div class="join">
          <span>
              <div class="lage">
              <p>加盟我们</p><br>
              <p>只做有价值的平台</p>
              </div>
          </span>
       </div>
       <div class="Servicer">
           <p class="lageI">TO JOIN IN</p>
           <span><p class="lageII">服务商加盟</p></span>
       </div>
         <p class="lageIII">信达提供线上精准营销方案、帮助服务商快捷、低成本的获取有效客户,为传统优质服务商插上互联网的翅膀,助力企业腾飞。</p>
       <div class="ServicerI">
         <span></span>
       </div>
       <div class="ServicerII">
           <p class="lageV">YOU WILL RECEIVE</p>
           <span class="backgroundI"><p class="lageIV">你将获得</p></span>
           <div class="jiamengshang">
           <span class="backgroundII"><p>精准的线上曝光机会</p></span>
           <span class="backgroundIII"><p>万亿市场份额</p></span>  
            <span class="backgroundIV"><p>系统化的营销解决方案</p></span>
           <span class="backgroundV"><p>各种补贴优惠</p></span>
           </div>
       </div>
        <div class="occupation">
            <p>PROFESSIONAL</p>
            <span></span>
        </div>
        <div class="iamges">
            <span class="iamgeI"><p id="gs"   @mouseover="gs">工商注册RIGISTERED</p> </span>
            <span class="iamgeII"><p id="cw"  @mouseover="cs">财税服务SERVICECER</p></span>
            <span class="iamgeIII"><p id="zs"  @mouseover="zs">知识产权INTELLECTAULPROPERTY</P></span>
            <span class="iamgeIV"><P id="hr"   @mouseover="hr">人力外包 HR&nbspOUTSOURCING</P></span>
        </div>
        <p class="footer-lage">我们需要什么样的服务商?</p>
        <div class="lagess">
        <p class="GS bodybox" id="gsbox" v-if="gsbox">在公司注册、公司变更、资质审批等领域深耕多年，在业内享有一定的知名度，可以提供优质优价的服务；<br>
与时俱进，视野立足未来，了解创业者的需求，并乐于为创业者服务。</p>
        <p class="CS bodybox" id="csbox" v-if="csbox">在代理记账、审计验资等领域深耕多年，可以提供涉足各个行业优秀的财会人员；<br>
与时俱进，视野立足未来，了解创业者的需求，并乐于为创业者服务。</p>
        <p class="ZS bodybox" id="zsbox" v-if="zsbox">在商标注册，版权专利，著作权等领域深耕多年，具有丰富的知识产权经验；<br>
与时俱进，视野立足未来，了解创业者的需求，并乐于为创业者服务。</p>
        <p class="HR bodybox" id="hrbox" v-if="hrbox">在人事代理、企业社保、个人社保等领域深耕多年，具有丰富的社保代理经验。</p>
        </div>
    </div>
</template>

<script>
import sinda_header from "../components/sinda_global_header";
import sinda_footer from "../components/sinda_global_footer";
export default {
  data() {
    return {
      gsbox:true,
      csbox:false,
      hrbox:false,
      zsbox:false,
    };
  },
  components: { sinda_header, sinda_footer },
  methods: {//底部动态效果，鼠标上浮文字内容显示，移走消失
    gs:function(){
      if( this.gsbox=true){
        this.zsbox=false;
        this.hrbox=false;
        this.csbox=false;
       }
    },
     cs:function(){
        if( this.csbox=true){
        this.gsbox=false;
        this.hrbox=false;
        this.zsbox=false;
     }
    },
    zs:function(){
       if( this.zsbox=true){
        this.gsbox=false;
        this.hrbox=false;
        this.csbox=false;
       }
    },
    hr:function(){
       if( this.hrbox=true){
        this.gsbox=false;
        this.zsbox=false;
        this.csbox=false;
       }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.body {
  width: 100%;
  // height: 850px;;
  margin: 0 auto;
  .join {
    // 顶部背景图
    span {
      width: 100%;
      height: 395px; //给背景设置宽高
      display: block; //设置为块级元素
      background: url("../assets/pc/jiameng.jpg") no-repeat 0 0;//背景图
    }
    .lage {//顶部文字样式
      text-align: center;//设置居中
      padding-top: 190px;
      p {
        color: #2a2a2a;//颜色
        font-size: 23px;//字体大小
        font-family: "黑体";//字体格式
      }
    }
  }
  .Servicer {
    margin-top: 15px;
    .lageI {
      text-align: center;
      color: #111111;
      font-family: "Eglish";
      // font-weight: bold;
      font-size: 22px;
    }
    span {
      width: 323px;
      height: 109px; //给背景设置宽高
      display: block; //设置为块级元素
      background: url("../assets/pc/ditu.png") no-repeat 0 0;
      margin: 0 auto;
      .lageII {
        text-align: center;
        line-height: 115px;
        font-size: 30px;
        color: red;
      }
    }
  }
  .ServicerI {
    width: 531px;
    height: 323px; //给背景设置宽高
    display: block; //设置为块级元素
    background: url("../assets/pc/lv.jpg") no-repeat 0 0;
    margin: 0 auto;
  }
  .lageIII {
    margin-top: 20px;
    text-align: center;
    font-size: 18px;
    font-family: "宋体";
    font-weight: bold;
  }
  .ServicerII {
    background: #edf0f3;
    margin-top: 20px;
    .lageV {
      text-align: center;
      color: #111111;
      font-family: "Eglish";
      // font-weight: bold;
      font-size: 22px;
    }
    .backgroundI {
      width: 323px;
      height: 109px; //给背景设置宽高
      display: block; //设置为块级元素
      background: url("../assets/pc/bianxian.png") no-repeat 0 0 color(#edf0f3);
      margin: 0 auto;
      .lageIV {
        text-align: center;
        line-height: 115px;
        font-size: 30px;
        color: red;
      }
    }
    .backgroundII {
      width: 81px;
      height: 78px;
      display: block;
      background: url("../assets/pc/Sprites.png") no-repeat -427px -450px;
    }
    .backgroundIII {
      width: 92px;
      height: 67px;
      display: block;
      background: url("../assets/pc/Sprites.png") no-repeat -150px -284px;
    }
    .backgroundIV {
      width: 67px;
      height: 84px;
      display: block;
      background: url("../assets/pc/Sprites.png") no-repeat -166px -382px;
    }
    .backgroundV {
      width: 58px;
      height: 66px;
      display: block;
      background: url("../assets/pc/Sprites.png") no-repeat -267px -374px;
    }
  }
  .jiamengshang {
    margin-left: 275px;
    // display: inline;
    p {
      margin-left: 100px;
      padding-top: 32px;
      width: 200px;
      font-size: 15px;
      color: #636466;
    }
    .backgroundIII {
      margin-left: 600px;
      margin-top: -77px;
    }
    .backgroundV {
      margin-left: 600px;
      margin-top: -77px;
    }
    .backgroundIV {
      margin-top: 130px;
    }
  }
  .occupation {
    width: 100%;
    margin-top: 30px;
    text-align: center;
    color: #111111;
    font-family: "Eglish";
    // font-weight: bold;
    font-size: 22px;
    span {
      width: 356px;
      height: 97px;
      display: block;
      background: url("../assets/pc/1212.gif") no-repeat 0 0;
      margin: 0 auto;
      margin-top: 40px;
    }
  }
  .iamges {
    display: flex;
    margin-left: 110px;
    height: 300px;
    p {
      padding-top: 160px;
      margin-left: 4px;
      text-align: center;
      font-size: 18px;
      font-family: "宋体";
      &:hover {
        color: blue;
      }
    }
    .iamgeI {
      width: 155px;
      height: 165px;
      display: block;
      background: url("../assets/pc/gongshang.jpg") no-repeat;
      margin-left: 30px;
    }
    .iamgeII {
      width: 155px;
      height: 165px;
      display: block;
      background: url("../assets/pc/guanshui.jpg") no-repeat;
      margin-left: 110px;
    }
    .iamgeIII {
      width: 155px;
      height: 165px;
      display: block;
      background: url("../assets/pc/zhishichanquan.jpg") no-repeat;
      margin-left: 110px;
    }
    .iamgeIV {
      width: 155px;
      height: 165px;
      display: block;
      background: url("../assets/pc/renli.jpg") no-repeat;
      margin-left: 110px;
    }
  }
  .footer-lage {
    color: #000000;
    font-family: "黑体";
    font-size: 20px;
    text-align: center;
    font-weight: bold;
  }
  .lagess {
    margin-top: 30px;
    height: 150px;
    p {
      text-align: center;
      line-height: 60px;
    }
  }
}
</style>