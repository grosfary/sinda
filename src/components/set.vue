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
          <li class='portrait'>当前头像：</li><div><img src="../../images/pc/u5086.jpg" alt=""></div>
          <li>姓名：</li><input type="text">
          <li>性别：</li><input type="radio" name='radio'>男<input type="radio" name='radio' class='girl'>女
          <li>邮箱：</li><input type="text">
          <li>所在地区：</li><v-distpicker></v-distpicker>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    import dist from "../components/distpicker"
    export default {
      components: { VDistpicker },
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
        width:50%;
        margin:0 auto;
      ul{
        li{
          font-size:0.22rem;
          margin-top:0.12rem;
          white-space:nowrap; 


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
        margin:0 0;
        img{
          width:100%;
          height:100%;
        }
  }
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
            height:1rem;
         }
       }
     }
</style>