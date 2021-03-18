<template>
  <form class="form">
    <div class="form-group">
      <input v-model="enteredCurrency" type="email" class="input-currency form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="0">
    </div>

    <div class="select-wrapper">
      <select v-model="currencyFirst" class="custom-select custom-select-sm mb-1 mr-1">
        <option selected>Choose the currency</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>

      <select v-model="currencySecond" class="custom-select custom-select-sm mb-1">
        <option selected>Choose the currency</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>

    <button type="submit" @click.prevent="passData" class="btn btn-primary mt-3">Submit</button>

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
      currencySecond: ''

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
  }

  .select-wrapper {
    display: flex;
  }

  .input-currency {
    min-height: 100px;
    text-align: center;
  }

</style>
