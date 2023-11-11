import { UseQueryResult } from '@tanstack/react-query';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

import classNames from 'classnames';
import ListCardPostColumn from '@/components/Card/ListCardPostColumn';
import Spinner from '@/components/Spinner/Spinner';

import { Response } from '@/api/Resource';

interface Props {
  title: string;
  postQuery: UseQueryResult<Response<API.PostListResultItem[]>, Error>;
}

function ListPostWrapper({ title, postQuery }: Props) {
  return (
    <section className='pt-8'>
      {postQuery.isLoading ? (
        <Spinner />
      ) : postQuery.data?.data.length ? (
        <>
          <div
            className={classNames(
              'p-12 text-white rounded-lg bg-av-text-gray',
              postQuery.data?.data[0].topic.thumbnail ? `bg-[url('${postQuery.data?.data[0].topic.thumbnail}')]` : ''
            )}
          >
            <div className='max-w-[668px] flex flex-col items-center justify-center gap-4 m-auto'>
              <h2 className='text-3xl'>{title}</h2>
              <p className='flex items-end gap-2'>
                <DesignServicesIcon className='border rounded-md' />
                <span>{postQuery.data?.pagination?.total} bài viết</span>
              </p>
            </div>
          </div>
          <ListCardPostColumn
            title={title}
            data={postQuery.data?.data}
            showPagination
            pagination={postQuery.data?.pagination}
          />
        </>
      ) : (
        <p className='py-20 italic text-center text-red-500'>Không tìm thấy bài viết!</p>
      )}
    </section>
  );
}

export default ListPostWrapper;
