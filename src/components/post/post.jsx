import React from 'react'
import {MoreVert} from "@mui/icons-material"
import "./post.css"


function post() {
  return (

     <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className='postProfileImg' src="/assets/person/02.jpg" alt="" />
                <span className='postUsername'>Gokul</span>
                <span className='postDate'>5 min ago</span>
                </div>

                <div className="postTopRight">
                  <MoreVert/>
                </div>
            </div>
             <div className="postCenter">
              <span className='postText'>Hey its is my First Post</span>
              <img className='postImg' src="assets/post/messi.jpg" alt="" />
             </div>
             <div className="postBottom">
              <div className="postBottmLeft">
                <img className='likeIcon' src="assets/like.png" alt="" />
                <img className='likeIcon' src="assets/heart.png" alt="" />
                <span className='postLikeCounter'>50 people liked this</span>
                </div>
                <div className="postNotoomRight">
              <span className='postCommentText'> 10 comments</span>
             </div>
                </div>
             
             </div>
            
        </div>
      
        
    
  )
}

export default post
