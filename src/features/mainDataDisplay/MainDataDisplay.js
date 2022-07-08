import React from 'react';
import './MainDataDisplay.css';
import { useSelector, useDispatch } from 'react-redux';
import Posts from '../Posts/Posts.js';
import CurrentlyOpenedPost from '../CurrentlyOpenedPost/CurrentlyOpenedPost';

export default function MainDataDisplay() {
    const currentlyOpenedPost = useSelector(state => state.mainDataDisplay.currentlyOpenedPost);
    const redditData = useSelector(state => state.searchBar.redditData);
    


    // So the idea is to be able to search through reddit, and display the posts that show up, just like reddit does. 
    // TODO:
    // -Check all different types of thumbnails eg "spoiler", "self", "default", "image" and 
    // render differently or don't render at all based on the type
    // -Render the text
    // -Check if the post has an image or video, and render accordingly
    // -Style the post to make them aligned and nice
    // -Render the subreddit, author, and if possible add upvote/downvote buttons
    // -Make sure images are sized correctly
    // 
    // 
    // 
    
    return (
        <div>
          {!currentlyOpenedPost && <Posts />}
          {currentlyOpenedPost && <CurrentlyOpenedPost />}
        </div>
    
  )
}
