import React from 'react';
import './Posts.css';
import { useSelector, useDispatch } from 'react-redux';
import {setCurrentlyOpenedPost } from '../mainDataDisplay/mainDataDisplaySlice';


export default function Posts() {
const redditData = useSelector(state => state.searchBar.redditData);
const dispatch = useDispatch();

  return (
    <div className='posts'>
          {redditData.data && redditData.data.children.map(post => (
            post.data.thumbnail !== 'spoiler' && post.data.thumbnail !== 'self' && 
            post.data.thumbnail !== 'default' && post.data.thumbnail !== 'image' &&
            <div 
                id='post' 
                className='row'
                onClick={() => {
                    console.log('post cliked')
                    dispatch(setCurrentlyOpenedPost(post.data.id)) 
                }}
                >
              <div  className='col'> r/{post.data.subreddit}
                <br />
                {post.data.title}
              </div>
              <div  className='col'>
                    <img 
                        className='post-thumbnail'
                        src={post.data.thumbnail}
                        onClick={() => window.open(post.data.url_overridden_by_dest)}
                    ></img>
              </div>
             {/* <img className='post-image' src={post.data.url_overridden_by_dest} ></img> */}
            </div>
          ))}
          </div>    
  )
}
