export default {
  detailVideo: (state) => {
    return {
      isLoading: state.isLoading,
      isError: state.isError,
      detailVideo: state.detailVideo,
    };
  },
};
