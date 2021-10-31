<template>
  <section class="relative px-10 md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1 ">
    <img class="xl:max-w-6xl" :src="content.images.full" alt="">
    <div class="content bg-white p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full lg:absolute top-48 right-5">
      <h2 class="text-3xl font-semibold">{{ content.title }}</h2>
      <p class="my-3 text-justify font-medium text-gray-700 leading-relaxed">{{ shortDescription }}</p>
      <button class="mt-2 md:mt-5 p-3 px-5 bg-black text-white font-bold text-sm hover:bg-purple-800">View</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroContent',
  props: ['content'],
  created() {
    console.log(this.content)
  },
  computed: {
    shortDescription () {
      const desc = this.content.content.rendered
      if (desc.length > 5) {
        return desc.substring(0, 150) + '...'
      }
      return desc
    },
  },
}
</script>

<style scoped>

</style>
