import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    contentPageTitle: 'Latest Videos',
    contentPageType: 'course',
    contentPageItems: [],
  },
  mutations: {
    updateContentPageType(state, contentType) {
      state.contentPageType = contentType
    },
    updateContentPageTitle(state, pageTitle) {
      state.contentPageTitle = pageTitle
    },
    updateContentPageItems(state, items) {
      state.contentPageItems = Object.assign({}, items)
    },
  },
  actions: {
    setContentPageType({ commit }, contentType) {
      commit('updateContentPageType', contentType)
    },
    setContentPageTitle({ commit }, pageTitle) {
      commit('updateContentPageTitle', `Viewing Our Latest ${pageTitle}.`)
    },
    fetchContentPageItem({ commit, state }, contentType) {
      const endpoint = `https://members.kelbyone.com/wp-json/ko/v4${state.contentPageType}?include=instructors&per_page=3&page=1`
      axios.get(
        endpoint,
      ).then((res) => {
        commit('updateContentPageItems', res.data.data)
      })
    },
  },
  modules: {},
})

import { reactive, ref } from 'vue';

export const api = {
  fetch: async () => {

  },
  get: async () => {

  }
}

export const store = {
  state: reactive({
    hero: ref(null),
    items: ref([])
  }),
  loadHero: async () => {

  },
  loadItems: async () => {

  }
}
