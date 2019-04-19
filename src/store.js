import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events: [
      {
        title: "Начало проекта",
        details: "",
        date: "2019-04-15"
      },
      {
        title: "День Интернета",
        details: "",
        date: "2019-04-04"
      },
      {
        title: "День труда",
        details: "",
        date: "2019-05-01"
      },
      {
        title: "День программиста",
        details: "",
        date: "2019-09-13"
      },
    ]
  },
  watch: {
    input: function() {
      if (isLocalStorage(), data ){
      this.events.push(JSON.parse(localStorage.getItem('arr')))
      }}
  },
  getters: {
    getEvents: (state) => state.events,
  }
})
