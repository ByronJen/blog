<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  components: {
    appHeader:Header
  }
}
</script>

<style>
*{
  list-style:none;
  padding:0;
  margin:0;
  box-sizing:border-box;
}
#app {
  background:#eceff1;
}
header{
  text-align:center;
  background:#1a9ce2;
  padding:10px 0;
}
header a{
  color:#fff;
  text-decoration:none;
  padding:5px 10px;
  border-radius:5px;
  display: inline-block;
}
.router-link-active{
  background:#ff9801;
}
</style>
