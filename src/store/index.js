import { createStore } from 'vuex'

export default createStore({
  state: {
    contentPageTitle: 'Latest Videos',
    contentPageType: 'course',
  },
  mutations: {
    updateContentPageType (state, contentType) {
      state.contentType = contentType
    },
    updateContentPageTitle (state, pageTitle) {
      state.contentPageTitle = pageTitle
    },
  },
  actions: {
    setContentPageType ({ commit }, contentType) {
      commit('updateContentPageType', contentType)
    },
    setContentPageTitle ({ commit }, pageTitle) {
      commit('updateContentPageTitle', `Viewing Our Latest ${pageTitle}.`)
    },
  },
  modules: {},
})
