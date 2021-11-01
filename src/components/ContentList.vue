<template>
  <div>
    <section class="container mx-auto p-10 md:py-20 px-5 md:p-10">
      <section
        class="
          grid grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          2xl:grid-cols-4
          gap-10
        "
      >
        <ContentCard
          v-for="item in currentItems"
          :key="item.id"
          :content="item"
        />
      </section>
    </section>
  </div>
</template>

<script>
import ContentCard from "@/components/ContentCard";

export default {
  name: "ContentList",
  components: { ContentCard },
  computed: {
    currentItems() {
      return this.$store.state.contentPageItems;
    },
  },
};
</script>

<style scoped>
</style>
