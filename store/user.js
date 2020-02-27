export const state = () => ({
  user: false
})

export const getters = {
  getUserStatus: state => !!state.user,
  getUser: state => JSON.parse(state.user)
}

//Mutations Must Be Synchronous
export const mutations = {
  setUser: (state, currentUser) => {
    console.log('setting user to: ' + currentUser)
    if (!currentUser) {
      state.user = null
      //window.localStorage.removeItem('user')
      return
    }
    let theUser = JSON.stringify(currentUser)
    state.user = theUser
    //window.localStorage.setItem('user', theUser)
  }
}

export const actions = {
  loginAction(context, [action]) {
    if (action == 'login' || action == 'signup') {
      console.log('triggering login')
      netlifyIdentity.open(action)
      netlifyIdentity.on(action, user => {
        this.currentUser = {
          username: user.user_metadata.full_name,
          email: user.email,
          access_token: user.token.access_token,
          expires_at: user.token.expires_at,
          refresh_token: user.token.refresh_token,
          token_type: user.token.token_type
        }
        this.dispatch('user/updateUser', {
          currentUser: this.currentUser
        })
        netlifyIdentity.close()
      })
    } else if (action == 'logout') {
      console.log('trying to logout')
      this.currentUser = null
      this.dispatch('user/updateUser', {
        currentUser: this.currentUser
      })
      netlifyIdentity.logout()
      //this.$router.push({ name: 'Home' })
    }
  },
  updateUser: ({ commit }, payload) => {
    console.log('updating user: ' + payload.currentUser)
    commit('setUser', payload.currentUser)
  }
}
