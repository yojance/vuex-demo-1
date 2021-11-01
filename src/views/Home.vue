<template>
  <div class="home">
    <section class="container mx-auto p-3 md:py-3 px-0 md:p-5 md:px-0">
      <HeroContent v-if="heroContent" :content="heroContent" />
    </section>
    <section
      class="container mx-auto p-3 md:py-3 px-0 md:p-5 md:px-0"
    ></section>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import HeroContent from "@/components/HeroContent";
import ContentList from "@/components/ContentList";

export default {
  name: "Home",
  components: {
    HeroContent,
    ContentList,
  },
  created() {
    this.loadHeroContent();
  },
  data() {
    return {
      heroContent: null,
    };
  },
  methods: {
    loadHeroContent() {
      axios
        .get(
          `https://members.kelbyone.com/wp-json/ko/v4/courses?include=instructors&per_page=1`
        )
        .then((res) => {
          this.heroContent = res.data.data[0];
          console.log(this.heroContent.target);
        });
    },
  },
};
</script>
