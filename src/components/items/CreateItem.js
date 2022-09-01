import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
// import ListsList from './ListsList'
// import CreateListForm from '../trash/CreateListForm'
// import * as React from 'react';
import { ActiveListContext } from '../../contexts/ActiveListContext';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


// Create a new Item
// Routes: POST to /lists/items/:listId

// ADD error handling
// https://mui.com/material-ui/react-text-field/


const CreateItem = ({activeList}) => {

     // FOR ITEM CREATE FORM
// console.log(activeList)
      const initialCreateState = { name: '',  details: '', priority: '', }
      const [createItem, setCreateItem] = useState(initialCreateState);
   
      const handleCreateChange = (event) => {
        setCreateItem({...createItem, [event.target.id]: event.target.value})
      }
         // setItems({...Items, [event.target.id]: event.target.value})
     
    function handleCreateSubmit (event) {
      event.preventDefault()
       // if (createItem.name !== '' && createItem.details !== '')
          axios.post(`http://localhost:8000/lists/items/${activeList}`, createItem)
          .then(res => {
            console.log('created')
          })
    }  


  // ADD error handling
// https://mui.com/material-ui/react-text-field/

    return (
 
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { s:1, width: '30ch' },
      }}
      noValidate
      autoComplete="off" 
      onSubmit={handleCreateSubmit}
      // onChange={handleChange}
      >
    <Stack spacing={2}>
      <TextField 
        id="name" 
        label="Item Name" 
        variant="outlined" 
        // required='true'
        onChange={handleCreateChange}
        // value={createItem.name}
        />
        <TextField
          id="details"
          label="Item Description"
          placeholder="Description"
          multiline
          // required='true'
          // value={createItem.details}
          onChange={handleCreateChange}
          />
          <Button variant="contained"
          onClick={handleCreateSubmit}
      >Create Item</Button>
        {/* <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item> */}
      </Stack>
      </Box>

    )
}

export default CreateItem;