import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function CurrentlyOpenedPost() {
const redditData = useSelector(state => state.searchBar.redditData);
const currentlyOpenedPost = useSelector(state => state.mainDataDisplay.currentlyOpenedPost);
const dispatch = useDispatch();
    
  return (
    <div>
        {redditData.data && redditData.data.children.map(post => (
            post.data.id === currentlyOpenedPost &&
            // create post 
            <div>
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
