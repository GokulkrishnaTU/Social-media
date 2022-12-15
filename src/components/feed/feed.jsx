import { } from '@mui/icons-material'
import React from 'react'
import "./feed.css"
import Share from "../share/Share"
import Post from '../post/post'
function feed() {
  return (
    <div className='feed'>
      <div className="feedWrapper">

        <Share/>
       <Post/>
       <Post/>
       <Post/>
       <Post/>
       <Post/>
      </div>

    </div>
  )
}

export default feed
