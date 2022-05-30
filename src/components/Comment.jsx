import React, { useContext } from "react";
import TimeAgo from "timeago-react";
import Avatar from "avataaars";
import { generateRandomAvatarOptions } from "../helpers/avatars";
import { ThemeContext } from "../App";

function Comment({ comment }) {
  const allUsers = JSON.parse(localStorage.getItem("users"));

  const username = allUsers.map((user) => {
    if (user.id === comment.user_id) {
      return user.username;
    }
  });

  const { handleDeleteComment } = useContext(ThemeContext)


  return (
    <div className="flex flex-col bg-white w-full   pl-5 pr-5 pb-5 mb-5 border border-gray-800 dark:bg-gray-800 dark:border-gray-300 mt-5">
      <div className="flex flex-row gap-4 items-center pt-5 w-full">
        <Avatar
          style={{ padding: 3, width: "75px", height: "75px" }}
          avatarStyle="Circle"
          {...generateRandomAvatarOptions()}
        />
        <p className="capitalize">{username}</p>
      </div>
      <div className="grid grid-cols-1 gap-16">
        <p className=" p-5 h-fit w-fit">{comment.value}</p>
        <p className=" flex flex-col pl-5 pt-2 border-t-4 justify-end">
          <TimeAgo datetime={comment.created_at} />
        </p>
        <div className="flex flex-row justify-between p-5  bottom-0 border border-gray-800">
          <button className="mt-2 bg-blue-500 p-2 px-4 rounded-full font-semibold transition-all hover:bg-green-800">
            Edit
          </button>
          <button
            className="mt-2 bg-red-500 p-2 px-4 rounded-full font-semibold transition-all hover:bg-green-800"
            onClick={() => handleDeleteComment(comment.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Comment;
