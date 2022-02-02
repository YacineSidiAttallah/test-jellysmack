<template>
  <div class="navbar-bg">
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item>
          <span class="jelly">JELLYSMACK</span> &nbsp;
          <span class="test-jelly">Test Front End</span>
        </b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item>
          <div class="candidat">
            <span class="candidat-text">CANDIDAT</span><br />
            YACINE SIDI ATTALLAH
          </div>
        </b-nav-item>
        <b-avatar variant="info" :src="require('../../assets/my_picture.jpg')" size="4rem"></b-avatar>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
  export default {
    name: 'Navbar',
  }
</script>

<style scoped>
  .navbar-bg {
    width: 100%;
    height: 85px;
    background: linear-gradient(90deg, rgba(138, 7, 170, 1) 0%, rgba(10, 178, 185, 1) 22%, rgba(7, 17, 203, 1) 45%, rgba(38, 226, 4, 1) 69%, rgba(255, 235, 0, 1) 100%);
    margin-left: auto;
    margin-right: auto;
    border-radius: 15px;
    padding: 3px;
    box-shadow: 5px 5px 7px 2px rgba(3, 3, 3, 0.4);
    margin-bottom:15px;
  }

  .navbar {
    width: 100%;
    height: 100%;
    margin: auto;
    border-radius: 15px;
    background-color: black !important;
  }

  .jelly {
    color: white;
    font-weight: 900;
    font-size: 1.5em;
  }

  .test-jelly {
    color: white;
    font-weight: 400;
    font-size: 1.2em;
  }


  .candidat {
    color: white;
    font-weight: 700;
    font-size: 0.9em;
    width: 10rem;
    margin-right: 15px;
  }

  .candidat-text {
    font-weight: 400;
  }
</style>