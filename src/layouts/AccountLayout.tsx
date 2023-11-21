import { NavLink, Outlet } from 'react-router-dom';
import classNames from 'classnames';

import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';

const menu = [
  {
    to: '/account/setting',
    icon: <PersonOutlinedIcon />,
    text: 'Cài đặt tài khoản',
  },
  {
    to: '/account/setting/socials',
    icon: <PublicOutlinedIcon />,
    text: 'Mạng xã hội',
  },
  {
    to: '/account/setting/notifications',
    icon: <NotificationsNoneOutlinedIcon />,
    text: 'Cài đặt thông báo',
  },
];

function AccountLayout() {
  return (
    <div className='px-2'>
      <h1 className='text-4xl'>Cài đặt</h1>
      <div className='flex pt-4 min-h-[500px] gap-2'>
        <ul className='w-[20%] min-w-[185px] hidden md:flex flex-col gap-2'>
          {menu.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end
                className={({ isActive }) =>
                  classNames('flex items-center gap-2 p-3 rounded-md', { 'bg-av-primary': isActive })
                }
              >
                {link.icon}
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className='md:pl-2 md:border-l grow'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AccountLayout;
