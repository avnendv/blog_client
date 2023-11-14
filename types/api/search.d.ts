declare namespace API {
  type SearchListParams = {
    keyword?: string;
    limit?: string;
    page?: string;
  };

  type SearchListResultItem = {
    authors: API.Author[];
    posts: API.PostListResultItem[];
    tags: API.TagListResultItem[];
    topics: API.TopicListResultItem[];
  };

  type SearchListResult = ListResult<SearchListResultItem>;
}
