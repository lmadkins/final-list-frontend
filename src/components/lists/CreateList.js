import {  useContext, useState } from 'react'
import axios from 'axios'
import { UserContext } from '../../contexts/UserContext';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// ADD error handling
// https://mui.com/material-ui/react-text-field/


const CreateListForm = ({ reloadLists, setReloadLists}) => {

     // FOR LIST CREATE FORM
       // const [formState, setFormState] = useState(initialState);
      const initialCreateState = { name: '',  details: '' }
      const [createList, setCreateList] = useState(initialCreateState);

      const handleCreateChange = (event) => {
        setCreateList({...createList, [event.target.id]: event.target.value})
      }
    function handleCreateSubmit (event) {
      event.preventDefault()
       // if (createList.name !== '' && createList.details !== '')
          axios.post('https://final-list.herokuapp.com/lists', createList)
          .then(res => {

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
        label="List Name" 
        variant="outlined" 
        margin="dense"
        fullWidth
        // required='true'
        onChange={handleCreateChange}
        value={createList.name}
        />
        <TextField
          id="details"
          label="List Description"
          placeholder="Description"
          multiline
          margin="dense"
          fullWidth
          // required='true'
          value={createList.details}
          onChange={handleCreateChange}
          />
          <Button variant="contained"
          onClick={handleCreateSubmit}
          >Create List</Button>
      </Stack>
      </Box>
    )
}

export default CreateListForm;