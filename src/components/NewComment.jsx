import React, { useContext, useState } from "react";
import { AppContext } from '../App';

function NewComment({ setShowModal }) {
  const { handleNewComment, user } = useContext(AppContext);

  const [newComment, setNewComment] = useState('')

  const recipe = JSON.parse(localStorage.getItem('chosenRecipe'))

  const closeModal = (event) => {
    event.preventDefault();
    setShowModal(false);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedComment = newComment.trim()
    if (trimmedComment) {      
      const newCommentObj = {
        value: trimmedComment,
        user_id:user.id,
        recipe_id:recipe.id
      }
      handleNewComment(newCommentObj);
      setShowModal(false);
    } else {
      console.log('Comment cannot be blank!')
    }
  }

  return (
    <>
      <form className="w-2/6 bg-white p-5 shadow-lg shadow-gray-700 dark:shadow-xl dark:shadow-gray-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" onSubmit={handleSubmit}>
        <label
          htmlFor="comment"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Your Comment:
        </label>
        <textarea
          id="comment"
          onChange={(event) => setNewComment(event.target.value)}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Leave a comment..."
        ></textarea>
        <div className='flex flex-row justify-between'>

        <button className="mt-2 bg-blue-500 p-2 px-4 rounded-full text-white font-semibold transition-all hover:bg-green-800">
          Save
        </button>
        <button onClick={closeModal} className="mt-2 bg-blue-500 p-2 px-4 rounded-full text-white font-semibold transition-all hover:bg-green-800">
          Cancel
        </button>
        </div>
      </form>
    </>
  );
}

export default NewComment;
