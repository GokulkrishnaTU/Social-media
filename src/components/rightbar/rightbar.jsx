import React from 'react'
import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from "../online/online"

function rightbar() {
  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        <div className='birthdayContainer'>
          <img className='birthdayImg' src="assets/gift.png" alt="" />
        <span className='birthdayText'>
          <b>Neymar jr</b> and <b>3 other friends</b> have birthday today
        </span>
        </div>
      <img className='rightbarAd' src="assets/ad.png" alt="" />
      <h4 className="rightbarTitle"> <b>Online Friends</b> </h4>
      <ul className="rightbarFriendList">
        {Users.map((u)=>(
          <Online key={u.id} user={u}/>
        ))}

        
      </ul>
      </div>
    
    </div>
  )
}

export default rightbar
