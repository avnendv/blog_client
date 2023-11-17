declare namespace API {
  type TopicListParams = {
    keyword?: string;
    limit?: string;
    page?: string;
  };

  type TopicListResultItem = {
    _id: string;
    title: string;
    slug: string;
    thumbnail?: string;
    description?: string;
    isShowTop?: boolean;
    status: number;
  };

  type TopicListResult = ListResult<TopicListResultItem>;
}
