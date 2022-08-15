export default {
  getVideos(contex, param) {
    contex.commit('GET_VIDEOS_PENDING')
    const URL = `/videos?search=${param.search}`
    this.$axios
      .get(URL)
      .then((response) => {
        console.log(response)
        contex.commit('GET_VIDEOS_FULFIELD', response.data.data)
      })
      .catch((err) => {
        console.log(err)
        contex.commit('GET_VIDEOS_REJECTED')
      })
  },
}
