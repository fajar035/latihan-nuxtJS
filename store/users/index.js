export default {
  namescaped: true,
  state: {
    list: [],
    isLoading: true,
  },
  actions: {
    getUsers(context) {
      this.$axios('/users')
        .then((res) => {
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
