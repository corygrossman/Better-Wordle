<template>
<div class="app">
<Navbar />
<router-view />
</div>
</template>

<script>
import Navbar from './components/navbar.vue';

export default {
  name: 'App',
  components: { Navbar },
  date(){
    return {
      lightMode: true
    }
  },
  methods: {
    toggleLightMode(){
      this.lightMode = !this.lightMode;
    }
  }

}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.app{
  min-height: 100vh;
  position: relative;
  background-color: #222222;
}
</style>
