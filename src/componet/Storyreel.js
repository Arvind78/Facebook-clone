import React from 'react'
import '../css/Story.css'
import {Avatar} from "@material-ui/core";
const Storyreel = () => {  
  return (
    <div className='Storyreel'>
        <div className='Story' style={{backgroundImage:`url('https://i.postimg.cc/fyq10ZMd/pexels-photo-1043474.jpg')`}} >
      <Avatar src={('https://i.postimg.cc/VNFGC1RN/pexels-photo-1043474.jpg')}/>
      <h4>Arvind</h4>
        </div>

        <div className='Story' style={{backgroundImage:`url('https://i.postimg.cc/HkWDvShj/photo-1503443207922-dff7d543fd0e-ixlib-rb-1-2.jpg')`}} >
      <Avatar src={('https://i.postimg.cc/6TsghcG6/photo-1503443207922-dff7d543fd0e-ixlib-rb-1-2.jpg')}/>
      <h4>Sujeet</h4>
        </div>

        <div className='Story' style={{backgroundImage:`url('https://i.postimg.cc/pXFJbx36/photo-1552642986-ccb41e7059e7-ixlib-rb-1-2.jpg')`}} >
      <Avatar src={('https://i.postimg.cc/HLq7t7kW/photo-1552642986-ccb41e7059e7-ixlib-rb-1-2.jpg')}/>
      <h4>Karan Singh</h4>
        </div>


        <div className='Story' style={{backgroundImage:`url('https://i.postimg.cc/B6bw2ktf/image.jpg')`}} >
      <Avatar src={('https://i.postimg.cc/0jdWvsBm/image.jpg')}/>
      <h4>Vinod kumar</h4>
        </div>

  
      
    </div>
  )
}

export default Storyreel;
