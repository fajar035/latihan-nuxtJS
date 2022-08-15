import axios from "axios";

export default {
  getData: (context) => {
    context.commit("GET_KELAS_PENDING");
    const url = process.env.VUE_APP_API_URL + "/class";
    axios
      .get(url)
      .then((res) => {
        const { data } = res.data;
        context.commit("GET_KELAS_FULFILLED", data);
      })
      .catch((err) => {
        console.log(err);
        context.commit("GET_KELAS_REJECTED");
      });
  },
  getDetail: (context, payload) => {
    context.commit("GET_DETAIL_PENDING");
    const url = process.env.VUE_APP_API_URL + "/class/" + payload;
    axios
      .get(url)
      .then((res) => {
        const { data } = res.data;
        context.commit("GET_DETAIL_FULFILLED", data);
      })
      .catch((err) => {
        console.log(err);
        context.commit("GET_DETAIL_REJECTED");
      });
  },
  updateDetail: (context, payload) => {
    context.commit("UPDATE_DETAIL_PENDING");
    const url = process.env.VUE_APP_API_URL + "/class/" + payload;
    axios
      .get(url)
      .then((res) => {
        const { data } = res.data;
        context.commit("UPDATE_DETAIL_FULFILLED", data);
      })
      .catch((err) => {
        console.log(err);
        context.commit("UPDATE_DETAIL_REJECTED");
      });
  },
};
