import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useState } from 'react';

const DisclaimerDialog = () => {
  const [open, setOpen] = useState(true);

  const closeHandler = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={closeHandler}>
      <DialogTitle>Hello... world?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Welcome to my web based IDE. Please keep in mind this is a in progress pet project that's why some things wont be optimal as in a production environment. The purpose is to practice and have fun during my free time. Thanks! 
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={closeHandler}>Give it a try</Button>
      </DialogActions>
    </Dialog>
  )
};

export default DisclaimerDialog;