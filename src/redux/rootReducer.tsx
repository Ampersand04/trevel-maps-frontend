import { emailAuthApi } from '@/features/auth/api/emailAuthApi';
import { phoneAuthApi } from '@/features/auth/api/phoneAuthApi';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  // Добавление редюсеров API
  [emailAuthApi.reducerPath]: emailAuthApi.reducer,
  [phoneAuthApi.reducerPath]: phoneAuthApi.reducer,

  // Добавление других редюсеров
  //   user: userReducer,
  // Добавьте другие редюсеры здесь...
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
