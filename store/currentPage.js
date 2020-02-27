export const state = () => ({
  page: 'index',
  color: '#4FCAFF',
  color2: '#0C1192'
})

export const mutations = {
  updatePage(state, pageName) {
    state.page = pageName
    if (pageName == 'news') {
      state.color = '#C043CB'
      state.color2 = '#0C1192'
    } else if (pageName == 'services') {
      state.color = '#F16E35'
      state.color2 = '#BF2016'
    } else if (pageName == 'contact') {
      state.color = '#F1C835'
      state.color2 = '#88F135'
    } else {
      state.color = '#4FCAFF'
      state.color2 = '#0C1192'
    }
  }
}
