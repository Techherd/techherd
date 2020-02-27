export const state = () => ({
  headerimg: ''
})

export const getters = {
  getCurrentHeaderImage: state => slug => {
    return state.headerimg
  }
}
