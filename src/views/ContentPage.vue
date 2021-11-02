<template>
  <div>
    View our latest {{ data.type }}
    <ContentList :type="data.type" />
    <pagination :type="data.type" :limit="12" />
  </div>
</template>

<script>
import { computed, reactive, ref } from "vue";
import { useRoute } from "vue-router";
import ContentList from "@/components/ContentList";
import Pagination from "@/components/Pagination";

export default {
  name: "ContentPage",
  components: {
    ContentList,
    Pagination
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
