export default {
  getDetailVideo: (context, payload) => {
    context.commit('GET_VIDEO_PENDING')
    const url = '/videos/' + payload
    this.$axios
      .get(url)
      .then((res) => {
        const { data } = res
        context.commit('GET_VIDEO_FULFILLED', data)
      })
      .catch((err) => {
        console.log(err)
        context.commit('GET_VIDEO_REJECTED')
      })
  },
}
