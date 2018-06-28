import getJson from "scripts/getJson"

const state = {
  nodes: [],
  milestones: []
}

const actions = {
  async initializeRoadmap({ commit }) {
    let url =
      "https://api.github.com/repos/tendermint/aib-data/contents/json/roadmap.json"
    commit("setNodes", await getJson(url))
    return Promise.resolve()
  },
  async initializeMilestones({ commit }) {
    let url =
      "https://api.github.com/repos/tendermint/aib-data/contents/json/roadmap-milestones.json"
    commit("setMilestones", await getJson(url))
    return Promise.resolve()
  }
}

const mutations = {
  setNodes(state, value) {
    state.nodes = value
  },
  setMilestones(state, value) {
    state.milestones = value
  }
}

export default { state, actions, mutations }
