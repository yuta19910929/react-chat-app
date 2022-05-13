import { useState, useEffect, useContext } from 'react';
import { Input, TextField, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { AdminFlagContext } from "./providers/AdminFlagProvider";

const AlertBox = () => {
  const { modal, setModal } = useContext(AdminFlagContext);
  const handleClose = () => {
    setModal(false);
  };

  return (
    <div>
      <Dialog
        open={modal}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          color="Black"
          sx={{ mt:3 }}>
          {"パスワードが違います"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            許可された方のみログインできます。<br />
            管理者へお問合せください。
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>閉じる</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AlertBox;
