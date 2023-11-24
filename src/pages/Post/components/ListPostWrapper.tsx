import { UseQueryResult } from '@tanstack/react-query';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

import ListCardPostColumn from '@/components/Card/ListCardPostColumn';
import Spinner from '@/components/Spinner/Spinner';

import { Response } from '@/api/Resource';

interface Props {
  title: string;
  postQuery: UseQueryResult<
    Response<{ posts: API.PostListResultItem[]; tag?: API.TagListResultItem; topic?: API.TopicListResultItem }>,
    Error
  >;
  isTag?: boolean;
}

function ListPostWrapper({ title, postQuery, isTag }: Props) {
  const posts = postQuery.data?.data.posts;
  return (
    <section className='pt-8'>
      {postQuery.isLoading ? (
        <Spinner />
      ) : posts && posts.length ? (
        <>
          <div
            className='p-12 text-white bg-no-repeat bg-cover rounded-lg bg-av-text-gray'
            style={
              !isTag && postQuery.data?.data.topic?.thumbnail
                ? {
                    backgroundImage: `url(${postQuery.data?.data.topic?.thumbnail})`,
                  }
                : {}
            }
          >
            <div className='max-w-[668px] flex flex-col items-center justify-center gap-4 m-auto'>
              <h2 className='text-3xl'>{title}</h2>
              <p>{isTag ? postQuery.data?.data.tag?.description : postQuery.data?.data.topic?.description}</p>
              <p className='flex items-end gap-2'>
                <DesignServicesIcon className='border rounded-md' />
                <span>{postQuery.data?.pagination?.total} bài viết</span>
              </p>
            </div>
          </div>
          <ListCardPostColumn title={title} data={posts} showPagination pagination={postQuery.data?.pagination} />
        </>
      ) : (
        <p className='py-20 italic text-center text-red-500'>Không tìm thấy bài viết!</p>
      )}
    </section>
  );
}

export default ListPostWrapper;
