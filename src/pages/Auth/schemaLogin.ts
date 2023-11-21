import * as yup from 'yup';

export const schema = yup
  .object()
  .shape({
    userName: yup.string().required('Tên đăng nhập là bắt buộc'),
    password: yup.string().required('Mật khẩu là bắt buộc'),
  })
  .required();
