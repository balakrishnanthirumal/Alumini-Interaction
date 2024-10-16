import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import userProfileSlice from "./userProfileStore";
import postSlice from "./postStore";
import querySlice from "./queryStore";
const store = configureStore({
    reducer: {
        auth: authSlice,
        profile: userProfileSlice,
        post: postSlice,
        query: querySlice
    },
})

export default store