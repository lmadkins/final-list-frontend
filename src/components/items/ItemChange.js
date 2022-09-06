import { useContext, useEffect, useState } from 'react'
import { ActiveListContext } from '../../contexts/ActiveListContext';
import axios from 'axios'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
// import IconButton from '@mui/material/IconButton';
// import Tooltip from '@mui/material/Tooltip';

const ChangeItem = ({id}) => {

      // Edit modal controls    
    const [open, setOpen] = useState(false);
    const handleOpenEdit = () => { setOpen(true); };
    const handleCloseEdit = () => { setOpen(false); };
  // Edit form 
  const initialFormState = { name: '',  details: '', priority: '', }

  const [itemChanges, setItemChanges] = useState(initialFormState);

  const handleItemChange = (event) => {
    setItemChanges({ ...itemChanges, [event.target.id]: event.target.value });
    // console.log(event.target.value)
  }

  console.log(id.name)
  const handleEditSubmit = (event) => {
    event.preventDefault();
      axios.patch(`https://final-list.herokuapp.com/lists/${id}`, itemChanges)
      .then(() => {
        // setReloadItems(true)
        handleCloseEdit()
      })
    }

  return (
    <>
    <Tooltip title="Edit Item" arrow>
    <IconButton edge="end" aria-label="Edit Item" onClick={handleOpenEdit}>
          <EditIcon
          /> 
        </IconButton>
      </Tooltip>
  
    <Dialog 
        onClose={handleCloseEdit}
        open={open}
        noValidate
        autoComplete="off" >

      <IconButton
        aria-label="close"
        onClick={handleCloseEdit}
        sx={{
          position: 'absolute', right: 8, top: 8,
          color: (theme) => theme.palette.grey[500],}}>
        <CloseIcon />
      </IconButton>
      <DialogTitle>Edit {id.name}</DialogTitle>
      <DialogContent >
      <TextField 
        id="name" 
        label="Item Name" 
        variant="outlined" 
        margin="dense"
        fullWidth
        defaultValue={id.name}
        onChange={handleItemChange}
        value={itemChanges.name}
        />
        <TextField
          id="details"
          label="Describe the item"
          placeholder="Description"
          margin="dense"
          multiline
          fullWidth
          defaultValue={id.details}
          // required={true}
          value={itemChanges.details}
          onChange={handleItemChange}
          />
          <TextField 
          id="priority" 
          label="Low, Medium, or High Priority" 
          variant="outlined" 
          margin="dense"
          fullWidth
          defaultValue={id.priority}
          onChange={handleItemChange}
          value={itemChanges.priority}
          />
          {/* </form> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEdit}>Cancel</Button>
          <Button variant="contained"
          onClick={handleEditSubmit}
        >Submit Changes</Button>
        </DialogActions>
      </Dialog>
    </>
  )
};

export default ChangeItem;