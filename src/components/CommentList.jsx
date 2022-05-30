import React, { useContext } from 'react'
import { ThemeContext } from '../App'
import Comment from './Comment'

function CommentList({ comments }) {

  const { user } = useContext(ThemeContext);
  
  
  const arrayOfComments = comments.map(comment => {
    return(<Comment key={comment.id} comment={comment}/>)
  })
  



  return (
    <div className='flex flex-col bg-white w-full h-full  pl-5 pr-5 rounded-lg border border-gray-200 shadow-xl dark:bg-gray-800 dark:border-gray-700 mb-5'>{arrayOfComments}</div>
  )
}

export default CommentList