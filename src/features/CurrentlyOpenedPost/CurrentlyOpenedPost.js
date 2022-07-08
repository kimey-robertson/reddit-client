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
                r/{post.data.subreddit}
                <br></br>
                {post.data.title}
                <br></br>
                {post.data.author}
            </div> 

        ))}
    </div>
  )
}
