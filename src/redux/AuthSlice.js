import {createSlice} from '@reduxjs/toolkit';
import { AuthApi } from './AuthApi';

const initialState = {
    user: {name: '', email: ''},
    token: null,
    isLoggedin: false,
};

export const AuthSlice = createSlice({
    name: 'auth',
    initialState,

    extraReducers: builder => {
        builder.addMatcher(
            AuthApi.endpoints.getCurrentUser.matchFulfilled,
            (state, {playload}) => {
            state.user = playload;
            state.isLoggedin = true;
        }
        );

        builder.addMatcher(
            AuthApi.endpoints.userSignup.matchFulfilled,
            (state, {playload}) => {
            state.user = playload.user;
            state.token = playload.token;
            state.isLoggedin = true;
        }
        );

        builder.addMatcher(
            AuthApi.endpoints.userLogin.matchFulfilled,
            (state, {playload}) => {
            state.user = playload.user;
            state.token = playload.token;
            state.isLoggedin = true;
        }
        );


        builder.addMatcher(
            AuthApi.endpoints.userLogout.matchFulfilled,
            (state, _) => {
            return (state = initialState);
        }
        );
    },
});

export const getUserName = state => state.auth.user.name;
export const getToken = state => state.auth.token;
export const getLoggedin = state => state.auth.isLoggedin;
