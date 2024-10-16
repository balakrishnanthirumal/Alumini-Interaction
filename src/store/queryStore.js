import { createSlice } from "@reduxjs/toolkit";

const querySlice = createSlice({
    name: "query",
    initialState: {
        queries: [],
    },
    reducers: {
        createQuery: (state, action) => {
            state.queries = [action.payload, ...state.queries];
        },

        setQuery: (state, action) => {
            state.queries = action.payload;
        },
    },
});

export default querySlice.reducer;
export const { createQuery, setQuery } = querySlice.actions;