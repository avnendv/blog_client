import { Link, useLocation } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

import { useEffect } from 'react';
import IntroTitle from '../IntroTitle';
import CardPostColumn from './CardPostColumn';

import { Pagination as PaginationType } from '@/api/Resource';

interface Props {
  title?: string;
  linkAll?: string;
  data?: API.PostListResultItem[];
  showPagination?: boolean;
  pagination?: PaginationType;
}

function ListCardPostColumn({ title, linkAll, data, pagination, showPagination }: Props) {
  const location = useLocation();

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, [location.search]);

  return (
    <div className='px-4 py-8'>
      <IntroTitle title={title || 'Bài viết mới'} linkAll={linkAll} />
      {data?.length ? (
        <>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
            {data.map((post) => (
              <CardPostColumn key={post.slug} post={post} />
            ))}
          </div>
          {showPagination && (
            <>
              {pagination && (
                <Pagination
                  color='primary'
                  variant='outlined'
                  shape='rounded'
                  page={+pagination.page}
                  count={+pagination.pages}
                  sx={{ pt: 8, '& .MuiPagination-ul': { justifyContent: 'center' } }}
                  renderItem={(item) => (
                    <PaginationItem
                      component={Link}
                      to={`${location.pathname}${item.page === 1 ? '' : `?page=${item.page}`}`}
                      {...item}
                    />
                  )}
                />
              )}
            </>
          )}
        </>
      ) : (
        <p className='py-10 italic text-center text-red-500'>Không tìm thấy bài viết!</p>
      )}
    </div>
  );
}

export default ListCardPostColumn;
