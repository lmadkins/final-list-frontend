import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
// import ListsList from './ListsList'
// import CreateListForm from '../trash/CreateListForm'
// import * as React from 'react';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


// create a new list

// ADD error handling
// https://mui.com/material-ui/react-text-field/


const CreateListForm = () => {

     // FOR LIST CREATE FORM
     
     // console.log(lists)
       // const [formState, setFormState] = useState(initialState);
      const initialCreateState = { name: '',  details: '' }
      const [createList, setCreateList] = useState(initialCreateState);
   
      const handleCreateChange = (event) => {
        setCreateList({...createList, [event.target.id]: event.target.value})
      }
         // setLists({...lists, [event.target.id]: event.target.value})
     
    function handleCreateSubmit (event) {
      event.preventDefault()
       // if (createList.name !== '' && createList.details !== '')
          axios.post('http://localhost:8000/lists', createList)
          .then(res => {

          })
    }  
  //   const initialState = { name: '',  description: '' }
// // console.log(lists)
//   const [formState, setFormState] = useState(initialState);

    // const [createList, setCreateList] = useState(initialState);
  // const [newList, setNewList] = useState();

//   const handleChange = (event) => {
//     setCreateList({...createList, [event.target.id]: event.target.value})
//     // setLists({...lists, [event.target.id]: event.target.value})
// }

// function handleSubmit (event) {
//   event.preventDefault()
//   // if (createList.name !== '' && createList.details !== '')
//       axios.post('http://localhost:8000/lists/new', createList)
//       .then(res => {

//           // console.log(formState)
//           // console.log(newList)
//           // console.log(res.data.email)
//           // console.log(formState.password)
    
//       })
//     } 
      // .then(() => {
      //     // setNewList(initialState)
      //     // console.log(currentUser)
      // })
      // .catch(err => {
      //     // setError("Provided email or password is incorrect.")
      //     console.log(err)
      // })

  // const { newList, setNewList } = useContext(UserContext)

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
        label="List Name" 
        variant="outlined" 
        // required='true'
        onChange={handleCreateChange}
        value={createList.name}
        />
        <TextField
          id="details"
          label="List Description"
          placeholder="Description"
          multiline
          // required='true'
          value={createList.details}
          onChange={handleCreateChange}
          />
          <Button variant="contained"
          onClick={handleCreateSubmit}
      >Create List</Button>
        {/* <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item> */}
      </Stack>
      </Box>

    )
}

export default CreateListForm;