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
  listPostByTag(
    slug: string,
    params?: API.PostListParams
  ): BaseResponse<{ posts: API.PostListResultItem[]; tag: API.TagListResultItem }> {
    const URL = `${LINKS.TAGS}/${slug}`;
    return BaseApi.get(URL, { params });
  },
  listPostByTopic(
    slug: string,
    params?: API.PostListParams
  ): BaseResponse<{ posts: API.PostListResultItem[]; topic: API.TopicListResultItem }> {
    const URL = `${LINKS.TOPICS}/${slug}`;
    return BaseApi.get(URL, { params });
  },
  listPostByAuthor(
    slug: string,
    params?: API.PostListParams
  ): BaseResponse<{ trending: API.PostListResultItem[]; posts: API.PostListResultItem[]; author: API.Author }> {
    const URL = `${LINKS.AUTHOR}/${slug}`;
    return BaseApi.get(URL, { params });
  },
  info(id: string): BaseResponse<API.PostInfo> {
    const URL = `${LINKS.POST}/${id}/info`;
    return BaseApi.get(URL);
  },
  mark(id: string, data: { mark: boolean }): BaseResponse<unknown> {
    const URL = `${LINKS.POST}/${id}/mark`;
    return BaseApi.patch(URL, data);
  },
  vote(id: string, data: { vote: number }): BaseResponse<unknown> {
    const URL = `${LINKS.POST}/${id}/vote`;
    return BaseApi.patch(URL, data);
  },
};

export default PostApi;
