<template>
  <div id="app">
    <pageHead></pageHead>
    <router-view/>
    <bottomNav></bottomNav>
  </div>
</template>
~
<script>
import pageHead from '@/common/index/head.vue';
import bottomNav from '@/common/index/nav.vue';
export default {
  name: 'App',
  components: {
    pageHead,
    bottomNav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
