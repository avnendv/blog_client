import { combineReducers } from 'redux';
import authSlice from '../reducers/auth';

const rootReducers = combineReducers({
  // add more reducers here
  auth: authSlice,
});

// Defines the RootState data type
export type RootState = ReturnType<typeof rootReducers>;

export default rootReducers;
