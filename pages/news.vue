<template>
  <div class="pageContainer">
    <h2 class="title">News</h2>
    <Blog limit="3" />
  </div>
</template>

<script>
import Blog from '../components/Blog.vue'
export default {
  name: 'News',
  transition: 'fade',
  components: {
    Blog
  },
  async fetch({ store, params }) {
    await store.dispatch('getposts/fetchPosts')
  }
}
</script>

<style lang="scss" scoped>
h2.title {
  font-family: 'Saira Semi Condensed';
  font-size: 2.2rem;
  font-weight: bold;
  color: #fff;
  letter-spacing: 0.5px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
}

p {
  color: #fff;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  font-size: 1.2rem;
  margin-top: 1rem;
}

input {
  width: 100%;
  font-size: 2rem;
  padding: 1rem;
  border-radius: 0.6rem;
  border: 1px solid rgb(33, 187, 244);
  transition: 0.3s;
}

textarea {
  width: 100%;
  min-height: 400px;
  padding: 1rem;
  font-size: 1.2rem;
  border-radius: 0.6rem;
  border: 1px solid rgb(33, 187, 244);
  transition: 0.3s;
}

input:focus,
textarea:focus {
  outline: none;
  box-shadow: 0px 2px 14px rgba(33, 187, 244, 0.8);
}
</style>