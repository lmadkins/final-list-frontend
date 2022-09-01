import { Routes, Route, useNavigate, } from 'react-router-dom'
import React, { useContext, useEffect, useState, createContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { ActiveListContext } from '../../contexts/ActiveListContext';
import { styled } from '@mui/material/styles';

import axios from 'axios'

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
// list of lists
import ListsListing from './ListsListing'
import ListItems from '../items/ListItems';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import GradingIcon from '@mui/icons-material/Grading';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';

// import ItemsList from '../items/FocusList';
 
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Dashboard = () => {
  const [activeList, setActiveList] = useState()
// const [ currentUser, setCurrentUser ] = useContext(UserContext)
// const  {activeList, setActiveList} = useContext(ActiveListContext)
// const listContext = useContext(ActiveListContext);
// const listContext = useContext(ActiveListContext);
// const [activeList, setActiveList] = useState()
const navigate = useNavigate()
// const [reload, setReload] = useState(false)

  // CREATE LIST FORM 
  const initialCreateState = { name: '',  description: '' }
  const [createList, setCreateList] = useState(initialCreateState);

  const handleCreateChange = (event) => {
    setCreateList({...createList, [event.target.id]: event.target.value})
  }
const handleCreateSubmit = (event) => {
    event.preventDefault()
     // if (createList.name !== '' && createList.details !== '')
        axios.post('http://localhost:8000/lists/new', createList)
        .then(res => {
          setCreateList(initialCreateState)
          navigate('/lists')
        })
  }  
  // useEffect(() => {
  //   if(createList){
  //     setReload(true)
  //   }
  // },[reload])
  
  // FOR RENDERING LISTS LIST
const [lists, setLists] = useState([])
  
useEffect(() => {
  axios.get(`http://localhost:8000/lists/`)
  .then(res => setLists(res.data))
  // console.log(createList)
},[createList, activeList])

// const handleClick = (event) => {
//   setActiveList(event.target.id)
//   console.log(activeList)
//   // setCreateList({...createList, [event.target.id]: event.target.value})
// }
const [items, setItems] = useState()
useEffect(() => {
  axios.get(`http://localhost:8000/lists/items/${activeList}`)
  .then(res => setItems(res.data))
  console.log(items.items)
}, [activeList])

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={3}>
      <Grid item xs>

        {/* CREATE A NEW LIST */}
        <Item>   
          <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { s:1, width: '30ch' },
          }}
          noValidate
          autoComplete="off" 
          onSubmit={handleCreateSubmit}
          o
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
      <ActiveListContext.Provider value={{ activeList, setActiveList }}>  
        <Grid item xs={6}>
        {/* LISTS LIST (all the user's lists) */}
        <h2>Welcome to Final List, here are your lists:</h2>
          <Item>
            <List
                sx={{
                  width: '100%',
                  maxWidth: 450,
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
                    // onClick={handleClick}
                    // deleted= {deleted}

                  // listId={listId}
                    activeList = {activeList}
                    setActiveList = {setActiveList}
                    // parentData={handleListSelect}
                  />
                ))}
                </List>
          </Item>
      </Grid>

      <Grid item xs>
        <Item>
       
        <ListItems 
       
        items={items}
        activeList = {activeList}
        setActiveList = {setActiveList}
      />
        </Item>
      </Grid>
      {/* // id={items.id} 
        // name={items.name} 
        // details={items.details} */}
 {/* {items.map((items) => (
        <ListItems  key={items._id} 
        items={items}/>
      // ))} */}

    </ActiveListContext.Provider>




    </Grid>
  </Box>
  </>
  )
};

export default Dashboard;