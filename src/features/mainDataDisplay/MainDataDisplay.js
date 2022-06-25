import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function MainDataDisplay() {
    const searchTerm = useSelector(state => state.searchBar.searchTerm);
  
  
    return (
        <div>{searchTerm}</div>
    
  )
}
