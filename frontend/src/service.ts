import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";
import { merge } from "lodash-es";



/** 创建请求实例 */
function createService() {
  // 创建一个 axios 实例命名为 service
  const service = axios.create();


  service.interceptors.request.use(
    (config) => config,
    (error) => Promise.reject(error),
  );

  service.interceptors.response.use(
    (response) => {

      const apiData = response.data;

      const responseType = response.request?.responseType;
      return apiData
      // if (responseType === "blob" || responseType === "arraybuffer")
      //   return apiData;
      //
      // const code = apiData.code;
      // if (code === undefined) {
      //   return Promise.reject(new Error("非本系统的接口"));
      // }
      // switch (code) {
      //   case 0:
      //     return apiData;
      //   default:
      //       console.log("err1",msg)
      //     return Promise.reject(new Error(msg));
      // }
    },
    (error) => {
        console.error("request err:", error.message)
      return Promise.reject(error);
    },
  );
  return service;
}

/** 创建请求方法 */
function createRequest(service: AxiosInstance) {
  return function <T>(config: AxiosRequestConfig): Promise<T> {
    const defaultConfig = {
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 5000,
      retries: 0,
      retryCount: 0,
      baseURL: "/api/v1",
      data: {},
    };
    // 将默认配置 defaultConfig 和传入的自定义配置 config 进行合并成为 mergeConfig
    const mergeConfig = merge(defaultConfig, config);

    return service(mergeConfig);
  };
}

/** 用于网络请求的实例 */
const service = createService();
/** 用于网络请求的方法 */
export const request = createRequest(service);
