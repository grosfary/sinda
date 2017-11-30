<template>
    <div class="hello">
        <h3>这是头部</h3>  
    </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@color: red;
div {
  color: @color;
}
</style>