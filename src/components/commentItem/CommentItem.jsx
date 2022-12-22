import React from "react";

import "./CommentItem.css";

export default function CommentItem(props) {
  const postedBy = props.postedBy;
  const content = props.content;
  const postedDate = props.postedDate;

  return (
    <div className="comment-item">
      <div>{postedBy.name}</div>
      <span>{content}</span>
      <sub>{postedDate}</sub>
    </div>
  );
}
