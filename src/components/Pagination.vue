<template>
  <section class="container mx-auto p-10 md:py-10 px-5 md:p-10">
    <ul class="flex align-items-center justify-center pagination-items">
      <li @click="loadFirstPage" class="first filter drop-shadow-md border border-gray-200">First</li>
      <li @click="loadPreviousPage" class="prev drop-shadow-md border border-gray-200">Previous</li>
      <li @click="loadNextPage" class="next drop-shadow-md border border-gray-200">Next</li>
      <li @click="loadLastPage" class="Last drop-shadow-md border border-gray-200">Last</li>
    </ul>
  </section>
</template>

<script>
import { state, store } from '@/store'
import { computed, reactive } from 'vue'

export default {
  name: 'Pagination',
  props: ['type', 'limit'],
  setup (props) {
    const data = reactive({
      pagination: computed(() => state.pagination),
    })

    console.log(data, props.limit)
    const loadFirstPage = () => {
      if (shouldLoadBackFacingPagination()) {
        store.loadItems(props.type, 1, props.limit)
      }
    }

    const loadPreviousPage = () => {
      if (shouldLoadBackFacingPagination()) {
        let { page } = data.pagination
        store.loadItems(props.type, --page, props.limit)
      }
    }
    const loadNextPage = () => {
      if (shouldLoadForwardFacingPagination()) {
        let { page } = data.pagination
        store.loadItems(props.type, ++page, props.limit)
      }

    }

    const loadLastPage = () => {
      if (shouldLoadForwardFacingPagination()) {
        let { totalPages } = data.pagination
        store.loadItems(props.type, totalPages, props.limit)
      }
    }

    const shouldLoadBackFacingPagination = () => {
      let { page } = data.pagination
      return page > 1
    }

    const shouldLoadForwardFacingPagination = () => {
      let { page, totalPages } = data.pagination
      return page < totalPages
    }

    return {
      data,
      loadFirstPage,
      loadPreviousPage,
      loadNextPage,
      loadLastPage,
    }
  },
}
</script>

<style scoped>
.pagination-items {
  background: #fefefe;
  color: coral;
}

.pagination-items li {
  padding: 10px;
  margin: 5px;
  cursor: pointer;
}
</style>
