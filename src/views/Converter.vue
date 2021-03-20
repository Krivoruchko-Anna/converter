<template>
  <div class="converter">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
    <Form/>
    <div v-if="showOutcome" class="result">
        {{ enteredSum }} {{ firstCurrency }} &nbsp; = &nbsp; {{ (convertedCurrency * enteredSum).toFixed(2) }} {{ secondCurrency }}
    </div>
  </div>
</template>

<script>
import Form from '@/components/Form.vue';
import { mapGetters } from 'vuex'

export default {
  name: 'Converter',
  components: {
      Form
  },
    computed: {
      ...mapGetters(['enteredSum', 'firstCurrency', 'secondCurrency', 'showOutcome', 'convertedCurrency'])
    }
 }
</script>

<style scoped>
.result {
    font-size: 24px;
    margin-top: 20px;
    color: #4b5158;
}
</style>
