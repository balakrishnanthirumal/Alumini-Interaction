import { createSlice } from "@reduxjs/toolkit";
import { comment } from "postcss";


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
          },

          addComment: (state, action) => {
            state.posts = state.posts.map((post) =>{
              if(post.id === action.payload.postId) {
                return {
                  ...post,
                  comments: [ ...post.comments, action.payload.comment]
                }
              }
              return post;
            })
          }
        }
    });

    export const { createPost, setPost, addComment } = postSlice.actions;

    export default postSlice.reducer;