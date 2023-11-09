import { createBrowserRouter } from 'react-router-dom';
import ClientLayout from '@/layouts/ClientLayout';
import ProtectedLayout from '@/layouts/ProtectedLayout';

import _404Page from '@/pages/ErrorPage/404Page';

const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    element: <ClientLayout />,
    children: [
      {
        index: true,
        lazy: async () => ({ Component: (await import('@/pages/HomePage')).default }),
      },
    ],
  },
  {
    path: '/',
    element: <ProtectedLayout />,
    children: [],
  },
  {
    path: '*',
    element: <_404Page />,
  },
]);

export default router;
