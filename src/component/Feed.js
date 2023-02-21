import React from 'react'
import "../componentcss/Feed.css";
import PostModal from '../component/PostModal'
function Feed() {
  return (
    <div classname="Feed-main">
         <PostModal/>
        <div className="feeds">
      <div className="feed1">
      <img src=" https://i.pinimg.com/originals/bc/6e/01/bc6e01f7267838a301d66e2929068cc5.jpg "
                alt=""
              />
        
      </div>
      <div className="feed2">
        <input type="text" placeholder="What do you want to ask or share ?" />
      </div>
      </div>
      <div className="icons">
        <div className="icon1">
            <div>
            <i class="fa-solid fa-clipboard-question"></i>
            </div>
            <div   type="button" className="btn btn-link icon" data-bs-toggle="modal" data-bs-target="#exampleModal"> Ask </div>
           
            </div>
        <div className="icon2">
            <div>
             |<i class="fa-solid fa-user-pen"></i>
            </div>
           <div className="icon"> Answer </div>
            </div>
        <div className="icon3">
            <div>
            |<i class="fa-solid fa-pencil"></i>  
             </div>
           <div className="icon">  Post</div>
            </div>
      </div>
    </div>
  )
}

export default Feed;
