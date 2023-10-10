import { combineReducers } from 'redux';

const rootReducers = combineReducers({
  // add more reducers here
});

// Định nghĩa kiểu dữ liệu RootState
export type RootState = ReturnType<typeof rootReducers>;

export default rootReducers;
