<template>
  <form class="form">
    <div class="form-group">
      <input v-model="enteredCurrency" type="email" class="input-currency form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="0">
    </div>

    <div class="select-wrapper">
      <select v-model="firstCurrency" class="custom-select custom-select-sm">
        <option selected>Choose the currency</option>
        <option v-for="(currency, i) in listOfCurrencies" :value="currency" :key="i" selected>{{ currency }}</option>
      </select>

      <div class="equals">=</div>

      <select v-model="secondCurrency" class="custom-select custom-select-sm">
        <option selected>Choose the currency</option>
        <option v-for="(currency, i) in listOfCurrencies" :value="currency" :key="i" selected>{{ currency }}</option>
      </select>
    </div>

    <button type="submit" @click.prevent="" class="btn btn-primary btn-sm">Submit</button>

  </form>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
    ...mapGetters(['listOfCurrencies', 'enteredCurrency', 'firstCurrency', 'secondCurrency']),
  },
  methods: {
    ...mapMutations(['fetchCurrencies']),
    ...mapActions(['showOptions'])
  },
  mounted() {
    this.$store.dispatch('fetchCurrencies');
    console.log(this.listOfCurrencies);
  }
}
</script>

<style lang="scss" scoped>
  .form {
    margin: 20px auto 0 auto;
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
