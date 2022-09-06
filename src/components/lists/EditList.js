import { useState } from 'react'
// import { ActiveListContext } from '../../contexts/ActiveListContext';
// import { UserContext } from '../../contexts/UserContext';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const EditList = ({id, name, details, handleChange, handleSubmit, listChanges, setListChanges}) => {
  // Patch req, state, and methods are in ListItems parent component

  // Modal controls 
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
  <>  
    <Tooltip title="Edit List" arrow>
      <IconButton edge="end" aria-label="edit"  id={id}  onClick={handleClickOpen}>
        <EditIcon/>
      </IconButton>
    </Tooltip>
    <Dialog 
      open={open} 
      onClose={handleClose}
      onSubmit={handleSubmit}
    >
        <DialogTitle>Edit List</DialogTitle>
        <DialogContent>

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            onChange={handleChange}
            fullWidth
            variant="standard"
            value={listChanges.name}
            placeholder={name}
          />
          <TextField
            // autoFocus
            margin="dense"
            id="details"
            label="Details"
            onChange={handleChange}
            // type="email"
            fullWidth
            variant="standard"
            value={listChanges.details}
            placeholder={details}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type='submit' onClick={handleSubmit} >Save Changes</Button>
        </DialogActions>
      </Dialog>
  </>
  )
};

export default EditList;