import BaseApi from './Base';

/**
 * Simple RESTful resource
 */

export type Pagination = {
  limit: number;
  page: number;
  pages: number;
  total: number;
};

export type Response<T = unknown> = {
  result: 1 | 0;
  message?: string;
  data: T;
  pagination?: Pagination;
};

export type BaseResponse<T = unknown> = Promise<Response<T>>;

interface ResourceAPI<T, L> {
  list: (params: unknown) => Promise<L>;
  get: (id: number | string) => BaseResponse<T>;
  store: (data: T) => BaseResponse<T>;
  update: (id: number | string, data: T) => BaseResponse<T>;
  destroy: (id: number | string) => BaseResponse<void>;
}

export function Resource<T, L = T>(uri = ''): ResourceAPI<T, L> {
  return {
    list(params) {
      const URL = uri;
      return BaseApi.get(URL, { params });
    },
    get(id) {
      const URL = `${uri}/${id}`;
      return BaseApi.get(URL);
    },
    store(data) {
      const URL = uri;
      return BaseApi.post(URL, data);
    },
    update(id, data) {
      const URL = `${uri}/${id}`;
      return BaseApi.put(URL, data);
    },
    destroy(id) {
      if (Array.isArray(id)) return BaseApi.delete(uri, { params: { id } });

      const URL = `${uri}/${id}`;
      return BaseApi.delete(URL);
    },
  };
}
export default Resource;
