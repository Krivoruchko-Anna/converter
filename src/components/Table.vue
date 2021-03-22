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
        <ul>
          <li class="table__li" v-for="(res, i) in currencyObj" :key="i"> {{ res.toFixed(2) }}</li>
        </ul>
      </td>

    </tr>
    </thead>
  </table>

  <button @click="fetchCurrencyList()" class="btn btn-primary btn-sm">Show exchange rates</button>

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
      ...mapGetters(['listOfCurrencies', 'currencies', 'currencyObj'])
    },
    methods: {
      ...mapActions(['fetchCurrencies', 'fetchCurrencyList']),
      ...mapMutations(['selectMainCurrency'])
    },
    mounted() {
      this.$store.dispatch('fetchCurrencies');
    }
}
</script>

<style scoped lang="scss">
  ul {
    margin-bottom: 0;
  }

  td {
    padding: 0 20px;
  }

  th {
    padding: 10px;
  }

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
      margin: 10px auto;
      border-bottom: 1px solid #dee2e6;
      padding-bottom: 7px;
      &:last-child {
        border-bottom: none;
        padding-bottom: 0;
      }
    }
  }

  .custom-select {
    width: 30%;
  }
</style>
