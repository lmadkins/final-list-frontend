import React, { useEffect, useState, useContext } from 'react';
import { Link, useParams, Route, Routes, useNavigate } from 'react-router-dom'
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
import { ActiveListContext } from '../../contexts/ActiveListContext';
import { UserContext } from '../../contexts/UserContext';


import GradingIcon from '@mui/icons-material/Grading';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import axios from 'axios';
// import Grid from '@mui/material/Grid';
import EditList from './EditList'
import DeleteList from './DeleteList';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import EditIcon from '@mui/icons-material/Edit';
// import IconButton from '@mui/material/IconButton';
// Editable from Chakra:
// import { EditablePreview, Box, useColorModeValue, Input, useDisclosure, useEditableControls, ButtonGroup, SlideFade, Editable, Tooltip, EditableTextarea, EditableInput } from "@chakra-ui/react";
// import {
//   Editable,
//   EditableInput,
//   EditableTextarea,
//   EditablePreview,
// } from '@chakra-ui/react'
// import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
// import { Icon } from '@chakra-ui/react'
// import { Flex, Spacer } from '@chakra-ui/react'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CloseIcon from '@mui/icons-material/Close';
// import DoneIcon from '@mui/icons-material/Done';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack';
// export const ActiveListContext = createContext()

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
  // const [listChanges, setListChanges] = useState({
  //   name: '',
  //   details: ''
  // });

  const handleListChange = (event) => {
    setListChanges({ ...listChanges, [event.target.id]: event.target.value });
    console.log(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
      axios.patch(`http://localhost:8000/lists/${id}`, listChanges)
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
    
      <ul>
        <li onClick={handleListClick} id={id}>{name}</li>
      </ul>
      {/*  */}
      <span 
      onClick={handleListClick}
        id={id}>
        <ListItemButton  id={id}>
          <ListItemAvatar 
          onClick={handleListClick}
          >
            <Avatar> <GradingIcon /> </Avatar>
          </ListItemAvatar>
        <ListItemText primary={name} secondary={details} 
        onClick={handleListClick}
        />
        <ListItemText />   
        </ListItemButton>

        {/* Edit and Delete list controls */}
          </span>     
        
  
          <IconButton edge="end" aria-label="edit"  id={id} 
          // onClick={handleListClick}
          onClick={handleClickOpen}
          open={open} onClose={handleClose}
          >
            <EditIcon/>  
            <EditList id={id} name={name}/>
        </IconButton>
        <IconButton edge="end" aria-label="delete"  id={id}>
          <DeleteList  id={id} name={name}/>  
        </IconButton> 
      
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
          <DialogContentText>
            {/* To subscribe to this website, please enter your email address here. We
            will send updates occasionally. */}
          </DialogContentText>
          <br></br>
          <TextField
            // autoFocus
            // margin="dense"
            // id="name"
            id="outlined-basic" 
            // label="Outlined" 
            variant="outlined"
            label= "List Name"
            margin="dense"
            // type="text"
            fullWidth
            value={initialFormState.name}
            // variant="standard"
            // onChange={handleListChange}
          />
          <p></p>
          <TextField
            
            id="outlined-basic"
            label="Description"
            margin="dense"
            fullWidth
            // multiline
            // rows={2}
            // type="text"
            variant="outlined"
            // fullWidth
            // defaultValue="New List Description"
            value={initialFormState.details}
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

// const ItemIdContext = createContext()
  // const [paramsId, setParamsId] = useState()

  // const handleClick = (event) => {
  //   // setActiveList(this.id)
 
  //   // console.log(event.target.id)
  //   // setParamsId(event.target.id)
  //   // console.log(paramsId)
  // }
    // navigate(`/items/${id}`)
    // navigate(`items/${id}`)

  //   useEffect(() => {
  //     axios.get(`http://localhost:8000/album/${albumId}`)
  //         .then(res =>
  //             setAlbum(res.data))
  // }, [NotListedLocationOutlined])

  // // button to delete the list
  // const handleDelete = () => {
  //   axios.delete(`http://localhost:8000/lists/:id`)
  //       .then(res => {
  //   // put some message here to display that it's been deleted?
  //           navigate('/lists');
  //       })	
  // };
