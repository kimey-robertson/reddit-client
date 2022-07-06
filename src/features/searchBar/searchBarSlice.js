import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
  userData: {},
};

export const searchBarSlice = createSlice({
  name: "searchBar",
  initialState: initialState,
  reducers: {
    log: (state) => {},
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setUserData: (state, action) => {
      // const fetchPromiseResult = await fetchData();
      state.userData = action.payload;
    },
  },
});

export const { log, setSearchTerm, setUserData } = searchBarSlice.actions;
export default searchBarSlice.reducer;
