import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  active: "home",
};
const navSlice = createSlice({
  name: "navbar",
  initialState: initialState,
  reducers: {
    home: (state) => {
      state.active = "home";
    },
    news: (state) => {
      state.active = "news";
    },
    music: (state) => {
      state.active = "music";
    },
    movies: (state) => {
      state.active = "movies";
    },
    comedy: (state) => {
      state.active = "comedy";
    },
    lifestyle: (state) => {
      state.active = "lifestyle";
    },
  },
});

export const { home, news, lifestyle, comedy, movies, music } =
  navSlice.actions;
export default navSlice.reducer;
