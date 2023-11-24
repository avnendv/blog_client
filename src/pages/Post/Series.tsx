import ListCardPostColumn from '@/components/Card/ListCardPostColumn';
import Spinner from '@/components/Spinner/Spinner';
import { useSeriesQuery } from '@/queries/Post';
import { useQueryString } from '@/utils';

const LIMIT = 12;

function Series() {
  const { page } = useQueryString();
  const seriesQuery = useSeriesQuery({ limit: LIMIT, page });

  return (
    <section className='pt-8'>
      {seriesQuery.isLoading ? (
        <Spinner />
      ) : seriesQuery.data?.data && seriesQuery.data?.data.length ? (
        <>
          <ListCardPostColumn
            title='Danh sách series'
            data={seriesQuery.data?.data}
            showPagination
            pagination={seriesQuery.data?.pagination}
          />
        </>
      ) : (
        <p className='py-20 italic text-center text-red-500'>Không tìm thấy series!</p>
      )}
    </section>
  );
}

export default Series;
