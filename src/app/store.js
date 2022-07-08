import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import searchBarReducer from '../features/searchBar/searchBarSlice.js';
import mainDataDisplayReducer from '../features/mainDataDisplay/mainDataDisplaySlice.js';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    searchBar: searchBarReducer,
    mainDataDisplay: mainDataDisplayReducer
  },
});
