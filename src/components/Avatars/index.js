import React from "react";

function Avatars({ selectAvatar }) {
  const avatars = [];
  for (let i = 1; i <= 16; i++) {
    const path = `../pictures/avatar-${i}.png`;
    avatars.push(path);
  }

  function renderAvatars(avatar, index) {
    return (
      <li className="avatar" key={index}>
        <img src={avatar} alt={`Avatar ${index}`} onClick={selectAvatar} />
      </li>
    );
  }

  return (
    <ul className="avatar-list">
      {avatars.map((avatar, index) => renderAvatars(avatar, index))}
    </ul>
  );
}

export default Avatars;
