declare namespace STORE {
  interface LoginState {
    user?: API.UserInfo;
    isLoggedIn: boolean;
    isLoading: boolean;
  }

  interface LoginPayload {
    userName: string;
    password: string;
  }

  interface User {
    id: number | string;
    name: string;
  }
}
