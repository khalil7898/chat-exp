import React, { useState, useEffect } from "react";
import { List } from "@material-ui/core";

import CommentBar from "../commentBar/CommentBar";
import CommentItem from "../commentItem/CommentItem";

import { getAllUsers, getAllComments } from "../../util/webAPIService";

import "./ChatView.css";

export default function ChatView(props) {
  const { loginUser } = props;
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const allUsers = await getAllUsers();
      const allComments = await getAllComments();
      setUsers(allUsers);
      setComments(allComments);
    }
    if (loginUser === null) {
      return;
    }
    const intervalId = setInterval(fetchData, 1000);
    fetchData();
    return function() {
      clearInterval(intervalId);
    };
  }, [loginUser]);

  return (
    <div className="chat-view">
      <div className="content">
        <List className="comment-list">
          {comments.map(function(comment) {
            const postedBy = users.find(user => user._id === comment.postedBy);

            return (
              <CommentItem
                key={comment._id}
                postedBy={postedBy}
                content={comment.content}
              />
            );
          })}
        </List>
      </div>
      <CommentBar loginUser={loginUser} />
    </div>
  );
}
