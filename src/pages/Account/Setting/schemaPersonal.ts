import * as yup from 'yup';
import { GENDER } from '@/configs/constants';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const schema = yup
  .object()
  .shape({
    email: yup
      .string()
      .required('Email là bắt buộc')
      .matches(
        // eslint-disable-next-line no-useless-escape
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Email không đúng định dạng'
      )
      .min(4, 'Email không được ít hơn 4 ký tự')
      .max(50, 'Email không được nhiều hơn 50 ký tự'),
    userName: yup
      .string()
      .required('Tên đăng nhập là bắt buộc')
      .min(3, 'Tên đăng nhập không được ít hơn 3 ký tự')
      .max(20, 'Tên đăng nhập không được nhiều hơn 20 ký tự'),
    fullName: yup.string().required('Họ tên là bắt buộc').max(30, 'Họ tên không được nhiều hơn 30 ký tự'),
    bio: yup.string(),
    gender: yup
      .number()
      .notRequired()
      .transform((value) => (value ? value : null))
      .oneOf(Object.values(GENDER), 'Giới tính không hợp lệ'),
    birthday: yup.string(),
    phone: yup
      .string()
      .notRequired()
      .transform((value) => (value ? value : null))
      .matches(phoneRegExp, 'Số điện thoại không đúng định dạng'),
    address: yup.string(),
  })
  .required();
