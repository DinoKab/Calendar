import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events: [
      {
        title: "Начало проекта",
        details: "",
        date: "2019-04-15",
        open: false
      },
      {
        title: "День Интернета",
        details: "",
        date: "2019-04-04",
        open: false
      },
    ]
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    getEvents: (state) => state.events,
  }
})
