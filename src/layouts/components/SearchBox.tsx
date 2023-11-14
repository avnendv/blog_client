import classNames from 'classnames';
import { ChangeEvent, useState, useRef } from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

import CloseIcon from '@mui/icons-material/Close';

import { Link } from 'react-router-dom';
import { useDebounce, useOnClickOutside } from '@/hooks';
import { useSearchListQuery } from '@/queries/Search';

function SearchBox() {
  const ref = useRef(null);
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce<string>(value, 500);

  const [isShowSearch, setIsShowSearch] = useState(false);

  const searchListQuery = useSearchListQuery(debouncedValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleFocus = () => {
    setIsShowSearch(true);
  };

  const handleClickOutside = () => {
    setIsShowSearch(false);
    setValue('');
  };

  const handleIconClick = () => setValue('');

  useOnClickOutside(ref, handleClickOutside);

  return (
    <div ref={ref} className='relative grow'>
      <form noValidate autoComplete='off'>
        <FormControl size='small' sx={{ width: '100%', flexGrow: 1 }} variant='outlined'>
          <InputLabel htmlFor='search_input'>Nhập từ khóa tìm kiếm...</InputLabel>
          <OutlinedInput
            id='search_input'
            type='text'
            value={value}
            onFocus={handleFocus}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position='end' className={value ? '' : '!hidden'}>
                <IconButton aria-label='search button' edge='end' onClick={handleIconClick}>
                  <CloseIcon />
                </IconButton>
              </InputAdornment>
            }
            label='Nhập từ khóa tìm kiếm...'
          />
        </FormControl>
      </form>
      <div
        className={classNames(
          'absolute z-10 w-full px-2 py-4 mt-2 overflow-auto rounded-lg max-h-60 top-full bg-av-text-gray',
          { hidden: !isShowSearch }
        )}
      >
        <p className='text-sm italic'>Kết quả tìm kiếm cho: {debouncedValue}</p>
        {searchListQuery.isLoading ? (
          <p className='mt-2 text-sm italic font-medium text-center text-av-dark'>Đang tìm kiếm...</p>
        ) : searchListQuery.data?.data ? (
          <>
            {!!searchListQuery.data.data.authors.length && (
              <div className='mt-2'>
                <div className='flex items-center justify-between text-sm'>
                  <h3>Tác giả</h3>
                </div>
                <Divider sx={{ my: 1 }} />
                {searchListQuery.data.data.authors.map((author) => (
                  <Link
                    to={`/author/${author._id}`}
                    key={author._id}
                    className='flex items-center gap-2 mb-2 text-sm hover:text-av-primary'
                  >
                    <Avatar sx={{ width: 32, height: 32 }} src={author?.avatar}>
                      {author?.fullName}
                    </Avatar>
                    <div>{author?.fullName}</div>
                  </Link>
                ))}
              </div>
            )}
            {!!searchListQuery.data.data.tags.length && (
              <div className='mt-2'>
                <div className='flex items-center justify-between text-sm'>
                  <h3>Tag</h3>
                </div>
                <Divider sx={{ my: 1 }} />
                {searchListQuery.data.data.tags.map((tag) => (
                  <Link
                    to={`/tags/${tag.name}`}
                    key={tag.name}
                    className='flex items-center justify-between mb-2 hover:text-av-primary'
                  >
                    # {tag.name}
                  </Link>
                ))}
              </div>
            )}
            {!!searchListQuery.data.data.topics.length && (
              <div className='mt-2'>
                <div className='flex items-center justify-between text-sm'>
                  <h3>Chủ đề</h3>
                </div>
                <Divider sx={{ my: 1 }} />
                {searchListQuery.data.data.topics.map((topic) => (
                  <Link
                    to={`/topics/${topic.slug}`}
                    key={topic.slug}
                    className='flex items-center gap-2 mb-2 text-sm hover:text-av-primary'
                  >
                    <Avatar sx={{ width: 32, height: 32 }} src={topic?.thumbnail}>
                      {topic?.title}
                    </Avatar>
                    <div className='line-clamp-1'>{topic?.title}</div>
                  </Link>
                ))}
              </div>
            )}
            {!!searchListQuery.data.data.posts.length && (
              <div className='mt-2'>
                <div className='flex items-center justify-between text-sm'>
                  <h3>Bài viết</h3>
                </div>
                <Divider sx={{ my: 1 }} />
                {searchListQuery.data.data.posts.map((post) => (
                  <Link
                    to={`/blog/${post.slug}`}
                    key={post.slug}
                    className='flex items-center gap-2 mb-2 text-sm hover:text-av-primary'
                  >
                    <Avatar sx={{ width: 32, height: 32 }} src={post?.thumbnail}>
                      {post?.title}
                    </Avatar>
                    <div className='line-clamp-1'>{post?.title}</div>
                  </Link>
                ))}
              </div>
            )}
          </>
        ) : (
          <p className='mt-2 text-sm italic font-medium text-center text-av-dark'>Chưa tìm thấy kết quả phù hợp!</p>
        )}
      </div>
    </div>
  );
}

export default SearchBox;
