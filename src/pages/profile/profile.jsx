import React from 'react'
import "./profile.css"
import Topbar from '../../components/topbar/topbar'
import Sidebar from '../../components/sidebar/sidebar'
import Feed from '../../components/feed/feed'
import Rightbar from '../../components/rightbar/rightbar'


function profile() {
  return (
    <div>
    <Topbar/> 
    <div className='profile'>
    <Sidebar/>
    <div className="profileRight">
      <div className="profileRightTop">
        <div className="profileCover">
        <img className='profileCoverImg' src="assets/post/3.jpeg" alt="" />
        <img className='profileUserImg' src="assets/post/7.jpeg" alt="" />
        
        
        </div>
        <div className="profileInfo">
          <h5 className='profileInfoName'>Gokul Ktishna</h5>
          <span className='profileInfoDesc'>Hello guyss</span>
        </div>
      </div>
        <div className="profileRightBottom">
    <Feed/> 
    <Rightbar profile/>
    </div>

    </div>
    </div>
  </div>
  )
}

export default profile
