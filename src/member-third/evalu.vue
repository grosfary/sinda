<template>
    <div class="hello">
      <div class="top clear">
        <div class='assess'>
          <div>我的评价</div>
        </div>
        <div class='content'>
          <div>
            <a href="#/member/myYing"><div class='havebeen'>未评价</div></a>
            <a class='notappa' v-show = 'notappa'></a>
            <div class='notapp'  :class='index==1?"notapp":"havebeen"' @click='appraise(1)'>已评价</div>
            <a class='notappb' v-show='notappb'></a>
          </div>
          <div class='details' v-for='product in products' :key='product.rData'>
            <div class='box'></div>
            <div class='infor'>
              <div></div>
              <div>服务单号：</div>
              <div>购买内容：</div>
            </div>
            <div class='time'>购买时间：<div class='date'>{{1491263493000 | formatDate}}</div></div>
            <button>已评价</button>
          </div>
           <div class='inputcopy' v-show='ned'>
            <input type="submit" class='previous' value='上一页' @click='previous'>
            <div :class='col==bum?"page":"pages"' v-for='(button,bum) in buttons' :key='button' @click = 'skip(bum)'>{{button}}</div>           
            <input type="submit" class='next' value='下一页' @click='next'>
          </div>
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
        '/xinda-api/service-order/grid'
        ,{
          // startTime:this.changes,
          // endTime:this.onchanges--S1712130636102806089
          businessNo:'S1712130642023214030'
        }).then(
          function(data){
         that.rData = data.data.data;//所需的数据
         console.log(that.rData.length)
        // that.products = rData;
        if(that.rData.length>2){//判断数据长度是否大于2
        that.ned=true;
          var arr = []
          arr.push(that.rData[0]);//一二条数据相加
          arr.push(that.rData[1]);
          that.products=arr;
          var numeral = Math.ceil(that.rData.length/2);//判断应该产生多少按钮
          for(let i=1;i<=numeral;i++){//循环button按钮
              that.buttons.push(i)//每个按钮编号
            }
          that.abb=numeral;//按钮号
        }else{
          that.products=that.rData;//小于二时，将所有数据添加
          that.ned=false;
        console.log(that.products)
        }
      })
  },
       filters: {
        formatDate(time) {
            var date = new Date(time);
            return formatDate(date, 'yyyy-MM-dd hh:mm');
        }
    },
      methods:{
      previous:function(){
        if(this.col==0){
          this.col = 0;
        }else{
          this.col=this.col-1;
            var array=[];
           this.product = [];//清除数据
            if(this.abb*2-1==this.col){//判断products里元素是否跟要加入数组的最后一个元素相同
              array.push(this.rData[this.abb*2-2])//添加数据
            }else{
              array.push(this.rData[(this.col+1)*2-2]);
              array.push(this.rData[(this.col+1)*2-1]);//添加数据
            }
              this.products=array;//将所有数据添加
        }
      },
      next:function(){
        if(this.col==this.abb-1){
          this.col=this.col;
        }else{
          this.col=this.col+1;
            var array=[];
           this.product = [];//清除数据
            if(this.abb*2-1==this.col){//判断products里元素是否跟要加入数组的最后一个元素相同
              array.push(this.rData[this.abb*2-2])//添加数据
            }else{
              array.push(this.rData[(this.col+1)*2-2]);
              array.push(this.rData[(this.col+1)*2-1]);//添加数据
            }
              this.products=array;//将所有数据添加
        }
      },
         skip:function(bum){
           var array=[];
           this.product = [];//清除数据
            if(this.abb*2-1==this.bum){//判断products里元素是否跟要加入数组的最后一个元素相同
              array.push(this.rData[this.abb*2-2])//添加数据
            }else{
              array.push(this.rData[(bum+1)*2-2]);
              array.push(this.rData[(bum+1)*2-1]);//添加数据
            }
              this.products=array;//将所有数据添加
              this.col=bum
            },
  },
  data() {
    return {
      index:1,
      notappb:true,
      notappa:false,
      products:[],
      buttons:[],
      bum:'',
      abb:'',
      col:0,
      rData:[],
      ned:true
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
.contes{
    border:1px solid #ccc;
}
.content .inputcopy{
  display:flex;
  margin-top:36px;
  justify-content: center;
  background:#fff;
  input{
    background:#fff;
    border:1px solid #ccc;
  }
  .page{
  width:39px;
  height:34px;
  color:#2592d3;
  line-height:34px;
  margin-left:10px;
  text-indent:11px;
  border:1px solid #2592d3;
}
  .pages{
  width:39px;
  height:34px;
  color:#ccc;
  line-height:34px;
  margin-left:10px;
  text-indent:11px;
  border:1px solid #ccc;
}
}
.previous{
  width:68px;
  height:36px;
}
.next{
  .previous;
  margin-left:10px;
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
    float: left;
    margin-top:-411px;
    margin-left:521px;
    .details{
      border:1px solid #ccc;
      width:100%;
      height:153px;
      background:#fff;
      margin-top:5px;
      .box{
        width:101px;
        height:102px;
        margin-left:10px;
        margin:25px 10px;
        background:#fff;
        border-bottom:0;
          .date{
            width:144px;
            height:39px;
            border:1px solid #000;
            margin-top:-72px;
            margin-left:179px;
          }
        div{
          background:#fff;
          width:100%;
          height:51px;
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
      }
      button{
        width:115px;
        height:39px;
        border:1px solid #ccc;
        border-radius:6px;
        margin-left:140px;
        margin-top:55px;
        border:0;
        color:#fff;
      }
      }
    div{
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
