import axios from "axios";

const instance = axios.create({
  baseURL: "https://test.incenplus.com",
});

instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = localStorage.getItem("token") || null;

    // console.log({ config });
    // config.params["token"] = token;
    if (config.url !== "/users/login") {
      config.params = { ...config.params, token };
    }
    // console.log({ config });
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

const handlingResponse = (response) => response.data;

export const getApi = async (url = "/", params = {}) => {
  return await instance.get(url, params).then(handlingResponse);
};

export const postApi = async (url = "/", body = {}, params = {}) => {
  return await instance.post(url, body, { params }).then(handlingResponse);
};
export default instance;
