import { useParams } from 'react-router-dom';

import ListPostWrapper from './components/ListPostWrapper';
import { usePostTagQuery } from '@/queries/Post';
import { useQueryString } from '@/utils';

const LIMIT = 12;

function PostTag() {
  const { slug } = useParams();

  const { page } = useQueryString();
  const postTagQuery = usePostTagQuery({ limit: LIMIT, page, slug: slug || '' });

  return <ListPostWrapper title={postTagQuery.data?.data.tag?.name ?? ''} postQuery={postTagQuery} isTag />;
}

export default PostTag;
