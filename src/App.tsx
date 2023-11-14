import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useColorScheme } from '@mui/material/styles';
import { ToastContainer } from 'react-toastify';

import router from './router';

import 'react-toastify/dist/ReactToastify.css';
import './assets/styles/index.scss';

import Loader from './components/Spinner/Loader';

function App() {
  const { mode } = useColorScheme();

  useEffect(() => {
    if (mode === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [mode]);

  return (
    <main className='min-h-screen text-black bg-white dark:text-white dark:bg-av-dark'>
      <RouterProvider router={router} fallbackElement={<Loader />} />
      <ToastContainer
        position='top-right'
        autoClose={1000}
        pauseOnHover={false}
        draggable={false}
        theme={mode === 'dark' ? 'dark' : 'light'}
      />
    </main>
  );
}

export default App;
