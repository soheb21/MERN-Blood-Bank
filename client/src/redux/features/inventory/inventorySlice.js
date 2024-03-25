import { createSlice } from "@reduxjs/toolkit";
import { getAnalyticsBloodRecords, getDonersByOrganisationAsync, getHospitalsByOrganisationAsync, getInAndOutBloodRecords, getInventoryAsync, getOrganisationByDoner, getOrganisationByHospital, postInventoryAsync } from "./inventoryAction";

const initialState = {
    inventory: [],
    doners: [],
    hospitals: [],
    organisation: [],
    inAndOut: [],
    analytics: [],
    loading: false,
    error: null,
    TotalItems: 0,
}
export const inventorySlice = createSlice({
    name: "inventory",
    initialState,
    extraReducers: (builder) => {
        //post Inventory
        builder.addCase(postInventoryAsync.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(postInventoryAsync.fulfilled, (state) => {
            state.loading = false;

        })
        builder.addCase(postInventoryAsync.rejected, (state, { payload }) => {
            state.loading = true;
            state.error = payload;
        })

        //get Inventory
        builder.addCase(getInventoryAsync.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getInventoryAsync.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.inventory = payload.bloodRecord;
            state.TotalItems = payload.totalItems;
        })
        builder.addCase(getInventoryAsync.rejected, (state, { payload }) => {
            state.loading = true;
            state.error = payload;
        })


        //get doner by organisation
        builder.addCase(getDonersByOrganisationAsync.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getDonersByOrganisationAsync.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.doners = payload.doners;
        })
        builder.addCase(getDonersByOrganisationAsync.rejected, (state, { payload }) => {
            state.loading = true;
            state.error = payload;
        })
        //get Hospital by organisation
        builder.addCase(getHospitalsByOrganisationAsync.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getHospitalsByOrganisationAsync.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.hospitals = payload.hospitals;
        })
        builder.addCase(getHospitalsByOrganisationAsync.rejected, (state, { payload }) => {
            state.loading = true;
            state.error = payload;
        })

        //get organisation By doner
        builder.addCase(getOrganisationByDoner.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getOrganisationByDoner.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.organisation = payload.organisation;
        })
        builder.addCase(getOrganisationByDoner.rejected, (state, { payload }) => {
            state.loading = true;
            state.error = payload;
        })
        //get organisation By hospital
        builder.addCase(getOrganisationByHospital.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getOrganisationByHospital.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.organisation = payload.organisation;
        })
        builder.addCase(getOrganisationByHospital.rejected, (state, { payload }) => {
            state.loading = true;
            state.error = payload;
        })

        //get in and out blood records 
        builder.addCase(getInAndOutBloodRecords.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getInAndOutBloodRecords.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.inAndOut = payload.inandOut;
        })
        builder.addCase(getInAndOutBloodRecords.rejected, (state, { payload }) => {
            state.loading = true;
            state.error = payload;
        })
        //Analytics blood records 
        builder.addCase(getAnalyticsBloodRecords.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getAnalyticsBloodRecords.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.analytics = payload.bloodAnalyticsData;
        })
        builder.addCase(getAnalyticsBloodRecords.rejected, (state, { payload }) => {
            state.loading = true;
            state.error = payload;
        })

    }
})
export const selectInventory = (state) => state.inventory;
export default inventorySlice.reducer;;
