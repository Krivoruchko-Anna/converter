<template>
  <div class="converter">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
    <Form/>
    <div @click="getData" class="result">
      55 USD = 45 EUR
    </div>
  </div>
</template>

<script>
import Form from '@/components/Form.vue';
// import requests from "../requests";

export default {
  name: 'Converter',
  components: {
      Form
  },
  methods: {
    getData() {
      // return requests.fetchData();
    }
  }
}
</script>

<style scoped>
.result {
  font-size: 24px;
}
</style>
