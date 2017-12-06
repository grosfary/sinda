<template>
    <div class="hello">
      <div class="top">
        <div class='assess'>
          <div>账户设置</div>
        </div>
        <div class='password'>
          <div>修改密码</div>
        </div>
        <div>
          <div class='head'>
            <span>当前头像：</span>
            <div class='imt'><img src="../assets/pc/u5086.jpg" alt=""></div>
          </div>
          <div class='name'>
              <span>姓名：</span>
              <input type="text" placeholder="请输入姓名">
          </div>
          <div class='sex'>
              <span>性别：</span>
              <input type="radio" name='sex'>
              <span>男</span>
              <input type="radio" name='sex'>
              <span>女</span>
          </div>
          <div>
              <div class='postbox'>
              <span>邮箱：</span>
              <input type="text" placeholder="请输入邮箱地址" class='post'  v-on:keyup='key' v-model='post'>
              <p class='box' v-show="box">邮箱格式不正确</p>
          </div>
          </div>
          <div class='area'>
              <span>所在地区：</span>
              <v-distpicker class='picker'></v-distpicker>
          </div>
          <div class='keep'>
              <input type="submit">
          </div>
        </div>
      </div>
        
    </div>
</template>
<script>
import VDistpicker from 'v-distpicker'
import member from "../views/sinda_member";
export default {
  data() {
    return {
      post:'',
      box:false
    };
  },
  components: { member,VDistpicker },
  methods:{
  key:function(){
    var reg =/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
      if(reg.test(this.post)){
        this.box=false;
      }else {
        this.box=true;
      }
  }
    }

};

</script>
<style scoped lang="less">
.backe{
        background:#e9e9e9;
}
.hello{
  font-size:13px;
}
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
  .password{
      color:#e9e9e9;
    .assess;
      width:789px;
      margin-left:627px;
      div{
        border-bottom:2px solid #e9e9e9;
        color:#000;
      }
  }
  .head{
    width:192px;
    height:98px;
    margin-top:-415px;
    margin-left:539px;
    float:left;
    span{
      line-height:98px;
    }
  }
  .name{
    width:276px;
    height:27px;
    margin-top:-291px;
    margin-left:541px;
    float:left;
    input{
      width:183px;
      height:23px;
      margin-left: 30px;
    }
  }
  .sex{
    width:276px;
    height:27px;
    margin-top:-238px;
    margin-left:541px;
    float:left;
    span{
      line-height:27px;
    }
    input{
      margin-left: 30px;
    }
  }
  .postbox{
    .name;
    margin-top:-196px;
  }
  .area{
    .name;
      margin-top:-146px;
      width:328px;
    .picker{
      margin-top: -25px;
      margin-left: 74px;
      width:700px;
    }
  }
  .keep{
    .name;
    margin-top:-75px;
    input{
      width:70px;
      height:26px;
      margin-left:75px;
      background:#fff;
      border:2px solid #2793d3;
      border-radius:4px;
    }
  }
  .box{
      width:100px;
      margin-top:-24px;
      margin-left:275px;
      color:red;
  }
      .imt{
        width:97px;
        height:97px;
        margin-top:-100px;
        margin-left:73px;
        img{
          width:100%;
          height:100%;
        }
      }
       .top{
           margin-top:233px;
          }
</style>
<style lang="less">
  .hello>.top>div>.area>.picker>select{
    height: 28px;
    padding-top: 1px;
    padding-bottom: 1px;
  }
</style>
