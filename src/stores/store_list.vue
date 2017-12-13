<template>
    <div class="body">
        
        <div class="header"><!--头部盒子-->
            <a href="http://localhost:8080/#/Join_Us">首页/店铺列表</a><!--头部文字-->
            <div class="header-boxI">
                <span>服务区域</span><!--服务区域-->
                <v-distpicker class="sanji" province="北京市" city="市辖区" area=""></v-distpicker><!--省市区三级联动-->
            </div>
            <div class="header-boxII"><!--产品类型标签盒子-->
                <span>产品类型</span>
                <p>所有</p>
                <div class="lages">
                  <p v-for="name in names" :key = "name"><!--数据内容：二级标题-->
                    {{name}}
                  </p>
                </div>
            </div>
        </div>
        <div class="list"><!--产品列表盒子-->
          <div class="list-header"><!--列表头部-->
           <ul>
             <li>综合排序</li><!--头部文字-->
             <li>价格↑↓</li>
             <li>接单数↑↓</li>
           </ul>
           <div class="listI">
             <div class="imageI"><!--图片盒子-->
             <img :src="providerImg"><!--数据获取图片-->
             </div>
               <span></span><p class="wenzi">金牌服务商</p><!--金牌背景图-->
             <div class="lageI"><!--数据获取文字信息-->
             <p>{{provider}}</p>
             <p>信誉</p>
             <p>{{region}}</p>
             <p>累计客户服务次数:{{order}}</p>
             <p class="biaoqian" style="display:inline" v-for="pro in pro" :key="pro.id">{{pro}}</p>
             </div>
             <button @click="open">进入店铺</button><!--点击按钮-->
           </div>
           <div class="listII">
             <div class="imageII"><!--图片盒子-->
             <img :src="providerImgs"><!--获取数据图片-->
             </div>
              <span></span><p class="wenziI">金牌服务商</p><!--金牌背景图-->
             <div class="lageII"><!--数据获取文字信息-->
             <p>{{providers}}</p>
             <p>信誉</p>
             <p>{{regions}}</p>
            <p>累计客户服务次数：{{orders}}</p>
              <p  class="biaoqianI" style="display:inline" v-for="pros in pros" :key="pros.id">{{pros}}</p>
              </div>
              <button @click="open">进入店铺</button><!--点击按钮-->
           </div>
          </div>
         
        </div>
         <div class="footer"><!--底部按钮-->
            <button>上一页</button><span>1</span><button>下一页</button>
          </div>
    </div>
</template>

<script>
import sinda_header from "../components/sinda_global_header";
import sinda_footer from "../components/sinda_global_footer";//省市区三级联动插件
export default {
  // 数据获取
  created() {
    var that = this;
    this.ajax
      .post("http://115.182.107.203:8088/xinda/xinda-api/product/style/list")
      .then(function(data) {
        //数据地址
        var rData = data.data.data;
        var names = [];
        for (var key in rData) {
          //循环数据
          var name = rData[key].itemList;
          // console.log(name);
          for (var j in name) {
            names.push(name[j].name); //提取二级标题
            // console.log(names)
          }
          that.names = names;
        }
      });
    this.ajax
      .post("http://115.182.107.203:8088/xinda/xinda-api/provider/grid", {//数据地址
        start: 0,//数据参数
        limit: 6,
        productTypeCode: 10,
        regionId: 110102,
        sort: 1
      })
      .then(function(data) {
        var list = data.data.data;
        console.log(list);
        var list0 = list[0];
        that.pro = list0.productTypes.split(",");
        that.order=list0.orderNum;
        that.provider=list0.providerName;
        that.region=list0.regionName;
        that.providerImg='http://115.182.107.203:8088/xinda/pic'+list0.providerImg;//数据图片
        var listI=list[1];
        that.orders=listI.orderNum;//文字信息
        that.providers=listI.providerName;
        that.regions=listI.regionName;
        that.pros=listI.productTypes.split(",");
        that.providerImgs='http://115.182.107.203:8088/xinda/pic'+listI.providerImg;//数据图片
        console.log(that.pro);
        console.log(that.providerImg);
      });
  },
  data() {
    return {
      names: [],
      pro: [],
      pros:[],
      order:[],
      provider:[],
      region:[],
       orders:[],
      providers:[],
      regions:[],
      providerImg:[],
      providerImgs:[],
          };
  },
  components: { sinda_header, sinda_footer },
  methods:{
    open:function(){
    location.href="http://localhost:8080/#/shop";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
.body {
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
      width: 90%; //宽
      margin-top: 10px; //距离顶部距离;
      background: #f7f7f7; //背景颜色
      border: 1px solid #cccccc; //设置边框
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
      width: 90%; //宽
      background: #f7f7f7; //背景颜色
      border: 1px solid #cccccc; //边框
      border-top: none; //下边框设置无
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
  .list {
    //产品列表整体盒子样式
    width: 1127px; //宽
    margin-top: 30px; //顶边距
    margin-left: 100px; //左边距
    height: 400px; //高
    border: 1px solid #ccc; //边框
    border-top: none; //下边框无
    .imageI{//数据获取图片盒子
      margin-top:85px;
     
      img{//图片大小
     width: 37%;}
    }
     .imageII{
      margin-top:117px;
      img{
     width: 37%;}
    }
    .listI {
      height: 320px;
      width: 45%;
      border: 1px solid #ccc;
      margin-top: 65px;
      margin-left: 20px;
      .wenzi{
        margin-left: 78px;
        margin-top:-25px;
        font-size: 15px;
        color:#ccc;
      }
       span{//金牌背景图
        width: 33px;
        height: 37px;
        display: block;
        background: url("../assets/kehu/Sprites.png") no-repeat -9px -131px;
        margin-top:69px;
        margin-left: 34px;
      }
      button{//进入店铺按钮设置
        margin-left: 200px;
        margin-top:30px;
        color:#fff;
        background: #ff591b;
        border: none;
        padding: 10px 25px;
        border-radius: 10px;
        font-size: 16px;
      }
      .lageI{//数据文字信息样式
        margin-left: 200px;
        margin-top: -273px;
        line-height: 30px;
        color:#676767;
        font-size: 15px;
        .biaoqian{
          display: block;
          margin: 7px;
          color:#ffffff;
          background: #2693d4;
          border-radius: 4px;
        padding: 3px 10px;;
          
        }
      }
    }
    .listII {
      height: 320px;
      width: 45%;
      border: 1px solid #ccc;
      margin-top: -323px;
      margin-left: 595px;
       .wenziI{
        margin-left: 78px;
        margin-top:-25px;
        font-size: 15px;
        color:#ccc;
      }
       span{//金牌背景图片
        width: 33px;
        height: 37px;
        display: block;
        background: url("../assets/kehu/Sprites.png") no-repeat -9px -131px;
        margin-top:82px;
        margin-left: 34px;
      }
       button{//进入店铺按钮
        margin-left: 200px;
        margin-top:91px;
        color:#fff;
        background: #ff591b;
        border: none;
        padding: 10px 25px;
        border-radius: 10px;
        font-size: 16px;
      }
       .lageII{//数据获取文字样式
        margin-left: 200px;
        margin-top: -274px;
        line-height: 30px;
        color:#676767;
        font-size: 15px;
        .biaoqianI{
          display: block;
          margin: 7px;
          color:#ffffff;
          background: #2693d4;
          border-radius: 4px;
        padding: 3px 10px;;
          
        }
      }
    }
    .list-header {
      //产品列表头部设置
      height: 40px; //高
      background: #f7f7f7; //背景色
      border: 1px solid #cccccc; //边框
      border-left: none; //左右边框设置无
      border-right: none;
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
  .footer{//底部盒子
   text-align: center;//居中
   margin-top: 20px;//距离顶部
   span{
     border: 1px solid #2693d4;
     color: #2693d4;
     padding: 8px 20px;
     margin: 0 10px;
   }
   button{//底部按钮样式
     border: 1px #ccc solid;
     color: #ccc;
     background: #fff;
     padding: 10px;
   }
  }
}
</style>