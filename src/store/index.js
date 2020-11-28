import Vue from "vue";
import Vuex from "vuex";

import getters from "./getters"
Vue.use(Vuex);

const testData = [];

for(let i=0; i <=10; i++) {
  testData.push({
    id: i, text: `Product #${i}`, category: `Kategoria ${i % 3}`,
    descripton: `To jest produkt #${i}`, price: i* 50
  })
}
export default new Vuex.Store({
  state: {
    quotes: require("../data/quotes")
  },
  getters,

  mutations: {},
  actions: {},
  modules: {}
});
