<template>
<div>
    <div class="m-body">
      <div class="m-head">
        <a href="javascript:void(0)" v-on:click="new_touchh()" @click="new_touch=true" :class="{new_list:new_touch}">默认排序</a><a href="javascript:void(0)" @click="new_touchh()" :class="{new_list:!new_touch}">  销量   </a>
      </div>
         <div class="m-lister">
               
           <div class="m-lists" v-for="list in lists" :key="list.id" @click="open(list.providerName,list.id,list.providerImg)">
             <div class="m-image" >
             <img :src="'http://115.182.107.203:8088/xinda/pic'+list.providerImg">
             </div>
             <div class="m-lage">
             <p>{{list.providerName}}</p>
             <p>{{list.regionName}}</p>
             <p>累计客户服务次数:<span>{{list.orderNum}}</span></p>
              <p>  好评率：<span>100%</span></p>
             </div>
           </div>
           </div>
    </div>
    </div>
</template>

<script>
export default{
    methods:{
        open: function(name,id,image) {
        this.$router.push({path:'/m.sinda/shop/service',query:{id:id,Name:name,img:image}});
    },
     new_touchh() { //升序降序
      this.new_touch = false;
      if (this.sortFlag) {
        this.lists.sort(function (a, b) {
          return a.orderNum - b.orderNum;
        });
        this.sortFlag = !this.sortFlag;
      } else {
        this.lists.sort(function (b, a) {
          return a.orderNum - b.orderNum;
        });
        this.sortFlag = !this.sortFlag;
      }
    }
    },
    created() { 
        var that= this;
        this.ajax.post("/xinda-api/provider/grid", {
        //数据地址
        start: 0, //数据参数
        limit: 6,
        productTypeCode: 10,
        regionId: 110102,
        sort: 1
      })
      .then(function(data) {
        var lists = data.data.data;
        that.lists = lists;      
      });

    },
     data() {
    return {
      lists: [],
      new_touch:true,
      sortFlag:false,
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
// body { margin-right: -15px; margin-bottom: -15px; }

.m-body{
    
    width:7.5rem;
    margin: 0 auto;
    .m-head{
        text-align: center;
        .new_list{
          background: #2693d4;
        }
    a{  
      
        border: 1px solid #2693d4;
        background: #fff;
        font-size: 0.2rem;
        text-decoration: none;
        color:#000;
        padding:0.1rem 0.5rem;
        
        &:first-child{
            border-right: none;
            border-radius: 3px  0 0 3px;
        }
        &:last-child{
             border-radius:0 3px 3px 0;
        }

        &:active{
        background: #2693d4;
        color:#fff;
        }
    
    }
    }
   .m-lister{
       .m-lists{
             margin-top: -0.6rem;
             border-bottom: 0.01rem solid #ccc;
             display: flex;
           .m-image{
               width:27%;
               margin-left: 0.6rem;
               margin-top: 1rem;
               img{
                    width:2rem;
               height: 2rem;
               border: 0.01rem solid #ccc;
               padding: 0.1rem;
             
               }
           }
           
            .m-lage{
           font-size: 0.25rem;
           margin-top: 1.1rem;
           line-height: 0.5rem;
           margin-left: 0.4rem;
       }
       
           span{
               color:red;
           }
       
       }
      
   }
}
</style>