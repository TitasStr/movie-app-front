import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type AuthState, type SetAuthPayload } from '../../utils/interfaces';

const initialState: AuthState = {
  isAuth: false,
  username: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<SetAuthPayload>) {
      const { isAuth, username } = action.payload;
      state.isAuth = isAuth;
      state.username = username;
    },
    logout(state) {
      state.isAuth = false;
      state.username = '';
    },
  },
});

export const { setAuth, logout } = authSlice.actions;
export default authSlice.reducer;
