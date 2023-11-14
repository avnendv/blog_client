declare namespace API {
  type PostListParams = {
    keyword?: string;
    limit?: string | number;
    page?: string | number;
  };

  type PostListResultItem = {
    _id: number;
    title: string;
    slug: string;
    isShowTop: boolean;
    publish: number;
    author: API.Author;
    viewed: number;
    postType: number;
    thumbnail?: string;
    description?: string;
    content: string;
    minRead: string | number;
    tag: string[];
    topic: TopicListResultItem;
    series: PostListResultItem;
    status: number;
    updatedAt: string;
    tag: string[];
  };

  type PostListResult = ListResult<PostListResultItem>;
}
