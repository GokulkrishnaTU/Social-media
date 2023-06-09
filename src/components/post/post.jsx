import React, { useState } from 'react'
import {MoreVert} from "@mui/icons-material"
import "./post.css"
import {Users} from "../../dummyData"


function Post({post}) {

  const [like,setLike]=useState(post.like)
  const [isLiked,setLiked]=useState(false)
  const PF=process.env.REACT_APP_PUBLIC_FOLDER

  const likeHandler=()=>{
 setLike(isLiked? like-1 : like+1)
 setLiked(!isLiked)
  }

  return (

     <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className='postProfileImg' src={Users.filter((u)=>u.id===post.userId)[0].profilePicture} alt="" />
                <span className='postUsername'>{Users.filter((u)=>u.id===post.userId)[0].username}</span>
                <span className='postDate'>{post.date}</span>
                </div>

                <div className="postTopRight">
                  <MoreVert/>
                </div>
            </div>
             <div className="postCenter">
              <span className='postText'>{post?.desc}</span>
              <img className='postImg' src={PF+post.photo} alt="" />
             </div>
             <div className="postBottom">
              <div className="postBottmLeft">
                <img className='likeIcon' src="assets/like.png" onClick={likeHandler} alt="" />
                <img className='likeIcon' src="assets/heart.png" onClick={likeHandler} alt="" />
                <span className='postLikeCounter'>{like}people liked this</span>
                </div>
                <div className="postNotoomRight">
              <span className='postCommentText'>{post.comment} comments</span>
             </div>
                </div>
             
             </div>
            
        </div>
      
        
    
  )
}

export default Post
