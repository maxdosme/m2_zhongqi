<template>
  <div id="app">
    <pageHead></pageHead>
    <router-view/>
  </div>
</template>

<script>
import pageHead from '@/common/index/head.vue';
export default {
  name: 'App',
  components: {
    pageHead
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
