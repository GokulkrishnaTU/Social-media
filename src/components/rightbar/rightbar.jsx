import React from 'react'
import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from "../online/online"

function rightbar({profile}) {

  const HomeRightbar=()=>{

    return(
      <>

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


      </>
    )

  }

const ProfileRightbar=()=>{
  return(
    <>
    <h4 className='rightbarTitle'>User information</h4> 
    <div className="rightbarInfo">
    <div className="rightbarInfoItem">
    <span className="rightbarInfoKey">City :</span>
    <span className="rightbarInfoValue">Thrissur</span>
      
      </div>

      <div className="rightbarInfoItem">
    <span className="rightbarInfoKey">From</span>
    <span className="rightbarInfoValue">Alapad</span>
      
      </div>


      <div className="rightbarInfoItem">
    <span className="rightbarInfoKey">Relationship </span>
    <span className="rightbarInfoValue">Single</span>
      
      </div>
      
    </div>

    <h4 className='rightbarTitle'>User </h4> 
    <div className="rightbarFollowingData">

    <div className="rightbarFollowings">
      <img src="assets/person/neymar1.jpg" alt="" className="rightbarFollowingImg" />
       <span className="rightbarFollowingName">Neymar</span>
    </div>

    <div className="rightbarFollowings">
      <img src="assets/person/02.jpg" alt="" className="rightbarFollowingImg" />
       <span className="rightbarFollowingName">Messi</span>
    </div>

    <div className="rightbarFollowings">
      <img src="assets/person/cbum.jpg" alt="" className="rightbarFollowingImg" />
       <span className="rightbarFollowingName">Chris Bhum</span>
    </div>


    <div className="rightbarFollowings">
      <img src="assets/person/cr7.jpg" alt="" className="rightbarFollowingImg" />
       <span className="rightbarFollowingName">Ronaldo</span>
    </div>


    <div className="rightbarFollowings">
      <img src="assets/person/db.jpg" alt="" className="rightbarFollowingImg" />
       <span className="rightbarFollowingName">Beckham</span>
    </div>


    <div className="rightbarFollowings">
      <img src="assets/person/grealy.jpg" alt="" className="rightbarFollowingImg" />
       <span className="rightbarFollowingName">Grealish</span>
    </div>



    </div>

    </>

  )
}

  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        <ProfileRightbar/>
        <HomeRightbar/>
       
      </div>
    
    </div>
  )
}

export default rightbar
