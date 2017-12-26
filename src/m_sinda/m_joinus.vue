<template>
  <div class="body">
    <div class="head">
      <img src="../assets/pc/jiameng.jpg" alt="">
      <div class="txt">
        <p>加盟我们</p>
      <p>只做有价值的平台</p>
      </div>
    </div>
    <div class="join">
      <p>TO JOIN IN</p>
      <img src="../assets/pc/ditu.png" alt="">
      <div class="tst">
        <p>服务商加盟</p> 
        <p class="lage">信达提供线上精准营销方案、帮助服务商快捷、低成本的获取有效客户,为传统优质服务商插上互联网的翅膀,助力企业腾飞。</p>
      </div>
    </div>
     <img class="images" src="../assets/pc/lv.jpg" alt="">
     <div class="receive">
       <p>YOU WILL RECEIVE</p>
       <img src="../assets/pc/ditu.png" alt="">
      <div class="tt">
        <p>你将获得</p> 
      </div>
      <div class="jiamengshang">
        <img src="../assets/pc/img-4.png" alt="">
        <img src="../assets/pc/img-1.png" alt="">
        <img src="../assets/pc/img-2.png" alt="">
        <img src="../assets/pc/img-3.png" alt="">
        <div class="lagess">
        <p>精准的线上曝光机会</p>
        <p>万亿的市场份额</p>
        <p>系统化的营销解决方案</p>
        <p>各种优惠补贴</p>
        </div>
      </div>
     </div>
     <div class="PROFESSIONAL">
       <img src="../assets/pc/1212.gif" alt="">
       <div class="image">
         <img @mouseover="gs" src="../assets/pc/gongshang.jpg" alt="">
         <img  @mouseover="cs" src="../assets/pc/guanshui.jpg" alt="">
         <img @mouseover="zs" src="../assets/pc/zhishichanquan.jpg" alt="">
         <img @mouseover="hr" src="../assets/pc/renli.jpg" alt="">
         
       </div>
        <div class="lages">
        <p>工商注册RIGISTERED</p>
        <p>财税服务SERVICECER</p>
        <p >知识产权INTELLECTAULPROP</p>
        <p >人力外包 HR&nbspOUTSOURCING</p>
        </div>
     </div>
     <p class="footer-lage">我们需要什么样的服务商?</p>
        <div class="lage">
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


export default {
  data() {
    return {
      gsbox: true,
      csbox: false,
      hrbox: false,
      zsbox: false
    };
  },
  methods: {
  gs: function() {
      if ((this.gsbox = true)) {
        this.zsbox = false;
        this.hrbox = false;
        this.csbox = false;
      }
    },
    cs: function() {
      if ((this.csbox = true)) {
        this.gsbox = false;
        this.hrbox = false;
        this.zsbox = false;
      }
    },
    zs: function() {
      if ((this.zsbox = true)) {
        this.gsbox = false;
        this.hrbox = false;
        this.csbox = false;
      }
    },
    hr: function() {
      if ((this.hrbox = true)) {
        this.gsbox = false;
        this.zsbox = false;
        this.csbox = false;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.body{
  margin: 0 auto;
  width: 7.5rem;
text-align: center;
  .head{
    img{
      width: 100%;
      position: relative;
    }
    .txt{
      width: 7.5rem;
      font-size: 0.2rem;
      text-align: center;
      line-height: 0.4rem;
      position: absolute;
      top:0.5rem;
    }
  }
  .join{
    
    p{
      font-size: 0.3rem;
      
    }
    img{
      width:3.23rem;
      position: relative;
    }
    .tst{
      width: 7.5rem;
      position: absolute;
      top: 2.6rem;
      color:#ff0000;
    .lage{
      color: #000000;
      font-size: 0.15rem;
      margin-top: 0.4rem;
    }
    }
  }
   .images{
      width:7.5rem;
      text-align: center;
      margin-top: 0.3rem;
    }
    .receive{
      p{
        font-size: 0.2rem;
      }
      img{
        width: 3.23rem;
        position: relative;
      }
      .tt{
      width: 7.5rem;
      position: absolute;
      top:9.35rem;
      color:#ff0000;
      p{
        font-size: 0.3rem;
      }
      }
      .jiamengshang{
        img{
          width: 10%;
          margin: 0 0.3rem ;
        }
       
      }
      .lagess{
        margin-top: -1rem;
        p{
          display: inline;
          font-size: 0.15rem;
        }
      }
    }
    .PROFESSIONAL{
      img{
        width: 50%;
      }
      .image{
        img{
          width: 20%;
        }
       
      }
      .lages{
        width: 7.5rem;
         p{
           width: 20%;
           font-size: 0.1rem;
          //  display: inline;
          text-align: center;
          float: left;
          margin: 0.15rem;
          text-indent: 0.15rem;
          margin-top: -0.2rem;
         }
       }
    }
    .footer-lage{
      font-size: 0.35rem;
      margin-top: 0.4rem;
    }
    .lage{
      margin-top: 0.5rem;
      font-size: 0.15rem;
    }
}
</style>