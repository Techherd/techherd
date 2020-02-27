export const state = () => ({
  article: null
})

export const getters = {
  article: state => {
    return state.article
  }
}

export const mutations = {
  setArticle(state, data) {
    state.article = data
  }
}
