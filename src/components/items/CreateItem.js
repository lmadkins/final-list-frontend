import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
// import ListsList from './ListsList'
// import CreateListForm from '../trash/CreateListForm'
// import * as React from 'react';
import { ActiveListContext } from '../../contexts/ActiveListContext';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
// Create a new Item
// Routes: POST to /lists/items/:listId

// ADD error handling
// https://mui.com/material-ui/react-text-field/


const CreateItem = ({ activeList,  reloadItems, setReloadItems}) => {

     // FOR ITEM CREATE FORM
      const initialCreateState = { name: '',  details: '', priority: '', }
      const [createItem, setCreateItem] = useState(initialCreateState);
   
      const handleCreateChange = (event) => {
        setCreateItem({...createItem, [event.target.id]: event.target.value})
      }
         // setItems({...Items, [event.target.id]: event.target.value})

    // console.log(activeList)
    function handleCreateSubmit (event) {
      event.preventDefault()
       // if (createItem.name !== '' && createItem.details !== '')
          axios.post(`http://localhost:8000/lists/items/${activeList}`, createItem)
          .then(res => {
            console.log('created')
            setReloadItems(true)
          })
    }  


  // ADD error handling
// https://mui.com/material-ui/react-text-field/

    return (
 
    <Box
      component="form"
      onSubmit={handleCreateSubmit}
      sx={{
        '& .MuiTextField-root': { s:1, width: '30ch' },
      }}
      noValidate
      autoComplete="off" 
     
      // onChange={handleChange}
      >
    {/* <Stack spacing={2}> */}
      <TextField 
        id="name" 
        label="Item Name" 
        variant="outlined" 
        // required='true'
        onChange={handleCreateChange}
        value={createItem.name}
        />
        <TextField
          id="details"
          label="Description the item"
          placeholder="Description"
          multiline
          // required='true'
          value={createItem.details}
          onChange={handleCreateChange}
          />
          <TextField 
        id="priority" 
        label="Low, Medium, or High Priority" 
        variant="outlined" 
        // required='true'
        // placeholder=
        // multiline
        required='true'
        onChange={handleCreateChange}
        value={createItem.priority}
        />
          <Button variant="contained"
          onClick={handleCreateSubmit}
        
        >Create Item</Button>
        {/* <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item> */}
      {/* </Stack> */}
      </Box>

    )
}

export default CreateItem;