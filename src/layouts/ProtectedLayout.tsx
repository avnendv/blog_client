import { useEffect, useState } from 'react';
import { Outlet, redirect, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from '@/store/reducers';
import AuthApi from '@/api/Auth';
import { RESULT_FAIL } from '@/configs/constants';
import Spinner from '@/components/Spinner/Spinner';

function ProtectedLayout() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) return navigate('/login');

    AuthApi.check().then((res) => {
      if (res.result === RESULT_FAIL && !res.data) return redirect('/login');
      setIsLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  return isLoading ? <Spinner /> : <Outlet />;
}

export default ProtectedLayout;
