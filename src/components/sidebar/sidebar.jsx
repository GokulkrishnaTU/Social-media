import React from 'react'
import "./sidebar.css"
import {HelpOutline, PlayCircleFilledOutlined, RssFeed,Group,Bookmark,WorkOutline,Event,School, Chat} from '@mui/icons-material';
function sidebar() {
  return (

      <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarList">

                <div className="sidebarListItem">
                  <RssFeed className='sidebarIcon'/>
                  <span className='sidebarListItemText'>Feed</span>                 
                </div>

                <div className="sidebarListItem">
                  <Chat className='sidebarIcon'/>
                  <span className='sidebarListItemText'>Chat</span>                 
                </div>

                

                <div className="sidebarListItem">
                  <PlayCircleFilledOutlined className='sidebarIcon'/>
                  <span className='sidebarListItemText'>Video</span>                 
                </div>

                <div className="sidebarListItem">
                  <Group className='sidebarIcon'/>
                  <span className='sidebarListItemText'>Group</span>                 
                </div>

                <div className="sidebarListItem">
                  <Bookmark className='sidebarIcon'/>
                  <span className='sidebarListItemText'>Bookmark</span>                 
                </div>

                <div className="sidebarListItem">
                  <HelpOutline className='sidebarIcon'/>
                  <span className='sidebarListItemText'>Question</span>                 
                </div>

                <div className="sidebarListItem">
                  <WorkOutline className='sidebarIcon'/>
                  <span className='sidebarListItemText'>Jobs</span>                 
                </div>

                <div className="sidebarListItem">
                  <Event className='sidebarIcon'/>
                  <span className='sidebarListItemText'>Events</span>                 
                </div>

                <div className="sidebarListItem">
                  <School className='sidebarIcon'/>
                  <span className='sidebarListItemText'>Courses</span>                 
                </div>
                <button className='sidebarButton'>show More</button>
                <hr className='sidebarHr'/>


                <ul className='sidbearFriendList'>

                  <li className='sidebarFriends'>
                    <img className='sidebarFriendImg' src="/assets/person/02.jpg" alt="" />
                  <span className='sidebarFriendName'>Messi</span>
                  </li>
                  <li className='sidebarFriends'>
                    <img className='sidebarFriendImg' src="/assets/person/02.jpg" alt="" />
                  <span className='sidebarFriendName'>Messi</span>
                  </li>
                  <li className='sidebarFriends'>
                    <img className='sidebarFriendImg' src="/assets/person/02.jpg" alt="" />
                  <span className='sidebarFriendName'>Messi</span>
                  </li>
                  <li className='sidebarFriends'>
                    <img className='sidebarFriendImg' src="/assets/person/02.jpg" alt="" />
                  <span className='sidebarFriendName'>Messi</span>
                  </li>
                  <li className='sidebarFriends'>
                    <img className='sidebarFriendImg' src="/assets/person/02.jpg" alt="" />
                  <span className='sidebarFriendName'>Messi</span>
                  </li>
                  <li className='sidebarFriends'>
                    <img className='sidebarFriendImg' src="/assets/person/02.jpg" alt="" />
                  <span className='sidebarFriendName'>Messi</span>
                  </li>
                </ul>

            </div>
        </div>
      </div>
  
  )
}

export default sidebar
