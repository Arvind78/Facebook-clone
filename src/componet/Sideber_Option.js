 import React from 'react'
 import {Avatar} from '@material-ui/core'
 import '../css/sideber-row.css'
 const Sideber_Option = (props) => {
   return (
     <div className="side-row">
        {props.src && <Avatar src={props.src}/>}
        {props.Icon &&  <props.Icon/>}
   <p> { props.title  }</p> 
  
     </div>
   )
 }
 
 export default Sideber_Option;
 