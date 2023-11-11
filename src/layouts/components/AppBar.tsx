import * as React from 'react';
import { Link } from 'react-router-dom';
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
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';

import SearchIcon from '@mui/icons-material/Search';

import SwitchTheme from '@/components/Switcher/SwitchTheme';

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
    to: '/blog',
  },
  {
    label: 'Tag',
    to: '/tag',
  },
  {
    label: 'Liên hệ',
    to: '/',
  },
];

function AppBar({ window }: Props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

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
        <Toolbar sx={{ justifyContent: { xs: 'space-between', sm: 'unset' } }}>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mx: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Link to='/'>
            <h6 className='hidden text-xl font-medium sm:block'>
              <strong>AV</strong>Blog
            </h6>
          </Link>
          <nav className='justify-center hidden gap-4 text-center md:gap-8 lg:gap-12 xl:gap-16 sm:flex grow'>
            {navItems.map((item) => (
              <Link key={item.label} to={item.to}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className='flex items-center gap-4'>
            <FormControl size='small' sx={{ width: '18ch' }} variant='outlined'>
              <InputLabel htmlFor='search_input'>Search</InputLabel>
              <OutlinedInput
                id='search_input'
                type='text'
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton aria-label='search button' edge='end'>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                }
                label='search'
              />
            </FormControl>
            <SwitchTheme />
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
            display: { xs: 'block', sm: 'none' },
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
