import { createStore } from 'vuex';
import { fetchData } from "../requests";
import { fetchCurrency } from "../requests";

export default createStore({
  state: {
    listOfCurrencies: [],
    enteredSum: null,
    firstCurrency: null,
    secondCurrency: null,
    convertedCurrency: null,
    showOutcome: false
  },
  getters: {
    listOfCurrencies(state) {
       return state.listOfCurrencies;
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
    showOutcome(state) {
      return state.showOutcome;
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
    }
  },
  actions: {
    async fetchCurrencies({state}) {
      state.listOfCurrencies = await fetchData();
    },
    async fetchConvertedCurrency({commit, state}) {
      state.convertedCurrency = await fetchCurrency(state.firstCurrency, state.secondCurrency);
      commit('showResults');
    }
  }
})
