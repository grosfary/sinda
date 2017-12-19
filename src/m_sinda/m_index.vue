<template>
    <div class="aaa">
        <div class="red">

        </div>
        <div class="blue">

        </div>
    </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.aaa{
    margin: 0 auto;
    &::after{
        content:'';
        display: block;
        clear: both;
    }
}
.red{
    float: left;
    width: 7.5rem;
    height: 2rem;
    background: red;
}
.blue{
    float: left;
    width: 7.5rem;
    height: 2rem;
    background: blue;
}
</style>