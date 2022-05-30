import React, { useContext } from "react";
import TimeAgo from 'react-timeago'
import { ThemeContext } from "../App";
import AvatarImage from "./AvatarImage";

function Comment({ comment }) {
  const allUsers = JSON.parse(localStorage.getItem("users"));

  const username = allUsers.map((user) => {
    if (user.id === comment.user_id) {
      return user.username;
    } else {
      return null
    }
  });

  const { handleDeleteComment } = useContext(ThemeContext)


  return (
          
    <div className="flex flex-col bg-white w-full   pl-5 pr-5 pb-5 mb-5 border border-gray-800 dark:bg-gray-800 dark:border-gray-300 mt-5">
      <div className="flex flex-row gap-4 items-center pt-5 w-full">
       <AvatarImage/>
        <p className="capitalize">{username}</p>
      </div>
      <div className="grid grid-cols-1 gap-4">
        <p className=" pt-5 pl-5 h-fit w-fit">{comment.value}</p>
        <p className=" flex flex-col pl-5 pt-2 border-t-4 justify-end">
          <TimeAgo date={comment.created_at} />
        </p>
          <button
            className="mt-2 bg-red-500 p-2 rounded-full font-semibold text-white transition-all hover:bg-green-800 w-fit"
            onClick={() => handleDeleteComment(comment.id)}
          >
            Delete
          </button>
      </div>
    </div>            
  );
}

export default Comment;
