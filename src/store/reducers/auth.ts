/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getToken, getUserInfo, removeAuthCookie, storeAuthCookie } from '@/utils/cookie';

const initialState: STORE.LoginState = {
  isLoading: false,
  isLoggedIn: !!getToken(),
  user: getUserInfo(),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register(state, _action: PayloadAction<API.RegisterForm>) {
      state.isLoading = true;
    },
    login(state, _action: PayloadAction<API.LoginForm>) {
      state.isLoading = true;
    },
    logout: (state) => {
      state.isLoading = true;
    },
    authSuccess(state, action: PayloadAction<API.UserInfo>) {
      state.isLoggedIn = true;
      state.isLoading = false;
      state.user = action.payload;
      storeAuthCookie(state.user);
    },
    removeAuth(state) {
      state.isLoggedIn = false;
      state.isLoading = false;
      state.user = undefined;
      removeAuthCookie();
    },
    logoutFail(state) {
      state.isLoading = false;
    },
  },
});

export const { register, login, logout, authSuccess, removeAuth, logoutFail } = authSlice.actions;

export default authSlice.reducer;
