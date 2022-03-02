import React, { useState } from "react";
import "./registration.css";
import Avatars from "../Avatars";

function Registration({ handleRegFormSubmit }) {
  const [avatar, setAvatar] = useState("");
  const [username, setUsername] = useState("");

  const selectAvatar = (e) => {
    setAvatar(e.target.src);
    Array.from(e.target.closest("ul").children).forEach(function (element) {
      element.className = "avatar";
    });
    e.target.closest("li").className =
      "avatar avatar-clicked";
  };

  const getUsername = (e) => {
    setUsername(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (avatar === "") {
      const icon = document.getElementsByClassName("avatar");
      Array.from(icon).map((element) =>
        (function () {
          element.className = "avatar avatar-not-selected";
          setTimeout(() => {
            element.className = "avatar";
          }, 800);
        })()
      );
    } else handleRegFormSubmit(username, avatar);
  };

  return (
    <div className="form-container">
      <form className="form-reg" onSubmit={submitForm}>
      <div className="header-logo">MyCh@tApp</div><br></br>
        <input
          className="form-input"
          type="text"
          placeholder="Enter name..."
          required
          onChange={getUsername}
        />
        <span>CHOOSE YOUR AVATAR</span>
        <br></br>
        {<Avatars selectAvatar={selectAvatar} />}
        <button className="form-btn" type="submit">
          Start chat
        </button>
      </form>
    </div>
  );
}

export default Registration;
