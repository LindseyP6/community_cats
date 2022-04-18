import React, { useState, useEffect } from 'react'
import CommentAddForm from './CommentAddForm'

function Comments({cat, currentUser}) {
  const [comments, setComments] = useState([])
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
   fetch("/interactions")
      .then((res) => res.json())
      .then((data) => setComments(data))
  }, []);

  function handleToggle() {
    setToggle((toggle) => !toggle);
  }

  const catComments = comments.map(comment => {if (comment.cat_id === cat.id) return <p>"{comment.comment}" - <strong>{comment.human_name}</strong></p>})

  return (
    <div id="commentContainer">
      <h1>Comments</h1>
      <div className="comments">
        {catComments}
      </div>
      <button id="addCommentButton" onClick={handleToggle}>Add A Comment</button> 
      <br></br>
      {toggle ? <CommentAddForm comments={comments} setComments={setComments} currentUser={currentUser} cat={cat}/> : null}
    </div>
  )
}

export default Comments