<template>
    <div class="hello">
      <div class="top">
        <div class='assess'>
          <div>我的评价</div>
        </div>
        <div class='content'>
          <div>
            <div class='notapp'>未评价</div>
            <a class='notappa'></a>
            <div class='havebeen'>已评价</div>
            <a class='notappb'></a>
          </div>
        </div>
      </div>
        
    </div>
</template>
<script>
import member from "../views/sinda_member";
export default {
  data() {
    return {};
  },
  components: { member }
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
    width:121px;
    height: 34px;
    color:#abcfe9;
    border-bottom:2px solid #2693d4;
    line-height:34px;
    text-align:center;
    }
  }
 .content{
    width:949px;
    height: 194px;
    border:2px solid #ccc;
    float: left;
    margin-top:-411px;
    margin-left:521px;
    div{
    border-bottom:2px solid #e9e9e9;
    width:949px;
    height:43px;
    background:#f7f7f7;
    div{
    text-align:center;
    line-height:43px;
    color:#fff;
    position: relative;
    margin-left:-2px;
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
    display:none;
    }
 .top{
   margin-top:233px;
 }
</style>
