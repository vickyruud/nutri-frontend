import React, { useContext } from 'react'
import { ThemeContext } from '../App'
import Comment from './Comment'

function CommentList({ comments }) {

  const { user } = useContext(ThemeContext);
  
  
  const arrayOfComments = comments.map(comment => {
    return(<Comment key={comment.id} comment={comment}/>)
  })
  



  return (
    <div>{arrayOfComments}</div>
  )
}

export default CommentList