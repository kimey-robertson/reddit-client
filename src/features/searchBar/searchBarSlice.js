import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchTerm: 'nothing yet'
}

export const searchBarSlice = createSlice({
    name: 'searchBar',
    initialState: initialState,
    reducers: {
        log: (state) => {
            console.log(state.searchTerm);
        }
    }
});

export const { log } = searchBarSlice.actions;
export default searchBarSlice.reducer;