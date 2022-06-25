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
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload
        }
    }
});

export const { log, setSearchTerm } = searchBarSlice.actions;
export default searchBarSlice.reducer;