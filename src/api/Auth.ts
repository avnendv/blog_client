import BaseApi from './Base';
import { type BaseResponse } from './Resource';
import { LINKS } from '@/configs/constants';

const AuthApi = {
  register(data: API.RegisterForm) {
    return BaseApi.post(LINKS.REGISTER, data);
  },
  login(data: API.LoginForm) {
    return BaseApi.post(LINKS.LOGIN, data);
  },
  logout() {
    return BaseApi.delete(LINKS.LOGOUT);
  },
  // changePassword(data) {
  //   return BaseApi.post(LINKS.CHANGE_PASSWORD, data);
  // },
  info(): BaseResponse<API.UserInfo> {
    return BaseApi.get('/check');
  },
};

export default AuthApi;
