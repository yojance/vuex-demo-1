<template>
  <div>
    {{ contentPageTitle }}
    <ContentList />
  </div>
</template>

<script>
import ContentList from "@/components/ContentList";

export default {
  name: "ContentPage",
  components: {
    ContentList,
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.$store.dispatch("setContentPageType", vm.$route.path);
      vm.$store.dispatch("setContentPageTitle", vm.$route.name);
      vm.$store.dispatch("fetchContentPageItem", vm.$route.path);
    });
  },
  computed: {
    contentPageTitle() {
      return this.$store.state.contentPageTitle;
    },
    contentPageType() {
      return this.$store.state.contentPageType;
    },
  },
};
</script>

<style scoped>
</style>
