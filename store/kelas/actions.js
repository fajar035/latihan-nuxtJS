export default {
  getData(context) {
    context.commit('GET_KELAS_PENDING')
    const url = '/class'
    this.$axios
      .$get(url)
      .then((res) => {
        const { data } = res
        context.commit('GET_KELAS_FULFILLED', data)
      })
      .catch((err) => {
        console.log(err)
        context.commit('GET_KELAS_REJECTED')
      })
  },
  getDetail(context, payload) {
    context.commit('GET_DETAIL_PENDING')
    const url = `/class/${payload}`
    this.$axios
      .$get(url)
      .then((res) => {
        const { data } = res
        context.commit('GET_DETAIL_FULFILLED', data)
      })
      .catch((err) => {
        console.log(err)
        context.commit('GET_DETAIL_REJECTED')
      })
  },
}
