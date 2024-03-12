import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../utils/API";

export const registerAsync = createAsyncThunk("register", async ({ ...registerData }, { rejectWithValue }) => {
    try {
        const { data } = await API.post("/auth/register", { ...registerData });
        if (data.success) {
            // alert(data.mssg)
            return data;
        }
    } catch (e) {

        if (e.response && e.response.data.mssg) {
            return rejectWithValue(e.response.data.mssg);
        } else {
            return rejectWithValue(e.message);
        }
    }

})
export const loginAsync = createAsyncThunk("login", async (loginData, { rejectWithValue }) => {

    try {
        const { data } = await API.post("/auth/login", loginData);
        if (data.success) {
            localStorage.setItem("token", data.token)
            // alert(data.mssg)
            return data;
        }
    } catch (e) {

        if (e.response && e.response.data.mssg) {
            return rejectWithValue(e.response.data.mssg);
        } else {
            return rejectWithValue(e.message);
        }
    }

})
export const getUserAsync = createAsyncThunk("getUser", async (args, { rejectWithValue }) => {

    try {
        const { data } = await API.get("/auth/getUser");
        if (data.success) {
            return data;
        }
    } catch (e) {
        localStorage.clear();
        if (e.response && e.response.data.mssg) {
            return rejectWithValue(e.response.data.mssg);
        } else {
            return rejectWithValue(e.message);
        }
    }

})