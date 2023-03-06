import React from 'react';
import './CurrentlyOpenedPost.css'
import { useSelector, useDispatch } from 'react-redux';
import {setCurrentlyOpenedPost } from '../mainDataDisplay/mainDataDisplaySlice';

export default function CurrentlyOpenedPost() {
const redditData = useSelector(state => state.searchBar.redditData);
const currentlyOpenedPost = useSelector(state => state.mainDataDisplay.currentlyOpenedPost);
const dispatch = useDispatch();
    
  return (
   <div className='currentlyOpenedPost'>
  <button 
    className="btn" 
    id='back-btn' 
    onClick={() => {
      dispatch(setCurrentlyOpenedPost(''))
    }}
  >
    Back
  </button>
  {redditData.data && redditData.data.children.map(post => (
    post.data.id === currentlyOpenedPost &&
    // create post 
    <div className='currentPost'>
      <div className='row'>
        <div className='col-12 col-md-8'>
          <h3>r/{post.data.subreddit}</h3>
          <h2>{post.data.title}</h2>
          <p>By {post.data.author}</p>
        </div>
        <div className='col-12 col-md-4'>
          <img className='post-image' src={post.data.url_overridden_by_dest} />
        </div>
      </div>
    </div> 
  ))}
</div>

  )
}
