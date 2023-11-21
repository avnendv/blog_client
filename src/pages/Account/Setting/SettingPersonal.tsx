import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Divider from '@mui/material/Divider';
import { schema } from './schemaPersonal';
import { GENDER } from '@/configs/constants';
import { useAccountPersonalQuery } from '@/queries/Account';
import Spinner from '@/components/Spinner/Spinner';

const inputClass = {
  normal: 'w-full h-10 py-2 pl-4 rounded-lg bg-[#F2F2F2] text-av-dark placeholder:text-av-dark',
  invalid: 'border border-red-500',
};

function SettingPersonal() {
  const accountPersonalQuery = useAccountPersonalQuery();
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
      {accountPersonalQuery.isLoading ? (
        <Spinner />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} autoComplete='off' className='flex flex-col items-center gap-4 p-8'>
          <div className='w-full'>
            <input
              type='text'
              {...register('fullName')}
              defaultValue={accountPersonalQuery.data?.data.fullName}
              aria-invalid={errors.fullName ? 'true' : 'false'}
              placeholder='Họ tên'
              className={classNames(inputClass.normal, {
                [inputClass.invalid]: !!errors.fullName?.message,
              })}
            />
            <p className='mt-1 ml-1 italic text-red-500'>{errors.fullName?.message}</p>
          </div>
          <div className='w-full'>
            <textarea
              {...register('bio')}
              defaultValue={accountPersonalQuery.data?.data.bio}
              aria-invalid={errors.bio ? 'true' : 'false'}
              placeholder='Bio'
              className={classNames(inputClass.normal, 'h-auto', {
                [inputClass.invalid]: !!errors.bio?.message,
              })}
              rows={3}
            ></textarea>
            <p className='mt-1 ml-1 italic text-red-500'>{errors.bio?.message}</p>
          </div>
          <div className='w-full'>
            <input
              type='email'
              {...register('email')}
              defaultValue={accountPersonalQuery.data?.data.email}
              aria-invalid={errors.email ? 'true' : 'false'}
              placeholder='Email'
              className={classNames(inputClass.normal, {
                [inputClass.invalid]: !!errors.email?.message,
              })}
            />
            <p className='mt-1 ml-1 italic text-red-500'>{errors.email?.message}</p>
          </div>
          <div className='w-full'>
            <input
              type='text'
              {...register('userName')}
              defaultValue={accountPersonalQuery.data?.data.userName}
              aria-invalid={errors.userName ? 'true' : 'false'}
              placeholder='Tên đăng nhập'
              className={classNames(inputClass.normal, {
                [inputClass.invalid]: !!errors.userName?.message,
              })}
            />
            <p className='mt-1 ml-1 italic text-red-500'>{errors.userName?.message}</p>
          </div>
          <div className='w-full'>
            <select
              {...register('gender')}
              defaultValue={accountPersonalQuery.data?.data.gender}
              placeholder='Giới tính'
              className={classNames(inputClass.normal, {
                [inputClass.invalid]: !!errors.gender?.message,
              })}
            >
              <option>--- Chọn giới tính ---</option>
              <option value={GENDER.MALE}>Nam</option>
              <option value={GENDER.FEMALE}>Nữ</option>
            </select>
            <p className='mt-1 ml-1 italic text-red-500'>{errors.gender?.message}</p>
          </div>
          <div className='w-full'>
            <input
              type='date'
              {...register('birthday')}
              defaultValue={accountPersonalQuery.data?.data.birthday}
              aria-invalid={errors.birthday ? 'true' : 'false'}
              placeholder='Ngày sinh'
              className={classNames(inputClass.normal, {
                [inputClass.invalid]: !!errors.birthday?.message,
              })}
            />
            <p className='mt-1 ml-1 italic text-red-500'>{errors.birthday?.message}</p>
          </div>
          <div className='w-full'>
            <input
              type='tel'
              {...register('phone')}
              defaultValue={accountPersonalQuery.data?.data.phone}
              aria-invalid={errors.phone ? 'true' : 'false'}
              placeholder='Số điện thoại'
              className={classNames(inputClass.normal, {
                [inputClass.invalid]: !!errors.phone?.message,
              })}
            />
            <p className='mt-1 ml-1 italic text-red-500'>{errors.phone?.message}</p>
          </div>
          <div className='w-full'>
            <input
              type='text'
              {...register('address')}
              defaultValue={accountPersonalQuery.data?.data.address}
              aria-invalid={errors.address ? 'true' : 'false'}
              placeholder='Địa chỉ'
              className={classNames(inputClass.normal, {
                [inputClass.invalid]: !!errors.address?.message,
              })}
            />
            <p className='mt-1 ml-1 italic text-red-500'>{errors.address?.message}</p>
          </div>
          <div className='flex w-full gap-4'>
            <button
              type='submit'
              className={classNames('w-full h-12 py-2 transition-all duration-30 rounded-xl bg-av-primary')}
            >
              Lưu
            </button>
            <button
              type='reset'
              className={classNames('w-full h-12 py-2 transition-all duration-30 rounded-xl bg-av-gray text-black')}
            >
              Hủy
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default SettingPersonal;
