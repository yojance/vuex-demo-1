<template>
  <div>{{ contentPageTitle }}</div>
</template>

<script>
export default {
  name: 'ContentPage',
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$store.dispatch('setContentPageType', vm.$route.path)
      vm.$store.dispatch('setContentPageTitle', vm.$route.name)
    })
  },
  computed: {
    contentPageTitle () {
      return this.$store.state.contentPageTitle
    },
    contentPageType () {
      return this.$store.state.contentPageType
    },
  },
}
</script>

<style scoped>

</style>
