export const state = () => ({
  darkmode: false
})

export const mutations = {
  setLightDark(state, data) {
    state.darkmode = data
    if (data === true) {
      document.documentElement.style.setProperty('--stars-color', '#3F5166')
    } else {
      document.documentElement.style.setProperty('--stars-color', '#fff')
    }
  }
}
