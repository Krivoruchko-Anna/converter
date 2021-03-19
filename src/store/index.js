import { createStore } from 'vuex';
import { fetchData } from "../requests";

export default createStore({
  state: {
    listOfCurrencies: [],
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

  },
  actions: {
    async fetchCurrencies(state) {
      state.listOfCurrencies = await fetchData();
      console.log(state.listOfCurrencies);
    },
    showOptions(state) {
      console.log(state.firstCurrency)
      console.log(state.enteredCurrency)
      console.log(state.secondCurrency)
    }
  }
})
