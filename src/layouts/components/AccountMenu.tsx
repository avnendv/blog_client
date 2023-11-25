import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';

import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import PostAddIcon from '@mui/icons-material/PostAdd';
import BookIcon from '@mui/icons-material/Book';

import { Link } from 'react-router-dom';
import { logout } from '@/store/reducers/auth';
import { RootState } from '@/store/reducers';

function AccountMenu() {
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.auth.user);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title='Account settings'>
        <IconButton
          onClick={handleClick}
          size='small'
          sx={{ ml: 2 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar sx={{ width: 32, height: 32 }} src={user?.avatar}>
            {user?.fullName}
          </Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id='account-menu'
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem sx={{ pointerEvents: 'none' }}>
          <div className='flex items-center gap-2'>
            <Avatar sx={{ width: 32, height: 32 }} src={user?.avatar}>
              {user?.fullName}
            </Avatar>
            <div>
              <p>{user?.fullName}</p>
              <p className='text-sm italic text-av-gray max-w-[150px] line-clamp-1'>@{user?.userName}</p>
            </div>
          </div>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link className='flex items-center w-full gap-2' to='/account/new-post'>
            <PostAddIcon />
            Bài viết mới
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link className='flex items-center w-full gap-2' to='/account/post'>
            <BookIcon />
            Bài viết của tôi
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link className='flex items-center w-full gap-2' to='/account/bookmark/post'>
            <BookmarkBorderOutlinedIcon />
            Bài viết đã lưu
          </Link>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <Link className='flex items-center w-full gap-2' to='/account/setting'>
            <Settings fontSize='small' />
            Cài đặt
          </Link>
        </MenuItem>
        <MenuItem onClick={() => dispatch(logout())}>
          <div className='flex items-center gap-2'>
            <Logout fontSize='small' />
            Đăng xuất
          </div>
        </MenuItem>
      </Menu>
    </>
  );
}

export default AccountMenu;
