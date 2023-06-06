import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../../model/user';

interface InitialState {
  user: User;
}

const initialState: InitialState = {
  user: {
    id: '',
    name: '',
    lastName: '',
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export default authSlice.reducer;
