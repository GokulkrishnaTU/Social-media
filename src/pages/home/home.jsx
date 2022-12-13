import React from 'react'
import Topbar from '../../components/topbar/topbar'
import Sidebar from '../../components/sidebar/sidebar'
import Feed from '../../components/feed/feed'
import Rightbar from '../../components/rightbar/rightbar'
import "./home.css"
function home() {
  return (
    <div>
      <Topbar/> 
      <div className='homeContainer'>
      <Sidebar/>
      <Feed/> 
      <Rightbar/>
 
 
      </div>
    </div>
  )
}

export default home
