import React from 'react'
import "./online.css"

function online({user}) {
  console.log("userrrrrr",user);
  const PF=process.env.REACT_APP_PUBLIC_FOLDER

  return (
    <div>
      
      <li className="rightbarFriends">
          <div className="rightbarProfileImgContainer">
            <img className="rightbarProfileImg"
             src={PF+user.profilePicture} 
             alt="" />
             <span className="rightbarOnline"></span>
          </div>
          <span className='rightbarUsername'>{user.username}</span>
        </li>

    </div>
  )
}

export default online
