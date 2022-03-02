import React from "react";
import "./messages.css";
import { convertUnixTimestamp } from "../../utilities/helpers";

export default function Messages({ messages, thisMember }) {
  function renderMessage(message, index) {
    const { member, data, timestamp, id } = message;
    const thisMemberMsg = member.id === thisMember.id;
    const classNameLi = thisMemberMsg
      ? "msg-list__msg msg-list__msg--thisMember"
      : "msg-list__msg";

    const classNameMemberData = thisMemberMsg
      ? "msg-list__member-data msg-list__member-data--thisMember"
      : "msg-list__member-data";

    return document.getElementsByClassName("msg-list")[0].children[index - 1] &&
      document.getElementsByClassName("msg-list")[0].children[index - 1].dataset
        .id === member.id ? (
      <li className={classNameLi} key={id} data-id={member.id}>
        <div className="msg-list__text" title={convertUnixTimestamp(timestamp)}>
          {data}
        </div>
      </li>
    ) : (
      <li className={classNameLi} key={id} data-id={member.id}>
        <div className="msg-list__msg-container">
          <div className={classNameMemberData}>
            <img
              className="msg-list__avatar"
              src={member.clientData.avatar}
              alt="user-avatar"
            />
            <span className="msg-list__username">
              {member.clientData.username}
            </span>
          </div>
          <div
            className="msg-list__text"
            title={convertUnixTimestamp(timestamp)}
          >
            {data}
          </div>
        </div>
      </li>
    );
  }

  return (
    <ul className="msg-list">
      {messages.map((m, index) => renderMessage(m, index))}
    </ul>
  );
}
