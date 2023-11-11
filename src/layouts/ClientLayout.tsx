import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import AppBar from './components/AppBar';
import Footer from './components/Footer';
import ScrollToTop from '@/components/Scroll/ScrollToTop';

function ClientLayout() {
  return (
    <div className='container max-w-[1218px] m-auto'>
      <AppBar />
      <Box component='main' sx={{ mt: (theme) => theme.av.appBarHeight }}>
        <Outlet />
      </Box>
      <ScrollToTop>
        <Fab size='small' aria-label='scroll back to top' className='!bg-av-primary'>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollToTop>
      <Footer />
    </div>
  );
}

export default ClientLayout;
