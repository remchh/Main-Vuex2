import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: 'abc123', name: 'Adam Jahr' },
    categories: ['sustainability', 'nature', 'animal welfare', 'housing', 'education', 'food', 'community'],
    events: [
      { id: 1, tittle: '...', organizer: '...' },
      { id: 2, tittle: '...', organizer: '....' },
      { id: 3, tittle: '...', organizer: '...' },
      { id: 4, tittle: '...', organizer: '...' }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    }
  }
})
