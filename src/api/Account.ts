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
  series(params?: API.PostListParams): BaseResponse<API.PostListResultItem[]> {
    const URL = `${LINKS.ACCOUNT}/series`;
    return BaseApi.get(URL, { params });
  },
  posts(params?: API.PostListParams & { publish: number }): BaseResponse<API.PostListResultItem[]> {
    const URL = `${LINKS.ACCOUNT}/posts`;
    return BaseApi.get(URL, { params });
  },
  storePost(data: API.PostForm) {
    const URL = `${LINKS.ACCOUNT}/post`;
    return BaseApi.post(URL, data);
  },
  updatePost(id: string, data: API.PostForm) {
    const URL = `${LINKS.ACCOUNT}/post/${id}`;
    return BaseApi.put(URL, data);
  },
  destroyPost(id: string) {
    const URL = `${LINKS.ACCOUNT}/post/${id}`;
    return BaseApi.delete(URL);
  },
  togglePublish({ id, publish }: { id: string; publish: number }): BaseResponse<unknown> {
    const URL = `${LINKS.ACCOUNT}/post/${id}/publish`;
    return BaseApi.patch(URL, { publish });
  },
};

export default AccountApi;
