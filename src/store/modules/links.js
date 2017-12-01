let url = 'https://raw.githubusercontent.com/tendermint/aib-data/master/json/links.json'

window.fetch(url)
  .then(response => response.json())
  .then(json => (state.data = json))

const state = {data: { cosmos: {
  intro: {
    video: ''
  },
  github: {
    organization: ''
  },
  community: {
    telegram: ''
  }
},
  tm: {
    website: ''
  }
}}

export default { state }
