export default {
  dataKelas: (state) => {
    return {
      isLoading: state.isLoading,
      isError: state.isError,
      data: state.data,
    };
  },
  detailKelas: (state) => {
    return {
      isLoading: state.isLoading,
      isError: state.isError,
      detailKelas: state.detail,
    };
  },
};
