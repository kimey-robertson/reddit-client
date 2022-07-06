import React from "react";
import "./SearchBar.css";
import { useSelector, useDispatch } from "react-redux";
import {
  log,
  setSearchTerm,
  setUserData,
} from "../searchBar/searchBarSlice.js";

export default function SearchBar() {
  const dispatch = useDispatch();

  async function searchReddit(queryString) {
    const url = `https://www.reddit.com/search.json?q=${queryString}`;
    const res = await fetch(url);
    const data = await res.json();
    dispatch(setUserData(data));
    console.log(data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchReddit(event.target.search.value)
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

      {/* <button className="btn" >
        Nothing
      </button> */}
    </div>
  );
}
