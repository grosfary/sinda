<template>
  <div class="hello">
    <div class='head'>
        账户设置
    </div>
    <div class='header'>
        账户设置
    </div>
    <div class='stance'>
    <div class='content'>
      <div>
        <ul>
          <li class='portrait'>
            <p class='area'>当前头像：<span></span></p>
            <div class='photofath'>
              <img v-bind:src="src">
              <input type="file" id='video' capture='camcorder' class='photo' v-on:change="uploadFile($event)" >
              </div></li> 
          <li><p class='areas'>姓　　名：</p><input type="text"  class='input'></li> 
          <li class='areassex'><div class='areas'>性　　别：</div><input type="radio" name='radio' checked="checked">男<input type="radio" name='radio' class='girl'>女</li> 
          <li><div class='areas'>邮　　箱：</div>
              <input type="text" class='input' placeholder="请输入邮箱地址"  v-on:keyup='key'v-model='post'>
          </li> 
          <li><div class='area'>所在地区：</div><dist @selected="selected" id='dist'></dist></li>
          <p class='box' v-show="box">邮箱格式不正确</p> 
        </ul>
      </div>
    </div>
    <div class='center'><input type="submit" value='保存' class='keep'></div>
    </div>
    <div class='boundary'></div>
       <div class='header'>
        修改密码
    </div>
    <div class='stance'>
    <div class='content'>
      <div>
        <ul>
          <li><div class='areas password'>旧　　密　　码：</div><input type="password"  class='input'></li>
          <li><div class='areas password'>新　　密　　码：</div><input type="password"  class='input'></li>
          <li><div class='areas repeat'>再次输入新密码：</div><input type="password" class='input'></li>
        </ul>
      </div>
    </div>
    <div class='center'><input type="submit" value='保存' class='keep'></div>
    </div>
    <div class='boundary'></div>
  </div>
</template>

<script>
    import dist from "../components/distpicker"
    export default {
      data() {
        return {
          code:'',
          distCode:'',
          box:false,
          post:'',
          src:'../../images/pc/u5086.png'
        };
      },
        components: { dist },
        methods:{
            selected(code){
            this.disCode = code;
          },
          key:function(){
            var reg =/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
                if(reg.test(this.post)){
                  this.box=false;
                }else {
                  this.box=true;
              }
          },
          uploadFile:function($event){
              console.log($event.target.files)
          }
    }
    }

</script>

<style scoped lang="less">
    .center {
      width:100%;
      text-align:center;
      margin-top: 0.2rem;
    }

    .hello{
      font-size:22px;
      margin:0 auto;
    input{
      border:1px solid #b0b0b0;
      height: 0.32rem;
      margin-top: 0.1rem;
    }
    .input{
      width:86%;
            margin-top: 0;
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
      height:0.62rem;
      text-align:center;
      line-height:0.62rem;
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
          width:41%;
          margin-left:-0.45rem;
        }
        .areas{
          width:48%;
          margin-left:-0.45rem;
        }
        .password{
          width:103%;
        }
        .repeat{
          width:106%;
        }
        .areassex{
          width:81%;
          line-height:0.5rem;
        }
      ul{
        position: relative;
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
        .box{
          top:70%;
          left:105%;
          position: absolute;
          white-space:nowrap; 
          color:red; 
          font-size:0.11rem;
          text-align-last: 0;        
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
  .photofath{
    position: relative;
    .photo{
      position: absolute;
      top:25%;
      left:106%;
      width:70%;
    }
  }
     @media screen and (min-width: 400px) {
    .hello .content{
      width:380px;      
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