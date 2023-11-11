import { Link, useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import HomeIcon from '@mui/icons-material/Home';

import dayjs from 'dayjs';
import { usePostDetailQuery } from '@/queries/Post';
import { formatTimeAgo } from '@/utils';

import Spinner from '@/components/Spinner/Spinner';

function SinglePost() {
  const { slug } = useParams();
  const postDetailQuery = usePostDetailQuery({ slug });

  const post = postDetailQuery.data?.data;

  const cleanHTML = DOMPurify.sanitize(post?.content || '', {
    USE_PROFILES: { html: true },
  });

  return (
    <>
      {postDetailQuery.isLoading ? (
        <Spinner />
      ) : (
        <>
          {post ? (
            <div className='p-4'>
              <Breadcrumbs aria-label='breadcrumb'>
                <Link to='/' className='flex items-center hover:underline'>
                  <HomeIcon sx={{ mr: 0.5 }} fontSize='inherit' />
                  Trang chủ
                </Link>
                <Typography
                  sx={{ display: 'flex', alignItems: 'center' }}
                  color='text.primary'
                  className='!line-clamp-1'
                >
                  {post.title}
                </Typography>
              </Breadcrumbs>
              <div className='flex justify-between gap-2 mt-4'>
                <h1 className='mt-2 text-3xl'>{post.title}</h1>
                <div className='min-w-[80px]'>
                  <IconButton aria-label='bookmark'>
                    <BookmarkBorderOutlinedIcon />
                  </IconButton>
                  <IconButton aria-label='more action'>
                    <MoreHorizOutlinedIcon />
                  </IconButton>
                </div>
              </div>
              <div className='flex flex-wrap items-center gap-2 mt-2 text-sm text-av-text-gray'>
                <div className='flex items-center gap-2'>
                  <Avatar sx={{ width: 28, height: 28 }} alt={post.author.fullName} src={post.author.avatar} />
                  <span className='font-medium'>{post.author.fullName}</span>
                </div>
                |
                <div>
                  <Tooltip title={dayjs(post.updatedAt).format('DD/MM/YYYY HH:mm')}>
                    <time>{formatTimeAgo(post.updatedAt)}</time>
                  </Tooltip>
                  &nbsp; &#x2022;&nbsp;
                  <span>{post.minRead} phút đọc</span>
                </div>
              </div>
              <div className='py-12'>{parse(cleanHTML)}</div>
              <ul className='flex flex-wrap gap-2'>
                {!!post.tag.length &&
                  post.tag.map((tag) => (
                    <li
                      key={tag}
                      className='px-2 py-1 rounded-md line-clamp-1 bg-av-primary-light text-av-primary w-fit cursor-pointer max-w-[33%]'
                    >
                      #{tag}
                    </li>
                  ))}
              </ul>
            </div>
          ) : (
            <p className='py-20 italic text-center text-red-500'>Không tìm thấy bài viết!</p>
          )}
        </>
      )}
    </>
  );
}

export default SinglePost;
