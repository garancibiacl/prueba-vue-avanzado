<template>
  <div id="app">
    <v-app>
      <Nav></Nav>
      <router-view></router-view>
    </v-app>
  </div>
</template>

<script>

import Nav from './components/Nav.vue'
export default {
  name: "App",
  components: {
    Nav
  }
};
</script>

<style>
#app {
  background: url("./assets/fondo1.png");
  background-size: cover;
  background-position: center;
min-height: 100vh;
margin: 0;
padding: 0;
}
</style>
