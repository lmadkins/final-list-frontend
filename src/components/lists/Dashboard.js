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
  // Setting state for ActiveList context
  const [activeList, setActiveList] = useState()

  const navigate = useNavigate()

// Reload for actions to do a new get request to refresh lists after a change. Imported into ListsListing, EditList, DeleteList, CreateList
  const [reloadLists, setReloadLists] = useState(false)


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
            // navigate('/lists')
            setReloadLists(true)
          })
    }  
  
    // FOR RENDERING LISTS LIST
  const [lists, setLists] = useState([])
  const handleClick = (event) => {
    setActiveList(event.target.id)
    console.log(`Handleclick in Dashboard: New active list is: ${activeList}`)
  }


// Reload lists list
  useEffect(() => {
    axios.get(`http://localhost:8000/lists/`)
    .then(res => setLists(res.data))
    // console.log(createList)
  },[reloadLists, createList])





  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={3}>
        <Grid item xs={6}>
        {/* LISTS LIST (all the user's lists) */}
        <h2>Welcome to Final List, here are your lists:</h2>
          <Item>
          <ActiveListContext.Provider 
          value={{ activeList, setActiveList }}>  
            <List
                sx={{
                  width: '100%',
                  maxWidth: 450,
                  bgcolor: 'background.paper',
                  position: 'relative',
                  overflow: 'auto',
                  maxHeight: 500,
                  '& ul': { padding: 0 },}}>
                {/* Listing of each individual list, and the icon links to edit and delete  */}
                {lists.map((list, i) => (
                  <ListsListing 
                    key={i} 
                    id={list._id} 
                    name={list.name} 
                    details={list.details}
                    lists={lists}
                    // onClick={handleClick}
                    activeList = {activeList}
                    setActiveList = {setActiveList}
                    reloadLists={reloadLists}
                    setReloadLists={setReloadLists}
                  />))}
              
              </List>
            </ActiveListContext.Provider>
          </Item>
        </Grid>


      <Grid item xs={6}>
        <Item>
        {/* Each item in the selected list, plus links to edit and delete */}
          <ListItems 
          // items={items}
          // itemsArr={items.items}
          // setItems={setItems}
          activeList = {activeList}
          setActiveList = {setActiveList}

        />
        </Item>
      </Grid>

    <Grid item xs={3}>
    {/* <ActiveListContext.Provider value={{ activeList, setActiveList }}>   */}
    {/* CREATE A NEW LIST */}
      <Item>   
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { s:1, width: '30ch' },}}
          noValidate
          autoComplete="off" 
          onSubmit={handleCreateSubmit}
          // o
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
        </Stack>
        </Box>
      </Item>
      {/* </ActiveListContext.Provider> */}
    </Grid>

    </Grid>
  </Box>
  </>
  )
};

export default Dashboard;

// const [ currentUser, setCurrentUser ] = useContext(UserContext)
// const  {activeList, setActiveList} = useContext(ActiveListContext)
// const listContext = useContext(ActiveListContext);
// const listContext = useContext(ActiveListContext);
// const [activeList, setActiveList] = useState()
      {/* // id={items.id} 
        // name={items.name} 
        // details={items.details} */}
 {/* {items.map((items) => (
        <ListItems  key={items._id} 
        items={items}/>
     ))} */}


               {/* {items.name}
          {items.details} */}
 {/* {itemsArr.map((item, i) => (
    
      <p key={i}>
      {item.name}
        <br></br>
      {item.details}
        <br></br>
      Priority: 
      {item.priority}
      </p>

      ))} */}


  // useEffect(() => {
  //   // setItemsArr(activeList.items)
  //   // console.log(items.items[0])
  // }, [])
  // console.log(activeList)
  // setCreateList({...createList, [event.target.id]: event.target.value})