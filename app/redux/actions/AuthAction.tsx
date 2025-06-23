import { createAsyncThunk } from "@reduxjs/toolkit"
import { postData} from "../axios"
import AsyncStorage from "@react-native-async-storage/async-storage"

export const addToken = createAsyncThunk(
    'addtoken',
    async () => {
        const result = await AsyncStorage.getItem('userDetail')
        return  JSON.parse(result);
    }); 

export const signupUser = createAsyncThunk(
    'signupuser',
    async (body) => {   
        const result = await postData('v2/auth/signup',body)
        return result
    });

export const signinUser = createAsyncThunk(
    'signinuser',
    async (body) => {
        const result = await postData('v2/auth/login', body)
        return result
    });

export const logout = createAsyncThunk(
    'logout',
    async (body) => {
        const result = await postData('logout', body)
        return result
    });
