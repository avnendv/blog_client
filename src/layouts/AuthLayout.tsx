import { useEffect } from 'react';
import { Link, Outlet, useMatch, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ButtonGroupSocial from './components/ButtonGroupSocial';

import { RootState } from '@/store/reducers';

function AuthLayout() {
  const navigate = useNavigate();
  const isViewRegister = useMatch('/register');

  const isLoading = useSelector((state: RootState) => state.auth.isLoading);
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  useEffect(() => {
    if (!isLoading && isLoggedIn) return navigate('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, isLoggedIn]);

  return (
    <main className='flex items-center justify-center w-screen h-screen p-4 overflow-hidden bg-av-bg-auth'>
      <div className='p-8 bg-gray-200 w-full max-w-[1218px] h-full max-h-[768px] rounded-3xl drop-shadow-av-drop flex gap-4 overflow-y-auto'>
        <div className='flex flex-col md:basis-1/2'>
          <h1 className='text-3xl text-center text-black'>Chào mừng bạn đến với AVBlog</h1>
          <p className='mt-4 text-center text-red-500'>
            Mỗi người nên sử dụng riêng một tài khoản, tài khoản nhiều người sử dụng chung có thể sẽ bị khóa.
          </p>
          <div className='flex flex-col justify-center w-full grow'>
            <Outlet />
          </div>
          <p className='text-center text-gray-600'>Hoặc {isViewRegister ? 'đăng ký' : 'đăng nhập'} bằng:</p>
          <ButtonGroupSocial />
          <p className='text-center text-gray-600'>
            Bạn {isViewRegister ? 'đã' : 'chưa'} có tài khoản?&nbsp;
            <Link to={isViewRegister ? '/login' : '/register'} className='text-av-primary'>
              {isViewRegister ? 'Đăng nhập' : 'Đăng ký'}
            </Link>
          </p>
        </div>
        <div className='hidden md:block md:basis-1/2'>
          <div className='rounded-3xl h-full bg-[url("/bg_auth.png")] bg-cover bg-center'></div>
        </div>
      </div>
    </main>
  );
}

export default AuthLayout;
