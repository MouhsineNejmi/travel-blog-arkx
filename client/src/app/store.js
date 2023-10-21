import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/auth.slice';
import { apiSlice } from './api/api.slice';

export default configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
