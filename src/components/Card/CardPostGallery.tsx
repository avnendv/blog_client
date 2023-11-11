import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';

import { formatTimeAgo } from '@/utils/time';

interface Props {
  classProp?: string;
  post: API.PostListResultItem;
}

function CardPostGallery({ classProp, post }: Props) {
  return (
    <div className={`relative min-h-[280px] rounded-lg ${classProp}`}>
      <Link
        className='absolute top-0 left-0 w-full h-full before:bg-av-bg-before before:w-full before:h-full before:absolute before:z-10 before:top-0 before:left-0'
        to={`blog/${post.slug}`}
      >
        <img className='object-cover w-full h-full rounded-lg' src={post.thumbnail} alt={post.title} />
      </Link>
      <div className='absolute bottom-0 left-0 z-20 w-full p-2'>
        <Link to={`blog/${post.slug}`} className='text-2xl font-semibold text-white hover:text-av-primary line-clamp-2'>
          {post.title}
        </Link>
        <p className='text-av-text-gray'>
          <Tooltip title={dayjs(post.updatedAt).format('DD/MM/YYYY HH:mm')}>
            <time>{formatTimeAgo(post.updatedAt)}</time>
          </Tooltip>
          &nbsp; &#x2022;&nbsp;
          {post.minRead} phút đọc
        </p>
      </div>
    </div>
  );
}

export default CardPostGallery;
