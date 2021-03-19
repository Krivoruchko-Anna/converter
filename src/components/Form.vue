<template>
  <form class="form">
    <div class="form-group">
      <input v-model="enteredCurrency" type="email" class="input-currency form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="0">
    </div>

    <div class="select-wrapper">
      <select v-model="currencyFirst" class="custom-select custom-select-sm">
        <option selected>Choose the currency</option>
        <option v-for="(currency, i) in listOfCurrencies" :value="currency" :key="i" selected>{{ currency }}</option>
      </select>

      <div class="equals">=</div>

      <select v-model="currencySecond" class="custom-select custom-select-sm">
        <option selected>Choose the currency</option>
        <option v-for="(currency, i) in listOfCurrencies" :value="currency" :key="i" selected>{{ currency }}</option>
      </select>
    </div>

    <button type="submit" @click.prevent="passData" class="btn btn-primary btn-sm">Submit</button>

  </form>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      enteredCurrency: '',
      currencyFirst: '',
      currencySecond: '',
      listOfCurrencies: ['RUB', 'USD', 'EUR', 'BYN', 'BGP', 'PLN']

    }
  },
  methods: {
    passData() {
      if (this.enteredCurrency && this.currencyFirst && this.currencySecond) {
        console.log(this.enteredCurrency)
        console.log(this.currencyFirst)
        console.log(this.currencySecond)
      }
    }
  }

}
</script>

<style scoped lang="scss">
  .form {
    margin: 0 auto;
    max-width: 800px;
    display: flex;
    justify-content: space-between;
  }

  .select-wrapper {
    display: flex;
    max-width: 340px;
  }

  .input-currency {
    text-align: center;
  }

  .form-group {
    width: calc(100% - 450px);
  }

  .btn {
    height: 30px;
  }

  .equals {
    margin: 0 10px;
    line-height: 2;
  }

</style>
