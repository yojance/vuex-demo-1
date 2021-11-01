<template>
  <div class="home">
    <section class="container mx-auto p-3 md:py-3 px-0 md:p-5 md:px-0">
      <HeroContent v-if="data.hero" :content="data.hero" />
    </section>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import { store, state } from "@/store";

import HeroContent from "@/components/HeroContent";
import ContentList from "@/components/ContentList";

export default {
  name: "Home",
  components: {
    HeroContent,
    ContentList,
  },
  setup() {
    const data = reactive({
      hero: computed(() => state.hero),
    });

    store.loadHero("courses");

    return { data };
  },
};
</script>
