import React from 'react';
import './SearchBar.css';
import { useSelector, useDispatch } from 'react-redux';
import { log, setSearchTerm } from '../searchBar/searchBarSlice.js';



export default function SearchBar() {
  const dispatch = useDispatch();



  return (
    <div>
      <input type="text" placeholder="Search.. "
      onChange={event => {dispatch(setSearchTerm(event.target.value))}}/>
      <button
      className='btn'
      onClick={() => dispatch(log())}
      >Submit</button>
    </div>
  )
}
