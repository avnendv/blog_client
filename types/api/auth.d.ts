declare namespace API {
  type LoginForm = {
    userName: string;
    password: string;
  };

  type RegisterForm = {
    email: string;
    userName: string;
    fullName: string;
    password: string;
    confirmPassword?: string;
  };

  type UserInfo = {
    _id: string;
    userName: string;
    fullName: string;
    email: string;
    phone: string;
    gender: string;
    address: string;
    birthday: string;
    token?: string;
    roles: string[];
    permissions: string[];
    avatar: string;
  };
}
