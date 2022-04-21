import React, { useState, useEffect } from 'react'
import CommentAddForm from './CommentAddForm'

function Comments({cat, currentUser}) {
  const [comments, setComments] = useState([])

  useEffect(() => {
   fetch("/interactions")
      .then((res) => res.json())
      .then((data) => setComments(data))
  }, []);

  const catComments = comments.map(comment => {if (comment.cat_id === cat.id) return (<div className="commentDiv"> 
    <span><p> <strong>{comment.human_name} </strong> </p>
    <p style={{ fontSize: "small" }}>{comment.time_stamp}</p> </span>
    <p style={{ float: "top" }}>"{comment.comment}" <br></br>
    </p>
    </div>) })

  return (
    <div id="commentContainer">
      <div className="comments">
      <h1>Cat Comments</h1>
        {catComments}
      </div>
      <br></br>
      <br></br>
      <CommentAddForm comments={comments} setComments={setComments} currentUser={currentUser} cat={cat}/>
    </div>
  )
}

export default Comments