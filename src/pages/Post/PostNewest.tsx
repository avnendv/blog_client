import ListCardPostColumn from '@/components/Card/ListCardPostColumn';
import Spinner from '@/components/Spinner/Spinner';
import { usePostNewestQuery } from '@/queries/Post';
import { useQueryString } from '@/utils';

const LIMIT = 12;

function PostNewest() {
  const { page } = useQueryString();
  const postNewestQuery = usePostNewestQuery({ limit: LIMIT, page });

  return (
    <section className='pt-8'>
      {postNewestQuery.isLoading ? (
        <Spinner />
      ) : postNewestQuery.data?.data && postNewestQuery.data?.data.length ? (
        <>
          <ListCardPostColumn
            title='Bài viết mới'
            data={postNewestQuery.data?.data}
            showPagination
            pagination={postNewestQuery.data?.pagination}
          />
        </>
      ) : (
        <p className='py-20 italic text-center text-red-500'>Không tìm thấy bài viết!</p>
      )}
    </section>
  );
}

export default PostNewest;
