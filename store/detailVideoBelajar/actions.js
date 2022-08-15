import axios from "axios";

export default {
  getDetailVideo: (context, payload) => {
    context.commit("GET_VIDEO_PENDING");
    const url = process.env.VUE_APP_API_URL + "/videos/" + payload;
    axios
      .get(url)
      .then((res) => {
        const { data } = res.data;
        context.commit("GET_VIDEO_FULFILLED", data);
      })
      .catch((err) => {
        console.log(err);
        context.commit("GET_VIDEO_REJECTED");
      });
  },
};
