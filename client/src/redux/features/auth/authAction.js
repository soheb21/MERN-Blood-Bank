import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../utils/API";
import { toast } from "react-toastify";

export const registerAsync = createAsyncThunk("register", async ({ ...registerData }, { rejectWithValue }) => {
    try {
        const { data } = await API.post("/auth/register", { ...registerData });
        if (data.success) {
            toast.success(data.mssg,{
                position: "bottom-right"
            })
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
            toast.success(data.mssg,{
                position: "bottom-right"
            })
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
            toast.success(data.mssg,{
                position: "bottom-right"
            })
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