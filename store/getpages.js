import axios from 'axios'

export const state = () => ({
  pages: [],
  frontpage: {}
})

export const getters = {
  getPages: state => {
    return state.pages
  },
  getFrontPage: state => {
    return state.frontpage
  },
  getPageWithSlug: state => slug => {
    //console.log(slug)
    if (slug) {
      return state.pages.filter(page => page.slug == slug)
    } else {
      return false
    }
  },
  getpageWithId: state => id => {
    if (id) {
      return state.pages.filter(page => page.id == id)
    } else {
      return false
    }
  }
}

export const mutations = {
  storePages(state, pages) {
    state.pages = pages
  },
  storeFrontPage(state, page) {
    state.frontpage = page
  }
}

export const actions = {
  async fetchPages(context) {
    if (context.state.pages.length < 1) {
      let { data } = await axios.get(
        this.state.apiurl + `/wp-json/wp/v2/pages?_embed&per_page=100`
      )
      //console.log(data)
      this.commit('getpages/storePages', data)
    }
    //await this.commit('getpages/storePages', context.state.pages)
  },
  fetchpage(pageslug) {
    //console.log(pagesslug)
    axios
      .get(this.state.apiurl + `/wp-json/wp/v2/pages?slug=${pageslug}&_embed`)
      .then(r => r.data)
      .then(page => {
        this.commit('setArticle', page[0])
      })
  },
  async fetchFrontPage() {
    let { data } = await axios.get(
      this.state.apiurl + `/wp-json/wuxt/v1/front-page?_embed`
    )
    this.commit('getpages/storeFrontPage', data)
  }
}
