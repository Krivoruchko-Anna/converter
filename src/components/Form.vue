<template>
  <form class="form">
    <div class="form-group">
      <label for="entered">Amount</label>
      <input v-model="entered" @change="enterSum(entered)" type="email" id="entered" class="input-currency form-control form-control-sm" aria-describedby="emailHelp">
    </div>

    <div class="form__wrapper">
      <div class="form__select-wrapper">
        <label for="selectedFirst">From</label>
        <select v-model="selectedFirst" @change="enterFirstCurrency(selectedFirst)" id="selectedFirst" class="custom-select custom-select-sm">
          <option v-for="(currency, i) in listOfCurrencies" :value="currency" :key="i" selected>{{ currency }}</option>
        </select>
      </div>

      <div class="equals"> = </div>

      <div class="form__select-wrapper">
        <label for="selectedSecond">To</label>
        <select v-model="selectedSecond" @change="enterSecondCurrency(selectedSecond)" id="selectedSecond" class="custom-select custom-select-sm">
          <option v-for="(currency, i) in listOfCurrencies" :value="currency" :key="i" selected>{{ currency }}</option>
        </select>
      </div>
    </div>

    <button type="submit" @click.prevent="showResults" class="btn btn-primary btn-sm">Submit</button>

  </form>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'HelloWorld',
  data() {
    return {
      entered: '',
      selectedFirst: '',
      selectedSecond: ''
    }
  },
  computed: {
    ...mapGetters(['listOfCurrencies']),
  },
  methods: {
    ...mapActions(['fetchCurrencies']),
    ...mapMutations(['enterSum', 'enterFirstCurrency', 'enterSecondCurrency', 'showResults'])
  },
  mounted() {
    this.$store.dispatch('fetchCurrencies');
  }
}
</script>

<style lang="scss" scoped>
  .form {
    margin: 20px auto 0 auto;
    max-width: 800px;
    display: flex;
    justify-content: space-between;

    &__wrapper {
      display: flex;
    }

    &__select-wrapper {
      width: 110px;
    }
  }

  .input-currency {
    text-align: center;
  }

  .form-group {
    width: calc(100% - 400px);
  }

  .btn {
    height: 30px;
    width: 90px;
    margin-top: 30px;
  }

  .equals {
    margin: 30px 15px 0 15px;
    line-height: 2;
  }

</style>
