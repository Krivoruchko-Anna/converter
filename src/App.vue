<template>
<div class="nav">
  <router-link to="/">Converter</router-link>
  <router-link to="/currencies">Currencies</router-link>
</div>
  <router-view/>
</template>

<script>

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #758395;
}

.nav {
  max-width: 800px;
  margin: 20px auto 10px auto;
  display: flex;
  justify-content: space-around;
  padding: 30px;
  border: 1px solid #ced4da;

  a {
    font-weight: bold;
    color: #758395;
    &.router-link-exact-active {
      color: #4a9bf2;
    }
  }
}

@import "~bootstrap/dist/css/bootstrap.css";
</style>


