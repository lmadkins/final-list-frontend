import { Routes, Route, useNavigate } from 'react-router-dom'
import React, { createContext, useState } from 'react';
import { styled } from '@mui/material/styles';
import axios from 'axios'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import ItemsList
 from '../items/ItemsList';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Dashboard2 = () => {
  const initialCreateState = { name: '',  description: '' }
  const [createList, setCreateList] = useState(initialCreateState);

  const handleCreateChange = (event) => {
    setCreateList({...createList, [event.target.id]: event.target.value})
  }
  function handleCreateSubmit (event) {
    event.preventDefault()
     // if (createList.name !== '' && createList.details !== '')
        axios.post('http://localhost:8000/lists', createList)
        .then(res => {

        })
  }  

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={3}>
      <Grid item xs>
        <Item>   
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
          id="description"
          label="List Description"
          placeholder="Description"
          multiline
          // required='true'
          value={createList.description}
          onChange={handleCreateChange}
          />
          <Button variant="contained"
          onClick={handleCreateSubmit}
      >Create List</Button>
        {/* <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item> */}
      </Stack>
      </Box></Item>
      </Grid>
      <Grid item xs={6}>
        <Item><ItemsList /></Item>
      </Grid>
      <Grid item xs>
        <Item>xs</Item>
      </Grid>
    </Grid>
  </Box>
  </>
  )
};

export default Dashboard2;