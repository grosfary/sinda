<template>
  <div>

  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "sinda_buyCart",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["setlistName"])
  },
  created() {
    this.setlistName("购物车");
    this.ajax
      .post(
        "/xinda-api/product/package/detail",
        this.qs.stringify({
          sId: "0cb85ec6b63b41fc8aa07133b6144ea3"
        })
      )
      .then(data => {
        console.log(data);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>