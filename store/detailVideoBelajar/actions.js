export default {
  getDetailVideo (context, payload) {
    context.commit('GET_VIDEO_PENDING')
    const url = `/videos/${payload}`
    this.$axios
      .get(url)
      .then((res) => {
        context.commit('GET_VIDEO_FULFILLED', res.data.data)
      })
      .catch((err) => {
        console.log(err)
        context.commit('GET_VIDEO_REJECTED')
      })
  },
}
