<template>
  <div>
    <section class="container mx-auto p-10 md:py-20 px-5 md:p-10">
      <h1 v-if="!data.items.length">Loading {{ type }}...</h1>
      <section
        v-else
        class="
          grid grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          2xl:grid-cols-4
          gap-10
        "
      >
        <ContentCard
          v-for="item in data.items"
          :key="item.id"
          :content="item"
        />
      </section>
    </section>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import { store, state } from "@/store";

import ContentCard from "@/components/ContentCard";

export default {
  name: "ContentList",
  components: { ContentCard },
  props: ["type"],
  watch: {
    type(type) {
      store.loadItems(type);
    },
  },
  setup(props) {
    const data = reactive({
      items: computed(() => state.items),
    });

    store.loadItems(props.type);

    return { data };
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  font-size: 48px;
  width: 100%;
}
</style>
