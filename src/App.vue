<template>
  <div id="app">
    <router-link to="/home">home</router-link>
    <navibar></navibar>
    <router-view></router-view>
    <MainFooter></MainFooter>
  </div>
</template>

<script>
import Navibar from "./components/Navibar";
import MainFooter from "./components/Footer";

export default {
  name: 'app',
  components: {
    MainFooter,
    Navibar,
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
  margin-top: 60px;
}
</style>
