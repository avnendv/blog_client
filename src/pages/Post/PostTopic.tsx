import { useParams } from 'react-router-dom';

import ListPostWrapper from './components/ListPostWrapper';
import { usePostTopicsQuery } from '@/queries/Post';
import { useQueryString } from '@/utils';

const LIMIT = 12;

function PostTopic() {
  const { slug } = useParams();

  const { page } = useQueryString();
  const postNewestQuery = usePostTopicsQuery({ limit: LIMIT, page, slug: slug || '' });

  return <ListPostWrapper title={postNewestQuery.data?.data[0]?.title ?? ''} postQuery={postNewestQuery} />;
}

export default PostTopic;
