import React, { useContext } from 'react'
import { AppContext } from '../App';
import Comment from './Comment'

function CommentList({ comments, recipe }) {

  const { setModalType, setShowModal, user } = useContext(AppContext)

  const allUsers = JSON.parse(localStorage.getItem("users"));

  
  const recipeAuthor = allUsers.filter(user => {
    if (user.id === recipe.user_id) {
      return user;
    } else {
      return null
    }
  })


    const showNewComment = () => {
    setModalType('new-comment');
    setShowModal(true);
  }
  
  const arrayOfComments = comments.map(comment => {
    return(<Comment recipeAuthor={recipeAuthor} key={comment.id} comment={comment} />)
  })
  



  return (
    <div className='flex flex-col items-center gap-4 w-3/6'>
      {user && <button
        className="mt-2 bg-blue-500 p-2 px-4 rounded-full text-white font-semibold transition-all hover:bg-green-800"
        onClick={showNewComment}
      >Add Comment</button> }
      {arrayOfComments.length > 0 ? <div className='flex flex-col bg-white w-full h-full  pl-5 pr-5 rounded-lg border border-gray-200 shadow-xl dark:bg-gray-800 dark:border-gray-700 mb-5'>{arrayOfComments.reverse()}</div> : <p className='bg-white w-full h-full  pl-5 pr-5 rounded-lg border border-gray-200 shadow-xl dark:bg-gray-800 dark:border-gray-700 mb-5 p-5'>{user ? "Be the first to leave a comment!" : "Please login or register to comment!"}</p>}
      
    </div>
  )
}

export default CommentList