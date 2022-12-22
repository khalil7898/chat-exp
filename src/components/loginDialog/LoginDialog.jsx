import React, { useState } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button
} from "@material-ui/core";

import { postUser } from "../../util/webAPIService";

export default function LoginUser(props) {
  const { open, closeDialog, setLoginUser } = props;
  const [name, setName] = useState("");

  const handleLogin = async () => {
    const res = await postUser(name);
    setLoginUser({
      _id: res.data._id,
      name: name
    });
    closeDialog();
  };

  return (
    <Dialog open={open} onClose={closeDialog}>
      <DialogTitle>Welcom</DialogTitle>
      <DialogContent>
        <TextField
          placeholder="ユーザー名"
          value={name}
          onChange={event => setName(event.target.value)}
          variant="outlined"
        />
      </DialogContent>
      <DialogActions>
        <Button
          disabled={!Boolean(name)}
          color="primary"
          variant="contained"
          onClick={handleLogin}
        >
          Login
        </Button>
      </DialogActions>
    </Dialog>
  );
}
