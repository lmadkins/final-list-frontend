import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
// import ListsList from './ListsList'
import CreateListForm from './CreateListForm'
// import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


// create a new list

// ADD error handling
// https://mui.com/material-ui/react-text-field/


const CreateList = ({lists, setLists}) => {
  const initialState = { name: '',  description: '' }
// console.log(lists)
  const [formState, setFormState] = useState(initialState);

    const [createList, setCreateList] = useState(initialState);
  // const [newList, setNewList] = useState();

  const handleChange = (event) => {
    setCreateList({...createList, [event.target.id]: event.target.value})
    // setLists({...lists, [event.target.id]: event.target.value})
}

function handleSubmit (event) {
  event.preventDefault()
  // if (createList.name !== '' && createList.details !== '')
      axios.post('http://localhost:8000/lists/new', createList)
      .then(res => {

          // console.log(formState)
          // console.log(newList)
          // console.log(res.data.email)
          // console.log(formState.password)
    
      })
      .then(() => {
          // setNewList(initialState)
          // console.log(currentUser)
      })
      // .catch(err => {
      //     // setError("Provided email or password is incorrect.")
      //     console.log(err)
      // })
  } 
  // const { newList, setNewList } = useContext(UserContext)

    return (
    <>
    <CreateListForm 
    onSubmit={handleSubmit}
    onChange={handleChange}
    createList={createList}
    formState={formState}
    // lists={lists}
    />

    </>
    )
}

export default CreateList;