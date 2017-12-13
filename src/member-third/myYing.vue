<template>
    <div class="hello">
      <div class="top clear">
        <div class='assess'>
          <div>我的评价</div>
        </div>
        <div class='content'>
          <div>
            <div :class='index==1?"notapp":"havebeen"' @click='appraise(1)'>未评价</div>
            <a class='notappa' v-show = 'notappa'></a>
            <a href="#/member/evalu"><div class='havebeen'>已评价</div></a>
            <a class='notappb' v-show='notappb'></a>
          </div>
          <div class='details' v-for='detail in details' :key='detail'>
            <div class='box'></div>
            <div class='infor'>
              <div></div>
              <div>服务单号：{{detail.buyNum}}</div>
              <div>购买内容：</div>
            </div>
            <div class='time'>购买时间：<div class='date'>{{1491263493000 | formatDate}}</div></div>
            <a href="/#/member/center"><button>去评价</button></a>
          </div>
        </div>
          <div class='inputcopy'>
            <input type="submit" class='previous' value='上一页' @click='previous'>
            <div :class='col==bum?"page":"pages"' v-for='(button,bum) in buttons' :key='button' @click = 'skip(bum)'>{{button}}</div>           
            <input type="submit" class='next' value='下一页' @click='next'>
          </div>
      </div>
        
    </div>
</template>
<script>
import member from "../views/sinda_member";
import {formatDate} from '../../config/date';
export default {
  created(){
      var that = this;
      this.ajax.post(
        '/xinda-api/product/package/grid'
        ,{}).then(
          function(data){
            console.log(data)
            that.details = data.data.data
          }
        )
  },
      filters: {
        formatDate(time) {
            var date = new Date(time);
            return formatDate(date, 'yyyy-MM-dd hh:mm');
        }
    },
  methods:{
    appraise:function(index){
      this.index=index;
      if(this.index==1){
        this.notappa=true
        this.notappb=false
      }else{
        this.notappb=true
        this.notappa=false
      }
    }
  },
  data() {
    return {
      index:1,
      notappb:false,
      notappa:true,
      details:[]
    };
  },
  components: { member }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.clear:after{               /*清除浮动*/
    content: '';
    display: block;
    clear: both;
}
  .assess{
    width:875px;
    height:34px;
    border-bottom:2px solid #e9e9e9;
    float: left;
    margin-top:-474px;
    margin-left:541px;
    div{
    width:121px;
    height: 34px;
    color:#abcfe9;
    border-bottom:2px solid #2693d4;
    line-height:34px;
    text-align:center;
    }
  }
 .content{
    width:909px;
    border:2px solid #ccc;
    float: left;
    margin-top:-411px;
    margin-left:521px;
    .details{
      width:100%;
      height:144px;
      background:#fff;
      .box{
        width:101px;
        height:93px;
        margin-left:10px;
        margin:25px 10px;
        background:#fff;
        border-bottom:0;
        div{
          background:#fff;
          width:100%;
          height:46px;
          margin-top:0;
          border:0;
          color:#000;
        }
      }
      .infor{
        .box;
        width:186px;
        margin:0;
      }
      .time{
        .box;
        width:283px;
        line-height:102px;
        color:#000;
          .date{
            width:144px;
            height:39px;
            border:1px solid #000;
            margin-top:-72px;
            margin-left:179px;
          }
      }
      button{
        width:115px;
        height:39px;
        border:1px solid #2392d7;
        border-radius:4px;
        margin-left:140px;
        margin-top:55px;
        background:#fff;
        color:#2392d7;
      }
      }
    div{
    border-bottom:2px solid #e9e9e9;
    width:909px;
    height:43px;
    background:#f7f7f7;
    div{
    text-align:center;
    line-height:43px;
    color:#fff;
    position: relative;
    width: 107px;
    height:43px;
    background:#2693d4;
    float:left;
        }
    .notapp{
    margin-top:-1px;
    border-bottom:2px solid #2693d4;
    }
 .havebeen{
    text-align:center;
    line-height:43px;
    color:#000;
    background:#f7f7f7;
    border-bottom:0;
 }
      }
    }
    .notappa{
    position: absolute;
    width: 0;
    height: 0;
    border: 8px solid transparent;
    border-top-color: #2693d4;
    margin-top:42px;
    margin-left:-65px;
    }
    .notappb{
    .notappa;
    }
 .top{
   margin-top:233px;
   margin-left: -64px;
 }
</style>
