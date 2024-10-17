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

        addAnswer: (state, action) => {
            state.queries = state.queries.map((query) => {
                if (query.id === action.payload.queryId) {
                    return {
                        ...query,
                        answers: [...query.answers, action.payload.answer],
                    };
                }
                return query;
            });
        },
    },
});

export default querySlice.reducer;
export const { createQuery, setQuery, addAnswer } = querySlice.actions;