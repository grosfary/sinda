<template>
<div class="hello">
  <div class='top'>
    <div class='assess'>
          <div>评价</div>
    </div>
    <div>
    <div class='evaluate'>
      <div>
        <span>服务单号：{{getNum}}</span>
        <span></span>
      </div>
      <div>
        <span>购买内容：</span>
        <span></span>
      </div>
      <div>
        <span>购买时间：</span>
        <span></span>
      </div>
    </div>
    <div class='evalu'>
      <span>评价：</span>
      <input type="radio" name='radio'>
      <span>好评</span>
      <input type="radio" name='radio'>
      <span>中评</span>
      <input type="radio" name='radio'>
      <span>差评</span>
    </div>
    <div class='score'>
      <a>评分：</a>
      <span :class='index>=0?"active":""' @click='image(0)'></span>
      <span :class='index>=1?"active":""' @click='image(1)'></span>
      <span :class='index>=2?"active":""' @click='image(2)'></span>
      <span :class='index>=3?"active":""' @click='image(3)'></span>
      <span :class='index>=4?"active":""' @click='image(4)'></span>
    </div>
    <div class='feel'>
      <span>感受：</span> 
      <textarea class='textarea'></textarea>   
    </div>
    <div class='sub'>
      <a href="#/member/evalu"><input type='submit' class='judge'></input></a>
    </div>
   </div>    
  </div>
</div>
</template>
<script>
import member from "../views/sinda_member";
import {mapGetters} from "vuex";
export default {
  data() {
    return {
      index:-1,
      buys:[]
    };
  },
  computed:{
    ...mapGetters(['getNum'])
  },
  components: { member },
  methods:{
    image:function(index){
        this.index = index;
    },
  },
  created(){
    var that = this;
    this.ajax.post('/xinda-api/business-order/detail',{}).then(function(data){
      var Data=data.data.data
      console.log(data)
      that.buys.push(Data)
    })
  }

};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .assess{
    width:875px;
    height:34px;
    border-bottom:2px solid #e9e9e9;
    float: left;
    margin-top:-474px;
    margin-left:541px;
  div{
    width:86px;
    height: 34px;
    color:#abcfe9;
    border-bottom:2px solid #2693d4;
    line-height:34px;
    text-align:center;
    }
   
  }
 .evaluate{
   width:644px;
   height: 36px;
   margin-top:-438px;
   margin-left:569px;
   float:left;
   span{
     width:200px;
     font-size:10px;
     line-height:36px;
     float:left;
     margin-left:10px;
   }
 }
 .evalu{
   .evaluate;
    margin-top:-401px;
    width:300px;
    span{
      float:left;
      width:40px;
    }
    input{
      margin-top:11px;
      margin-left:-63px;
    }
 }
 .score{
   .evaluate;
    margin-top:-363px;
    margin-left:579px;
    width:180px;
 }
 .feel{
   .evaluate;
    margin-top:-326px;
    width:590px;
    height:103px;
 }
 .sub{
   .evaluate;
    margin-top:-222px;
 }
 .textarea{
   width:536px;
   height:101px;
   margin-top:-30px;
   margin-left:55px;
 }
 .judge{
   width:105px;
   height:30px;
   float:right;
   background:#169bd5;
   border:0;
   margin-top:17px;
   border-radius:4px;
   color:#fff;
 }
 .top{
   margin-top:233px;
 }
 .score>span{
   width:13px;
   height:13px;
   background:url('../assets/pc/Sprites.png') no-repeat -198px -261px;
   margin-top:12px;
   &.active{
     background-position: -221px -261px;
   }
 }
 .score>a{
   line-height: 36px;
   float:left;
   font-size:10px;
 }
</style>
