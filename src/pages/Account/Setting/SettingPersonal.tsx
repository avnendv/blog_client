import classNames from 'classnames';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Divider from '@mui/material/Divider';

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
  })
  .required();

function SettingPersonal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {};

  return (
    <div>
      <h2 className='text-3xl'>Thông tin cá nhân</h2>
      <Divider />
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center gap-4 p-8'>
        <div className='w-full'>
          <input
            type='email'
            {...register('email')}
            aria-invalid={errors.email ? 'true' : 'false'}
            placeholder='Email'
            className={classNames(
              'w-full h-12 py-2 pl-4 rounded-lg bg-[#F2F2F2] text-av-dark placeholder:text-av-dark',
              {
                'border border-red-500': !!errors.email?.message,
              }
            )}
          />
          <p className='mt-1 ml-1 italic text-red-500'>{errors.email?.message}</p>
        </div>
        <div className='w-full'>
          <input
            type='text'
            {...register('userName')}
            aria-invalid={errors.userName ? 'true' : 'false'}
            placeholder='Tên đăng nhập'
            className={classNames(
              'w-full h-12 py-2 pl-4 rounded-lg bg-[#F2F2F2] text-av-dark placeholder:text-av-dark',
              {
                'border border-red-500': !!errors.userName?.message,
              }
            )}
          />
          <p className='mt-1 ml-1 italic text-red-500'>{errors.userName?.message}</p>
        </div>
        <div className='w-full'>
          <input
            type='text'
            {...register('fullName')}
            aria-invalid={errors.fullName ? 'true' : 'false'}
            placeholder='Họ tên'
            className={classNames(
              'w-full h-12 py-2 pl-4 rounded-lg bg-[#F2F2F2] text-av-dark placeholder:text-av-dark',
              {
                'border border-red-500': !!errors.fullName?.message,
              }
            )}
          />
          <p className='mt-1 ml-1 italic text-red-500'>{errors.fullName?.message}</p>
        </div>
      </form>
    </div>
  );
}

export default SettingPersonal;
