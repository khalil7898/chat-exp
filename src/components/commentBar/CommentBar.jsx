import React from "react";
import { TextField, IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { postComment } from "../../util/webAPIService";

import "./CommentBar.css";

export default class CommentBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSend = this.handleSend.bind(this);
  }

  handleTextChange(event) {
    this.setState({ text: event.target.value });
  }

  handleSend() {
    postComment(this.props.loginUser._id, this.state.text);
    this.setState({ text: "" });
  }

  render() {
    return (
      <div className="comment-bar">
        <TextField
          className="text-field"
          variant="outlined"
          value={this.state.text}
          placeholder="メッセージを入力"
          onChange={this.handleTextChange}
        />
        <IconButton onClick={this.handleSend}>
          <SendIcon />
        </IconButton>
      </div>
    );
  }
}
