<template>
  <div class="blogContainer">
    <nuxt-link to="/news" class="backTo">
      <svg
        height="32px"
        id="Layer_1"
        style="enable-background:new 0 0 32 32;"
        version="1.1"
        viewBox="0 0 32 32"
        width="32px"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <caption>Back to the list of posts</caption>
        <path
          d="M28,14H8.8l4.62-4.62C13.814,8.986,14,8.516,14,8c0-0.984-0.813-2-2-2c-0.531,0-0.994,0.193-1.38,0.58l-7.958,7.958  C2.334,14.866,2,15.271,2,16s0.279,1.08,0.646,1.447l7.974,7.973C11.006,25.807,11.469,26,12,26c1.188,0,2-1.016,2-2  c0-0.516-0.186-0.986-0.58-1.38L8.8,18H28c1.104,0,2-0.896,2-2S29.104,14,28,14z"
        />
      </svg>
    </nuxt-link>

    <div class="blogContent">
      <div class="featuredSlice" v-if="post._embedded['wp:featuredmedia']">
        <img :src="post._embedded['wp:featuredmedia']['0'].media_details.sizes.large.source_url" />
      </div>

      <div class="blogTextBody">
        <h2 class="title" v-html="post.title.rendered"></h2>
        <div class="date">{{ post.date }}</div>
        <div v-html="post.content.rendered" class="text"></div>
      </div>
    </div>
  </div>
</template>

<script>
//import axios from 'axios'

export default {
  name: 'SinglePost',
  transition: 'bounce',
  computed: {
    post() {
      return this.$store.getters['getposts/getPostWithSlug'](
        this.$route.params.slug
      )[0]
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('getposts/fetchPosts')
  }
}
</script>

<style lang="scss" >
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital@0;1&display=swap');

.blogContent {
  background: #fff;
  border-radius: 1.4rem;
  overflow: hidden;
  box-shadow: 0px 6px 28px rgba(0, 0, 0, 0.15);

  .blogTextBody {
    padding: 3rem;
  }

  .featuredSlice {
    img {
      max-height: 250px;
      width: 100%;
      object-fit: cover;
      object-position: center center;
    }
  }

  h2 {
    color: rgba(0, 0, 0, 0.8);
    font-size: 2rem;

    font-family: 'Saira Semi Condensed';
  }

  .date {
    color: rgba(0, 0, 0, 0.4);
    font-size: 0.8rem;
    margin-bottom: 2rem;
  }

  .text {
    font-size: 1.2rem;
    color: rgba(0, 0, 0, 0.9);
    font-family: 'Open Sans';

    p {
      line-height: 1.5;
      font-weight: normal;
      color: rgba(0, 0, 0, 0.9);
    }
  }
}
</style>