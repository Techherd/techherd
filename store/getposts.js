import axios from 'axios'

export const state = () => ({
  posts: []
})

export const getters = {
  getPosts: (state) => {
    return state.posts
  },
  getPostWithSlug: (state) => (slug) => {
    if (slug) {
      return state.posts.filter((post) => post.slug == slug)
    } else {
      return false
    }
  },
  getPostWithId: (state) => (id) => {
    if (id) {
      return state.posts.filter((post) => post.id == id)
    } else {
      return false
    }
  }
}

export const mutations = {
  storePosts(state, posts) {
    state.posts = posts
  }
}

export const actions = {
  async fetchPosts(context) {
    if (context.state.posts.length < 1) {
      let { data } = await axios.get(
        this.state.apiurl + `/wp-json/wp/v2/posts?_embed&per_page=100`
      )
      this.commit('getposts/storePosts', data)
    }
    // Removed await to alleviate delayed response
    // await this.commit('getposts/storePosts', context.state.posts)
  },
  fetchPost(postslug) {
    axios
      .get(this.state.apiurl + `/wp-json/wp/v2/posts?slug=${postslug}&_embed`)
      .then((r) => r.data)
      .then((post) => {
        this.commit('setArticle', post[0])
      })
  }
}
