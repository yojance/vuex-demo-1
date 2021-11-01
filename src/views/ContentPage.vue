<template>
  <div>
    View our latest {{ type }}
    <ContentList />
  </div>
</template>

<script>
import { useRoute } from "vue-router";

import ContentList from "@/components/ContentList";

export default {
  name: "ContentPage",
  components: {
    ContentList,
  },
  setup() {
    const route = useRoute();
    const type = route.name;

    return { type };
  },
};
</script>

<style scoped>
</style>
