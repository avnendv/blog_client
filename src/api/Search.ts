import BaseApi from './Base';
import { BaseResponse } from './Resource';
import { LINKS } from '@/configs/constants';

const SearchApi = {
  search(params?: { keyword?: string }): BaseResponse<API.SearchListResultItem> {
    if (params?.keyword) return BaseApi.get(LINKS.SEARCH, { params });

    return {} as BaseResponse<API.SearchListResultItem>;
  },
};

export default SearchApi;
