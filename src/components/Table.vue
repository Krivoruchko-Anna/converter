<template>
  <table class="table">
    <thead>
    <tr>
      <th class="table__header" label="Currency"><span>Currency</span></th>
      <th class="table__header" label="Selected currency">
        <select name="" id="" class="custom-select custom-select-sm">
          <option v-for="(currency, i) in listOfCurrencies" :value="currency" :key="i" selected>{{ currency }}</option>
        </select>
      </th>
    </tr>
    <tr>
      <td>
        <ul class="p-0">
          <li class="table__li" v-for="(currency, i) in listOfCurrencies" :key="i"> {{ currency }}</li>
        </ul>
      </td>
      <td>
        <li class="table__li" v-for="(currency, i) in listOfCurrencies" :key="i"> {{ i }}</li>
      </td>
    </tr>
    </thead>
  </table>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    computed: {
      ...mapGetters(['listOfCurrencies'])
    },
    methods: {
      ...mapActions(['fetchCurrencies'])
    },
    mounted() {
      this.$store.dispatch('fetchCurrencies');
    }

}
</script>

<style lang="scss">
  .table {
    width: 100%;
    margin-top: 20px;
    color: #758395;

    &__header {
      width: 50%;
    }

    &__li {
      list-style-type: none;
    }
  }
</style>
