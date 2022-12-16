import React from "react";
import "./closeFriend.css";

function closeFriend({user}) {
  return (
    <li className="sidebarFriends">
      <img className="sidebarFriendImg" src={user.profilePicture} alt="" />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}

export default closeFriend;
