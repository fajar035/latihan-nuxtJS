export default {
  getMiniBootCamp(contex) {
    contex.commit('GET_MINIBOOTCAMP_PENDING')
    const URL = '/miniclass'
    this.$axios
      .get(URL)
      .then((response) => {
        console.log(response)
        contex.commit('GET_MINIBOOTCAMP_FULFIELD', response.data.data)
      })
      .catch((err) => {
        console.log(err)
        contex.commit('GET_MINIBOOTCAMP_REJECTED')
      })
  },
}
