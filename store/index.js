export const state = () => ({
  counter: 0,
  localurl: process.env.baseUrl,
  apiurl: 'https://api.techherd.co/'
})

export const mutations = {
  increment(state) {
    state.counter++
  }
}
