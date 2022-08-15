export default {
  GET_KELAS_PENDING: (state) => {
    state.isLoading = true
  },
  GET_KELAS_FULFILLED: (state, payload) => {
    state.isLoading = false
    state.isError = false
    state.data = payload
  },
  GET_KELAS_REJECTED: (state) => {
    state.isLoading = false
    state.isError = true
  },
  GET_DETAIL_PENDING: (state) => {
    state.isLoading = true
  },
  GET_DETAIL_FULFILLED: (state, payload) => {
    state.isLoading = false
    state.isError = false
    state.detail = payload
  },
  GET_DETAIL_REJECTED: (state) => {
    state.isLoading = false
    state.isError = true
  },
}
