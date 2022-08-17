import React from 'react'
import '../css/Header.css'
import Profile from '../img/profile.jpg'
import fbLogo from '../img/facebook-logo-2019.png'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import PeopleIcon from '@material-ui/icons/People';
 import {Avatar} from "@material-ui/core";
 import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
 import AppsIcon from '@material-ui/icons/Apps';
 import ForumIcon from '@material-ui/icons/Forum';
 import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
 import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
 import {IconButton} from "@material-ui/core";
const Header = () => {
  return(
<header className='main'>
 <div className='left'>
  <img src={fbLogo} alt="Eroor" className='logo'  />
  <div className='searchbar'>

  <SearchIcon/>
  <input type="text" placeholder="Search.." />
  </div>

 </div>
 <div className='middle'>
    <div className='middleIcon  middleIcon-active'>
    <HomeIcon fontSize='large'/>
    </div>
    <div className='middleIcon ' >
    <OndemandVideoIcon fontSize='large'/>
    </div>
    <div className='middleIcon'>
    <PeopleIcon fontSize='large'/>
    </div>
    <div className='middleIcon'>
    <SportsEsportsIcon  fontSize='large'/>
    </div>
 
 </div>
 <div className='right'>
    <div className='user-Info'>
        <Avatar src={Profile}/>
        <h5>Arvind</h5>
    </div>
    <IconButton>
   < AppsIcon/>
    </IconButton>

    <IconButton>
   < ForumIcon/>
    </IconButton>

    <IconButton>
   < NotificationsActiveIcon/>
    </IconButton>

    <IconButton>
   <ArrowDropDownIcon/>
    </IconButton>

 </div>
</header>
  )
    }

export default Header;
