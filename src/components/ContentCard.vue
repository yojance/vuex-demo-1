<template>
  <article class="mx-auto group w-full shadow-2xl max-w-md pb-8 rounded-b-2xl transform duration-500 hover:-translate-y-2 cursor-pointer">
    <section class="content bg-cover bg-center h-64 rounded-2xl" :style="backgroundImage">
    </section>
    <div class="mt-14 px-4">
      <h1 class="mt-2 text-2xl text-gray-700">{{ content.title }}</h1>
      <h5 v-if="content.instructor" class="mt-4 text-base text-gray-400">By: {{ content.instructors[0].title }}</h5>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ContentCard',
  props: [ 'content'],
  computed: {
    backgroundImage () {
      return {
        backgroundImage: `url(${this.content.images.full})`,
      }
    },
  },
}
</script>

<style scoped>

</style>
