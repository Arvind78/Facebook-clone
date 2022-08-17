 import React from 'react'
 import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
 import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
 import VolumeUpIcon from '@material-ui/icons/VolumeUp';
 import {Avatar} from "@material-ui/core";
 import VideoCallIcon from '@material-ui/icons/VideoCall';
 import SearchIcon from '@material-ui/icons/Search';
 import'../css/Rightsidebar.css'
 const RightSideBar = () => {
   return (
     <div className="visite ">
      <div className="visiteHeader">
        <div className="visite_h_left">
          <h4>Your Page</h4>
         <MoreHorizIcon/>
        </div>

      </div>
      <div className="visitebody">
        <div className="visitebodyoption">
        <Avatar src={('https://i.postimg.cc/6TsghcG6/photo-1503443207922-dff7d543fd0e-ixlib-rb-1-2.jpg')}/>

       <h4>Arvind </h4>
        </div>
        <div className="visitebodyoption">
        <NotificationsActiveIcon/>
       <p>1 Notification </p>
        </div>

        <div className="visitebodyoption">
        <VolumeUpIcon />
       <p>Create Promotions</p>
        </div>
     </div>
      <hr />
      <div className="visiteHeader1">
        <div className="visiteleft1">
          <h4>Contact</h4>
          </div>
          <div className="visite_h_right">
          <VideoCallIcon/>
          <SearchIcon/>
         <MoreHorizIcon/>
        </div>
       </div>
      
        <div className="visitebodyoption1">
          <div className="option">
          <Avatar src={('https://i.postimg.cc/VNFGC1RN/pexels-photo-1043474.jpg')}/>
      <h4>Arvind</h4>
        </div>

       <div className="option">
       <Avatar src={('https://i.postimg.cc/6TsghcG6/photo-1503443207922-dff7d543fd0e-ixlib-rb-1-2.jpg')}/>
      <h4>Sujeet</h4>
        </div>
        
       <div className="option">
       <Avatar src={('https://i.postimg.cc/HLq7t7kW/photo-1552642986-ccb41e7059e7-ixlib-rb-1-2.jpg')}/>
       <h4>Rohit </h4>
       </div>

       <div className="option">
       <Avatar src={('https://i.postimg.cc/0jdWvsBm/image.jpg')}/>
       <h4>Ajeet </h4>
       </div>



        </div>
 
        
     </div>
   )
 }
 
 export default RightSideBar;
 