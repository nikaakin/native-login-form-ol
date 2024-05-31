/* eslint-disable @typescript-eslint/no-unused-vars */
import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {loginService} from '../services/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  accessToken: '',
  refreshToken: '',
  isAuthenticated: false,
};

type PayloadType = typeof initialState;

export const login = createAsyncThunk(
  'auth/login',
  async ({password, username}: {password: string; username: string}) => {
    const res = await loginService(username, password);
    await AsyncStorage.setItem('accessToken', res.data.accessToken);
    await AsyncStorage.setItem('refreshToken', res.data.refreshToken);
    return res.data;
  },
);

export const logout = createAsyncThunk('auth/logout', async () => {
  await AsyncStorage.setItem('accessToken', '');
  await AsyncStorage.setItem('refreshToken', '');
});

export const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    updateTokens: (state, action: PayloadAction<PayloadType>) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isAuthenticated = true;
    },
    resetTokes: state => {
      state = initialState;
    },
  },
  extraReducers: builder => {
    builder.addCase(login.fulfilled, (state, action) => {
      if (!state.accessToken || !state.refreshToken) {
        throw new Error();
      }
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isAuthenticated = true;
    });
    builder.addCase(logout.fulfilled, () => {
      resetTokes();
    });
  },
});

export const {resetTokes, updateTokens} = authSlice.actions;

export default authSlice.reducer;
