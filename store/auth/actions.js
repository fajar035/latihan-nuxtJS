export default {
  login(contex, data) {
    return new Promise((resolve, reject) => {
      const URL = `/user/auth/login`;
      console.log('url', URL);
      this.$axios
        .post(URL, data)
        .then((response) => {
          console.log(response);
          resolve(response.data.data);
        })
        .catch((err) => {
          console.log(err);
          const message = err.response.data;
          reject(message);
        });
    });
  },
};
