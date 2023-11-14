import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/reducers';
import { register as registerSlice } from '@/store/reducers/auth';

const schema = yup
  .object()
  .shape({
    email: yup
      .string()
      .matches(
        // eslint-disable-next-line no-useless-escape
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Email không đúng định dạng'
      )
      .required('Email là bắt buộc')
      .min(4, 'Email không được ít hơn 4 ký tự')
      .max(50, 'Email không được nhiều hơn 50 ký tự'),
    userName: yup
      .string()
      .required('Tên đăng nhập là bắt buộc')
      .min(3, 'Tên đăng nhập không được ít hơn 3 ký tự')
      .max(20, 'Tên đăng nhập không được nhiều hơn 20 ký tự'),
    fullName: yup.string().required('Họ tên là bắt buộc').max(30, 'Họ tên không được nhiều hơn 30 ký tự'),
    password: yup
      .string()
      .required('Mật khẩu là bắt buộc')
      .min(4, 'Mật khẩu không được ít hơn 4 ký tự')
      .max(50, 'Mật khẩu không được nhiều hơn 50 ký tự'),
    confirmPassword: yup
      .string()
      .required('Nhập lại mật khẩu là bắt buộc')
      .oneOf([yup.ref('password')], 'Nhập lại mật khẩu không chính xác'),
  })
  .required();

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const isLoading = useSelector((state: RootState) => state.auth.isLoading);
  const dispatch = useDispatch();

  const onSubmit = (data: API.RegisterForm) => {
    const dataSubmit = { ...data };
    delete dataSubmit.confirmPassword;

    dispatch(registerSlice(dataSubmit));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center gap-4 p-8'>
      <div className='w-full'>
        <input
          type='email'
          {...register('email')}
          aria-invalid={errors.email ? 'true' : 'false'}
          placeholder='Email'
          className={classNames('w-full h-12 py-2 pl-4 rounded-lg bg-[#F2F2F2] text-av-dark placeholder:text-av-dark', {
            'border border-red-500': !!errors.email?.message,
          })}
        />
        <p className='mt-1 ml-1 italic text-red-500'>{errors.email?.message}</p>
      </div>
      <div className='w-full'>
        <input
          type='text'
          {...register('userName')}
          aria-invalid={errors.userName ? 'true' : 'false'}
          placeholder='Tên đăng nhập'
          className={classNames('w-full h-12 py-2 pl-4 rounded-lg bg-[#F2F2F2] text-av-dark placeholder:text-av-dark', {
            'border border-red-500': !!errors.userName?.message,
          })}
        />
        <p className='mt-1 ml-1 italic text-red-500'>{errors.userName?.message}</p>
      </div>
      <div className='w-full'>
        <input
          type='text'
          {...register('fullName')}
          aria-invalid={errors.fullName ? 'true' : 'false'}
          placeholder='Họ tên'
          className={classNames('w-full h-12 py-2 pl-4 rounded-lg bg-[#F2F2F2] text-av-dark placeholder:text-av-dark', {
            'border border-red-500': !!errors.fullName?.message,
          })}
        />
        <p className='mt-1 ml-1 italic text-red-500'>{errors.fullName?.message}</p>
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
      <div className='w-full'>
        <input
          type='password'
          {...register('confirmPassword')}
          aria-invalid={errors.confirmPassword ? 'true' : 'false'}
          placeholder='Nhập lại mật khẩu'
          className={classNames('w-full h-12 py-2 pl-4 rounded-lg bg-[#F2F2F2] text-av-dark placeholder:text-av-dark', {
            'border border-red-500': !!errors.confirmPassword?.message,
          })}
        />
        <p className='mt-1 ml-1 italic text-red-500'>{errors.confirmPassword?.message}</p>
      </div>
      <button
        className={classNames('w-full h-12 py-2 transition-all duration-300 bg-black rounded-xl hover:bg-av-dark', {
          disabled: isLoading,
        })}
      >
        Đăng ký
      </button>
    </form>
  );
}

export default Register;
