import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import userProfileSlice from "./userProfileStore";
const store = configureStore({
    reducer: {
        auth: authSlice,
        profile: userProfileSlice,
    },
})

export default store