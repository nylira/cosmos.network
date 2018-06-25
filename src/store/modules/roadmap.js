import getJson from "scripts/getJson"

const state = {
  nodes: [],
  milestones: []
}

const mutations = {
  async initializeRoadmap(state) {
    let url =
      "https://api.github.com/repos/tendermint/aib-data/contents/json/roadmap.json"
    state.nodes = await getJson(url)
  },
  async initializeMilestones(state) {
    let url =
      "https://api.github.com/repos/tendermint/aib-data/contents/json/roadmap-milestones.json"
    state.milestones = await getJson(url)
  }
}

export default { state, mutations }
