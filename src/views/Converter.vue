<template>
  <div class="converter">
    <Form/>
    <div v-if="showOutcome" class="result">
      <span class="result__span">
        <b>{{ enteredSum }}</b> {{ firstCurrency }} &nbsp; = &nbsp;
        <b>{{ (convertedCurrency * enteredSum).toFixed(2) }}</b> {{ secondCurrency }}
      </span>
    </div>
  </div>
</template>

<script>
import Form from '@/components/Form.vue';
import {mapGetters, mapMutations} from 'vuex'

export default {
  name: 'Converter',
  components: {
    Form
  },
  computed: {
    ...mapGetters(['enteredSum', 'firstCurrency', 'secondCurrency', 'showOutcome', 'convertedCurrency'])
  },
  methods: {
    ...mapMutations(['hideOutcome'])
  },
  mounted() {
    this.hideOutcome();
  }
}
</script>

<style lang="scss" scoped>
.result {
  font-size: 22px;
  margin-top: 40px;
  color: #6a7179;

  &__span {
    padding: 15px 30px;
    border-radius: 4px;
    box-shadow: rgb(0 17 51 / 15%) 0 3px 15px;
  }
}
</style>
