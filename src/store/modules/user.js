const user = {
  namespaced: true,
  state: {
    user: {
      accountName: 'libai',
      name: '李白',
      sex: '男',
      password: '123'
    },
  },
  mutations: {
    ALTER(state, obj) {
      state.user = obj
    }
  },
  actions: {
    alter({ commit }, obj) {
      commit('ALTER', obj)
    }
  },
  getters: {
    User: state => state.user,
  }
}
export default user