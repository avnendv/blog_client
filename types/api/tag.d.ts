declare namespace API {
  type TagListParams = {
    keyword?: string;
    limit?: string;
    page?: string;
  };

  type TagListResultItem = {
    id: number;
    name: string;
    description?: string;
    isShowTop?: boolean;
    status: number;
  };

  type TagListResult = ListResult<TagListResultItem>;
}
