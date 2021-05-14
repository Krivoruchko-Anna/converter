<template>
  <table class="table">
    <thead>
    <tr>
      <th class="table__header" label="Currency"><span>Currency</span></th>
      <th class="table__header" label="Selected currency">
        <select v-model="selectedCurrency" @change="selectMainCurrency(selectedCurrency)" :name="selectedCurrency" :id="selectedCurrency" class="custom-select custom-select-sm">
          <option v-for="(currency, i) in listOfCurrencies" :value="currency" :key="i" selected>{{ currency }}</option>
        </select>
      </th>
    </tr>
    <tr>

      <td>
        <ul class="p-0">
          <li class="table__li" v-for="(currency, i) in currencies" :key="i"> 1 {{ currency }}</li>
        </ul>
      </td>

      <td>
        <ul>
          <li class="table__li" v-for="(res, i) in currencyObj" :key="i"> {{ res.toFixed(2) }} {{ isSelectedCurrency ? selectedCurrency : null }}</li>
        </ul>
      </td>

    </tr>
    </thead>
  </table>

  <button @click="fetchCurrencyList()" class="btn btn-secondary btn-sm mt-2 p-2">Show exchange rates</button>

</template>

<script>
  import { mapGetters, mapActions, mapMutations } from 'vuex';

  export default {
    computed: {
      ...mapGetters(['listOfCurrencies', 'currencies', 'currencyObj', 'isSelectedCurrency']),
      selectedCurrency: {
        get() {
          return this.$store.state.selectedCurrency;
        },
        set(value) {
          this.$store.commit('updatesSelectedCurrency', value);
        }
      }
    },
    methods: {
      ...mapActions(['fetchCurrencies', 'fetchCurrencyList']),
      ...mapMutations(['selectMainCurrency'])
    },
    mounted() {
      this.$store.dispatch('fetchCurrencies');
      this.$store.dispatch('showLocalCurrency');
    },
  }
</script>

<style scoped lang="scss">
  ul {
    margin-bottom: 0;
    padding: 0;
  }

  td {
    padding: 0 20px;

    @media (max-width: 600px) {
      padding: 0 15px;
    }
  }

  th {
    padding: 10px;
    border: none;
  }

  .table {
    width: 100%;
    margin-top: 20px;
    border-radius: 4px;
    color: #758395;
    background-color: white;
    box-shadow: rgb(35 55 80 / 30%) 0 6px 12px;


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

    @media (max-width: 600px) {
      width: 75%;
    }
  }
</style>
