import axios from 'axios'

export const state = () => ({
  mainmenu: []
})

export const getters = {
  getMenu: state => {
    return state.mainmenu
  }
}

export const mutations = {
  setMenu(state, data) {
    state.mainmenu = data
  }
}

export const actions = {
  async fetchMenus(context) {
    if (context.state.mainmenu.length < 1) {
      let { data } = await axios.get(
        this.state.apiurl + `/wp-json/wp-api-menus/v2/menus/2`
      )
      //console.log(this.state.apiurl + `/wp-json/wp-api-menus/v2/menus/2`)
      //console.log(data)
      this.commit('getMenus/setMenu', data.items)
    }
    //await this.commit('getMenus/setMenu', context.state.pages)
  }
}
