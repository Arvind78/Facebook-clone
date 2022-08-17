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
  <Post   photourl="https://i.postimg.cc/pXFJbx36/photo-1552642986-ccb41e7059e7-ixlib-rb-1-2.jpg" image='https://i.postimg.cc/pXFJbx36/photo-1552642986-ccb41e7059e7-ixlib-rb-1-2.jpg' userName='Arvind kumar' time="12:05pm"  massage=' this is a tempary massage'/>
  <Post   photourl="https://i.postimg.cc/pXFJbx36/photo-1552642986-ccb41e7059e7-ixlib-rb-1-2.jpg" image='https://i.postimg.cc/pXFJbx36/photo-1552642986-ccb41e7059e7-ixlib-rb-1-2.jpg' userName='Rohit varma ' time="12:05pm"  massage=' this is a tempary massage'/>
  <Post   photourl="https://i.postimg.cc/pXFJbx36/photo-1552642986-ccb41e7059e7-ixlib-rb-1-2.jpg" image='https://i.postimg.cc/pXFJbx36/photo-1552642986-ccb41e7059e7-ixlib-rb-1-2.jpg' userName=' Mohit arya' time="12:05pm"  massage=' this is a tempary massage'/>
  <Post   photourl="https://i.postimg.cc/pXFJbx36/photo-1552642986-ccb41e7059e7-ixlib-rb-1-2.jpg" image='https://i.postimg.cc/pXFJbx36/photo-1552642986-ccb41e7059e7-ixlib-rb-1-2.jpg' userName='Sameer ' time="12:05pm"  massage=' this is a tempary massage'/>
  <Post   photourl="https://i.postimg.cc/pXFJbx36/photo-1552642986-ccb41e7059e7-ixlib-rb-1-2.jpg" image='https://i.postimg.cc/pXFJbx36/photo-1552642986-ccb41e7059e7-ixlib-rb-1-2.jpg' userName='Tanmay Nagar ' time="12:05pm"  massage=' this is a tempary massage'/>
  <Post   photourl="https://i.postimg.cc/pXFJbx36/photo-1552642986-ccb41e7059e7-ixlib-rb-1-2.jpg" image='https://i.postimg.cc/pXFJbx36/photo-1552642986-ccb41e7059e7-ixlib-rb-1-2.jpg' userName='Adesh more' time="12:05pm"  massage=' this is a tempary massage'/>
  <Post   photourl="https://i.postimg.cc/pXFJbx36/photo-1552642986-ccb41e7059e7-ixlib-rb-1-2.jpg" image='https://i.postimg.cc/pXFJbx36/photo-1552642986-ccb41e7059e7-ixlib-rb-1-2.jpg' userName='Sachin ' time="12:05pm"  massage=' this is a tempary massage'/>
  <Post   photourl="https://i.postimg.cc/pXFJbx36/photo-1552642986-ccb41e7059e7-ixlib-rb-1-2.jpg" image='https://i.postimg.cc/pXFJbx36/photo-1552642986-ccb41e7059e7-ixlib-rb-1-2.jpg' userName='Vishnu' time="12:05pm"  massage=' this is a tempary massage' /> 
    </div>
  )
}

export default Feed;
