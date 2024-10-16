import { createSlice } from "@reduxjs/toolkit";


    const postSlice = createSlice({
        name: "post",
        initialState: {
            posts: [],
        },
        reducers: { 
          createPost : (state, action) => {
            state.posts = [ action.payload, ...state.posts,]
          } ,

          setPost: (state, action) => {
            state.posts = action.payload;
          }
        }
    });

    export const { createPost, setPost } = postSlice.actions;

    export default postSlice.reducer;