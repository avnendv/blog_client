import ListPostWrapper from './components/ListPostWrapper';
import { usePostNewestQuery } from '@/queries/Post';
import { useQueryString } from '@/utils';

const LIMIT = 12;

function PostNewest() {
  const { page } = useQueryString();
  const postNewestQuery = usePostNewestQuery({ limit: LIMIT, page });

  return <ListPostWrapper title='Bài viết mới' postQuery={postNewestQuery} />;
}

export default PostNewest;
