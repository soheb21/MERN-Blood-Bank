import { createSlice } from "@reduxjs/toolkit";
import { deleteDonerAsync, deleteHospitalAsync, deleteOrgAsync, getDonerListAsync, getHospitalListAsync, getorgListAsync } from "./adminAction";

const initialState = {
    orgList: [],
    donerList: [],
    hospitalList: [],
    loading: false,
    error: null,
    mssg: null
}
export const adminSlice = createSlice({
    name: "admin",
    initialState,
    extraReducers: (builder) => {


        //get Doner-List
        builder.addCase(getDonerListAsync.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getDonerListAsync.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.donerList = payload.donerList;
        })
        builder.addCase(getDonerListAsync.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        })

        //get Hospital-List
        builder.addCase(getHospitalListAsync.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getHospitalListAsync.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.hospitalList = payload.hospitalList;
        })
        builder.addCase(getHospitalListAsync.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        })

        //get org-List
        builder.addCase(getorgListAsync.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getorgListAsync.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.orgList = payload.orgList;
        })
        builder.addCase(getorgListAsync.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        })

        //delete doner by Admin
        builder.addCase(deleteDonerAsync.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(deleteDonerAsync.fulfilled, (state, { payload }) => {
            state.loading = false;
            const newArr = state.donerList.filter((i) => i._id !== payload.deletedID)
            state.mssg = payload.mssg;
            state.donerList = newArr;
        })
        builder.addCase(deleteDonerAsync.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        })

        //delete Org by Admin
        builder.addCase(deleteOrgAsync.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(deleteOrgAsync.fulfilled, (state, { payload }) => {
            state.loading = false;
            const newArr = state.orgList.filter((i) => i._id !== payload.deletedID)
            state.mssg = payload.mssg;
            state.orgList = newArr;
        })
        builder.addCase(deleteOrgAsync.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        })
        //delete Hospital by Admin
        builder.addCase(deleteHospitalAsync.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(deleteHospitalAsync.fulfilled, (state, { payload }) => {
            state.loading = false;
            const newArr = state.hospitalList.filter((i) => i._id !== payload.deletedID)
            state.mssg = payload.mssg;
            state.hospitalList = newArr;
        })
        builder.addCase(deleteHospitalAsync.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        })



    }
})
export const selectadmin = (state) => state.admin;
export default adminSlice.reducer;;
