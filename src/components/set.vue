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
              <input type="file" id='video' capture='camcorder' class='photo' v-on:change="uploadFile($event)">
              </div></li> 
          <li><p class='areas'>姓　　名：</p><input type="text" class='input' v-model='area'></li> 
          <p class='name' v-show="name">请输入姓名</p> 
          <li class='areassex'><div class='areas'>性　　别：</div><input type="radio" name='radio' checked="checked" @click='sex(1)'>男 
          <input type="radio" name='radio' class='girl' @click='sex(2)'>女</li> 
          <li><div class='areas'>邮　　箱：</div>
              <input type="text" class='input' placeholder="请输入邮箱地址"  @blur='key' v-model='post'>
          </li> 
          <li><div class='area'>所在地区：</div><dist @selected="selected" id='dist' v-model='zone'></dist></li>
          <p class='box' v-show="box">邮箱格式不正确</p> 
          <p class='dist' v-show="dist">请输入所在地区</p> 
        </ul>
      </div>
    </div>
    <div class='center'><input type="submit" value='保存' class='keep'  @click='keep'></div>
    </div>
    <div class='boundary'></div>
       <div class='header'>
        修改密码
    </div>
    <div class='stance'>
    <div class='content'>
      <div>
        <ul>
          <li><div class='areas password'>旧　　密　　码：</div><input type="password"  class='input' v-model='password'></li>
          <p class='none' v-show='sty'>旧密码错误</p>
          <li><div class='areas password'>新　　密　　码：</div><input type="password"  class='input' @blur='abl' v-model='place'></li>
          <p class='new' v-show='style'>请输入新密码</p>
          <li><div class='areas repeat'>再次输入新密码：</div><input type="password" class='input' v-model='fal'></li>
           <p class='newnone' v-show='nostyle'>新旧密码不一致</p>
        </ul>
      </div>
    </div>
    <div class='center'><input type="submit" value='保存' class='keep' @click='arr'></div>
    </div>
    <div class='boundary'></div>
  </div>
</template>

<script>
import dist from "../components/distpicker";
var md5 = require('md5')
export default {
  data() {
    return {
      code: "",
      distCode: "",
      box: false,
      dist: false,
      name: false,
      post: "",
      zone: "",
      src: "../../images/pc/u5086.png",
      area:'',
      disCode:'',
      index:1,
      sty:false,
      style:false,
      nostyle:false,
      place:'',
      fal:'',
      password:''
    };
  },
  components: { dist },
  methods: {
      selected(code) {
      this.distCode = code;
    },
    selected(code) {
      this.disCode = code;
    },
    key: function() {
      var reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
      if (reg.test(this.post)) {
        this.box = false;
      } else {
        this.box = true;
      }
    },
    abl:function(){
      var that=this
        if(this.place==''){
            this.style=true;
        }else{
           this.style=false;
        }
    },
        arr:function(){
      var that=this;
      if(this.password==''){//判断旧密码是否输入
          this.sty=true;
      }else if(this.place==''){//判断新密码是否输入
        this.sty=false;
        this.style=true
      }else if(this.place!==this.fal){//判断新密码与再次输入是否相同
             this.sty=false;
             this.style=false;
             this.nostyle=true;
          }else{
             this.nostyle=false;
             this.ajax.post(
                '/xinda-api/sso/change-pwd',
                 this.qs.stringify({
                 oldPwd:md5(this.password),
                 newPwd:md5(this.place)
              })
            ).then(function(data){
                if(data.data.msg =='旧密码错误'){
                  that.password=[]
                  that.sty=true;
                }else{
                  alert('登陆成功')
                }
              })
         
        }
    },
    sex: function(index){
        this.index = index;
    },
    keep:function(){
      if(this.area != ''){
            this.name=false;
          if(this.post!=''){
            if(this.box!=true){
                if(this.disCode!=''&&this.disCode!='0'){
                  this.dist=false;
                  this.ajax.post('/xinda-api/member/update-info',this.qs.stringify({
                        name:this.area,
                        gender:this.index,
                        email:this.post,
                        regionId:this.disCode
                  })).then(
                    function(data){
                      console.log(data)
                    }
                  )
                }else{
                  this.dist=true;
                }
              }
          }else{
           this.box=true;
          }
      }else{
            this.name=true;
      }
    },
    uploadFile: function($event) {
      // console.log('imgurl==',this.getImgURL($event.target));
      this.src = this.getImgURL($event.target);
    },
    getImgURL(node) {
      var imgURL = "";
      try {
        var file = null;
        if (node.files && node.files[0]) {
          file = node.files[0];
        } else if (node.files && node.files.item(0)) {
          file = node.files.item(0);
        }
        // console.log(file,123);
        // imgRUL = window.URL.createObjectURL(file);
        
        //  console.log("//Firefox8.0以上",imgURL);
        //Firefox 因安全性问题已无法直接通过input[file].value 获取完整的文件路径
        try {
          //Firefox7.0
          imgURL = file.getAsDataURL();
          console.log("//Firefox7.0"+imgURL);
        } catch (e) {
          //Firefox8.0以上
          imgURL = window.URL.createObjectURL(file);
          console.log("//Firefox8.0以上"+imgURL);
        }
      } catch (e) {
        //这里不知道怎么处理了，如果是遨游的话会报这个异常
        //支持html5的浏览器,比如高版本的firefox、chrome、ie10
        if (node.files && node.files[0]) {
          var reader = new FileReader();
          reader.onload = function(e) {
            imgURL = e.target.result;
          };
          reader.readAsDataURL(node.files[0]);
        }
      }
      //imgurl = imgURL;
      // creatImg(imgRUL);
      return imgURL;
    }
  }
};
</script>

<style scoped lang="less">
  input[type="file"] {
    color: transparent;
  }
.center {
  width: 100%;
  text-align: center;
  margin-top: 0.2rem;
}

.hello {
  font-size: 0.22rem;
  margin: 0 auto;
  input {
    border: 1px solid #b0b0b0;
    height: 0.42rem;
    margin-top: 0.1rem;
  }
  .input {
    width: 86%;
    margin-top: 0;
  }
  .keep {
    margin-left: 1.2rem;
    width: 20%;
    height: 0.55rem;
    color: #2693d4;
    background: #fff;
    border: 2px solid #2693d4;
    border-radius: 0.04rem;
  }
}
.head {
  width: 100%;
  height: 0.62rem;
  text-align: center;
  line-height: 0.62rem;
  background: #e9e9e9;
  white-space: nowrap;
}
.header {
  width: 90%;
  height: 0.82rem;
  margin: 0 auto;
  font-size: 0.22rem;
  line-height: 1.2rem;
  white-space: nowrap;
  background: #fff;
  border-bottom: 2px solid #2693d4;
}
.content {
  width: 90%;
  div {
    width: 69%;
    margin: 0 auto;
    .area {
      width: 36%;
      margin-left: -0.45rem;
    }
    .areas {
      width: 48%;
      margin-left: -0.45rem;
    }
    .password {
      width: 103%;
    }
    .repeat {
      width: 106%;
    }
    .areassex {
      width: 81%;
      line-height: 0.5rem;
    }
    ul {
      position: relative;
      li {
        font-size: 0.22rem;
        margin-top: 0.12rem;
        white-space: nowrap;
        display: flex;
        div {
          select {
            option {
              font-size: 0.22rem;
            }
          }
        }
      }
      .box {
        top: 65%;
        left: 105%;
        position: absolute;
        white-space: nowrap;
        color: red;
        font-size: 0.11rem;
        text-align-last: 0;
      }
      .name{
        .box;
        top:33%;
      }
      .dist{
        .box;
        top:93%;
        left:30%;
      }
      .none{
        .box;
        top:4%;
        left:104%;
      }
      .new{
        .box;
        top:42%;
        left:104%;
      }
      .newnone{
        .box;
        top:78%;
        left:104%;
      }
    }
  }
}
.girl {
  margin-left: 0.7rem;
}
.portrait {
  line-height: 0.99rem;
  white-space: nowrap;
  display: -webkit-inline-box;
  div {
    width: 0.99rem;
    height: 0.99rem;
    margin: 0 0.1rem;
    img {
      width: 100%;
      height: 100%;
      border-radius: 53px;
      overflow: hidden;
    }
  }
}
.boundary {
  width: 100%;
  height: 0.07rem;
  margin-top: 0.28rem;
  background: #dfdfdf;
}
.photofath {
  position: relative;
  .photo {
    position: absolute;
    top: 25%;
    left: 106%;
    width: 156%;
    height: 54%;
    font-size: 0.11rem;
    border:0;
  }
}
@media screen and (min-width: 400px) {
  .hello .content {
    margin: 0 auto;
    width: 380px;
  }
}
</style>
<style lang="less">
#dist {
  select {
    font-size: 0.16rem;
    height: 0.43rem;
    width: 45%;
    option {
      font-size: 0.16rem;
    }
  }
}
</style>