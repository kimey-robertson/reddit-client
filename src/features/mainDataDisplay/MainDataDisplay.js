import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function MainDataDisplay() {
    const searchTerm = useSelector(state => state.searchBar.searchTerm);
    const userData = useSelector(state => state.searchBar.userData);
    


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
          <div>
          {userData.data && userData.data.children.map(post => (
            // post.data.thumbnail !== 'spoiler' && post.data.thumbnail !== 'self' && post.data.thumbnail !== 'default' && post.data.thumbnail !== 'image' &&
            <div>
              Subreddit: {post.data.subreddit}
             {/* <img src={post.data.thumbnail} width='500px' height='500px' ></img> */}
             <img src={post.data.url_overridden_by_dest} width='500px' height='500px' ></img>
            </div>
          ))}
          </div>
        </div>
    
  )
}
