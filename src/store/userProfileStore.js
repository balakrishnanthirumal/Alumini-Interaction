import { createSlice } from "@reduxjs/toolkit";


  const userProfileSlice = createSlice({
    name: "userProfile",
    initialState: {
      userProfile: null,
    },
    reducers: {
      setUserProfile: (state, action) => {
        state.userProfile = action.payload;
      },

      addPost: (state, action) => {
        state.userProfile = {...state.userProfile, posts: [action.payload.id, ...state.userProfile.posts]};
    },

      addQuery: (state, action) => {
        state.userProfile = {...state.userProfile, queries: [action.payload.id, ...state.userProfile.queries]};
      }
  }
  });
  

export const { setUserProfile, addPost, addQuery } = userProfileSlice.actions;
export default userProfileSlice.reducer;

