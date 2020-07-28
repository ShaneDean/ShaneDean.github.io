<template>
  <div id="app">
    <navbar></navbar>
    <threejs></threejs>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Threejs from './components/Threejs.vue'

export default {
  name: 'App',
  components: {
    Navbar,Threejs
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
