import { combineReducers } from 'redux';

const rootReducers = combineReducers({
  // add more reducers here
});

// Defines the RootState data type
export type RootState = ReturnType<typeof rootReducers>;

export default rootReducers;
