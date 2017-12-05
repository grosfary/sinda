<template>
    <div class="body">
        
        <div class="header">
            <a href="#">首页/店铺列表</a>
            <div class="header-boxI">
                <span>服务区域</span>
                <v-distpicker class="sanji" province="北京市" city="市辖区" area=""></v-distpicker>
            </div>
            <div class="header-boxII">
                <span>产品类型</span>
            </div>
        </div>
    </div>
</template>

<script>
import sinda_header from "../components/sinda_global_header";
import sinda_footer from "../components/sinda_global_footer";
import VDistpicker from "v-distpicker";
export default {
  
  created() {
    var that = this;
    this.ajax
      .post("http://115.182.107.203:8088/xinda/xinda-api/product/style/list").then(function(data) {
        var rData = data.data.data;
        for(var key in rData){
            var name = rData[key].itemList;
            for (var j in name){
                var names=name[j].name;
                console.log(names)
            }
        }
      });

  },
  data() {
    return {
      products: []
    };
  },
  components: { sinda_header, sinda_footer, VDistpicker }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
.body {
  .header {
    .sanji {
      margin-left: 100px;
      margin-top: -40px;
    }
    a {
      text-decoration: none;
      color: #000000;
      font-size: 15px;
    }
    margin-left: 100px;
    margin-top: 15px;
    .header-boxI {
      height: 40px;
      width: 90%;
      margin-top: 10px;
      background: #f7f7f7;
      border: 1px solid #cccccc;
      span {
        font-size: 15px;
        font-weight: bold;
        margin-right: 40px;
        line-height: 40px;
        margin-left: 10px;
        border-right: 1px solid #ccc;
        padding: 10px;
      }
    }
    .header-boxII {
      height: 40px;
      width: 90%;
      background: #f7f7f7;
      border: 1px solid #cccccc;
      border-top: none;
      span {
        font-size: 15px;
        font-weight: bold;
        margin-right: 40px;
        line-height: 40px;
        margin-left: 10px;
        border-right: 1px solid #ccc;
        padding: 10px;
      }
    }
  }
}
</style>