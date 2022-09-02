import React, { useState, useContext } from 'react';
// import { Link, useParams, Route, Routes, useNavigate } from 'react-router-dom'

import { ActiveListContext } from '../../contexts/ActiveListContext';
import { UserContext } from '../../contexts/UserContext';

import GradingIcon from '@mui/icons-material/Grading';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Avatar from '@mui/material/Avatar';
import axios from 'axios';
// import Grid from '@mui/material/Grid';
import EditList from './EditList'
import DeleteList from './DeleteList';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import CheckBoxIcon from '@mui/icons-material/CheckBox';
// import FolderIcon from '@mui/icons-material/Folder';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
// import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


// component for each individual list in the Lists List

const ListsListing = ({ props, name, id, details, handleClick, lists, list, reloadLists, setReloadLists}) => {
  // const { currentUser, setCurrentUser } = useContext(UserContext)
  const { activeList, setActiveList, listSelected, setListSelected } = useContext(ActiveListContext)
  // const [activeList, setActiveList] = useState()
// console.log(id)

// const navigate = useNavigate()
  function generate(element) {
    return [0].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }
  const handleListClick = (event) => {
    setListSelected(true)
    setActiveList(event.target.id)
    console.log(`Handleclick in ListsListing: New active list is: ${activeList}`)
  }

  // Edit state and edit modal
  const initialFormState = { name: '',  details: '' }
  const [listChanges, setListChanges] = useState(initialFormState);

  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  const handleListChange = (event) => {
    setListChanges({ ...listChanges, [event.target.id]: event.target.value });
    console.log(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
      axios.patch(`https://radiant-sierra-50882.herokuapp.com/lists/${id}`, listChanges)
      .then(() => {
        setReloadLists(true)
        handleClose()
      })
    }
  // Edit modal controls    
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => { setOpen(true); };
    const handleClose = () => { setOpen(false); };


  return (
  <>
  
    {generate(
      <>
      <List dense={dense}
          id={id}
          onClick={handleListClick}>
            {generate(
              <ListItem
                onClick={handleListClick}
                secondaryAction={
                  <>
                    <IconButton edge="end" aria-label="edit"  id={id} 
                      onClick={handleClickOpen}
                      open={open} onClose={handleClose}
                      >
                      <EditIcon/>  
                      <EditList id={id} name={name}/>
                    </IconButton>
                    <IconButton edge="end" aria-label="delete" id={id}>
                      <DeleteList  id={id} name={name}/>  
                    </IconButton> 
                  </>
                }>
                <ListItemButton  id={id}
                onClick={handleListClick}>
                <ListItemAvatar>
                  <Avatar>
                  <GradingIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={name}
                  secondary={details}
                />
                </ListItemButton>
              </ListItem>
            )}
        </List>
      <Divider />
      <Dialog open={open} onClose={handleClose}
        component="form"
      //  sx={{
      //    '& .MuiTextField-root': { s:1, width: '30ch' },}}
        noValidate
        autoComplete="off" 
        onSubmit={handleSubmit}
        >
      <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
          
        >
          <CloseIcon />
        </IconButton>
        <DialogTitle>Edit List: {name}</DialogTitle>
        <DialogContent
        onChange={handleListChange}
        >
          {/* <DialogContentText>
          </DialogContentText> */}
          <br></br>
          <TextField
            // autoFocus
            // margin="dense"
            // id="name"
                         // type="text"
            // variant="standard"
            // onChange={handleListChange}
            // label="Outlined" 
            id="name" 
            variant="outlined"
            label= "List Name"
            margin="dense"
            fullWidth
            value={initialFormState.name}

          />
          <p></p>
          <TextField
            id="details"
            label="Description"
            margin="dense"
            fullWidth
            variant="outlined"
            value={initialFormState.details}
            // multiline
            // rows={2}
            // type="text"
            // fullWidth
            // defaultValue="New List Description"
            // onChange={handleListChange}
        />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Save Changes</Button>
        </DialogActions>
      </Dialog>
      </>
    )}
  </>
  )
};

export default ListsListing;
