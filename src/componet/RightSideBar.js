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
        <Avatar/>
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
      
        <div className="visitebodyoption">
        <Avatar/>
       <h4>Arvind </h4>
        </div>
 
     
     </div>
   )
 }
 
 export default RightSideBar;
 