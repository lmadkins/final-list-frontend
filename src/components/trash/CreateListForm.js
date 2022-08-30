import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
// import ListsList from './ListsList'
// import CreateListForm from './CreateListForm'
// import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';

// form to create a new list



const CreateListForm = ({handleChange, handleSubmit, createList, setCreateList, formState}) => {
  

    return (
    <>
    
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off" 
      onSubmit={handleSubmit}
      // onChange={handleChange}
      >
      
      <TextField 
        id="name" 
        label="List Name" 
        variant="outlined" 
        // required='true'
        onChange={handleChange}
        value={createList.name}
        />
        <TextField
          id="description"
          label="List Description"
          placeholder="Description"
          multiline
          // required='true'
          value={createList.description}
          onChange={handleChange}
          />

        {/* Once have item and task types added */}
        {/* <FormControl>
  <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
  <RadioGroup
    aria-labelledby="demo-controlled-radio-buttons-group"
    name="controlled-radio-buttons-group"
    value={value}
    onChange={handleChange}
  >
    <FormControlLabel value="task" control={<Radio />} label="Task" />
    <FormControlLabel value="item" control={<Radio />} label="Item" />
  </RadioGroup>
</FormControl> */}
    <Button variant="contained"
    onClick={handleSubmit}
    >Create List</Button>
    </Box>

    </>
    )
}

export default CreateListForm;