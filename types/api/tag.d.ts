declare namespace API {
  type TagListParams = {
    keyword?: string;
    limit?: string;
    page?: string;
  };

  type TagListResultItem = {
    _id: string;
    name: string;
    description?: string;
    isShowTop?: boolean;
    status: number;
  };

  type TagListResult = ListResult<TagListResultItem>;
}
