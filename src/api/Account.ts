import BaseApi from './Base';
import Resource, { type BaseResponse } from './Resource';
import { LINKS } from '@/configs/constants';

const AccountApi = {
  ...Resource<API.PostListResultItem, API.PostListResult>(LINKS.ACCOUNT),
  personal(): BaseResponse<API.UserInfo> {
    const URL = `${LINKS.ACCOUNT}/personal`;
    return BaseApi.get(URL);
  },
  social(): BaseResponse<API.UserSocial> {
    const URL = `${LINKS.ACCOUNT}/social`;
    return BaseApi.get(URL);
  },
  bookmark(params?: API.PostListParams): BaseResponse<API.PostListResultItem[]> {
    const URL = `${LINKS.ACCOUNT}/bookmark`;
    return BaseApi.get(URL, { params });
  },
};

export default AccountApi;
