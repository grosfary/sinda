<template>
  <div>
    <select name="" class="province" @change="proChange" v-model="province">
      <option value="0">省</option>
      <option :value="code" v-for="(province,code) in provinces" :key="province.code">{{province}}</option>
    </select>
    <select name="" class="city" @change="cityChange" v-model="city">
      <option value="0">市</option>
      <option :value="code" v-for="(city,code) in citys" :key="city.code">{{city}}</option>
    </select>
    <select name="" class="area" v-model="area" @change="areaChange">
      <option value="0">区</option>
      <option :value="code" v-for="(area,code) in areas" :key="area.code">{{area}}</option>
    </select>
  </div>

</template>
<script>
import dist from "../districts/districts";
export default {
  data() {
    return {
      province: "0",
      provinces: dist[100000],
      city: "0",
      citys: [],
      area: "0",
      areas: []
    };
  },
  methods: {
    proChange() {
      this.city = "0";
      this.area = "0";
      this.areas = [];
      if (this.province != "0") {
        this.citys = dist[this.province];
      } else {
        this.citys = [];
      }
    },
    cityChange() {
      this.areas = dist[this.city];
    },
    areaChange() {
      this.$emit("selected", this.area);
    }
  }
};
</script>
<style scoped lang="less">
.province,
.city,
.area {
  height: 35px;
  width: 90px;
  font-size: 0.9rem;
  margin-bottom: 26px;
  option {
    height: 35px;
    width: 90px;
    font-size: 0.9rem;
    margin-bottom: 26px;
  }
}
</style>

