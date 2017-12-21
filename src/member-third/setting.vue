<template>
    <div class="hello">
      <div class="top">
        <div class='assess'>
          <div>账户设置</div>
        </div>
        <div class='password'>
          <a href="#/member/modify"><div>修改密码</div></a>
        </div>
        <div class='clear'>
          <div class='head'>
            <span>当前头像：</span>
            <div class='imt'><img v-bind:src="src" alt=""></div>
            <input type="file" id='video' capture='camcorder' class='photo' v-on:change="uploadFile($event)">
          </div>
          <div class='name'>
              <span>姓名：</span>
              <input type="text" placeholder="请输入姓名" v-model="name" @blur='names'>
              <p class='namt' v-show="namt">姓名不能为空</p>
          </div>
          <div class='sex'>
              <span>性别：</span>
              <input type="radio" name='sex' checked='true'  @click='sexo'>
              <span>男</span>
              <input type="radio" name='sex' @click='sext'>
              <span>女</span>
          </div>
          <div>
              <div class='postbox'>
              <span>邮箱：</span>
              <input type="text" placeholder="请输入邮箱地址"  v-on:keyup='key' v-model='post'>
              <p class='box' v-show="box">邮箱格式不正确</p>
          </div>
          </div>
          <div class='area'>
              <span>所在地区：</span>
              <dist @selected="selected"></dist>
          </div>
          <div class='keep'>
              <input type="submit" @click='submit'>
          </div>
        </div>
      </div>
        
    </div>
</template>
<script>
import dist from "../components/distpicker";
import member from "../views/sinda_member";
export default {
  data() {
    return {
      post: "",
      box: false,
      name: "",
      namt: false,
      code: "",
      value: 1,
      distCode: "",
      src: "../../images/pc/u5086.png"
    };
  },
  components: { member, dist },
  methods: {
    selected(code) {
      this.distCode = code;
    },
    sexo: function() {
      this.value = 1;
    },
    sext: function() {
      this.value = 2;
    },
    key: function() {
      var reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
      if (reg.test(this.post)) {
        this.box = false;
      } else {
        this.box = true;
      }
    },
    nam: function() {
      if (this.name == "") {
        this.box = true;
      } else {
        this.box = false;
      }
    },
    names: function() {
      if (this.name == "") {
        this.namt = true;
      } else {
        this.namt = false;
      }
    },
    submit: function() {
      var that = this;
      if (this.name == "") {
        this.namt = true;
      } else if (this.post == "") {
        this.box = true;
      } else {
        alert("登陆成功");
        this.ajax
          .post(
            "/xinda-api/member/info",
            this.qs.stringify({
              name: this.name,
              gender: this.value,
              email: this.post,
              regionId: this.distCode
            })
          )
          .then(function(data) {});
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
          console.log("//Firefox7.0" + imgURL);
        } catch (e) {
          //Firefox8.0以上
          imgURL = window.URL.createObjectURL(file);
          console.log("//Firefox8.0以上" + imgURL);
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
.clear:after {
  /*清除浮动*/
  content: "";
  display: block;
  clear: both;
}
.backe {
  background: #e9e9e9;
}
.hello {
  font-size: 13px;
}
.assess {
  width: 875px;
  height: 34px;
  border-bottom: 2px solid #e9e9e9;
  float: left;
  margin-top: -474px;
  margin-left: 541px;
  div {
    width: 86px;
    height: 34px;
    color: #abcfe9;
    border-bottom: 2px solid #2693d4;
    line-height: 34px;
    text-align: center;
  }
}
.password {
  color: #e9e9e9;
  .assess;
  width: 789px;
  margin-left: 627px;
  div {
    border-bottom: 2px solid #e9e9e9;
    color: #000;
  }
}
.head {
  width: 192px;
  height: 98px;
  margin-top: -415px;
  margin-left: 539px;
  float: left;
  position: relative;
  .photo {
    position: absolute;
    top: 34%;
    left: 94%;
    width: 29%;
    height: 20%;
    font-size: 0.11rem;
    border: 0;
  }
  span {
    line-height: 98px;
  }
}
.name {
  width: 276px;
  height: 27px;
  margin-top: -291px;
  margin-left: 541px;
  float: left;
  input {
    width: 183px;
    height: 23px;
    margin-left: 30px;
  }
}
.sex {
  width: 276px;
  height: 27px;
  margin-top: -238px;
  margin-left: 541px;
  float: left;
  span {
    line-height: 27px;
  }
  input {
    margin-left: 30px;
  }
}
.postbox {
  .name;
  margin-top: -196px;
}
.area {
  .name;
  margin-top: -146px;
  width: 374px;
  .picker {
    margin-top: -25px;
    margin-left: 74px;
    width: 700px;
  }
}
.keep {
  .name;
  margin-top: -75px;
  input {
    width: 70px;
    height: 26px;
    margin-left: 75px;
    background: #fff;
    border: 2px solid #2793d3;
    border-radius: 4px;
  }
}
.box {
  width: 100px;
  margin-top: -24px;
  margin-left: 275px;
  color: red;
}
.namt {
  .box;
}
.imt {
  width: 97px;
  height: 97px;
  margin-top: -100px;
  margin-left: 73px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 73px;
  }
}
.top {
  margin-top: 233px;
  margin-left: -64px;
}
</style>
<style lang="less">
.hello > .top > div > .area > div {
  height: 28px;
  margin-top: -27px;
  padding-bottom: 1px;
  margin-left: 74px;
}
</style>
