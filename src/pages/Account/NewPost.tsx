import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import { toast } from 'react-toastify';
import { schema } from './schemaPost';
import WangEditor from '@/components/Editor/WangEditor';
import { POST_TYPE } from '@/configs/constants';
import { useTopicListQuery } from '@/queries/Topic';
import { removeEmptyProperties, slugify } from '@/utils';
import { useTagListQuery } from '@/queries/Tag';
import AccountApi from '@/api/Account';

function NewPost() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [html, setHtml] = useState('');
  const [isShowSeries, setIsShowSeries] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [series, setSeries] = useState<API.PostListResultItem[]>([]);

  const topicListQuery = useTopicListQuery();
  const tagListQuery = useTagListQuery();

  const onSubmit = async (data: API.PostForm) => {
    if (isLoading) return;

    try {
      setIsLoading(true);
      await AccountApi.storePost(removeEmptyProperties({ ...data, content: html }) as API.PostForm);
      setIsLoading(false);
      toast.success('Tạo bài viết thành công!');
      reset();
      setHtml('');
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-3 gap-4 p-4 text-black bg-white rounded-lg'>
      <div>
        <label htmlFor='title'>Tiêu đề</label>
        <input
          id='title'
          type='text'
          {...register('title')}
          onChange={(e) => setValue('slug', slugify(e.target.value))}
          placeholder='Tiêu đề'
          className={'w-full h-12 py-2 pl-4 rounded-lg bg-av-primary-light'}
        />
        <p className='mt-1 ml-1 italic text-red-500'>{errors.title?.message}</p>
      </div>
      <div>
        <label htmlFor='slug'>Slug</label>
        <input
          id='slug'
          type='text'
          {...register('slug')}
          placeholder='Slug'
          className={'w-full h-12 py-2 pl-4 rounded-lg bg-av-primary-light'}
        />
        <p className='mt-1 ml-1 italic text-red-500'>{errors.slug?.message}</p>
      </div>
      <div>
        <label htmlFor='thumbnail'>Thumbnail</label>
        <input
          id='thumbnail'
          type='text'
          {...register('thumbnail')}
          placeholder='thumbnail'
          className={'w-full h-12 py-2 pl-4 rounded-lg bg-av-primary-light'}
        />
        <p className='mt-1 ml-1 italic text-red-500'>{errors.thumbnail?.message}</p>
      </div>
      <div>
        <label htmlFor='topic'>Chủ đề</label>
        <select
          id='topic'
          {...register('topic')}
          placeholder='Chủ đề'
          className={'w-full h-12 py-2 pl-4 rounded-lg bg-av-primary-light'}
        >
          <option value=''>Chọn chủ đề</option>
          {Boolean(topicListQuery.data?.data?.length) &&
            topicListQuery.data?.data.map((topic) => (
              <option key={topic._id} value={topic._id}>
                {topic.title}
              </option>
            ))}
        </select>
        <p className='mt-1 ml-1 italic text-red-500'>{errors.topic?.message}</p>
      </div>
      <div>
        <label htmlFor='tag'>Tag</label>
        <select
          id='tag'
          {...register('tag')}
          placeholder='Tag'
          multiple
          defaultValue={[]}
          className={'w-full h-12 py-2 pl-4 rounded-lg bg-av-primary-light'}
        >
          {Boolean(tagListQuery.data?.data?.length) &&
            tagListQuery.data?.data.map((topic) => (
              <option key={topic.name} value={topic.name}>
                {topic.name}
              </option>
            ))}
        </select>
        <p className='mt-1 ml-1 italic text-red-500'>{errors.tag?.message}</p>
      </div>
      <div>
        <label htmlFor='postType'>Loại bài viết</label>
        <select
          id='postType'
          {...register('postType')}
          defaultValue={POST_TYPE.POST}
          onChange={(e) => {
            if (e.target.value && +e.target.value === POST_TYPE.POST_SERIES) {
              setIsShowSeries(true);
              AccountApi.series().then((res) => {
                setSeries(res.data);
              });
            } else {
              setIsShowSeries(false);
              setValue('series', '');
              setSeries([]);
            }
          }}
          className={'w-full h-12 py-2 pl-4 rounded-lg bg-av-primary-light'}
          placeholder='Loại bài viết'
        >
          {(Object.keys(POST_TYPE) as (keyof typeof POST_TYPE)[]).map((postType) => (
            <option key={postType} value={POST_TYPE[postType]}>
              {postType}
            </option>
          ))}
        </select>
        <p className='mt-1 ml-1 italic text-red-500'>{errors.postType?.message}</p>
      </div>
      {isShowSeries && (
        <div>
          <label htmlFor='series'>Series</label>
          <select
            id='series'
            {...register('series')}
            placeholder='Series'
            className={'w-full h-12 py-2 pl-4 rounded-lg bg-av-primary-light'}
          >
            <option value=''>Chọn series</option>
            {series.length &&
              series.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.title}
                </option>
              ))}
          </select>
          <p className='mt-1 ml-1 italic text-red-500'>{errors.series?.message}</p>
        </div>
      )}

      <div className='col-span-3'>
        <p>Mô tả:</p>
        <textarea
          id='description'
          {...register('description')}
          placeholder='Mô tả'
          rows={3}
          className={'w-full py-2 pl-4 rounded-lg bg-av-primary-light'}
        ></textarea>
        <p className='mt-1 ml-1 italic text-red-500'>{errors.description?.message}</p>
      </div>
      <div className='col-span-3'>
        <p>Nội dung:</p>
        <WangEditor html={html} setHtml={setHtml} />
      </div>
      <div>
        <button
          className={classNames('h-12 px-4 py-2 transition-all duration-300 bg-av-primary rounded-xl text-av-dark', {
            'bg-av-primary-light pointer-events-none cursor-not-allowed': isLoading,
          })}
        >
          Tạo bài viết
        </button>
      </div>
    </form>
  );
}

export default NewPost;
