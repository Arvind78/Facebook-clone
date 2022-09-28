import React from 'react'
import '../css/feed.css'
import MassageSender from '../componet/MassageSender.js'
import Storyreel from '../componet/Storyreel.js'
import Post from '../componet/Post.js';
const Feed = () => {
  return (
    <div className='feed'>
   <Storyreel/>
  <MassageSender/>
  <Post /> 
    </div>
  )
}

export default Feed;
