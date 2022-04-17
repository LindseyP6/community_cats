import React, { useState, useEffect } from 'react'

function Comments() {
  const [comments, setComments] = useState([])

  useEffect(() => {
   fetch("/interactions")
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch(console.error);
  }, []);
  console.log(comments)
  return (
    <div id="commentContainer">
      <h1>Comments</h1>
      {/* <div className="comments">
       { comments ? 
        comments.map((c) => 
         <div>{c.content}</div> 
          : null }
      </div> */}
    </div>
  )
}

export default Comments