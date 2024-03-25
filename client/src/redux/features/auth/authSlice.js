import { createSlice } from "@reduxjs/toolkit";
import { getUserAsync, loginAsync, registerAsync } from "./authAction";

const token = localStorage.getItem("token") ? localStorage.getItem("token") : null;
const initialState = {
    loading: false,
    error: null,
    token,
    user: null
};
export const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder) => {
        //register
        builder.addCase(registerAsync.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(registerAsync.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.error = null;

        })
        builder.addCase(registerAsync.rejected, (state, { payload }) => {
            state.loading = true;
            state.error = payload;
        })
        //login
        builder.addCase(loginAsync.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(loginAsync.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.error = null;
            state.token = payload.token;
            state.user = payload.doc;

        })
        builder.addCase(loginAsync.rejected, (state, { payload }) => {
            state.loading = true;
            state.error = payload;
        })

        //get user
        builder.addCase(getUserAsync.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(getUserAsync.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.error = null;
            state.user = payload.user;

        })
        builder.addCase(getUserAsync.rejected, (state, { payload }) => {
            state.loading = true;
            state.error = payload;
        })

    }

});
export const selectUser = (state) => state.auth;
export default authSlice.reducer;