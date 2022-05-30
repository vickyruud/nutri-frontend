import React from 'react';
import Avatar from "avataaars";
import { generateRandomAvatarOptions } from "../helpers/avatars";

function AvatarImage() {
  return (
     <Avatar
          style={{ padding: 3, width: "75px", height: "75px" }}
          avatarStyle="Circle"
          {...generateRandomAvatarOptions()}
        />
  )
}

export default AvatarImage