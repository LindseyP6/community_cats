import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'

function CommentAddForm({ comments, setComments, currentUser, cat }) {
  const [comment, setComment] = useState("")
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    const newCommentAdd = {
      comment,
      cat_id: cat.id,
      user_id: currentUser.id
    };
    fetch("/interactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCommentAdd),
    })
      .then((r) => r.json())
      .then((com) => setComments(com));
    history.go(0)
  }

  return (
    <div className="commentForm">
      <form onSubmit={handleSubmit}>
        <h3>Add A Comment About This Cat</h3>
        <label>
          Comment <br></br>
          <textarea placeholder="Comment"             
            value={comment}
            className="commentForm"
            rows="4"
            onChange={(e) => setComment(e.target.value)} />
        </label>
        <br></br>
        <button 
          type="submit" 
          className="allButtons">
          <strong>Add It!</strong>
        </button>
      </form>
    </div>
  )
}

export default CommentAddForm