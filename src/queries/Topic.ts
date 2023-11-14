import { useQuery } from '@tanstack/react-query';
import TopicApi from '@/api/Topic';

export const useTopicListQuery = (limit?: number) =>
  useQuery({
    queryKey: ['topicList', limit],
    queryFn: () => TopicApi.list({ limit }),
  });
