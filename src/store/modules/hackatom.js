const state = {
  modal: false,
  agreed: false
}

const mutations = {
  setHackAtomModal(state, value) {
    state.modal = value
  },
  setHackAtomAgreed(state, value) {
    state.agreed = value
  }
}

export default {
  state,
  mutations
}
