<template>
    <div class="body">
        <div class="header">
            <a href="#">首页/店铺列表</a>
            <div class="header-boxI">
                <span>服务区域</span>
                <select name="" id="">
                   <option value="">省</option>
                   <option value="">北京市</option>
                </select>
                 <select name="" id="">
                   <option value="">市</option>
                   <option value="">北京市</option>
                </select>
                 <select name="" id="">
                   <option value="">区</option>
                   <option value="">朝阳区</option>
                   <option value="">海淀区</option>
                </select>
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
export default {
  data() {
    return {};
  },
  components: { sinda_header, sinda_footer }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.body{
    .header{
        a{
            text-decoration: none;
            color:#000000;
            font-size: 15px;
        }
        margin-left:100px;
        margin-top: 15px;
        .header-boxI{
            height: 40px;
            width: 90%;
            margin-top: 10px;
           background: #f7f7f7;
           border: 1px solid #cccccc;
          span{
              font-size: 15px;
              font-weight:bold;
               margin-right: 40px;
               line-height: 40px;
               margin-left: 10px;
               border-right:1px solid #ccc;
               padding: 10px;
          }
            select{
                width: 120px;
                height: 30px;
                line-height: 40px;
            }
        }
        .header-boxII{
             height: 40px;
            width: 90%;
           background: #f7f7f7;
           border: 1px solid #cccccc;
           border-top: none;
            span{
              font-size: 15px;
              font-weight:bold;
               margin-right: 40px;
               line-height: 40px;
               margin-left: 10px;
               border-right:1px solid #ccc;
               padding: 10px;
            }
        }
    }
}
</style>