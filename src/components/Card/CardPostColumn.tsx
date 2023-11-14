import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';

import { textClamp, formatTimeAgo } from '@/utils';

interface Props {
  post: API.PostListResultItem;
}

function CardPostColumn({ post }: Props) {
  return (
    <div className='flex flex-col gap-4 p-4 border rounded-xl border-av-gray dark:border-av-gray-dark'>
      <Link to={`/blog/${post.slug}`}>
        <img className='rounded-md max-h-[260px] w-full object-cover' src={post.thumbnail} alt={post.title} />
      </Link>
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
      <Link to={`/blog/${post.slug}`} className='text-2xl font-semibold hover:text-av-primary line-clamp-2'>
        {post.title}
      </Link>
      <div className='flex flex-wrap items-center justify-between gap-2 text-sm text-av-text-gray'>
        <Link to={`/author/${post.author._id}`}>
          <div className='flex items-center gap-4'>
            <Avatar alt={post.author.fullName} src={post.author.avatar} />
            <Tooltip title={post.author.fullName}>
              <span className='font-medium line-clamp-1'>{textClamp(post.author.fullName)}</span>
            </Tooltip>
          </div>
        </Link>
        <div>
          <Tooltip title={dayjs(post.updatedAt).format('DD/MM/YYYY HH:mm')}>
            <time>{formatTimeAgo(post.updatedAt)}</time>
          </Tooltip>
          &nbsp; &#x2022;&nbsp;
          <span>{post.minRead || 1} phút đọc</span>
        </div>
      </div>
    </div>
  );
}

export default CardPostColumn;
