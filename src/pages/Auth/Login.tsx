import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/reducers';
import { login } from '@/store/reducers/auth';

const schema = yup
  .object()
  .shape({
    userName: yup.string().required('Tên đăng nhập là bắt buộc'),
    password: yup.string().required('Mật khẩu là bắt buộc'),
  })
  .required();

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const isLoading = useSelector((state: RootState) => state.auth.isLoading);
  const dispatch = useDispatch();

  const onSubmit = (data: API.LoginForm) => {
    dispatch(login(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center gap-4 p-8'>
      <div className='w-full'>
        <input
          type='text'
          {...register('userName')}
          aria-invalid={errors.userName ? 'true' : 'false'}
          placeholder='Email hoặc Tên đăng nhập'
          className={classNames('w-full h-12 py-2 pl-4 rounded-lg bg-[#F2F2F2] text-av-dark placeholder:text-av-dark', {
            'border border-red-500': !!errors.userName?.message,
          })}
        />
        <p className='mt-1 ml-1 italic text-red-500'>{errors.userName?.message}</p>
      </div>
      <div className='w-full'>
        <input
          type='password'
          {...register('password')}
          aria-invalid={errors.password ? 'true' : 'false'}
          placeholder='Mật khẩu'
          className={classNames('w-full h-12 py-2 pl-4 rounded-lg bg-[#F2F2F2] text-av-dark placeholder:text-av-dark', {
            'border border-red-500': !!errors.password?.message,
          })}
        />
        <p className='mt-1 ml-1 italic text-red-500'>{errors.password?.message}</p>
      </div>
      <button
        className={classNames('w-full h-12 py-2 transition-all duration-300 bg-black rounded-xl hover:bg-av-dark', {
          disabled: isLoading,
        })}
      >
        Đăng nhập
      </button>
    </form>
  );
}

export default Login;
