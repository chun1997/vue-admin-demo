import axios from "axios";


let baseURL = ''
process.env.NODE_ENV === "development" ? baseURL = '' : baseURL = '' 
export function request(config) {
  const instance = axios.create({
    baseURL: baseURL,
    method: 'get',
    timeout: 5000,
  });

  //请求拦截
  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (err) => {
      console.log(err);
    }
  );

  //响应拦截
  instance.interceptors.response.use(
    (res) => {
      return res;
    },
    (err) => {
      console.log(err);
    }
  );

  return instance(config);
}
