import * as yup from 'yup';

export const schema = yup
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
