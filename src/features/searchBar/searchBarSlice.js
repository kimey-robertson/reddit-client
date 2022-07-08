import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
  redditData: {},
};

export const searchBarSlice = createSlice({
  name: "searchBar",
  initialState: initialState,
  reducers: {
    setRedditData: (state, action) => {
      state.redditData = action.payload;
    },
  },
});

export const { log, setSearchTerm, setRedditData } = searchBarSlice.actions;
export default searchBarSlice.reducer;
