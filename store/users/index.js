// export default {
//   namescaped: true,
//   state: {
//     list: [],
//     isLoading: true,
//   },
//   actions: {
//     getUsers(context) {
//       this.$axios
//         .$get('/class')
//         .then((res) => {
//           console.log(res.data)
//         })
//         .catch((err) => {
//           console.log(err)
//         })
//     },
//   },
// }

export const state = () => ({
  list: [],
  isLoading: true,
})

export const actions = {
  getUsers(context) {
    this.$axios
      .$get('/class')
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
}
