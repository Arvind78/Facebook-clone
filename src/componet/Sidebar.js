import React from 'react'
import '../css/Sideber.css'
import Covid from '../img/covid-19.png'
import friend from '../img/friends.png'
import group from '../img/group.png'
import watch from '../img/watch.png'
import event from '../img/event.png'
import Profile from '../img/profile.jpg'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'; 
 import Sideber_Option from '../componet/Sideber_Option.js'
const Sidebar = () => {
  return (
    <div className='sideBer'> 
     
      <Sideber_Option  src={Profile}   title='Arvind' />
      <Sideber_Option  src={Covid}   title='Covid-19 Information Center' />
      <Sideber_Option  src={friend}   title='Friends' />
      <Sideber_Option  src={group}    title='Groups' />
      <Sideber_Option  src={watch}    title='Watch' />
      <Sideber_Option  src={event}      title='Event' />
      <Sideber_Option   Icon={ExpandMoreIcon}       title='See More' />
      

      


    
    </div>
  )
}

export default Sidebar;
