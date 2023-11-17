import { useAccountBookmarkQuery } from '@/queries/Account';
import { useQueryString } from '@/utils';
import Spinner from '@/components/Spinner/Spinner';
import ListCardPostColumn from '@/components/Card/ListCardPostColumn';

const LIMIT = 12;

function BookmarkPost() {
  const { page } = useQueryString();
  const accountBookmarkQuery = useAccountBookmarkQuery({ limit: LIMIT, page });

  return (
    <section className='pt-8'>
      {accountBookmarkQuery.isLoading ? (
        <Spinner />
      ) : accountBookmarkQuery.data?.data && accountBookmarkQuery.data?.data.length ? (
        <>
          <ListCardPostColumn
            title='Bài viết đã lưu'
            data={accountBookmarkQuery.data?.data}
            showPagination
            pagination={accountBookmarkQuery.data?.pagination}
          />
        </>
      ) : (
        <p className='py-20 italic text-center text-red-500'>Bạn chưa lưu bài viết nào!</p>
      )}
    </section>
  );
}

export default BookmarkPost;
