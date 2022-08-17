import React from 'react';
 

import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import VideoCallIcon from '@material-ui/icons/VideoCall';
  import {Avatar,IconButton,Modal} from "@material-ui/core" 
  import '../css/massageSender.css'
  import PhotoLibraryOutlinedIcon from '@material-ui/icons/PhotoLibraryOutlined';
  import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
  import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
  import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import { useState } from 'react';
const MassageSender = () => {
  const [Open ,setOpen] = useState(false)

const HanderClosed =()=>{
  setOpen (false)
  console.log("hello")
}
const HanderOpen =()=>{
  setOpen (true)
}

  return (
    <>
  <Modal  open={Open} onClose={HanderClosed}>
    <div className="popupFrom">
     <form>
     <div className="modelheading">
      <h3>Create Post</h3>
      <IconButton onClick={HanderClosed}>
        <CloseOutlinedIcon/>
      </IconButton>
     </div>
     <div className="modelheadertop">
      <Avatar/>
      <h5>Arvind Varma</h5>
     </div>
     <div className="modelbody">
      <textarea rows='4'   placeholder="what's on your mind Arvind ?" ></textarea>
     </div>

     <div className="modelfooter">
      <div className="modelfooterleft">
        <h4>Add to your post</h4>
      </div>
      <div className="modelfooterright">
        {/* <IconButton> */}
        <PhotoLibraryOutlinedIcon   style={{color:"lightgreen"}}/>
        <VideocamOutlinedIcon    style={{color:"red"}}/>
        <EmojiEmotionsOutlinedIcon   style={{color:"#ffb100"}}/>
        {/* </IconButton> */}
      </div>
     </div>
      <input type="submit"  className='submit' value='Post' />
     </form>
    </div>
    
  </Modal>
 

    <div  className= "massegeSender">
       <div className="massegeSender_top">
           <Avatar/>
         <form>
        <input type="text"  placeholder="What's on you mind Arvind? " onClick={HanderOpen}/>
         </form>
         </div>

       <div className="massegeSender_bottom">
     <div className="massageOption">
     <VideoCallIcon style={{color:"red"}} fontSize='large'/>
    <p>Live&Video</p>
     </div>

     <div className="massageOption">
     <PhotoLibraryIcon style={{color:"lightgreen"}} fontSize='large'/>
    <p>Photo/Video</p>
     </div>


     <div className="massageOption">
     <InsertEmoticonIcon style={{color:"#ffb100"}} fontSize='large'/>
    <p>Feeling/Activity</p>
     </div>
 


       </div>


    </div>
    </>
  )
}

export default MassageSender
