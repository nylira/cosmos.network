import Parser from 'rss-parser'

const state = {
  posts: []
}

const mutations = {
  async initializeBlog (state) {
    const parser = new Parser()
    const RSS_URL = 'https://medium.com/feed/cosmos-blockchain'
    // TODO: Replace demo cors proxy with our own proxy
    const PROXY_URL = 'https://cors-anywhere.herokuapp.com/'
    const FULL_URL = PROXY_URL + RSS_URL

    let feed = await parser.parseURL(FULL_URL)
    state.posts = feed.items
  }
}

export default { state, mutations }
