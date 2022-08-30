import { Routes, Route, useNavigate } from 'react-router-dom'
import axios from 'axios';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ListsListing from './ListsList'
import React, {  createContext , useState, useEffect } from 'react';
import CreateList from './CreateList'

// export const ActiveListContext = createContext()
const Dashboard = () => {
    // SET STATE FOR CONTEXT
    // const [activeList, setActiveList] = useState({
    //   listId: '',
    //   listName: '',
    //   listDetails: '',
    //   listType: '',
    // })


    const [listId, setListId] = useState([])

// FOR RENDERING LISTS LIST
const [lists, setLists] = useState([])
  
useEffect(() => {
  axios.get(`http://localhost:8000/lists/all`)
  .then(res => setLists(res.data))
},[lists])

    function generate(element) {
      return [0].map((value) =>
        React.cloneElement(element, {
          key: value,
        }),
      );
    }

    const handleClick = (event) => {
      setListId(event.target.id)
      console.log(event.target.id)
      // navigate(`items/${listId}`)
    }

     // FOR LIST CREATE FORM
  const initialState = { name: '',  description: '' }
  // console.log(lists)
    // const [formState, setFormState] = useState(initialState);
    const [createList, setCreateList] = useState(initialState);

    const handleCreateChange = (event) => {
      setCreateList({...createList, [event.target.id]: event.target.value})
      // setLists({...lists, [event.target.id]: event.target.value})
  }
  function handleCreateSubmit (event) {
    event.preventDefault()
    // if (createList.name !== '' && createList.details !== '')
        axios.post('http://localhost:8000/lists/new', createList)
        .then(res => {
           // setNewList(initialState)
            // console.log(currentUser)
        })

  }  

  return (
    <>
    <h2>Welcome to Final List, here are your lists:</h2>
    <Grid item xs={12} md={2}>
          <List
              sx={{
                width: '100%',
                maxWidth: 500,
                bgcolor: 'background.paper',
                position: 'relative',
                overflow: 'auto',
                maxHeight: 500,
                '& ul': { padding: 0 },
              }}
          >
          {lists.map((list, i) => (
          <ListsListing 
            key={i} 
            id={list._id} 
            name={list.name} 
            details={list.details}
            lists={lists}
          // listId={listId}
          />
          ))}
            
          </List>
    </Grid>
    
    <CreateList
      createList={createList}
      setCreateList={setCreateList} 
      handleCreateChange={handleCreateChange} handleCreateSubmit={handleCreateSubmit}
    />
    </> 
  );
};

export default Dashboard;