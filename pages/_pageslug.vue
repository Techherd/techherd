<template>
  <div class="pageContainer">
    <div class="boxTest"></div>
    <nuxt-link to="servicesb">Go</nuxt-link>
    <h2 class="title" v-html="page.title.rendered"></h2>
    <div v-html="page.content.rendered"></div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SinglePage',
  transition(to, from) {
    if (!from) {
      return 'slide-left'
    }
    return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  },
  computed: {
    page() {
      return this.$store.getters['getpages/getPageWithSlug'](
        this.$route.params.pageslug
      )[0]
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('getpages/fetchPages')
  }
}
</script>

<style lang="scss" scoped>
h2.title {
  font-family: 'Saira Semi Condensed';
  font-size: 1.8rem;
  font-weight: bold;
  color: #fff;
  letter-spacing: 0.5px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
}

.boxTest {
  display: block;
  width: 200px;
  height: 100px;
  background: blue;
  border-radius: 1rem;
  transition: 1.6s;
}
</style>