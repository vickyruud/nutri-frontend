import React from 'react'
import Comment from './Comment'

function CommentList({ comments }) {


  
  
  const arrayOfComments = comments.map(comment => {
    return(<Comment key={comment.id} comment={comment} />)
  })
  



  return (
    <div className='flex flex-col items-center gap-4 w-3/6'>
      <button className="mt-2 bg-blue-500 p-2 px-4 rounded-full text-white font-semibold transition-all hover:bg-green-800">Add Comment</button>
      <div className='flex flex-col bg-white w-full h-full  pl-5 pr-5 rounded-lg border border-gray-200 shadow-xl dark:bg-gray-800 dark:border-gray-700 mb-5'>{arrayOfComments}</div>
    </div>
  )
}

export default CommentList