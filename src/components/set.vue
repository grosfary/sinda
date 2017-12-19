<template>
  <div class="hello">
    <div class='head'>
        账户设置
    </div>
    <div class='header'>
        账户设置
    </div>
    <div class='content'>
      <div>
        <ul>
<<<<<<< HEAD
          <li class='portrait'>当前头像：<div><img src="../assets/pc/u5086.jpg" alt=""></div></li>
          <li>姓名：<input type="text"></li>
          <li>性别：<input type="radio" name='radio'>男<input type="radio" name='radio' class='girl'>女</li>
          <li>邮箱：<input type="text"></li>
          <li>所在地区：</li>
=======
          <li class='portrait'><p class='area'>当 前 头 像：<span></span></p><div><img src="../../images/pc/u5086.png" alt=""></div></li> 
          <li><p class='areas'>姓 名：</p><input type="text"  class='input'></li> 
          <li class='areassex'><div class='areas'>性 别：</div><input type="radio" name='radio' checked="checked">男<input type="radio" name='radio' class='girl'>女</li> 
          <li><div class='areas'>邮 箱：</div><input type="text" class='input'></li> 
          <li><div class='area'>所 在 地 区：</div><dist @selected="selected" id='dist'></dist></li> 
>>>>>>> 6c3e6ca60ea08116f9e8c3e19d2919511be7e864
        </ul>
      </div>
    </div>
    <div><input type="submit" value='保存' class='keep'></div>
    <div class='boundary'></div>
       <div class='header'>
        修改密码
    </div>
    <div class='content'>
      <div>
        <ul>
          <li><div class='areas password'>旧密码：</div><input type="password"  class='input'></li>
          <li><div class='areas password'>新密码：</div><input type="password"  class='input'></li>
          <li><div class='areas repeat'>再次输入新密码：</div><input type="password" class='input'></li>
        </ul>
      </div>
    </div>
    <div><input type="submit" value='保存' class='keep'></div>
    <div class='boundary'></div>
  </div>
</template>

<script>
    import dist from "../components/distpicker"
    export default {
      data() {
        return {
          code:'',
          distCode:''
        };
      },
        components: { dist },
        methods:{
            selected(code){
            this.disCode = code;
          }
    }
    }

</script>

<style scoped lang="less">
    .hello{
      font-size:22px;
    input{
      border:1px solid #b0b0b0;
      height: 0.32rem;
      margin-top: 0.1rem;
    }
    .input{
      width:90%;
    }
    .keep{
      margin-left:1.2rem;
      width:20%;
      color:#2693d4;
      background:#fff;
      border:2px solid #2693d4;
      border-radius: 0.04rem;
    }
    }
    .head{
      width:100%;
      height:0.82rem;
      text-align:center;
      line-height:0.82rem;
      background:#e9e9e9;
      white-space:nowrap; 
    }
    .header{
      width:90%;
      height:0.82rem;
      margin:0 auto;
      font-size:22px;
      line-height:1.2rem;
      white-space:nowrap; 
      background:#fff;
      border-bottom:2px solid #2693d4;
    }
    .content{
      width:90%;
      margin:0 auto;
      div{
        width:68%;
        margin:0 auto;
        .area{
          width:46%;
          margin-left:-0.65rem;
        }
        .areas{
          width:56%;
          margin-left:-0.4rem;
        }
        .password{
          width:103%;
        }
        .repeat{
          margin-left:-0.7rem;
          width:106%;
        }
        .areassex{
          width:81%;
          line-height:0.5rem;
        }
      ul{
        text-align-last: justify;
        li{
          font-size:0.22rem;
          margin-top:0.12rem;
          white-space:nowrap; 
          display:flex;
        div{
          select{
            option{
              font-size:22px;
            }
          }
        }
        }
      }
    }
  }
    .girl{
      margin-left:0.3rem;
    }
    .portrait{
        line-height:0.99rem;
        white-space:nowrap; 
        display: -webkit-inline-box;
        div{
        width:0.99rem;
        height:0.99rem;
        margin:0 0.1rem;
        img{
          width:100%;
          height:100%;
        }
  }
}
.boundary{
  width:100%;
  height: 0.07rem;
  margin-top:0.28rem;
  background:#dfdfdf;
}
     @media screen and (max-width: 439px) {
    .hello{
      width:380px;
      height:671px;
      
    }
}
</style>
<style lang="less">
     #dist{
       select{
          font-size:0.16rem;
          width:45%;
         option{
            font-size:0.16rem;
            width:10px;
            height:1rem;
         }
       }
     }
</style>