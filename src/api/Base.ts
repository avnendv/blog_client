import axios, { type AxiosResponse, type InternalAxiosRequestConfig } from 'axios';
import { toast } from 'react-toastify';

import env from '@/configs/env';
import { A_SECOND, LINKS } from '@/configs/constants';
import { getToken, removeAuthCookie } from '@/utils/cookie';

const UNKNOWN_ERROR = 'Unknown error, please try again';

const axiosClient = axios.create({
  baseURL: env.BASE_URL_API,
  timeout: 60 * A_SECOND, // Request timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config: InternalAxiosRequestConfig) {
    const token = getToken();
    if (token) config.headers['Authorization'] = `Bearer ${token}`;

    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if (+response.data.result === 0) {
      toast.error(response.data.msg || UNKNOWN_ERROR);
      return Promise.reject(response.data.msg || response.data.message || UNKNOWN_ERROR);
    }
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error?.response?.status === 401) {
      removeAuthCookie();
      window.location.href = LINKS.LOGIN;
      return;
    }

    let message = error?.message;
    if (error?.response?.data) {
      const valueResponse = Object.values(error?.response?.data)[0] as string[];
      if (typeof valueResponse === 'string') message = valueResponse;
      else message = valueResponse[0];
      if (error?.response?.data?.message) message = error?.response?.data?.message;
    }

    toast.error(message);
    return Promise.reject(error);
  }
);

export default axiosClient;
