import { useQuery } from '@tanstack/react-query';
import TagApi from '@/api/Tag';

export const useTagListQuery = (limit?: number) =>
  useQuery({
    queryKey: ['tagList', limit],
    queryFn: () => TagApi.list({ limit }),
  });
