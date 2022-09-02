import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
// import ListsList from './ListsList'
// import CreateListForm from '../trash/CreateListForm'
// import * as React from 'react';

import { ActiveListContext } from '../../contexts/ActiveListContext';
import { UserContext } from './contexts/UserContext';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

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

    function handleCreateSubmit (event) {
      event.preventDefault()
       // if (createItem.name !== '' && createItem.details !== '')
          axios.post(`https://final-list.herokuapp.com/lists/items/${activeList}`, createItem)
          .then(res => {
            setCreateItem(initialCreateState)
            // console.log('created')
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
          label="Describe the item"
          placeholder="Details"
          multiline
          // required='true'
          value={createItem.details}
          onChange={handleCreateChange}
        />
        <TextField 
          id="priority" 
          label="Low, Medium, or High Priority" 
          variant="outlined" 
                  required='true'
          onChange={handleCreateChange}
          value={createItem.priority}
          // required='true'
          // placeholder=
          // multiline
        />
        <Button variant="contained"
        onClick={handleCreateSubmit}>
        Create Item</Button>
      </Box>

    )
}

export default CreateItem;