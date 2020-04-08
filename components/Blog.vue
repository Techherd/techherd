<template>
  <div class="blogPosts">
    <div v-for="post in posts" :key="post.slug" class="blogPost">
      <div class="blogImage" v-if="post._embedded['wp:featuredmedia']">
        <img :src="post._embedded['wp:featuredmedia']['0'].media_details.sizes.medium.source_url" />
      </div>
      <div class="blogText">
        <div class="blogHeading">
          <h2>{{ post.title.rendered }}</h2>
          <div class="date">{{ post.date }}</div>
        </div>
        <div v-html="post.excerpt.rendered" class="excerpt"></div>
      </div>
      <nuxt-link :to="'blog/' + post.slug">{{ post.title.rendered }}</nuxt-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['limit'],
  computed: {
    posts() {
      return this.$store.getters['getposts/getPosts']
    }
  }
}
</script>

<style lang="scss" scoped>
/*Blog Styles*/

@media only screen and (max-width: 600px) {
  div.blogPost {
    grid-template-areas:
      'image'
      'text';

    .blogImage {
      min-height: 200px;

      img {
        border-bottom-left-radius: 0px;
        border-top-right-radius: 0.5rem;
      }
    }
  }
}

.blogPosts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, max-content));
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;
}

.blogPost {
  margin-bottom: 3rem;
  display: grid;
  position: relative;
  grid-template-areas:
    'image'
    'text';
  background: #fff;
  border-radius: 0.5rem;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.08);

  a:link {
    position: absolute;
    top: -7px;
    left: -7px;
    right: -7px;
    bottom: -7px;
    border-radius: 0.9rem;
    font-size: 0px;
    z-index: 15;
  }
  a:hover {
    color: #5d3dff;
    font-weight: bold;
    z-index: 15;
    position: absolute;
    top: -7px;
    left: -7px;
    right: -7px;
    bottom: -7px;
    border-radius: 0.9rem;
    font-size: 0px;
    border: 4px solid #479cf7;
  }

  a:visited {
    color: #f7479e;
    border: 4px solid #f7479e;
  }

  .blogImage {
    grid-area: image;
    position: relative;
    min-height: 250px;

    img {
      position: absolute;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
      width: 100%;
      height: 100%;
      z-index: 10;
      object-fit: cover;
      object-position: center center;
    }
  }

  .blogText {
    grid-area: text;
    padding: 1.2rem;
    padding-left: 2rem;
    padding-right: 2rem;

    .blogHeading {
      display: grid;
      grid-template-columns: 3fr 1fr;
      grid-column-gap: 0.5rem;
      margin-bottom: 2rem;

      .date {
        text-align: right;
        color: rgba(0, 0, 0, 0.4);
      }
    }

    h2 {
      background: linear-gradient(
        113deg,
        rgba(42, 139, 214, 1) 0%,
        rgba(231, 43, 178, 1) 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .excerpt {
      line-height: 1.6;
    }
  }
}

.appWrapper.darkmode {
  .blogPost {
    background: #496074;
    border: 1px solid #2b3844;

    a {
      color: #92c8f6;
    }

    a:visited {
      color: #92c8f6;
    }
  }
}
</style>
