import { Link, useLocation } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { Pagination as PaginationType } from '@/api/Resource';
import { PUBLISH } from '@/configs/constants';
import { useQueryString } from '@/utils';
import AccountApi from '@/api/Account';

const LIMIT = 10;

interface Props {
  publish: number;
  data?: API.PostListResultItem[];
  paginate?: PaginationType;
}

function ListPost({ publish, data, paginate }: Props) {
  const location = useLocation();
  const { page } = useQueryString();
  const queryClient = useQueryClient();

  const togglePublish = useMutation({
    mutationFn: (body: { id: string; publish: number }) => AccountApi.togglePublish(body),
    onSuccess: () => {
      toast.success('Cập nhật thành công');
      queryClient.invalidateQueries({
        queryKey: ['accountPosts', { page, publish: publish, limit: LIMIT }],
      });
    },
  });

  const handleAction = (id: string) => {
    togglePublish.mutate({ publish: publish === PUBLISH.DRAFT ? PUBLISH.PUBLISHED : PUBLISH.DRAFT, id });
  };

  return (
    <div>
      <ul>
        {Boolean(data?.length) &&
          data?.map((post) => (
            <div key={post.slug}>
              <li className='flex'>
                <div className='grow'>
                  <h3>
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link> (
                    <Link to={`/topics/${post.topic.slug}`} className='italic'>
                      {post.topic.title}
                    </Link>
                    )
                  </h3>
                  <ul className='flex flex-wrap gap-2'>
                    {!!post.tag.length &&
                      post.tag.map((tag) => (
                        <li
                          key={tag}
                          className='px-2 py-1 rounded-md line-clamp-1 bg-av-primary-light text-av-primary w-fit cursor-pointer max-w-[33%]'
                        >
                          <Link to={`/tags/${tag}`} className='w-full'>
                            {tag}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
                <div className='flex gap-2'>
                  <button className='hover:text-av-primary'>Chỉnh sửa</button>
                  <button className='hover:text-av-primary' onClick={() => handleAction(post._id)}>
                    {publish === PUBLISH.DRAFT ? 'Xuất bản' : 'Hủy xuất bản'}
                  </button>
                </div>
              </li>
              <hr className='my-4' />
            </div>
          ))}
      </ul>
      {Boolean(paginate && paginate.pages > 1) && (
        <Pagination
          color='primary'
          variant='outlined'
          shape='rounded'
          page={+paginate!.page}
          count={+paginate!.pages}
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
    </div>
  );
}

export default ListPost;
