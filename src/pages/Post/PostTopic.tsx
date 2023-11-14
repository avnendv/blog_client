import { useParams } from 'react-router-dom';

import ListPostWrapper from './components/ListPostWrapper';
import { usePostTopicQuery } from '@/queries/Post';
import { useQueryString } from '@/utils';

const LIMIT = 12;

function PostTopic() {
  const { slug } = useParams();

  const { page } = useQueryString();
  const postTopicQuery = usePostTopicQuery({ limit: LIMIT, page, slug: slug || '' });

  return <ListPostWrapper title={postTopicQuery.data?.data.topic.title ?? ''} postQuery={postTopicQuery} />;
}

export default PostTopic;
