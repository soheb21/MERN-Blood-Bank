import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../utils/API";
import { toast } from "react-toastify";
import { LIMIT } from "../../../utils/common";



export const postInventoryAsync = createAsyncThunk("/postInventory", async (inventoryData, { rejectWithValue }) => {
    try {
        const { data } = await API.post("/inventory/create-inventory", inventoryData)
        if (data.success) {
            toast.success(data.mssg, {
                position: "bottom-right"
            })
            return data
        }
    } catch (e) {
        if (e.response && e.response.data.mssg) {
            return rejectWithValue(e.response.data.mssg);
        }
        return rejectWithValue(e.message);
    }
})
export const getInventoryAsync = createAsyncThunk("/getInventory", async ( page , { rejectWithValue }) => {
    try {
        const { data } = await API.get(`/inventory?page=${page}&limit=${LIMIT}`)
        if (data.success) {
            // toast.success(data.mssg,{
            //     position: "bottom-right"
            // })
            
            return data
        }
    } catch (e) {
        if (e.response && e.response.data.mssg) {
            return rejectWithValue(e.response.data.mssg);
        }
        return rejectWithValue(e.message);
    }
})


export const getDonersByOrganisationAsync = createAsyncThunk("/getDonersbyOrganisation", async (args, { rejectWithValue }) => {
    try {
        const { data } = await API.get("/inventory/doner")
        if (data.success) {
            toast.success(data.mssg, {
                position: "bottom-right"
            })
            return data
        }
    } catch (e) {
        if (e.response && e.response.data.mssg) {
            return rejectWithValue(e.response.data.mssg);
        }
        return rejectWithValue(e.message);
    }
})
export const getHospitalsByOrganisationAsync = createAsyncThunk("/getHospitalsbyOrganisation", async (args, { rejectWithValue }) => {
    try {
        const { data } = await API.get("/inventory/hospital")
        if (data.success) {
            toast.success(data.mssg, {
                position: "bottom-right"
            })
            return data
        }
    } catch (e) {
        if (e.response && e.response.data.mssg) {
            return rejectWithValue(e.response.data.mssg);
        }
        return rejectWithValue(e.message);
    }
})

export const getOrganisationByDoner = createAsyncThunk("/getOrganisationByDoner", async (args, { rejectWithValue }) => {
    try {
        const { data } = await API.get("/inventory/org")
        if (data.success) {
            toast.success(data.mssg, {
                position: "bottom-right"
            })
            return data
        }
    } catch (e) {
        if (e.response && e.response.data.mssg) {
            return rejectWithValue(e.response.data.mssg);
        }
        return rejectWithValue(e.message);
    }
})
export const getOrganisationByHospital = createAsyncThunk("/getOrganisationByHospital", async (args, { rejectWithValue }) => {
    try {
        const { data } = await API.get("/inventory/org-hospital")
        if (data.success) {
            toast.success(data.mssg, {
                position: "bottom-right"
            })
            return data
        }
    } catch (e) {
        if (e.response && e.response.data.mssg) {
            return rejectWithValue(e.response.data.mssg);
        }
        return rejectWithValue(e.message);
    }
})
export const getInAndOutBloodRecords = createAsyncThunk("/getInAndOutBloodRecords", async (filter, { rejectWithValue }) => {
    try {
        const { data } = await API.post("/inventory/inAndOut", { filter })
        if (data.success) {
            toast.success(data.mssg, {
                position: "bottom-right"
            })
            return data
        }
    } catch (e) {
        if (e.response && e.response.data.mssg) {
            return rejectWithValue(e.response.data.mssg);
        }
        return rejectWithValue(e.message);
    }
})

export const getAnalyticsBloodRecords = createAsyncThunk("/getAnalyticsBloodRecords", async (filter, { rejectWithValue }) => {
    try {
        const { data } = await API.get("/analytics")
        if (data.success) {
            toast.success(data.mssg, {
                position: "bottom-right"
            })
            return data
        }
    } catch (e) {
        if (e.response && e.response.data.mssg) {
            return rejectWithValue(e.response.data.mssg);
        }
        return rejectWithValue(e.message);
    }
})