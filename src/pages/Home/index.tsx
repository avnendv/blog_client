import ListCardPostColumn from '@/components/Card/ListCardPostColumn';
import ListCardPostGallery from '@/components/Card/ListCardPostGallery';

import { usePostNewestQuery, usePostTrendingQuery } from '@/queries/Post';

import Spinner from '@/components/Spinner/Spinner';

function HomePage() {
  const postTrendingQuery = usePostTrendingQuery();
  const postNewestQuery = usePostNewestQuery({});

  return (
    <>
      {postTrendingQuery.isLoading || postNewestQuery.isLoading ? (
        <Spinner />
      ) : (
        <>
          <ListCardPostGallery title='Bài viết nổi bật' data={postTrendingQuery.data?.data} />
          <ListCardPostColumn title='Bài viết mới' linkAll='/newest' data={postNewestQuery.data?.data} />
        </>
      )}
    </>
  );
}

export default HomePage;
