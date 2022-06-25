import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import searchBarReducer from '../features/searchBar/searchBarSlice.js';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    searchBar: searchBarReducer
  },
});
