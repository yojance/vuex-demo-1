<template>
  <div>
    View our latest {{ data.type }}
    <ContentList :type="data.type" />
  </div>
</template>

<script>
import { computed, reactive, ref } from "vue";
import { useRoute } from "vue-router";
import { store } from "@/store";

import ContentList from "@/components/ContentList";

export default {
  name: "ContentPage",
  components: {
    ContentList,
  },
  setup() {
    const route = useRoute();
    const data = reactive({
      type: computed(() => route.name),
    });

    return { data };
  },
};
</script>

<style scoped>
</style>
