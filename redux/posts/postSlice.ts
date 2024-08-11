import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
  posts: any[];
};
const initailState: InitialStateType = {
  posts: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState: initailState,
  reducers: {
    loadPosts: (state, { payload }: PayloadAction<any[]>) => {
      state.posts = payload;
    },
    unloadPosts: (state) => {
      state.posts = [];
    },
  },
});

export const { loadPosts, unloadPosts } = postsSlice.actions;
export default postsSlice.reducer;
