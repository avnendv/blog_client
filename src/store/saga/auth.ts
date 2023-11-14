import { call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { register, login, logout, authSuccess, removeAuth, logoutFail } from '../reducers/auth';
import AuthApi from '@/api/Auth';
import { Response } from '@/api/Resource';

function* watchAuth(action: ReturnType<typeof register | typeof login | typeof logout>) {
  switch (action.type) {
    case register.type:
      yield handleRegister(action);
      break;
    case login.type:
      yield handleLogin(action);
      break;
    case logout.type:
      yield handleLogout();
      break;
    default:
      break;
  }
}

function* handleRegister(action: ReturnType<typeof register>) {
  try {
    const data: Response<API.UserInfo> = yield call(AuthApi.register, action.payload);

    yield put(authSuccess(data.data));
    yield toast.success('Đăng ký thành công!');
  } catch (error) {
    yield put(removeAuth());
  }
}

function* handleLogin(action: ReturnType<typeof login>) {
  try {
    const data: Response<API.UserInfo> = yield call(AuthApi.login, action.payload);

    yield put(authSuccess(data.data));
    yield toast.success('Đăng nhập thành công!');
  } catch (error) {
    yield put(removeAuth());
  }
}

function* handleLogout() {
  try {
    yield call(AuthApi.logout);

    yield put(removeAuth());
    yield toast.info('Đăng xuất thành công!');
  } catch (error) {
    yield put(logoutFail());
  }
}

function* authSaga() {
  yield takeLatest([login.type, register.type, logout.type], watchAuth);
}

export default authSaga;
