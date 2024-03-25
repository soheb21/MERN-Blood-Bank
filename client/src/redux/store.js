import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import inventoryReducer from "./features/inventory/inventorySlice";
import adminReducer from "./features/admin/adminSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        inventory: inventoryReducer,
        admin: adminReducer
    },
});