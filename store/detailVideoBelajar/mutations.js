export default {
  GET_VIDEO_PENDING: (state) => {
    state.isLoading = true;
  },
  GET_VIDEO_FULFILLED: (state, payload) => {
    state.isLoading = false;
    state.isError = false;
    state.detailVideo = payload;
  },
  GET_VIDEO_REJECTED: (state) => {
    state.isError = true;
    state.isLoading = false;
  },
};
