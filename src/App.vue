<template>
  <div id="app">
    <navibar></navibar>
    <MainHeader></MainHeader>
    <banner-text></banner-text>
    <itme-list></itme-list>
    <main-text></main-text>
    <MainFooter></MainFooter>
  </div>
</template>

<script>
import Navibar from "./components/Navibar";
import MainHeader from "./components/MainHeader";
import BannerText from "./components/BannerText";
import MainFooter from "./components/Footer";
import ItmeList from "./components/itmeList";
import MainText from "./components/MainText";

export default {
  name: 'app',
  components: {
    MainText,
    ItmeList,
    MainFooter,
    BannerText,
    MainHeader,
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
  /*margin-top: 60px;*/
}
</style>
