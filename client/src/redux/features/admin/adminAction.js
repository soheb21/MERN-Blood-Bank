import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../utils/API";
import { toast } from "react-toastify";

export const getDonerListAsync = createAsyncThunk("/getDonerList", async (args, { rejectWithValue }) => {
    try {
        const { data } = await API.get("/admin/admin-donerlist")
        if (data.success) {
            toast.success(data.mssg, {
                position: "bottom-right"
            })
            return data;
        }

    } catch (e) {
        if (e.response && e.response.data.mssg) {
            return rejectWithValue(e.response.data.mssg)
        }
        return rejectWithValue(e.message)

    }
})
export const getHospitalListAsync = createAsyncThunk("/getHospitalList", async (args, { rejectWithValue }) => {
    try {
        const { data } = await API.get("/admin/admin-hospitallist")
        if (data.success) {
            toast.success(data.mssg, {
                position: "bottom-right"
            })
            return data;
        }

    } catch (e) {
        if (e.response && e.response.data.mssg) {
            return rejectWithValue(e.response.data.mssg)
        }
        return rejectWithValue(e.message)

    }
})
export const getorgListAsync = createAsyncThunk("/getorgList", async (args, { rejectWithValue }) => {
    try {
        const { data } = await API.get("/admin/admin-orglist")
        if (data.success) {
            toast.success(data.mssg, {
                position: "bottom-right"
            })
            return data;
        }

    } catch (e) {
        if (e.response && e.response.data.mssg) {
            return rejectWithValue(e.response.data.mssg)
        }
        return rejectWithValue(e.message)

    }
})
export const deleteDonerAsync = createAsyncThunk("/delete-doner", async (id, { rejectWithValue }) => {
    try {
        const { data } = await API.delete("/admin/admin-doner/" + id)
        if (data.success) {
            toast.success(data.mssg, {
                position: "bottom-right"
            })
            return data;
        }

    } catch (e) {
        if (e.response && e.response.data.mssg) {
            return rejectWithValue(e.response.data.mssg)
        }
        return rejectWithValue(e.message)

    }
})
export const deleteOrgAsync = createAsyncThunk("/delete-org", async (id, { rejectWithValue }) => {
    try {
        const { data } = await API.delete("/admin/admin-org/" + id)
        if (data.success) {
            toast.success(data.mssg, {
                position: "bottom-right"
            })
            return data;
        }

    } catch (e) {
        if (e.response && e.response.data.mssg) {
            return rejectWithValue(e.response.data.mssg)
        }
        return rejectWithValue(e.message)

    }
})
export const deleteHospitalAsync = createAsyncThunk("/delete-hospital", async (id, { rejectWithValue }) => {
    try {
        const { data } = await API.delete("/admin/admin-hospital/" + id)
        if (data.success) {
            toast.success(data.mssg, {
                position: "bottom-right"
            })
            return data;
        }

    } catch (e) {
        if (e.response && e.response.data.mssg) {
            return rejectWithValue(e.response.data.mssg)
        }
        return rejectWithValue(e.message)

    }
})