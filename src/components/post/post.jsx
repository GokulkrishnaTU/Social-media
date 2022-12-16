import React from 'react'
import {MoreVert} from "@mui/icons-material"
import "./post.css"
import {Users} from "../../dummyData"


function post({post}) {
  console.log(post);
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
              <img className='postImg' src={post.photo} alt="" />
             </div>
             <div className="postBottom">
              <div className="postBottmLeft">
                <img className='likeIcon' src="assets/like.png" alt="" />
                <img className='likeIcon' src="assets/heart.png" alt="" />
                <span className='postLikeCounter'>{post.like}people liked this</span>
                </div>
                <div className="postNotoomRight">
              <span className='postCommentText'>{post.comment} comments</span>
             </div>
                </div>
             
             </div>
            
        </div>
      
        
    
  )
}

export default post
