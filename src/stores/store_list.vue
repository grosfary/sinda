<template>
  <div class="body" style="width:1200px">

    <div class="header">
      <!--头部盒子-->
      <a href="http://localhost:8080/#/Join_Us">首页/店铺列表</a>
      <!--头部文字-->
      <div class="header-boxI">
        <span>服务区域</span>
        <!--服务区域-->
        <dist class="sanji"></dist>
        <!--三级联动-->
      </div>
      <div class="header-boxII">
        <!--产品类型标签盒子-->
        <span>产品类型</span>
        <p :class="{blue:show==true}" @click="changebgAll">所有</p>
        <div class="lages">
          <p :class="{blue:inner==name}" v-for="name in names" :key="name" @click="changebg(name)">
            <!--数据内容：二级标题-->
            {{name}}
          </p>
        </div>
      </div>
    </div>
    <div class="list">
      <!--产品列表盒子-->
      <div class="list-header">
        <!--列表头部-->
        <ul>
          <li>综合排序</li>
          <!--头部文字-->
          <li>价格↑↓</li>
          <li>接单数↑↓</li>
        </ul>
      </div>
      <div class="lister">
        <div class="lists" v-for="list in disStores" :key="list.id">
          <div class="image">
            <!--图片盒子-->
            <img :src="'http://115.182.107.203:8088/xinda/pic'+list.providerImg">
            <!--数据获取图片-->
          </div>
          <span></span>
          <p class="medal">金牌服务商</p>
          <!--金牌背景图-->
          <div class="lage">
            <!--数据获取文字信息-->
            <p>{{list.providerName}}</p>
            <p>信誉:★★★★★</p>
            <p>{{list.regionName}}</p>
            <p>累计客户服务次数:{{list.orderNum}}丨好评率：100%</p>
            <p class="thirdname" style="display:inline" v-for="pro in list.productTypes" :key="pro.id">{{pro}}</p>
          </div>
          <button @click="open(list.providerName,list.id,list.providerImg)">进入店铺</button>
          <!--点击按钮-->

        </div>
      </div>
    </div>
    <div class="footer">
      <!--底部按钮-->
      <button>上一页</button>
      <span>1</span>
      <button>下一页</button>
    </div>
  </div>

</template>

<script>
import sinda_header from "../components/sinda_global_header";
import dist from "../components/distpicker";//省市区三级联动插件
import sinda_footer from "../components/sinda_global_footer"; 
export default {
  // 数据获取
  created() {
    var that = this;
    this.ajax
      .post("http://115.182.107.203:8088/xinda/xinda-api/product/style/list")
      .then(function(data) {
        //数据地址
        var rData = data.data.data;
        // console.log(rData)
        var names = [];
        for (var key in rData) {
          //循环数据
          var name = rData[key].itemList;
          for (var j in name) {
            names.push(name[j].name); //提取二级标题
          }
          that.names = names;
        }
      });
    this.ajax
      .post("/xinda-api/provider/grid", {
        //数据地址
        start: 0, //数据参数
        limit: 6,
        productTypeCode: 10,
        regionId: 110102,
        sort: 1
      })
      .then(function(data) {
        var listt = data.data.data;
        for (var key in listt) {
          listt[key].productTypes = listt[key].productTypes.split(",");
        }
        that.listt = listt;
        that.disStores=listt;
      });
  },
  data() {
    return {
      names: [],
      listt: [],
      disStores:[],
      inner:"",
      show:true,
    };
  },
  components: { sinda_header, sinda_footer, dist },
  methods: {
    open: function(name, id, image) {
      this.$router.push({
        path: "/shop/service",
        query: { id: id, Name: name, img: image }
      });
    },
      changebg(name) {
      this.inner = name;
      this.show = false;
      var tempArr = [];
      for (var key in this.listt) {
        for (var i = 0; i < this.listt[key].productTypes.length; i++) {
          var codeDes = this.listt[key].productTypes[i];
          if (codeDes == this.inner) {
            tempArr.push(this.listt[key]);
            break;
          }
        }
      }
      this.disStores = tempArr;
    },
    changebgAll() {
      this.show = true;
      this.inner = "";
      this.disStores = this.listt;
    },

  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
.body {
  
  margin: auto;
  .header {
    .sanji {
      //三级联动位置调整
      margin-left: 100px;
      margin-top: -40px;
    }
    a {
      //a标签设置
      text-decoration: none; //下划线设置
      color: #000000; //颜色
      font-size: 15px; //字体大小
    }
    margin-left: 100px;
    margin-top: 15px;
    .header-boxI {
      //服务区域盒子样式
      height: 40px; //高
      // width: 90%; //宽
      margin-top: 10px; //距离顶部距离;
      background: #f7f7f7; //背景颜色
      border: 1px solid #cccccc; //设置边框
      .sanji {
        margin-top: -37px;
      }
      span {
        //字体设置
        font-size: 15px; //大小
        font-weight: bold; //加粗
        margin-right: 40px; //右边距
        line-height: 40px; //行高
        margin-left: 10px; //左边距
        border-right: 1px solid #ccc; //边框
        padding: 10px; //内边距
      }
    }
    .header-boxII {
      //产品类型盒子
      height: 40px; //高
      // width: 90%; //宽
      background: #f7f7f7; //背景颜色
      border: 1px solid #cccccc; //边框
      border-top: none; //下边框设置无
      .blue{
        background: #2693d4;
        border-radius: 10px;
        color:#fff;
      }
      .lages {
        //数据获取盒子
        margin-left: 200px;
        margin-top: -40px;
      }
      p {
        //数据获取的文字样式
        line-height: 40px; //行高
        text-align: center; //居中
        padding: 5px 20px; //内边距
        margin: 0 20px; //外边距
        display: inline; //设置行内元素
        margin-left: -35px; //左边距
        &:hover {
          //p标签hover事件
          color: #ffffff; //鼠标上浮字体颜色
          background: #2693d4; //鼠标上浮背景颜色
          line-height: 40px; //行高
          text-align: center;
          border-radius: 10px; //设置背景圆角
        }
      }
      span {
        //产品类型文字设置
        font-size: 15px; //字体
        font-weight: bold; //加粗
        margin-right: 40px; //右边距
        line-height: 40px; //行高
        margin-left: 10px; //左边距
        border-right: 1px solid #ccc; //设置边框
        padding: 10px; //内边距
      }
    }
  }

  .lister {
    width: 1098px;
    height: 400px;
    border: 1px solid #ccc;
    border-top: none;
    margin-left: 100px;
  }

  .list {
    .lists {
      float: left;
      width: 470px;
      height: 340px;
      border: 1px solid #ccc;
      margin: 36px;
      span {
        width: 33px;
        height: 37px;
        display: block;
        background: url("../assets/kehu/Sprites.png") no-repeat -9px -131px;
        margin-top: 60px;
        margin-left: 27px;
      }
      .medal {
        margin-left: 60px;
        margin-top: -24px;
      }
      button {
        margin-left: 170px;
        color: #fff;
        background: #ff591b;
        border: none;
        padding: 10px 25px;
        border-radius: 10px;
        font-size: 16px;
      }
      .lage {
        margin-left: 160px;
        margin-top: -240px;
        line-height: 30px;
        height: 210px;

        .thirdname {
          background: #2693d4;
          margin: 5px;
          border-radius: 10px;
          padding: 1px;
          color: #ffffff;

          &:hover {
            //p标签hover事件
            // color: #ffffff; //鼠标上浮字体颜色
            background: #2693d4; //鼠标上浮背景颜色
            line-height: 30px; //行高
            text-align: center;
            border-radius: 10px; //设置背景圆角
            padding: 1px;
          }
        }
      }
      .image {
        margin-top: 100px;
        width: 40px;
        img {
          width: 156px;
          height: 100px;
        }
      }
    }
    .list-header {
      //产品列表头部设置
      height: 40px; //高
      background: #f7f7f7; //背景色
      border: 1px solid #cccccc; //边框
      // border-left: none; //左右边框设置无
      // border-right: none;
      border-top: none;
      margin-left: 100px;
      li {
        //li标签设置
        float: left; //左浮
        // margin:10px;
        line-height: 40px; //行高
        text-align: center; //居中
        padding: 0px 20px; //内边距
        &:hover {
          //li标签hover事件
          color: #ffffff; //上浮改变文字颜色
          background: #2693d4; //上浮改变背景色
          line-height: 40px;
          text-align: center;
          padding: 0px 20px;
        }
      }
    }
  }

  .footer {
    //底部盒子
    text-align: center; //居中
    margin-top: 20px; //距离顶部
    margin-left: 90px;
    span {
      border: 1px solid #2693d4;
      color: #2693d4;
      padding: 8px 20px;
      margin: 0 10px;
    }
    button {
      //底部按钮样式
      border: 1px #ccc solid;
      color: #ccc;
      background: #fff;
      padding: 10px;
    }
  }
}
</style>