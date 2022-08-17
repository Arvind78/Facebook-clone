 import React from 'react';
 import RightSideBar from '../src/componet/RightSideBar.js'
 import Feed from './componet/Feed.js'
  import Header from './componet/Header.js'
import Login from './componet/Login.js';
  import Sidebar  from './componet/Sidebar.js'
  import{useStateValue} from './componet/StateProvider.js'


function App() {
    const [{user},disptch] =useStateValue;
  // const user ="nnh"
console.log(`" hello "${user}`)
  return (
    <>
    {
      !user?(<Login/>):(
        <div>
        <Header/>
        <div className="app_body">
        <Sidebar/>
         <Feed/>
      <RightSideBar/>
        </div>
       </div>
      ) 
    }
 
    </>
  );
}

export default App;
