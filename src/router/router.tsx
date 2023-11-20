import { createBrowserRouter, redirect } from 'react-router-dom';

import ClientLayout from '@/layouts/ClientLayout';
import ProtectedLayout from '@/layouts/ProtectedLayout';
import AuthLayout from '@/layouts/AuthLayout';

import _404Page from '@/pages/Error/404Page';
import { getToken } from '@/utils/cookie';
import AccountLayout from '@/layouts/AccountLayout';

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
        path: 'topic',
        lazy: async () => ({ Component: (await import('@/pages/Topic/TopicList')).default }),
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
        path: 'tags/:slug',
        lazy: async () => ({ Component: (await import('@/pages/Post/PostTag')).default }),
      },
      {
        path: 'author/:slug',
        lazy: async () => ({ Component: (await import('@/pages/Post/AuthorPost')).default }),
      },
      {
        path: '/account',
        element: <ProtectedLayout />,
        children: [
          {
            path: 'bookmark/post',
            lazy: async () => ({ Component: (await import('@/pages/Account/BookmarkPost')).default }),
          },
          {
            path: 'setting',
            element: <AccountLayout />,
            children: [
              {
                index: true,
                lazy: async () => ({ Component: (await import('@/pages/Account/Setting/SettingPersonal')).default }),
              },
              {
                path: 'notifications',
                lazy: async () => ({
                  Component: (await import('@/pages/Account/Setting/SettingNotifications')).default,
                }),
              },
            ],
          },
        ],
      },
      {
        path: '*',
        element: <_404Page />,
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    loader: async () => {
      if (getToken()) return redirect('/');

      return null;
    },
    children: [
      {
        path: 'login',
        lazy: async () => ({ Component: (await import('@/pages/Auth/Login')).default }),
      },
      {
        path: 'register',
        lazy: async () => ({ Component: (await import('@/pages/Auth/Register')).default }),
      },
    ],
  },
]);

export default router;
