import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {signinUser, signupUser, addToken} from '../actions/AuthAction';

const initialState = {
  token: null,
  loading: true,
  error: false,
  message: '',
  userData: [],
};

const AuthReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state, action) =>{
      state.token = null;
      AsyncStorage.removeItem('userDetail');
    },
  },
  extraReducers: builder => {
    builder.addCase(addToken.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload?.access_token;
      state.loading = false;
      state.userData = action.payload;
    }),
      builder.addCase(addToken.pending, (state, action) => {
        state.loading = true;
      }),
      builder.addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.message = 'Registeration successsfull';
      }),
      builder.addCase(signupUser.pending, (state,action) => {
        state.loading = true;
      }),
      builder.addCase(signinUser.pending, (state, action) => {
        state.loading = true;
      }),
      builder.addCase(signinUser.fulfilled, (state, action) => {
        state.token = action.payload?.access_token;
        state.loading = false;
        state.userData = action.payload;
        state.message = 'User Login Successfully';
        AsyncStorage.setItem('userDetail', JSON.stringify(action.payload));
      });
      
  },
});
export const {logout} = AuthReducer.actions;
export default AuthReducer.reducer;
