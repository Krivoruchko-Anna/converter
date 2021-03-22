<template>
<div class="nav">
  <router-link to="/">Currency converter</router-link>
  <router-link to="/currencies">Exchange rates</router-link>
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
  padding: 20px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;

  a {
    font-weight: bold;
    color: #758395;
    text-decoration: none;
    transition: .4s all;
    &:hover {
      color: #a8b1bc;
    }

    &.router-link-exact-active {
      color: #2a84e5;
      &:hover {
        color: #7eb4ed;
      }
    }
  }
}

@import "~bootstrap/dist/css/bootstrap.css";
</style>


