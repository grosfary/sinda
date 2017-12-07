<template>
    <div class="hello">
      <div class='top'>
        <div class='assess'>
          <a href="#/member/setting"><div>账户设置</div></a>
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
            <input class='newpass' type="password" @blur='abl' v-model='place'>
            <p class='none' v-show='style'>请输入密码</p>
          </div>
          <div class='pass'>
            <span class='event'>再次输入新密码：</span>
            <input type="password" class='eventpass' v-model='fal'>
            <p class='distinct' v-show='nostyle'>密码输入不一致</p>
          </div>
          <div>
            <input type="submit" class='submit'  @click='arr'>
          </div>
        </div>
      </div>
        
    </div>
</template>
<script>
import member from "../views/sinda_member";
export default {
  data() {
    return {
      place:'',
      fal:'',
      style:false,
      nostyle:false
    };
  },
  components: { member },
   methods:{
    abl:function(){
      var that=this
        if(this.place==''){
            this.style=true;
        }else{
           this.style=false;
        }
    },
    arr:function(){
          if(this.place!==this.fal){
             this.nostyle=true;
          }else{
             this.nostyle=false;
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
   margin-top:208px;
   margin-left: -64px;
 }
</style>
