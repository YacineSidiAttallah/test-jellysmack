<template>
  <div id="app">
    <video autoplay muted loop id="myVideo">
      <source src="./assets/rick_and_morty-intro.mp4" type="video/mp4">
    </video>
    <div class="global-container">
      <div class="content-container">
        <navbar />
        <search-bar />
        <transition name="slide-fade">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>

  import Navbar from './components/Utils/Navbar.vue'
  import SearchBar from './components/Utils/SearchBar.vue'


  export default {
    name: 'App',
    components: {
      Navbar,
      SearchBar,
    },
  }
</script>

<style>
  .body {
    font-family: 'Roboto', sans-serif !important;
  }

  a{
    text-decoration: none !important;
    color:black !important;
  }

  #myVideo {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    opacity: 0.9;
    z-index: -1;
  }

  .global-container {
    background-color: rgba(0, 0, 0, 0.9);
    padding: 15px;
  }

  .content-container {
    margin: auto;
    padding: 15px;
    width: 70%;
    min-height: 720px !important;
  }
</style>