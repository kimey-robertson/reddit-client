import React from "react";
import "./SearchBar.css";
import { useSelector, useDispatch } from "react-redux";
import {
  setRedditData,
} from "../searchBar/searchBarSlice.js";
import { setCurrentlyOpenedPost } from "../mainDataDisplay/mainDataDisplaySlice.js"

export default function SearchBar() {
  const dispatch = useDispatch();
  const currentlyOpenedPost = useSelector(state => state.mainDataDisplay.currentlyOpenedPost);

  async function searchReddit(queryString) {
    const url = `https://www.reddit.com/search.json?q=${queryString}`;
    const res = await fetch(url);
    const data = await res.json();
    dispatch(setRedditData(data));
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(setCurrentlyOpenedPost(''));
    searchReddit(event.target.search.value);
    
  }

  return (
    
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            id="search"
            type="text"
            placeholder="Search.. "
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </div>
      </form>


    </div>
  );
}
