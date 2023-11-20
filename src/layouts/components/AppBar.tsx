import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AppBarMUI from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

import AccountMenu from './AccountMenu';
import SearchBox from './SearchBox';
import SwitchTheme from '@/components/Switcher/SwitchTheme';
import { RootState } from '@/store/reducers';

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  {
    label: 'Trang chủ',
    to: '/',
  },
  {
    label: 'Chủ đề',
    to: '/topic',
  },
  {
    label: 'Series',
    to: '/series',
  },
  {
    label: 'Liên hệ',
    to: '/',
  },
];

function AppBar({ window }: Props) {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Link to='/'>
        <h6 className='my-4 text-xl font-medium'>
          <strong>AV</strong>Blog
        </h6>
      </Link>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link key={item.label} to={item.to}>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBarMUI
        component='nav'
        sx={{
          color: 'inherit',
          maxWidth: 1218,
          margin: 'auto',
          left: 0,
          backgroundColor: 'av.main',
          backgroundImage: 'none',
          boxShadow: 'none',
          height: (theme) => theme.av.appBarHeight,
        }}
      >
        <Toolbar sx={{ justifyContent: { xs: 'space-between', sm: 'unset' }, gap: { sm: 5, md: 2, lg: 30 } }}>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mx: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Link to='/'>
            <h6 className='hidden text-xl font-medium md:block'>
              <strong>AV</strong>Blog
            </h6>
          </Link>
          <nav className='justify-center hidden gap-4 text-center md:gap-4 lg:gap-8 xl:gap-16 md:flex min-w-[40%]'>
            {navItems.map((item) => (
              <Link key={item.label} to={item.to}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className='flex items-center justify-end gap-1 md:gap-1 lg:gap-4 grow'>
            <SearchBox />
            <SwitchTheme />
            {isLoggedIn ? <AccountMenu /> : <Link to={'/login'}>Đăng nhập</Link>}
          </div>
        </Toolbar>
      </AppBarMUI>
      <nav>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default AppBar;
