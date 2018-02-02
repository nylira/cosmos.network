import axios from 'axios'

export default async function getJson (url) {
  let data = (await axios.get(url)).data
  let json = JSON.parse(window.atob(data.content))
  return json
}
