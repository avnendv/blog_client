import classnames from 'classnames';
import IntroTitle from '../IntroTitle';
import CardPostGallery from './CardPostGallery';

interface Props {
  title?: string;
  linkAll?: string;
  data?: API.PostListResultItem[];
}

function ListCardPostGallery({ title, linkAll, data }: Props) {
  return (
    <div className='px-4 py-8'>
      <IntroTitle title={title || 'Bài viết nổi bật'} linkAll={linkAll} />
      {data?.length ? (
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
          {data.map((post, index) => (
            <CardPostGallery
              key={post.slug}
              post={post}
              classProp={classnames({ 'md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-3': index === 0 })}
            />
          ))}
        </div>
      ) : (
        <p className='py-10 italic text-center text-red-500'>Không tìm thấy bài viết!</p>
      )}
    </div>
  );
}

export default ListCardPostGallery;
