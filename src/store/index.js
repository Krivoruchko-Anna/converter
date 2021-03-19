import { createStore } from 'vuex';
import { fetchData } from "../requests";

export default createStore({
  state: {
    listOfCurrencies: [122],
    enteredCurrency: '',
    firstCurrency: '',
    secondCurrency: ''
  },
  getters: {
    listOfCurrencies(state) {
       return state.listOfCurrencies
    },
    enteredCurrency(state) {
      return state.enteredCurrency
    },
    firstCurrency(state) {
      return state.firstCurrency
    },
    secondCurrency(state) {
      return state.secondCurrency
    }
  },
  mutations: {
    testData(state) {
       state.listOfCurrencies.push('345');
    }
  },
  actions: {
    async fetchCurrencies({commit, state}) {
      state.listOfCurrencies = await fetchData();
      commit('testData');
    },
    showOptions({commit, state}) {
      commit('testData');
      console.log(state.firstCurrency)
      console.log(state.enteredCurrency)
      console.log(state.secondCurrency)
    }
  }
})
