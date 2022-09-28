import React from 'react';
import '../css/post.css';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Avatar } from "@material-ui/core";
import PublicIcon from '@material-ui/icons/Public';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import {Data} from "./Data"
import ShareIcon from '@material-ui/icons/Share';
const Post = ({photourl,time,massage,userName,image}) => {
  return (
    <div className='post'>
    {
        Data.map((val)=>(
          <>
    <div className="toppost">
  
        <div className="toppostLeft">
    
       <Avatar  src={val.avatar}/>
         <div className="postinfo">
            <h4>{val.first_name}</h4>
            <p>12:20 pm  <PublicIcon/></p>
         </div>
        </div>
      <MoreHorizIcon style={{ cursor: "pointer"}}/>
    </div>
    <div className="postmiddle">
      <p> {val.Post}</p>

     { <img src={val.postImg } alt="Errar" />}

     </div>
    <div className="post_bottom">
      <div className="post_bottom_option">
        <div className="like">
    <ThumbUpIcon/><p>Like</p>
    </div>
    <div className="like">
    <ChatBubbleOutlineIcon/><p>{val.comment} Comment</p>
    </div>
    <div className="like">
    <ShareIcon/><p>Share</p>
    </div>
    </div>
   
    </div>
    </>
  ))}
    </div>
  )
}

export default Post;
