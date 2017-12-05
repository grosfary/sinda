<template>
    <div class="hello">
      <div class='top'>
        <div class='assess'>
          <div>账户设置</div>
        </div>
        <div class='passworld'>
          <div>修改密码</div>
        </div>
        <div>
          <div class='oldpassworld'>
            <span class='old'>旧密码：</span>
            <input type="password">
          </div>
          <div class='newpassworld'>
            <span class='new'>新密码：</span>
            <input class='newpass' type="password" @blur='abl'>
            <p class='none'>请输入密码</p>
          </div>
          <div class='pass'>
            <span class='event'>再次输入新密码：</span>
            <input type="password" class='eventpass'>
            <p class='distinct'>密码输入不一致</p>
          </div>
          <div>
            <input type="submit" class='submit'  v-on:click='arr'>
          </div>
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
  components: { memober },
   methods:{
    abl:function(){
        var none = document.querySelector('.none');
        var newpass = document.querySelector('.newpass');
        if(newpass.value==''){
            none.style.display='block'
        }else{
           none.style.display='none'
        }
    },
    arr:function(){
        var eventpass = document.querySelector('.eventpass');
        var distinct = document.querySelector('.distinct');
        var newpass = document.querySelector('.newpass');
          if(newpass.value!==eventpass.value){
              distinct.style.display = 'block';
          }else{
              distinct.style.display = 'none';
          }
    }

  }
};

    
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.backe{
        background:#e9e9e9;
}
.hello{
  font-size:13px;
  float:left;
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
    color:#000;
    border-bottom:2px solid #e9e9e9;
    line-height:34px;
    text-align:center;
    }
  }
  .passworld{
    .assess;
      width:789px;
      margin-left:627px;
      div{
        color:#2693d4;
        border-bottom:2px solid #2693d4;
      }
  }
  .oldpassworld{
    width:329px;
    height:27px;
    line-height:27px;
    margin-top:-415px;
    margin-left:541px;
    float:left;
    input{
    margin-left: 81px;
    width:184px;
    height:27px;
    }
  }
  .newpassworld{
    .oldpassworld;
    margin-top:-368px;
  }
  .pass{
    .oldpassworld;
    margin-top:-323px;
    input{
    margin-left:30px;
    }
    .distinct{
      width:100px;
      margin-top:-30px;
      margin-left:349px;
      color:red;
      display:none;
    }
  }
  .submit{
    .oldpassworld;
    width:69px;
    height: 25px;
    background:#fff;
    border:2px solid #2693d4;
    border-radius:4px;
    margin-top:-269px;
    margin-left:679px; 
    line-height:23px;
  }
  .none{
    .pass>.distinct;
  }
   .top{
   margin-top:233px;
 }
</style>
