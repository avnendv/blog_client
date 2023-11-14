import { useQuery } from '@tanstack/react-query';
import PostApi from '@/api/Post';

interface ParamsQuery extends API.PostListParams {
  slug: string;
}

export const usePostTrendingQuery = () =>
  useQuery({
    queryKey: ['postTrending'],
    queryFn: PostApi.trending,
  });

export const usePostNewestQuery = ({ limit, page }: API.PostListParams) =>
  useQuery({
    queryKey: ['postNewest', { limit, page }],
    queryFn: () => PostApi.newest({ limit, page }),
    placeholderData: (previousData) => previousData,
  });

export const usePostTopicQuery = ({ limit, page, slug }: ParamsQuery) =>
  useQuery({
    queryKey: ['postTopics', { limit, page, slug }],
    queryFn: () => PostApi.listPostByTopic(slug, { limit, page }),
    placeholderData: (previousData) => previousData,
  });

export const usePostTagQuery = ({ limit, page, slug }: ParamsQuery) =>
  useQuery({
    queryKey: ['postTag', { limit, page, slug }],
    queryFn: () => PostApi.listPostByTag(slug, { limit, page }),
    placeholderData: (previousData) => previousData,
  });

export const usePostAuthorQuery = ({ limit, page, slug }: ParamsQuery) =>
  useQuery({
    queryKey: ['postAuthor', { limit, page, slug }],
    queryFn: () => PostApi.listPostByAuthor(slug, { limit, page }),
    placeholderData: (previousData) => previousData,
  });

export const usePostDetailQuery = ({ slug }: { slug?: string }) =>
  useQuery({
    queryKey: ['postDetail', slug],
    queryFn: () => PostApi.get(slug!),
    enabled: slug !== undefined,
  });
