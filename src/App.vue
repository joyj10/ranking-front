<template>
  <div id="app">
    <all></all>
  </div>
</template>

<script>
import All from './components/All.vue'

export default {
  name: 'app',
  components: {
    All
  }
}
</script>

<style>
  @import "assets/css/main.css";
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>
