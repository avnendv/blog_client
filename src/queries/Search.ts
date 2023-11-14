import { useQuery } from '@tanstack/react-query';
import SearchApi from '@/api/Search';

export const useSearchListQuery = (keyword?: string) =>
  useQuery({
    queryKey: ['topicList', keyword],
    queryFn: () => SearchApi.search({ keyword }),
  });
