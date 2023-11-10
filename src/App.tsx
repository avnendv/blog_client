import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useColorScheme } from '@mui/material/styles';

import router from './router';

import './assets/styles/index.scss';

function App() {
  const { mode } = useColorScheme();

  useEffect(() => {
    if (mode === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [mode]);

  return (
    <main className="min-h-screen text-black bg-white dark:text-white dark:bg-av-dark">
      <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
    </main>
  );
}

export default App;
