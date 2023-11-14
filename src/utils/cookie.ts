import Cookies from 'js-cookie';
import { AV_APP } from '@/configs/constants';

export const getToken = (): string => Cookies.get(AV_APP.TOKEN) ?? '';
export const getUserInfo = (): API.UserInfo => {
  try {
    const data = Cookies.get(AV_APP.USER_INFO);
    return data ? JSON.parse(data) : {};
  } catch (error) {
    return {} as API.UserInfo;
  }
};

export const setToken = (token = '') => Cookies.set(AV_APP.TOKEN, token || '');
export const setUserInfo = (data: API.UserInfo) => Cookies.set(AV_APP.USER_INFO, JSON.stringify(data));

export const storeAuthCookie = (data: API.UserInfo) => {
  const { token, ...userInfo } = data;
  setToken(token);
  setUserInfo(userInfo);
};

export const removeAuthCookie = () => {
  Cookies.remove(AV_APP.TOKEN);
  Cookies.remove(AV_APP.USER_INFO);
};
