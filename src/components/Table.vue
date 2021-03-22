<template>
  <table class="table">
    <thead>
    <tr>
      <th class="table__header" label="Currency"><span>Currency</span></th>
      <th class="table__header" label="Selected currency">
        <span>1 &nbsp;</span>
        <select v-model="selectedCurrency" @change="selectMainCurrency(selectedCurrency)" :name="selectedCurrency" :id="selectedCurrency" class="custom-select custom-select-sm">
          <option v-for="(currency, i) in listOfCurrencies" :value="currency" :key="i" selected>{{ currency }}</option>
        </select>
      </th>
    </tr>
    <tr>
      <td>
        <ul class="p-0">
          <li class="table__li" v-for="(currency, i) in currencies" :key="i"> {{ currency }}</li>
        </ul>
      </td>
      <td>
        <li class="table__li" v-for="(res, i) in convertedListOfCurrencies" :key="i"> {{ res }}</li>
      </td>
    </tr>
    </thead>
  </table>

<!--  <button @click="fetchConvertedListOfCurrencies(selectedCurrency)" class="btn btn-primary btn-sm">Show</button>-->
  <button @click="fetchCurrencyObject(selectedCurrency)" class="btn btn-primary btn-sm">Show</button>

</template>

<script>
  import { mapGetters, mapActions, mapMutations } from 'vuex';

  export default {
    data() {
      return {
        selectedCurrency: null
      }
    },
    computed: {
      ...mapGetters(['listOfCurrencies', 'currencies', 'convertedListOfCurrencies'])
    },
    methods: {
      ...mapActions(['fetchCurrencies', 'fetchConvertedListOfCurrencies', 'fetchCurrencyObject']),
      ...mapMutations(['selectMainCurrency'])
    },
    mounted() {
      this.$store.dispatch('fetchCurrencies');
    }
}
</script>

<style scoped lang="scss">
  .table {
    width: 100%;
    margin-top: 20px;
    border: 1px solid #ced4da;
    color: #758395;

    &__header {
      width: 50%;
      font-weight: 300;
    }

    &__li {
      list-style-type: none;
      margin: 7px auto;
    }
  }

  .custom-select {
    width: 30%;
  }
</style>
