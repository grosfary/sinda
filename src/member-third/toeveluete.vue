<template>
    <div class="hello">
      <div class="top">
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
          <div class='details'>
            <div class='name'><div>商品名称</div></div>
            <div class='unit'><div>单价</div></div>
            <div class='num'><div>数量</div></div>
            <div class='sum'><div>总金额</div></div>
            <div class='state'><div>订单状态</div></div>
            <div class='operation'><div>订单操作</div></div>
          </div>
        <div>
          <div class='wares'>
              <input type='checkbox' class='checkbox'>
              <span>订单号：</span>
            <div>
              <span>下单时间：</span>
            </div>
          </div>
          <div>
            <div class='details'  v-for='product in products'>
              <div class='name'><div>{{products.id}}</div></div>
              <div class='unit'><div>{{products.level}}</div></div>
              <div class='num'><div>{{products.name}}</div></div>
              <div class='sum'><div >{{products.parentId}}</div></div>
              <div class='state'><div>{{products.regionCode}}</div></div>
              <div class='operation'><div>.submit</div></div>
            </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
</template>
<script>
import member from "../views/sinda_member";
export default {
  created(){
    var that = this;
    this.ajax.post('http://115.182.107.203:8088/xinda/xinda-api/common/select-region').then(function(data){
      var rData = data.data.data;
      that.products = rData;
      console.log(rData)
    })
    },

  data() {
    return {
      products:[]
      }
},
  components: { member },

};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .checkbox{
    margin-left:12px;
  }
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
.details{
  width:935px;
  height: 35px;
  background:#f7f7f7;
  font-weight:700;
  border:1px solid #2693d4;
  div{
    line-height:35px;
    float:left;
    div{
      float:right;
    }
  }
  .name{
    width:85px;
    height:35px;
  }
  .unit{
    width:301px;
    height:35px;
  }
  .num{
    width:114px;
    height:35px;
  }
  .sum{
    width:127px;
    height:35px;
  }
  .state{
    width:141px;
    height:35px;
  }
  .operation{
    width:136px;
    height:35px;
  }
}
 .top{
   margin-top:233px;
   margin-left:-64px;
 }
 .wares{
   .details;
   margin-top:12px;
   line-height:35px;
   font-weight:400;
   font-size:12px;
   border:1px solid #e8e8e8;
   div{
     width:200px;
   }
   input{
     margin-top:1px;
   }
 }
 .deta{
   .details;
   height:68px;
   background:#fff;
   border:1px solid #e8e8e8;
 }
</style>
