import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../../model/user';

interface InitialState {
  isAuthenticated: boolean;
  user: User;
}

const initialState: InitialState = {
  isAuthenticated: false,
  user: {
    id: '',
    username: '',
    email: '',
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.isAuthenticated = true;
      state.user = payload;
    },
    logout: () => {
      return initialState;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
