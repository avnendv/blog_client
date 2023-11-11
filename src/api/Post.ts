import BaseApi from './Base';
import Resource, { type BaseResponse } from './Resource';
import { LINKS } from '@/configs/constants';

const PostApi = {
  ...Resource<API.PostListResultItem, API.PostListResult>(LINKS.POST),
  trending(): BaseResponse<API.PostListResultItem[]> {
    const URL = `${LINKS.POST}/trending`;
    return BaseApi.get(URL);
  },
  newest(params?: API.PostListParams): BaseResponse<API.PostListResultItem[]> {
    const URL = `${LINKS.POST}/newest`;
    return BaseApi.get(URL, { params });
  },
  listPostByTag(slug: string, params?: API.PostListParams): BaseResponse<API.PostListResultItem[]> {
    const URL = `${LINKS.TAGS}/${slug}`;
    return BaseApi.get(URL, { params });
  },
  listPostByTopic(slug: string, params?: API.PostListParams): BaseResponse<API.PostListResultItem[]> {
    const URL = `${LINKS.TOPICS}/${slug}`;
    return BaseApi.get(URL, { params });
  },
  listPostByAuthor(slug: string, params?: API.PostListParams): BaseResponse<API.PostListResultItem[]> {
    const URL = `${LINKS.AUTHOR}/${slug}`;
    return BaseApi.get(URL, { params });
  },
};

export default PostApi;
