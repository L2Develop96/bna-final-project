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
  reducers: {},
});

export default authSlice.reducer;
