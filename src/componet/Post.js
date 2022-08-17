import React from 'react';
import '../css/post.css';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Avatar } from "@material-ui/core";
import PublicIcon from '@material-ui/icons/Public';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

import ShareIcon from '@material-ui/icons/Share';
const Post = ({photourl,time,massage,userName,image}) => {
  return (
    <div className='post'>
    <div className="toppost">
        <div className="toppostLeft">
       <Avatar  src={photourl}/>
         <div className="postinfo">
            <h4>{userName}</h4>
            <p> {time} <PublicIcon/> </p>
         </div>
        </div>
      <MoreHorizIcon style={{ cursor: "pointer"}}/>
    </div>
    <div className="postmiddle">
      <p> {massage}</p>

     {image && <img src={image} alt="Errar" />}

     </div>
    <div className="post_bottom">
      <div className="post_bottom_option">
    <ThumbUpIcon/><p>Like</p>
    <ChatBubbleOutlineIcon/><p>Comment</p>
    <ShareIcon/><p>Share</p>
    </div>
    </div>
    </div>
  )
}

export default Post;
