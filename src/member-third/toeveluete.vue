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
            <div class='deta'  v-for='(product,abj) in products' :key='product.rData'>
              <div class='name'><div>{{product.id}}</div></div>
              <div class='unit'><div>{{product.level}}</div></div>
              <div class='num'><div>{{product.name}}</div></div>
              <div class='sum'><div >{{product.parentId}}</div></div>
              <div class='state'><div>{{product.regionCode}}</div></div>
              <div class='operation'>
                <div>
                  <a href="#/line_item"><input type="submit" class='pay' value="付款"></a>
                  <input type="submit" class = 'delet' value="删除订单" @click="alert">
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
     <div class='aaa' v-show='show'>
      <div class='hint'>
        <div class='infor'>
            <div class='for'>信息</div>
            <div class='err' @click='hide'>x</div>
        </div>
        <div class='information'>确认删除订单吗</div>
        <div class='ok'>
          <input type="submit" value='确定' :class='index==1?"color":""' @mouseenter='submit(1)' @click='hidedate'>
          <input type="submit" value='取消' :class='index==2?"color":""' @mouseenter='submit(2)' @click='hide'>
        </div>
      </div>
     </div>
    </div>
</template>
<script>
import member from "../views/sinda_member";
export default {
  methods:{
      hidedate:function(){
        this.show = false
        this.products.splice(this.abj,1)
      },
      hide:function(){
        this.show = false
      },
      alert:function(){
        this.show = true
      },
      submit:function(index){
        this.index=index;
      }
  },
  created(){
    var that = this;
    this.ajax.post('/xinda-api/common/select-region',{}).then(function(data){
      var rData = data.data.data;
      // that.products = rData;
      that.products.push(rData);
    })
    },

  data() {
    return {
      products:[],
      pay:false,
      index:'',
      show:false,
      abj:'',
      }
},
  components: { member },

};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.aaa{
  width:100%;
  height:100%;
  left: 0;
  top:0;
  position: fixed;
  filter:alpha(opacity=0);
}
.information{
  height:92px;
  line-height: 105px;
  text-indent:90px;

}
.ok{
  margin-left:24px;
  input{
    background:#fff;
    border:1px solid #e7e7e7;
    width:115px;
    height:30px;
    margin-left:10px;
  }
  .color{
  background:#2693d4;
  color:#fff;
}
}

.for{
  float:left;
  width:40px;
  height: 32px;
  line-height:32px;
  font-size:12px;
  font-weight:700;
  text-indent:10px;
}
.err{
  float:right;
  width:24px;
  height: 32px;
  line-height:32px;
}
.infor{
  height: 32px;
  background:#e8e8e8;
}
.hint{
  width:306px;
  height: 176px;
  float:left;
  margin-top:128px;
  margin-left:589px;
  background:#fff;
  border:1px solid #000;
}
.pay{
  margin-top:0px;
  margin-left:92px;
  background:#2693d4;
  color:#fff;
  width:56px;
  height:24px;
  border:2px solid #2693d4;
}
.delet{
  margin-top:0px;
  margin-left:92px;
  background:#fff;
  border:0;
  color:red;
}
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
   display: flex;
   width:935px;
   background:#fff;
   font-weight:400;
   border:1px solid #e8e8e8;
     div{
    line-height:35px;
    float:left;
    div{
      float:right;
    }
 }
  .name{
    width:85px;
    margin-top:2%;
  }
  .unit{
    width:301px;
    margin-top:2%;
  }
  .num{
    width:114px;
    margin-top:2%;
  }
  .sum{
    width:127px;
    margin-top:2%;
  }
  .state{
    width:141px;
    margin-top:2%;
  }
  .operation{
    width:136px;
  }
 }
</style>
