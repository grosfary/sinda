<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <sinda_top></sinda_top>
    <sinda_header></sinda_header>
    <router-view/>
    <sinda_bottom></sinda_bottom>
  </div>
</template>

<script>
import sinda_top from './components/sinda_top'
import sinda_bottom from './components/sinda_bottom'
import sinda_header from './components/sinda_header'
export default {
  name: 'app',
  components:{sinda_top,sinda_bottom,sinda_header}
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
