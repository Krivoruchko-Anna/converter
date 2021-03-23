<template>
  <h1 class="header">Currency Exchange Rates</h1>

  <div class="nav">
  <router-link to="/">Currency converter</router-link>
  <router-link to="/currencies">Exchange rates</router-link>
</div>
  <router-view/>
</template>

<script>

</script>

<style lang="scss">
  body {
    /*background: linear-gradient(rgb(10 20 110) 70%, white 30%);*/
    background: linear-gradient(#0a146e, #707ce7 70%, white 30%);
    background-repeat: no-repeat;
  }

  input, select {
    box-shadow: rgb(0 17 51 / 5%) 0 3px 15px;
  }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #758395;
  padding-top: 60px;
}

.header {
  color: white;
  font-size: 28px;
  font-weight: bold;
}

.nav {
  max-width: 800px;
  margin: 20px auto 10px auto;
  display: flex;
  justify-content: space-around;
  padding: 20px;
  border: 1px solid white;
  border-radius: 0.25rem;
  background-color: white;
  box-shadow: rgb(35 55 80 / 30%) 0 6px 12px;

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


