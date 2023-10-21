import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    setUserCredentials: (state, action) => {
      console.log(action.payload);
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logoutUser: (state, action) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUserCredentials, logoutUser } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
