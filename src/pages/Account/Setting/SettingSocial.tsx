import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Divider from '@mui/material/Divider';
import { schema } from './schemaSocial';
import { useAccountSocialQuery } from '@/queries/Account';
import Spinner from '@/components/Spinner/Spinner';

const inputClass = {
  normal: 'w-full h-10 py-2 pl-4 rounded-lg bg-[#F2F2F2] text-av-dark placeholder:text-av-dark',
  invalid: 'border border-red-500',
};
function SettingSocial() {
  const accountSocialQuery = useAccountSocialQuery();

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
      <h2 className='text-3xl'>Mạng xã hội</h2>
      <Divider />
      {accountSocialQuery.isLoading ? (
        <Spinner />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} autoComplete='off' className='flex flex-col items-center gap-4 p-8'>
          <div className='w-full'>
            <input
              type='text'
              {...register('url')}
              defaultValue={accountSocialQuery.data?.data.url}
              aria-invalid={errors.url ? 'true' : 'false'}
              placeholder='Website'
              className={classNames(inputClass.normal, {
                [inputClass.invalid]: !!errors.url?.message,
              })}
            />
            <p className='mt-1 ml-1 italic text-red-500'>{errors.url?.message}</p>
          </div>
          <div className='w-full'>
            <input
              type='text'
              {...register('googleUrl')}
              defaultValue={accountSocialQuery.data?.data.googleUrl}
              aria-invalid={errors.googleUrl ? 'true' : 'false'}
              placeholder='Google'
              className={classNames(inputClass.normal, {
                [inputClass.invalid]: !!errors.googleUrl?.message,
              })}
            />
            <p className='mt-1 ml-1 italic text-red-500'>{errors.googleUrl?.message}</p>
          </div>
          <div className='w-full'>
            <input
              type='text'
              {...register('facebookUrl')}
              defaultValue={accountSocialQuery.data?.data.facebookUrl}
              aria-invalid={errors.facebookUrl ? 'true' : 'false'}
              placeholder='Facebook'
              className={classNames(inputClass.normal, {
                [inputClass.invalid]: !!errors.facebookUrl?.message,
              })}
            />
            <p className='mt-1 ml-1 italic text-red-500'>{errors.facebookUrl?.message}</p>
          </div>
          <div className='w-full'>
            <input
              type='text'
              {...register('githubUrl')}
              defaultValue={accountSocialQuery.data?.data.githubUrl}
              aria-invalid={errors.githubUrl ? 'true' : 'false'}
              placeholder='Github'
              className={classNames(inputClass.normal, {
                [inputClass.invalid]: !!errors.githubUrl?.message,
              })}
            />
            <p className='mt-1 ml-1 italic text-red-500'>{errors.githubUrl?.message}</p>
          </div>
          <div className='w-full'>
            <input
              type='text'
              {...register('socialOther1')}
              defaultValue={accountSocialQuery.data?.data.socialOther1}
              aria-invalid={errors.socialOther1 ? 'true' : 'false'}
              placeholder='Liên kết khác 1'
              className={classNames(inputClass.normal, {
                [inputClass.invalid]: !!errors.socialOther1?.message,
              })}
            />
            <p className='mt-1 ml-1 italic text-red-500'>{errors.socialOther1?.message}</p>
          </div>
          <div className='w-full'>
            <input
              type='text'
              {...register('socialOther2')}
              defaultValue={accountSocialQuery.data?.data.socialOther2}
              aria-invalid={errors.socialOther2 ? 'true' : 'false'}
              placeholder='Liên kết khác 2'
              className={classNames(inputClass.normal, {
                [inputClass.invalid]: !!errors.socialOther2?.message,
              })}
            />
            <p className='mt-1 ml-1 italic text-red-500'>{errors.socialOther2?.message}</p>
          </div>
          <div className='w-full'>
            <input
              type='text'
              {...register('socialOther3')}
              defaultValue={accountSocialQuery.data?.data.socialOther3}
              aria-invalid={errors.socialOther3 ? 'true' : 'false'}
              placeholder='Liên kết khác 3'
              className={classNames(inputClass.normal, {
                [inputClass.invalid]: !!errors.socialOther3?.message,
              })}
            />
            <p className='mt-1 ml-1 italic text-red-500'>{errors.socialOther3?.message}</p>
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

export default SettingSocial;
