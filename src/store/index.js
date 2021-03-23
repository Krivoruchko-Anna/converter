import { createStore } from 'vuex';
import { fetchData, fetchCurrency } from "../utils/requests";
import { MAJOR_CURRENCIES } from "../utils/consts";

export default createStore({
  state: {
    listOfCurrencies: [],
    currencies: MAJOR_CURRENCIES,
    currencyObj: [],
    enteredSum: null,
    firstCurrency: null,
    secondCurrency: null,
    convertedCurrency: null,
    selectedCurrency: 'AUD',
    showOutcome: false,
    isSelectedCurrency: true
  },
  getters: {
    listOfCurrencies(state) {
       return state.listOfCurrencies;
    },
    currencies(state) {
      return state.currencies;
    },
    currencyObj(state) {
      return state.currencyObj;
    },
    enteredSum(state) {
      return state.enteredSum;
    },
    firstCurrency(state) {
      return state.firstCurrency;
    },
    secondCurrency(state) {
      return state.secondCurrency;
    },
    convertedCurrency(state) {
      return state.convertedCurrency;
    },
    selectedCurrency(state) {
      return state.selectedCurrency;
    },
    showOutcome(state) {
      return state.showOutcome;
    },
    isSelectedCurrency(state) {
      return state.isSelectedCurrency;
    }
  },
  mutations: {
    enterSum(state, sum) {
      const regExp = /\d/;
      if (sum.match(regExp)) {
        state.enteredSum = sum;
        state.showOutcome = false;
      }
    },
    enterFirstCurrency(state, cur) {
      state.firstCurrency = cur;
      state.showOutcome = false;
    },
    enterSecondCurrency(state, cur) {
      state.secondCurrency = cur;
      state.showOutcome = false;
    },
    showResults(state) {
      if (state.enteredSum && state.firstCurrency && state.secondCurrency) {
        state.showOutcome = true;
      }
    },
    selectMainCurrency(state, currency) {
      state.selectedCurrency = currency;
      state.currencyObj = [];
      state.isSelectedCurrency = false;
    },
  },
  actions: {
    async fetchCurrencies({state}) {
      state.listOfCurrencies = await fetchData();
    },
    async fetchConvertedCurrency({commit, state}) {
      state.convertedCurrency = await fetchCurrency(state.firstCurrency, state.secondCurrency);
      commit('showResults');
    },

    async fetchCurrencyList({state}) {
      state.currencyObj = [];
      state.isSelectedCurrency = true;

      const arrList = [];
      await MAJOR_CURRENCIES.map(item => {
        const tempRes = fetchCurrency(item, state.selectedCurrency);
        arrList.push(tempRes);
      });

      return Promise.all(arrList)
        .then(function (values) {
          values.map(item => {
            state.currencyObj.push(item);
          });
        });
    },
  }
})




















