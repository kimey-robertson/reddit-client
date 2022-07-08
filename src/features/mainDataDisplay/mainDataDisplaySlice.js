import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentlyOpenedPost: ""
};

export const mainDataDisplaySlice = createSlice({
  name: "mainDataDisplay",
  initialState: initialState,
  reducers: {
    setCurrentlyOpenedPost: (state, action) => {
        state.currentlyOpenedPost = action.payload;
    },

  },
});

export const { setCurrentlyOpenedPost } = mainDataDisplaySlice.actions;
export default mainDataDisplaySlice.reducer;