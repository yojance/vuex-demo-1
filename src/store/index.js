import { reactive, ref } from 'vue';

// I would typically have each export in a separate files (i.e. api.js, state.js, store.js) but for brevity's sake I left them all in one
export const api = {
  load: async (url) => {
    const response = await fetch(url)
    return await response.json();
  }
}

export const state = reactive({
  hero: ref(null),
  items: ref([]),
  pagination: ref({})
});

export const store = {
  loadHero: async (type) => {
    const res = await api.load(`https://members.kelbyone.com/wp-json/ko/v4/${type}?per_page=1`);
    return state.hero = res.data[0];
  },
  loadItems: async (type, page = 1, limit = 12) => {
    state.items = [];
    const res = await api.load(`https://members.kelbyone.com/wp-json/ko/v4/${type}?page=${page}&per_page=${limit}`);
    state.pagination = res.meta
    return state.items = res.data;
  }
}
