import BaseApi from './Base';
import Resource, { type BaseResponse } from './Resource';
import { LINKS } from '@/configs/constants';

const AccountApi = {
  ...Resource<API.PostListResultItem, API.PostListResult>(LINKS.ACCOUNT),
  bookmark(params?: API.PostListParams): BaseResponse<API.PostListResultItem[]> {
    const URL = `${LINKS.ACCOUNT}/bookmark`;
    return BaseApi.get(URL, { params });
  },
};

export default AccountApi;
