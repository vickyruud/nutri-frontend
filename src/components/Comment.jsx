import React from "react";
import TimeAgo from 'timeago-react';

function Comment({ user, comment }) {
  return (
    <div className="flex flex-col bg-white  pl-4 pr-2 rounded-lg border border-gray-200 shadow-xl dark:bg-gray-800 dark:border-gray-700 max-w-7xl  w-5/6 mb-5">
      <div className="flex flex-row gap-4 items-center pt-5">
        <img
          className="inline object-cover w-16 h-16 mr-2 rounded-full p-2"
          src="../milo.jpg"
          alt=""
        />
        <p>username</p>
      </div>
      <div className="grid grid-cols-1 gap-16">
        <p className="pl-16 pr-5 h-5/6">{comment.value}</p>
        <p><TimeAgo datetime={comment.created_at}/></p>
        <div className="flex flex-row justify-between p-5 bottom-0">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Comment;
