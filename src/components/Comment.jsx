import React from "react";
import TimeAgo from "timeago-react";

function Comment({ comment }) {

  return (
    <div className="flex flex-col bg-white w-full h-fit  pl-5 pr-5 pb-5 mb-5 border border-gray-800 mt-5">
      <div className="flex flex-row gap-4 items-center pt-5 w-full">
        <img
          className="inline object-cover w-16 h-16 mr-2 rounded-full p-2"
          src="../milo.jpg"
          alt=""
        />
        <p>username</p>
      </div>
      <div className="grid grid-cols-1 gap-16">
        <p className=" p-5 w-full">{comment.value}</p>
        <p className=" flex flex-col pl-5 pt-2 border-t-4 justify-end">
          <TimeAgo datetime={comment.created_at} />
        </p>
        <div className="flex flex-row justify-between p-5  bottom-0 border border-gray-800">
          <button>Edit</button>
          <button>Delete</button>
        </div>        
      </div>      
    </div>
  );
}

export default Comment;
