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
          <li class='portrait'>当前头像：<div><img src="../../images/pc/u5086.jpg" alt=""></div></li>
          <li>姓名：<input type="text"></li>
          <li>性别：<input type="radio" name='radio'>男<input type="radio" name='radio' class='girl'>女</li>
          <li>邮箱：<input type="text"></li>
          <li>所在地区：</li>
        </ul>
      </div>
    </div>
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
    .head{
      width:100%;
      height:0.82rem;
      font-size:22px;
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
        width:50%;
        margin:0 auto;
      ul{
        li{
          font-size:0.22rem;
          margin-top:0.12rem;
          white-space:nowrap; 
          display: flex;
        div{
          select{
            option{
              font-size:22px;
            }
          }
        }
          input{
            border:1px solid #b0b0b0;
          }
        }
        .portrait{
          line-height:0.99rem;
          white-space:nowrap; 
          display: -webkit-inline-box;
          div{
          width:0.99rem;
          height:0.99rem;
          margin:0 0;
            img{
              width:100%;
              height:100%;
            }
          }
        }
      }
    }
  }
    .girl{
      margin-left:0.3rem;
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
          font-size:0.2rem;
         option{
            font-size:0.2rem;
                     width:10px;

         }
       }
     }
</style>