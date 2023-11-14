import { Link } from 'react-router-dom';

import classNames from 'classnames';
import IntroTitle from '@/components/IntroTitle';
import Spinner from '@/components/Spinner/Spinner';

import { useTopicListQuery } from '@/queries/Topic';

function TopicList() {
  const topicListQuery = useTopicListQuery();
  return (
    <div className='px-4 py-8'>
      <IntroTitle title={'Danh sách chủ đề'} />
      {topicListQuery.isLoading ? (
        <Spinner />
      ) : topicListQuery.data?.data.length ? (
        <div className='flex flex-wrap items-center justify-center gap-4'>
          {topicListQuery.data?.data.map((topic) => (
            <div
              className={classNames(
                'p-4 text-center basis-1/4 flex flex-col border items-center justify-center min-h-[200px] text-white rounded-lg bg-av-text-gray bg-[url("")]',
                topic.thumbnail ? `bg-[url('${topic.thumbnail}')]` : ''
              )}
              key={topic.slug}
            >
              <Link className='hover:text-av-primary' to={`/topics/${topic.slug}`}>
                <h4 className='uppercase'>{topic.title}</h4>
              </Link>
              <p className='mt-2 text-sm italic line-clamp-3'>{topic.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className='py-20 italic text-center text-red-500'>Không tìm thấy chủ đề nào!</p>
      )}
    </div>
  );
}

export default TopicList;
