<template>
    <div class="hello">
        <div class='assess'>
          <div>我的订单</div>
        </div>
        <div class='order'>
          <div class='ordero'>
            <div class='ordert'>订单号：</div>
            <div class='ordert'>创建时间：</div>
          </div>
          <div class='inputf'>
            <div>
              <input type="text" class='input' placeholder="请输入订单号查询">
              <input type="submit" class='submit'>
              </div>
            <div class='date'><input type="date"><input type="date" class='data'></div>
          </div>
        </div>
     
    </div>
</template>
<script>
import memober from "../views/sinda_memober";
export default {
  data() {
    return {};
  },
  components: { memober }
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
    width:111px;
    height: 34px;
    color:#abcfe9;
    border-bottom:2px solid #2693d4;
    line-height:34px;
    text-align:center;
    }
   
  }
  .order{
    width:877px;
    height: 114px;
    border:1px solid #000;
    float:left;
    margin-top:-438px;
    margin-left:541px;
    .ordero{
      width:77px;
      height:114px;
      line-height:57px;
      font-size:13px;
      color:#676767;
      text-indent:6px;
      .ordert{
        width:77px;
        height:57px;
      }
    }
  }
  .inputf{
  float:left;
  margin-top:-99px;
  margin-left:77px;
  }
.input{
  width:265px;
  height:25px;
  float:left;
}
.submit{
  width:71px;
  height:27px;
  margin-left:13px;
  color:#75b2ef;
  background:#fff;
  border:1px solid #2693d4;
  border-radius:2px;
}
.date{
  width:287px;
  height: 26px;
  margin-top:30px;
  .data{
    margin-left:16px;
  }
}
</style>