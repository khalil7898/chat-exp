import React, { useState } from "react";
import "./styles.css";

import LoginDialog from "./components/loginDialog/LoginDialog";
import ChatView from "./components/chatView/ChatView";

export default function App() {
  const [loginUser, setLoginUser] = useState(null);
  const [showDialog, setShowDialog] = useState(true);

  return (
    <div className="App">
      <h1>This is the Simplest React Chat App</h1>
      <ChatView loginUser={loginUser} />
      <LoginDialog
        open={showDialog}
        closeDialog={() => setShowDialog(false)}
        setLoginUser={setLoginUser}
      />
    </div>
  );
}
