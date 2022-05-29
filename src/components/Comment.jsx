import React from "react";

function Comment({ user }) {
  return (
    <div className="flex flex-col bg-white w-3/6 pl-4 pr-2 rounded-lg border border-gray-200 shadow-xl dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-row gap-4 items-center">
        <img
          className="inline object-cover w-16 h-16 mr-2 rounded-full p-2"
          src="../milo.jpg"
          alt=""
        />
        <p>username</p>
      </div>
      <p>Comment goes here!</p>
    </div>
  );
}

export default Comment;
