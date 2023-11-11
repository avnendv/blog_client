import { createBrowserRouter } from 'react-router-dom';
import ClientLayout from '@/layouts/ClientLayout';
import ProtectedLayout from '@/layouts/ProtectedLayout';

import _404Page from '@/pages/Error/404Page';

const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    element: <ClientLayout />,
    children: [
      {
        index: true,
        lazy: async () => ({ Component: (await import('@/pages/Home')).default }),
      },
      {
        path: 'blog/:slug',
        lazy: async () => ({ Component: (await import('@/pages/Post/SinglePost')).default }),
      },
      {
        path: 'newest',
        lazy: async () => ({ Component: (await import('@/pages/Post/PostNewest')).default }),
      },
      {
        path: 'topics/:slug',
        lazy: async () => ({ Component: (await import('@/pages/Post/PostTopic')).default }),
      },
      {
        path: 'author/:slug',
        lazy: async () => ({ Component: (await import('@/pages/Post/AuthorPost')).default }),
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
    ],
  },
]);

export default router;
