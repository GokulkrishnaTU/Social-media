import "./topbar.css"
import {Search,Person,Chat,Notifications} from '@mui/icons-material';


function topbar() {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft"> 
        <span className="logo">CreDev</span>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
          <Search/>
          <input placeholder="Search for Friends,post or videos" className="searchInput" />
          </div>
           </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLinks">Homepage</span>
            <span className="topbarLinks">Timeline</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
            <Person className="searchIcon"/>
            <span className="topbarIconBadge">1</span>

            </div>
            <div className="topbarIconItem">
            <Chat/>
            <span className="topbarIconBadge">1</span>

            </div>
            <div className="topbarIconItem">
            <Notifications/>
            <span className="topbarIconBadge">1</span>

            </div>
          </div>
          <img src="/assets/person/01.jpg" alt="" className="topbarImage" />
           </div>
     
    </div>
  )
}

export default topbar
