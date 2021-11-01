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

// I would typically have each export in a separate files (i.e. api.js, state.js, store.js) but for brevity's sake I left them all in one

export const api = {
  load: async (url) => {
    const response = await fetch(url)
    const data = await response.json();
    return data.data;
  }
}

export const state = reactive({
  hero: ref(null),
  items: ref([])
});

export const store = {
  loadHero: async (type) => {
    const data = await api.load(`https://members.kelbyone.com/wp-json/ko/v4/${type}?per_page=1`);
    return state.hero = data[0];
  },
  loadItems: async (type, page = 1, limit = 12) => {
    state.items = [];
    const data = await api.load(`https://members.kelbyone.com/wp-json/ko/v4/${type}?page=${page}&per_page=${limit}`);
    return state.items = data;
  }
}
