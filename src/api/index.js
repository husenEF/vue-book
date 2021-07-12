import axios from "axios";

const instance = axios.create({
  baseURL: "https://test.incenplus.com",
});

instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = "3b18bd0194ad9aff857c5af867427cad9d1d2ae3c4d8f00d57ed8e77";

    // console.log({ config });
    // config.params["token"] = token;
    config.params = { ...config.params, token };
    // console.log({ config });
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

const handlingResponse = (response) => response.data;

export const get = async (url = "/", params = {}) => {
  return await instance.get(url, params).then(handlingResponse);
};
export default instance;
